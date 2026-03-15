// src/i18n/pl.ts
export const pl = {
  days: {
    short: ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"] as string[],
    locale: "pl-PL",
  },
  nav: {
    gym: "Gym",
    plan: "Plan",
    library: "Biblioteka",
    stats: "Statystyki",
  },
  gym: {
    title: "Gym",
    currentWeek: "Aktualny tydzień",
    exerciseProgress: "{done} / {total} ćwiczeń",
    allDone: "Wszystkie ćwiczenia ukończone!",
    viewOnly:
      "👁 Tryb podglądu — ćwiczenia można ukończyć tylko w bieżącym dniu",
  },
  stats: {
    title: "Statystyki",
    streakOne: "dzień z rzędu",
    streakMany: "dni z rzędu",
    completed: "Ukończone zadania",
    today: "Dziś",
    thisWeek: "Ten tydzień",
    week: "Tydzień",
    total: "Łącznie wszystkie tygodnie",
    lightTheme: "Przełącz na jasny motyw",
    darkTheme: "Przełącz na ciemny motyw",
  },
  library: {
    title: "Biblioteka",
    count: "{count} ćwiczeń",
    filterAll: "Wszystkie",
    filterCreativity: "Kreatywność",
    filterCritical: "Krytyczne",
    filterMindfulness: "Mindfulness",
  },
  plan: {
    title: "Plan tygodniowy",
    manage: "⚙ Plany",
    activeLabel: "Aktywny: ",
    edit: "✎ Edytuj",
    intro:
      "Każdy dzień łączy 3 ćwiczenia z różnych kategorii. Rotacja zapewnia trening kreatywności, krytycznego myślenia i uważności.",
    categoryCreativity: "Kreatywność",
    categoryCritical: "Krytyczne myślenie",
    categoryMindfulness: "Mindfulness",
    today: "DZIŚ",
    defaultPlan: "Plan domyślny",
  },
  exercise: {
    back: "‹ Wróć",
    timer: "Timer",
    timerDone: "✓ Czas!",
    start: "Start",
    pause: "Pauza",
    restart: "Od nowa",
    reset: "Reset",
    minLabel: "{min} min",
    promptSection: "Prompt startowy",
    tipSection: "Wskazówka",
    notesDay: "Notatki z tego dnia",
    notesAll: "Historia notatek",
    notesPlaceholder: "Zapisz przemyślenia po ćwiczeniu…",
    notesSave: "Zapisz notatkę",
    notesEmptyDay: "Brak notatek z tego dnia — dodaj pierwszą po ćwiczeniu 📝",
    notesEmpty: "Brak notatek — dodaj pierwszą po ćwiczeniu 📝",
    deleteNoteTitle: "Usuń notatkę",
    deleteNoteMsg: "Czy na pewno chcesz usunąć tę notatkę?",
    deletePhotoTitle: "Usuń zdjęcie",
    deletePhotoMsg: "Czy usunąć to zdjęcie?",
    photoCamera: "📷 Aparat",
    photoGallery: "🖼 Galeria",
    permDenied: "Brak uprawnień",
    permCamera: "Zezwól na dostęp do aparatu w ustawieniach.",
    permGallery: "Zezwól na dostęp do galerii w ustawieniach.",
    cancel: "Anuluj",
    delete: "Usuń",
  },
  card: {
    quickNote: "Szybka notatka",
    notePlaceholder: "Zapisz przemyślenie…",
    prompt: "Prompt",
    noteCount: {
      one: "{count} notatka",
      few: "{count} notatki",
      many: "{count} notatek",
    },
    noteDetails: "— dostępne w szczegółach",
    done: "✓ Ukończone",
    tapToComplete: "Dotknij by ukończyć →",
  },
  language: {
    switchTo: "English",
    label: "Język",
  },
  categories: {
    kreatywnosc: "Kreatywność",
    krytyczne: "Krytyczne myślenie",
    mindfulness: "Mindfulness",
  },
  exercises: {
    "01": {
      name: "10 pomysłów na...",
      description:
        "Wybierz temat i zapisz 10 pomysłów bez cenzury. Liczy się ilość, nie jakość.",
      prompt:
        'Wybierz temat: \u201e10 sposobów na ___\u201d. Pisz bez przerwy. Nie oceniaj, nie skreślaj. Pierwsze 5 będą oczywiste — złoto zaczyna się od szóstego.',
      tip: "Pierwsze 5 pomysłów zawsze są oczywiste. Złoto zaczyna się od numeru 6.",
    },
    "02": {
      name: "A co jeśli?",
      description:
        "Zadaj sobie 3–5 pytań zaczynających się od \u201eA co jeśli...\u201d i krótko odpowiedz.",
      prompt:
        "Wybierz sytuację z życia lub pracy. Zapytaj: A co jeśli zrobię to odwrotnie? A co jeśli mam rok zamiast tygodnia? A co jeśli w ogóle tego nie robię?",
      tip: "Pytania zmieniają perspektywę szybciej niż odpowiedzi.",
    },
    "03": {
      name: "Zmiana perspektywy",
      description:
        "Weź problem lub sytuację i opisz ją z 3 różnych punktów widzenia.",
      prompt:
        "Opisz tę samą sytuację oczami: (1) dziecka, (2) eksperta w tej dziedzinie, (3) kogoś z zewnątrz, kto nic nie wie. Co każde z nich zauważy inaczej?",
      tip: "Każda perspektywa ujawnia coś, czego nie widzisz na co dzień.",
    },
    "04": {
      name: "30-sek. rozważania",
      description:
        "Wybierz 5–6 tematów. Na każdy poświęć dokładnie 30 sekund głębokiej refleksji.",
      prompt:
        "Tematy: czas / cisza / strach / radość / granice / zmiana. Ustaw timer. Myśl intensywnie przez 30 sekund o każdym. Zapisz, co się pojawi.",
      tip: "Krótki czas wymusza skupienie i wyciąga nieoczekiwane intuicje.",
    },
    "05": {
      name: "Strumień świadomości",
      description:
        "Pisz wszystko, co przychodzi do głowy, bez zatrzymywania się. Nie redaguj.",
      prompt:
        "Otwórz notatnik. Pisz przez 10 minut bez przerwy — zdania, słowa, urywki myśli. Ręka się nie zatrzymuje. To nie musi mieć sensu.",
      tip: "To nie musi mieć sensu. Chodzi o opróżnienie głowy.",
    },
    "06": {
      name: "Solo burza mózgów",
      description:
        "Ustaw timer i generuj pomysły na konkretny problem. Bez oceniania.",
      prompt:
        "Wybierz jeden problem lub pytanie z Twojego życia. Generuj rozwiązania przez 8 minut. Każdy pomysł — choćby szalony — trafia na papier.",
      tip: "Im głupszy pomysł, tym bliżej do przełomowego.",
    },
    "07": {
      name: "10 niezwykłych zastosowań",
      description:
        "Wybierz losowy przedmiot i wymyśl 10 niestandardowych zastosowań.",
      prompt:
        "Dziś wybrany przedmiot: _______. Wymyśl 10 nieoczywistych zastosowań. Im bardziej abstrakcyjnie, tym lepiej.",
      tip: "Ćwiczenie buduje myślenie lateralne — widzenie poza oczywistą funkcją.",
    },
    "08": {
      name: "Łańcuchy skojarzeń",
      description:
        "Zacznij od jednego słowa i twórz łańcuch wolnych skojarzeń przez 5 minut.",
      prompt:
        "Słowo startowe: _______. Napisz skojarzenie, potem skojarzenie do skojarzenia. Idź dokąd cię zaprowadzi. Nie kontroluj kierunku.",
      tip: "Zaskakujące połączenia na końcu łańcucha to najcenniejsze odkrycia.",
    },
    "09": {
      name: "Kwestionowanie rozwiązań",
      description:
        "Weź gotowe rozwiązanie i zadaj mu serię trudnych pytań.",
      prompt:
        "Wybierz rozwiązanie, które stosujesz. Zapytaj: Czy naprawdę rozwiązuje problem? Co by się stało, gdybym tego nie robił? Co zakładam, nie sprawdzając?",
      tip: "Najlepsze rozwiązania wytrzymują bezlitosne przesłuchanie.",
    },
    "10": {
      name: "Odwracanie założeń",
      description:
        "Weź oczywiste założenie i odwróć je. Co by to oznaczało?",
      prompt:
        "Wybierz przekonanie, np. \u201eklienci chcą szybkiej obsługi\u201d. Odwróć je: \u201eklienci chcą powolnej obsługi\u201d — kiedy mogłoby to być prawdą?",
      tip: "Odwrócenie założeń jest metodą wielu przełomowych innowacji.",
    },
    "11": {
      name: "6 kapeluszy myślowych",
      description:
        "Przeanalizuj temat przez 6 różnych trybów myślenia de Bono.",
      prompt:
        "Temat: _______.\n\n🤍 Biały – fakty\n❤️ Czerwony – emocje\n🖤 Czarny – ryzyka\n💛 Żółty – korzyści\n💚 Zielony – kreatywność\n💙 Niebieski – proces\n\nPo 2 minuty na każdy kapelusz.",
      tip: "Zakładaj tylko jeden kapelusz naraz. Każdy to inny mózg.",
    },
  } as Record<string, { name: string; description: string; prompt: string; tip: string }>,
  planManager: {
    back: "‹ Wróć",
    title: "Plany treningowe",
    newPlan: "+ Nowy",
    built: "Wbudowany",
    active: "AKTYWNY",
    activate: "Aktywuj",
    duplicate: "Duplikuj",
    edit: "Edytuj",
    delete: "Usuń",
    activateTitle: "Zmień aktywny plan",
    activateMsg: `Czy na pewno chcesz aktywować plan \u201e{name}\u201d?\n\nNowy plan zacznie obowiązywać od razu.`,
    deleteTitle: "Usuń plan",
    deleteMsg: `Czy na pewno chcesz usunąć plan \u201e{name}\u201d?\n\nTej operacji nie można cofnąć.`,
    cancel: "Anuluj",
  },
  planEditor: {
    cancelNav: "‹ Anuluj",
    editTitle: "Edytuj plan",
    newTitle: "Nowy plan",
    save: "Zapisz",
    namePlaceholder: "Nazwa planu…",
    noNameTitle: "Brak nazwy",
    noNameMsg: "Podaj nazwę planu.",
    emptyDayTitle: "Pusty dzień",
    emptyDayMsg: "Każdy dzień musi mieć co najmniej jedno ćwiczenie.",
    selected: "WYBRANE",
    available: "DOSTĘPNE — DOTKNIJ BY DODAĆ",
    exerciseCount: "{count} / 5 ćwiczeń",
    limitNote: "Osiągnięto limit 5 ćwiczeń na ten dzień.",
    daysFull: [
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
      "Niedziela",
    ] as string[],
    daysShort: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"] as string[],
  },
};
