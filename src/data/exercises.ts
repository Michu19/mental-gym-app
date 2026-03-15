// src/data/exercises.ts

export type Category = "kreatywnosc" | "krytyczne" | "mindfulness";

export interface Exercise {
  id: string;
  emoji: string;
  timeMin: number; // minutes (min of range)
  timeMax: number; // minutes (max of range)
  category: Category;
}

export const EXERCISES: Exercise[] = [
  { id: "01", emoji: "💡", timeMin: 10, timeMax: 10, category: "kreatywnosc" },
  { id: "02", emoji: "🌀", timeMin: 5, timeMax: 5, category: "krytyczne" },
  { id: "03", emoji: "🔭", timeMin: 5, timeMax: 8, category: "krytyczne" },
  { id: "04", emoji: "⏱️", timeMin: 5, timeMax: 5, category: "mindfulness" },
  { id: "05", emoji: "🌊", timeMin: 10, timeMax: 15, category: "mindfulness" },
  { id: "06", emoji: "⚡", timeMin: 8, timeMax: 8, category: "kreatywnosc" },
  { id: "07", emoji: "🔧", timeMin: 5, timeMax: 5, category: "kreatywnosc" },
  { id: "08", emoji: "🔗", timeMin: 5, timeMax: 5, category: "kreatywnosc" },
  { id: "09", emoji: "❓", timeMin: 8, timeMax: 8, category: "krytyczne" },
  { id: "10", emoji: "🔄", timeMin: 5, timeMax: 8, category: "krytyczne" },
  { id: "11", emoji: "🎩", timeMin: 15, timeMax: 20, category: "krytyczne" },
];

export const EXERCISES_BY_ID = Object.fromEntries(
  EXERCISES.map((e) => [e.id, e]),
);

// ─── Week plan ──────────────────────────────────────────────────────────────

export interface DayPlan {
  exerciseIds: string[];
}

export const WEEK_PLAN: DayPlan[] = [
  { exerciseIds: ["01", "05", "09"] },
  { exerciseIds: ["02", "07", "04"] },
  { exerciseIds: ["03", "08", "06"] },
  { exerciseIds: ["10", "05", "01"] },
  { exerciseIds: ["11", "04", "02"] },
  { exerciseIds: ["06", "08", "03"] },
  { exerciseIds: ["07", "09", "10"] },
];

export function getTodayIndex(): number {
  // JS: 0=Sun, 1=Mon, ..., 6=Sat → map to Mon=0..Sun=6
  const jsDay = new Date().getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
}

export function formatTime(min: number, max: number): string {
  if (min === max) return `${min} min`;
  return `${min}–${max} min`;
}
