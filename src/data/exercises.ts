// src/data/exercises.ts

export type Category = 'kreatywnosc' | 'krytyczne' | 'mindfulness';

export interface Exercise {
  id: string;
  emoji: string;
  name: string;
  timeMin: number;   // minutes (min of range)
  timeMax: number;   // minutes (max of range)
  category: Category;
  categoryLabel: string;
  description: string;
  prompt: string;
  tip: string;
}

export const EXERCISES: Exercise[] = [
  {
    id: '01',
    emoji: '💡',
    name: '10 pomysłów na...',
    timeMin: 10, timeMax: 10,
    category: 'kreatywnosc',
    categoryLabel: 'Kreatywność',
    description: 'Wybierz temat i zapisz 10 pomysłów bez cenzury. Liczy się ilość, nie jakość.',
    prompt: 'Wybierz temat: „10 sposobów na ___". Pisz bez przerwy. Nie oceniaj, nie skreślaj. Pierwsze 5 będą oczywiste — złoto zaczyna się od szóstego.',
    tip: 'Pierwsze 5 pomysłów zawsze są oczywiste. Złoto zaczyna się od numeru 6.',
  },
  {
    id: '02',
    emoji: '🌀',
    name: 'A co jeśli?',
    timeMin: 5, timeMax: 5,
    category: 'krytyczne',
    categoryLabel: 'Krytyczne myślenie',
    description: 'Zadaj sobie 3–5 pytań zaczynających się od „A co jeśli..." i krótko odpowiedz.',
    prompt: 'Wybierz sytuację z życia lub pracy. Zapytaj: A co jeśli zrobię to odwrotnie? A co jeśli mam rok zamiast tygodnia? A co jeśli w ogóle tego nie robię?',
    tip: 'Pytania zmieniają perspektywę szybciej niż odpowiedzi.',
  },
  {
    id: '03',
    emoji: '🔭',
    name: 'Zmiana perspektywy',
    timeMin: 5, timeMax: 8,
    category: 'krytyczne',
    categoryLabel: 'Krytyczne myślenie',
    description: 'Weź problem lub sytuację i opisz ją z 3 różnych punktów widzenia.',
    prompt: 'Opisz tę samą sytuację oczami: (1) dziecka, (2) eksperta w tej dziedzinie, (3) kogoś z zewnątrz, kto nic nie wie. Co każde z nich zauważy inaczej?',
    tip: 'Każda perspektywa ujawnia coś, czego nie widzisz na co dzień.',
  },
  {
    id: '04',
    emoji: '⏱️',
    name: '30-sek. rozważania',
    timeMin: 5, timeMax: 5,
    category: 'mindfulness',
    categoryLabel: 'Mindfulness',
    description: 'Wybierz 5–6 tematów. Na każdy poświęć dokładnie 30 sekund głębokiej refleksji.',
    prompt: 'Tematy: czas / cisza / strach / radość / granice / zmiana. Ustaw timer. Myśl intensywnie przez 30 sekund o każdym. Zapisz, co się pojawi.',
    tip: 'Krótki czas wymusza skupienie i wyciąga nieoczekiwane intuicje.',
  },
  {
    id: '05',
    emoji: '🌊',
    name: 'Strumień świadomości',
    timeMin: 10, timeMax: 15,
    category: 'mindfulness',
    categoryLabel: 'Mindfulness',
    description: 'Pisz wszystko, co przychodzi do głowy, bez zatrzymywania się. Nie redaguj.',
    prompt: 'Otwórz notatnik. Pisz przez 10 minut bez przerwy — zdania, słowa, urywki myśli. Ręka się nie zatrzymuje. To nie musi mieć sensu.',
    tip: 'To nie musi mieć sensu. Chodzi o opróżnienie głowy.',
  },
  {
    id: '06',
    emoji: '⚡',
    name: 'Solo burza mózgów',
    timeMin: 8, timeMax: 8,
    category: 'kreatywnosc',
    categoryLabel: 'Kreatywność',
    description: 'Ustaw timer i generuj pomysły na konkretny problem. Bez oceniania.',
    prompt: 'Wybierz jeden problem lub pytanie z Twojego życia. Generuj rozwiązania przez 8 minut. Każdy pomysł — choćby szalony — trafia na papier.',
    tip: 'Im głupszy pomysł, tym bliżej do przełomowego.',
  },
  {
    id: '07',
    emoji: '🔧',
    name: '10 niezwykłych zastosowań',
    timeMin: 5, timeMax: 5,
    category: 'kreatywnosc',
    categoryLabel: 'Kreatywność',
    description: 'Wybierz losowy przedmiot i wymyśl 10 niestandardowych zastosowań.',
    prompt: 'Dziś wybrany przedmiot: _______. Wymyśl 10 nieoczywistych zastosowań. Im bardziej abstrakcyjnie, tym lepiej.',
    tip: 'Ćwiczenie buduje myślenie lateralne — widzenie poza oczywistą funkcją.',
  },
  {
    id: '08',
    emoji: '🔗',
    name: 'Łańcuchy skojarzeń',
    timeMin: 5, timeMax: 5,
    category: 'kreatywnosc',
    categoryLabel: 'Kreatywność',
    description: 'Zacznij od jednego słowa i twórz łańcuch wolnych skojarzeń przez 5 minut.',
    prompt: 'Słowo startowe: _______. Napisz skojarzenie, potem skojarzenie do skojarzenia. Idź dokąd cię zaprowadzi. Nie kontroluj kierunku.',
    tip: 'Zaskakujące połączenia na końcu łańcucha to najcenniejsze odkrycia.',
  },
  {
    id: '09',
    emoji: '❓',
    name: 'Kwestionowanie rozwiązań',
    timeMin: 8, timeMax: 8,
    category: 'krytyczne',
    categoryLabel: 'Krytyczne myślenie',
    description: 'Weź gotowe rozwiązanie i zadaj mu serię trudnych pytań.',
    prompt: 'Wybierz rozwiązanie, które stosujesz. Zapytaj: Czy naprawdę rozwiązuje problem? Co by się stało, gdybym tego nie robił? Co zakładam, nie sprawdzając?',
    tip: 'Najlepsze rozwiązania wytrzymują bezlitosne przesłuchanie.',
  },
  {
    id: '10',
    emoji: '🔄',
    name: 'Odwracanie założeń',
    timeMin: 5, timeMax: 8,
    category: 'krytyczne',
    categoryLabel: 'Krytyczne myślenie',
    description: 'Weź oczywiste założenie i odwróć je. Co by to oznaczało?',
    prompt: 'Wybierz przekonanie, np. „klienci chcą szybkiej obsługi". Odwróć je: „klienci chcą powolnej obsługi" — kiedy mogłoby to być prawdą?',
    tip: 'Odwrócenie założeń jest metodą wielu przełomowych innowacji.',
  },
  {
    id: '11',
    emoji: '🎩',
    name: '6 kapeluszy myślowych',
    timeMin: 15, timeMax: 20,
    category: 'krytyczne',
    categoryLabel: 'Krytyczne myślenie',
    description: 'Przeanalizuj temat przez 6 różnych trybów myślenia de Bono.',
    prompt: 'Temat: _______.\n\n🤍 Biały – fakty\n❤️ Czerwony – emocje\n🖤 Czarny – ryzyka\n💛 Żółty – korzyści\n💚 Zielony – kreatywność\n💙 Niebieski – proces\n\nPo 2 minuty na każdy kapelusz.',
    tip: 'Zakładaj tylko jeden kapelusz naraz. Każdy to inny mózg.',
  },
];

export const EXERCISES_BY_ID = Object.fromEntries(EXERCISES.map(e => [e.id, e]));

// ─── Week plan ──────────────────────────────────────────────────────────────

export interface DayPlan {
  day: string;
  shortDay: string;
  exerciseIds: string[];
}

export const WEEK_PLAN: DayPlan[] = [
  { day: 'Poniedziałek', shortDay: 'Pon', exerciseIds: ['01', '05', '09'] },
  { day: 'Wtorek',       shortDay: 'Wt',  exerciseIds: ['02', '07', '04'] },
  { day: 'Środa',        shortDay: 'Śr',  exerciseIds: ['03', '08', '06'] },
  { day: 'Czwartek',     shortDay: 'Czw', exerciseIds: ['10', '05', '01'] },
  { day: 'Piątek',       shortDay: 'Pt',  exerciseIds: ['11', '04', '02'] },
  { day: 'Sobota',       shortDay: 'Sob', exerciseIds: ['06', '08', '03'] },
  { day: 'Niedziela',    shortDay: 'Nd',  exerciseIds: ['07', '09', '10'] },
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
