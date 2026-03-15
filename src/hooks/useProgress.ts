// src/hooks/useProgress.ts
import { useState, useEffect, useCallback, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Paths,
  File as FSFile,
  Directory as FSDirectory,
} from "expo-file-system";

// Key format: progress:YYYY-MM-DD:exerciseId
export const KEY_PREFIX = "progress:";

function todayKey(): string {
  return new Date().toISOString().split("T")[0];
}

function storageKey(date: string, exerciseId: string): string {
  return `${KEY_PREFIX}${date}:${exerciseId}`;
}

// Compute streak from already-loaded keys (efficient: single getAllKeys call)
function computeStreakFromKeys(allKeys: readonly string[]): number {
  let count = 0;
  const today = new Date();
  for (let i = 0; i < 366; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const active = allKeys.some((k) =>
      k.startsWith(`${KEY_PREFIX}${dateStr}:`),
    );
    if (!active) break;
    count++;
  }
  return count;
}

export function useProgress() {
  const [completedToday, setCompletedToday] = useState<Set<string>>(new Set());
  const [completedByDate, setCompletedByDate] = useState<
    Record<string, Set<string>>
  >({});
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadProgress = useCallback(async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const today = todayKey();
      const todayKeys = allKeys.filter((k) =>
        k.startsWith(`${KEY_PREFIX}${today}:`),
      );
      const completed = new Set(
        todayKeys.map((k) => k.split(":")[2]).filter(Boolean),
      );
      setCompletedToday(completed);

      // Build per-day completion map for ALL dates that exist in storage
      const progressKeys = allKeys.filter((k) => k.startsWith(KEY_PREFIX));
      const fullMap: Record<string, Set<string>> = {};
      for (const k of progressKeys) {
        const parts = k.split(":");
        const dateStr = parts[1];
        const exerciseId = parts[2];
        if (!dateStr || !exerciseId) continue;
        if (!fullMap[dateStr]) fullMap[dateStr] = new Set();
        fullMap[dateStr].add(exerciseId);
      }
      setCompletedByDate(fullMap);

      // Compute streak using the same allKeys fetch
      const streakCount = computeStreakFromKeys(allKeys);
      setStreak(streakCount);
      await AsyncStorage.setItem("streak", String(streakCount));
    } catch (e) {
      console.warn("Failed to load progress:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  const toggleExercise = useCallback(
    async (exerciseId: string, dateStr?: string) => {
      const date = dateStr ?? todayKey();
      const key = storageKey(date, exerciseId);
      const prevSet = completedByDate[date] ?? new Set<string>();
      const next = new Set(prevSet);

      if (next.has(exerciseId)) {
        next.delete(exerciseId);
        await AsyncStorage.removeItem(key);
      } else {
        next.add(exerciseId);
        await AsyncStorage.setItem(key, "1");
      }

      setCompletedByDate((prev) => ({ ...prev, [date]: next }));
      if (date === todayKey()) setCompletedToday(new Set(next));

      // Re-compute streak after toggle
      const allKeys = await AsyncStorage.getAllKeys();
      const streakCount = computeStreakFromKeys(allKeys);
      setStreak(streakCount);
      await AsyncStorage.setItem("streak", String(streakCount));
    },
    [completedByDate],
  );

  const isCompleted = useCallback(
    (exerciseId: string) => completedToday.has(exerciseId),
    [completedToday],
  );

  const wasActiveOnDate = useCallback(
    async (date: string): Promise<boolean> => {
      const allKeys = await AsyncStorage.getAllKeys();
      return allKeys.some((k) => k.startsWith(`${KEY_PREFIX}${date}:`));
    },
    [],
  );

  return {
    completedToday,
    completedByDate,
    completedCount: completedToday.size,
    streak,
    loading,
    toggleExercise,
    isCompleted,
    wasActiveOnDate,
    reload: loadProgress,
  };
}

// ─── useNote ─────────────────────────────────────────────────────────────

export function useNote(exerciseId: string) {
  const [note, setNoteState] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(`note:${exerciseId}`).then((v) => {
      if (v) setNoteState(v);
    });
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [exerciseId]);

  const saveNote = useCallback(
    (text: string) => {
      setNoteState(text);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        if (text.trim()) {
          await AsyncStorage.setItem(`note:${exerciseId}`, text);
        } else {
          await AsyncStorage.removeItem(`note:${exerciseId}`);
        }
      }, 500);
    },
    [exerciseId],
  );

  return { note, saveNote };
}

