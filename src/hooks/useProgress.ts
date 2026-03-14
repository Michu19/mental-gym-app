// src/hooks/useProgress.ts
import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Key format: progress:YYYY-MM-DD:exerciseId
const KEY_PREFIX = 'progress:';

function todayKey(): string {
  return new Date().toISOString().split('T')[0];
}

function storageKey(date: string, exerciseId: string): string {
  return `${KEY_PREFIX}${date}:${exerciseId}`;
}

export function useProgress() {
  const [completedToday, setCompletedToday] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadTodayProgress = useCallback(async () => {
    try {
      const today = todayKey();
      const allKeys = await AsyncStorage.getAllKeys();
      const todayKeys = allKeys.filter(k => k.startsWith(`${KEY_PREFIX}${today}`));
      const completed = new Set(
        todayKeys.map(k => k.split(':')[2]).filter(Boolean)
      );
      setCompletedToday(completed);
    } catch (e) {
      console.warn('Failed to load progress:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadStreak = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem('streak');
      if (raw) setStreak(parseInt(raw, 10));
    } catch (e) {
      console.warn('Failed to load streak:', e);
    }
  }, []);

  useEffect(() => {
    loadTodayProgress();
    loadStreak();
  }, [loadTodayProgress, loadStreak]);

  const toggleExercise = useCallback(async (exerciseId: string) => {
    const today = todayKey();
    const key = storageKey(today, exerciseId);
    const next = new Set(completedToday);

    if (next.has(exerciseId)) {
      next.delete(exerciseId);
      await AsyncStorage.removeItem(key);
    } else {
      next.add(exerciseId);
      await AsyncStorage.setItem(key, '1');
    }

    setCompletedToday(next);
  }, [completedToday]);

  const isCompleted = useCallback(
    (exerciseId: string) => completedToday.has(exerciseId),
    [completedToday]
  );

  // Check if a specific date had any completed exercises
  const wasActiveOnDate = useCallback(async (date: string): Promise<boolean> => {
    const allKeys = await AsyncStorage.getAllKeys();
    return allKeys.some(k => k.startsWith(`${KEY_PREFIX}${date}`));
  }, []);

  return {
    completedToday,
    completedCount: completedToday.size,
    streak,
    loading,
    toggleExercise,
    isCompleted,
    wasActiveOnDate,
    reload: loadTodayProgress,
  };
}

// Separate hook for timer state
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
    const id = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [running, seconds]);

  const start = () => { setRunning(true); setFinished(false); };
  const pause = () => setRunning(false);
  const reset = (s?: number) => {
    setRunning(false);
    setFinished(false);
    setSeconds(s ?? initialSeconds);
  };

  const formatted = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  return { seconds, running, finished, formatted, start, pause, reset };
}