// ─── useNoteHistory ──────────────────────────────────────────────────────

export interface NoteEntry {
  id: string; // timestamp string (used as unique key)
  text: string;
  createdAt: string; // ISO date string
  date?: string; // YYYY-MM-DD — day of the exercise this note belongs to
  imageUris?: string[]; // local file:// URIs of attached photos
}

const NOTES_KEY = (exerciseId: string) => `notes:${exerciseId}`;

export function useNoteHistory(exerciseId: string) {
  const [notes, setNotes] = useState<NoteEntry[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(NOTES_KEY(exerciseId)).then((raw) => {
      if (raw) {
        try {
          setNotes(JSON.parse(raw));
        } catch {}
      }
    });
  }, [exerciseId]);

  const persist = useCallback(
    async (next: NoteEntry[]) => {
      setNotes(next);
      await AsyncStorage.setItem(NOTES_KEY(exerciseId), JSON.stringify(next));
    },
    [exerciseId],
  );

  const addNote = useCallback(
    async (text: string, date?: string) => {
      if (!text.trim()) return;
      const entry: NoteEntry = {
        id: Date.now().toString(),
        text: text.trim(),
        createdAt: new Date().toISOString(),
        date,
        imageUris: [],
      };
      await persist([entry, ...notes]);
    },
    [notes, persist],
  );

  const deleteNote = useCallback(
    async (id: string) => {
      // also clean up stored image files
      const entry = notes.find((n) => n.id === id);
      if (entry?.imageUris) {
        for (const uri of entry.imageUris) {
          try {
            const f = new FSFile(uri);
            if (f.exists) f.delete();
          } catch {}
        }
      }
      await persist(notes.filter((n) => n.id !== id));
    },
    [notes, persist],
  );

  const addImage = useCallback(
    async (noteId: string, sourceUri: string) => {
      const dir = new FSDirectory(Paths.document, "notes_images", exerciseId);
      dir.create({ intermediates: true, idempotent: true });
      const filename = `${noteId}_${Date.now()}.jpg`;
      const destFile = new FSFile(dir, filename);
      const sourceFile = new FSFile(sourceUri);
      sourceFile.copy(destFile);
      const destUri = destFile.uri;
      const next = notes.map((n) =>
        n.id === noteId
          ? { ...n, imageUris: [...(n.imageUris ?? []), destUri] }
          : n,
      );
      await persist(next);
    },
    [notes, persist, exerciseId],
  );

  const deleteImage = useCallback(
    async (noteId: string, uri: string) => {
      try {
        const f = new FSFile(uri);
        if (f.exists) f.delete();
      } catch {}
      const next = notes.map((n) =>
        n.id === noteId
          ? { ...n, imageUris: (n.imageUris ?? []).filter((u) => u !== uri) }
          : n,
      );
      await persist(next);
    },
    [notes, persist],
  );

  return { notes, addNote, deleteNote, addImage, deleteImage };
}

// ─── useTimer ────────────────────────────────────────────────────────────

export function useTimer(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (seconds <= 0) {
      setRunning(false);
      setFinished(true);
      return;
    }
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [running, seconds]);

  const start = () => {
    setRunning(true);
    setFinished(false);
  };
  const pause = () => setRunning(false);
  const reset = (s?: number) => {
    setRunning(false);
    setFinished(false);
    setSeconds(s ?? initialSeconds);
  };

  const formatted = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return { seconds, running, finished, formatted, start, pause, reset };
}
