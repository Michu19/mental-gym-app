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
    notesPlaceholder: "Zapisz przemyślenia…",
    notesSave: "Zapisz notatkę",
    notesEmptyDay: "Brak notatek z tego dnia — dodaj pierwszą📝",
    notesEmpty: "Brak notatek — dodaj pierwszą📝",
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
    readMore: "Pełny opis i przykłady",
    checkDone: "✓ Ukończono",
    checkMark: "Oznacz jako ukończone",
  },
  expanded: {
    longDesc: "Szczegółowy opis",
    example: "Przykład w praktyce",
    exampleSetup: "Kontekst",
    exampleExecution: "Przebieg",
    exampleResult: "Rezultat",
    benefits: "Wpływ na umysł",
    pitfall: "Typowa pułapka",
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
        "Wybierz temat: \u201e10 sposobów na ___\u201d. Pisz bez przerwy. Nie oceniaj, nie skreślaj. Pierwsze 5 będą oczywiste — złoto zaczyna się od szóstego.",
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
      description: "Weź gotowe rozwiązanie i zadaj mu serię trudnych pytań.",
      prompt:
        "Wybierz rozwiązanie, które stosujesz. Zapytaj: Czy naprawdę rozwiązuje problem? Co by się stało, gdybym tego nie robił? Co zakładam, nie sprawdzając?",
      tip: "Najlepsze rozwiązania wytrzymują bezlitosne przesłuchanie.",
    },
    "10": {
      name: "Odwracanie założeń",
      description: "Weź oczywiste założenie i odwróć je. Co by to oznaczało?",
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
  } as Record<
    string,
    { name: string; description: string; prompt: string; tip: string }
  >,
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
  exercisesExtended: {
    "01": {
      longDescription:
        'Technika wywodzi się z podejścia Jamesa Altuchera, który przez lata ćwiczył codzienne generowanie 10 pomysłów jako „gimnastykę mózgu". Chodzi o wyrobienie nawyku myślenia generatywnego — umysł traktowany jak mięsień wymaga regularnych powtórzeń. Pierwsze 5 pomysłów to zawsze te oczywiste, „bezpieczne". Dopiero od 6. wzwyż mózg zaczyna sięgać w nieznane rejony. To właśnie w tej strefie dyskomfortu rodzą się ciekawe połączenia.',
      example: {
        setup:
          'Poniedziałkowy poranek. Temat: „10 sposobów na poprawę komunikacji w zespole".',
        execution:
          '1. Codzienne 15-minutowe stand-upy\n2. Anonimowa skrzynka na feedback\n3. Rotacyjne prowadzenie spotkań\n4. „No-meeting Friday"\n5. Wspólny lunch raz w tygodniu\n6. Losowe pary do krótkich rozmów 1:1\n7. Tablica „czego nie wiem" — publiczne przyznawanie się do luk\n8. Emoji-raport nastrojów na początku dnia w Slacku\n9. „Retrospektywa w 3 zdaniach" po każdym projekcie\n10. Biblioteka wewnętrzna — dzielenie się książkami z notatkami',
        result:
          'Pomysły 1–5 to standardowe praktyki znane z każdego kursu managementu. Pomysł 7 („tablica czego nie wiem") pojawił się jako lekko niekomfortowy — i właśnie on okazał się najciekawszy do dalszego rozwinięcia.',
      },
      benefits: [
        {
          label: "Myślenie generatywne",
          description:
            'Regularny trening zwiększa płynność myślenia — zdolność do szybkiego produkowania dużej liczby pomysłów bez blokady „wewnętrznego krytyka".',
        },
        {
          label: "Przełamywanie schematów",
          description:
            "Wymuszenie dojścia do 10. pomysłu zmusza mózg do wyjścia poza oczywiste rozwiązania i eksploracji nieoczekiwanych skojarzeń.",
        },
        {
          label: "Tolerancja na niepewność",
          description:
            'Pisanie „głupich" pomysłów bez oceniania ćwiczy komfort z niedoskonałością — kluczowa umiejętność w procesach twórczych i innowacyjnych.',
        },
        {
          label: "Nawyk generowania",
          description:
            "Po kilku tygodniach praktyki zauważysz, że w ciągu dnia spontanicznie zaczynasz generować alternatywy i opcje tam, gdzie wcześniej zatrzymywałeś się na pierwszym pomyśle.",
        },
      ],
      pitfall:
        "Największa pułapka to zatrzymywanie się i ocenianie każdego pomysłu na bieżąco. Pisz wszystko — selekcja odbywa się po zakończeniu ćwiczenia, nigdy w trakcie.",
    },
    "02": {
      longDescription:
        'Pytanie „A co jeśli?" to jedno z najpotężniejszych narzędzi myślenia projektowego (design thinking) i filozofii. Pozwala tymczasowo zawiesić ograniczenia rzeczywistości i eksplorować scenariusze alternatywne. Stosowane przez scenarzystów, architektów, strategów biznesowych i filozofów. Kluczem jest zadawanie pytań, które burzą założenia, a nie tylko modyfikują szczegóły.',
      example: {
        setup: "Praca nad nowym produktem — aplikacja do nauki języków.",
        execution:
          'A co jeśli nauka odbywała się tylko przez 60 sekund dziennie?\n→ Wymusiłoby to ultra-priorytetyzację: co absolutnie MUSI być w tych 60 sekundach? Rodzi zupełnie inny model.\n\nA co jeśli nie byłoby żadnych ćwiczeń gramatycznych?\n→ Nauka przez kontekst i powtórzenia. Jak dzieci. Może to szybsze?\n\nA co jeśli użytkownik byłby nauczycielem, a nie uczniem?\n→ Uczenie innych to najszybszy sposób nauki. Model peer-to-peer.\n\nA co jeśli aplikacja celowo była nudna?\n→ Paradoks: może eliminowałaby „gamification addicts" i zostały tylko osoby naprawdę zmotywowane?',
        result:
          'Trzecie pytanie („użytkownik jako nauczyciel") otworzyło zupełnie nowy kierunek produktowy, którego nie było w oryginalnej specyfikacji. Całe ćwiczenie zajęło 8 minut.',
      },
      benefits: [
        {
          label: "Kwestionowanie założeń",
          description:
            'Każda sytuacja opiera się na ukrytych założeniach, które traktujemy jak fakty. „A co jeśli?" je ujawnia i pozwala świadomie zdecydować, które warto zachować.',
        },
        {
          label: "Myślenie scenariuszowe",
          description:
            "Regularne ćwiczenie buduje zdolność do szybkiego modelowania alternatywnych przyszłości — przydatne w planowaniu, zarządzaniu ryzykiem i podejmowaniu decyzji.",
        },
        {
          label: "Innowacyjność",
          description:
            'Większość przełomowych innowacji zaczęła się od pytania „A co jeśli?". Ćwiczenie wyrabia nawyk szukania nieoczywistych kątów zamiast optymalizowania istniejącego.',
        },
      ],
      pitfall:
        'Unikaj pytań, które są tylko wariacją status quo („A co jeśli zrobimy to trochę szybciej?"). Szukaj pytań, które wywracają logikę systemu.',
    },
    "03": {
      longDescription:
        'Technika oparta na koncepcji „reframingu" z psychologii poznawczej i terapii skoncentrowanej na rozwiązaniach. Każdy z nas patrzy na rzeczywistość przez filtr własnych doświadczeń, roli i wiedzy. Świadome przyjęcie innej perspektywy aktywuje empatię poznawczą i ujawnia wymiary sytuacji, które są niewidoczne z pozycji domyślnej. W negocjacjach, zarządzaniu konfliktami i projektowaniu produktów to jedna z najcenniejszych umiejętności.',
      example: {
        setup:
          "Sytuacja: firma chce wdrożyć obowiązkowy system śledzenia czasu pracy.",
        execution:
          'Perspektywa 1 — nowy pracownik bez kontekstu:\n„Nie rozumiem po co to, jeśli zadania są skończone na czas. Czuję się kontrolowany, jakby nie ufano mi."\n\nPerspektywa 2 — CFO firmy:\n„Bez danych o czasie nie mogę wyceniać projektów, identyfikować wąskich gardeł ani planować zatrudnienia. To narzędzie zarządcze, nie inwigilacja."\n\nPerspektywa 3 — project manager:\n„Mnie to podwójna praca: muszę pamiętać o logowaniu czasu i jednocześnie moi ludzie są niezadowoleni, co spada na mnie."',
        result:
          "Trzy perspektywy ujawniły, że problem nie leży w narzędziu, ale w komunikacji celu. CFO widzi dane, pracownik widzi kontrolę. Rozwiązanie: transparentność po co i dostęp pracownika do własnych statystyk.",
      },
      benefits: [
        {
          label: "Empatia poznawcza",
          description:
            "Zdolność do rozumienia sposobu myślenia i odczuwania innych osób — niezależnie od tego, czy się z nimi zgadzamy. Fundament skutecznej komunikacji i przywództwa.",
        },
        {
          label: "Redukcja ślepych punktów",
          description:
            "Każda perspektywa ujawnia aspekty sytuacji niewidoczne z naszego domyślnego punktu widzenia. Regularne ćwiczenie zmniejsza ryzyko podejmowania decyzji opartych na niepełnym obrazie.",
        },
        {
          label: "Rozwiązywanie konfliktów",
          description:
            "Większość konfliktów wynika nie z faktycznej sprzeczności interesów, ale z odmiennych perspektyw na tę samą sytuację. Umiejętność ich artykułowania jest pierwszym krokiem do rozwiązania.",
        },
      ],
      pitfall:
        "Pułapka to opisywanie innych perspektyw własnymi słowami i wartościami. Prawdziwa zmiana perspektywy wymaga wejścia w logikę tej osoby, nawet jeśli się z nią nie zgadzasz.",
    },
    "04": {
      longDescription:
        'Ćwiczenie inspirowane praktykami kontemplacyjnymi i technikami uważności. Krótki, precyzyjnie ograniczony czas wymusza koncentrację — mózg nie może „rozgrzewać się" przez pierwsze 3 minuty. Efekt jest podobny do japońskiej techniki haiku: ograniczenie formy wyzwala głębię treści. 30 sekund to wystarczająco długo, żeby dotknąć istoty tematu, i wystarczająco krótko, żeby nie wpaść w pętlę ruminacji.',
      example: {
        setup:
          "Wtorkowy poranek, 7:15. Tematy: czas, cisza, granice, wdzięczność, zmiana.",
        execution:
          'CZAS (30 sek): „Rano zawsze czuję, że go mało. Wieczorem żałuję jak minął. Jakbym żył w ciągłym deficycie czegoś, czego i tak nie można zatrzymać."\n\nCISZA (30 sek): „Kiedy ostatnio byłem w ciszy bez telefonu? Nie pamiętam. To niepokojące samo w sobie."\n\nGRANICE (30 sek): „Mówię tak zbyt często. Widzę to teraz wyraźnie. Granice to szacunek dla własnego czasu, nie egoizm."\n\nWDZIĘCZNOŚĆ (30 sek): „Kawa. Zdrowie. Że mam komu pisać o tym co myślę. Małe rzeczy."\n\nZMIANA (30 sek): „Boję się jej i jednocześnie jej chcę. Paradoks, który nigdy nie znika."',
        result:
          'Obserwacja o ciszy („nie pamiętam kiedy") stała się punktem wyjścia do tygodniowego eksperymentu z 10-minutową ciszą po przebudzeniu.',
      },
      benefits: [
        {
          label: "Koncentracja uwagi",
          description:
            "Trening utrzymywania pełnej uwagi na jednym obiekcie przez krótki, precyzyjny czas. Bezpośrednio przekłada się na zdolność do skupienia w codziennej pracy.",
        },
        {
          label: "Samoświadomość",
          description:
            "Regularne krótkie refleksje budują wgląd we własne wartości, przekonania i emocje. Z czasem zaczynasz rozpoznawać swoje wzorce myślowe zanim zadziałają automatycznie.",
        },
        {
          label: "Redukcja ruminacji",
          description:
            'Ograniczenie do 30 sekund uczy „zamykania" tematu i przechodzenia dalej — zamiast krążenia w kółko wokół tego samego problemu przez godziny.',
        },
      ],
      pitfall:
        'Nie wydłużaj czasu, gdy „wchodzisz w temat". Granica 30 sekund jest fundamentem ćwiczenia — jej przekroczenie niszczy efekt dyscypliny uwagi.',
    },
    "05": {
      longDescription:
        'Technika znana jako „morning pages" — spopularyzowana przez Julię Cameron w książce „The Artist\'s Way" (1992). Celem nie jest stworzenie wartościowego tekstu, ale opróżnienie głowy z szumu myślowego: codziennych obaw, nieskończonych list zadań, nieuświadomionych emocji. Neuropsychologicznie: pisanie ręczne angażuje więcej obszarów mózgu niż pisanie na klawiaturze i spowalnia potok myśli do tempa, które można obserwować. Efekt terapeutyczny udokumentowany przez psychologa Jamesa Pennebakera w badaniach nad „ekspresywnym pisaniem".',
      example: {
        setup: "Środa, 6:50 rano. Nic szczególnego się nie dzieje.",
        execution:
          '„Zimna herbata znowu stoi. Muszę dziś zadzwonić do Marka ale nie wiem co mu powiedzieć po tym spotkaniu w zeszłym tygodniu. Może po prostu napisać. Pisanie jest bezpieczniejsze. Dlaczego? Daje czas na myślenie. Mam za mało czasu na myślenie ostatnio. Wszystko jest szybkie. Ten projekt też idzie za szybko albo ja idę za wolno. Może za wolno. Lubię wolno. Lubię ranki kiedy nikt jeszcze nie pisze. Okno ma brudną szybę od dawna. Powinienem umyć. Albo nie powinienem — kto to „powinienem"? Babcia zawsze mówiła że czyste okna to..."',
        result:
          'Po 12 minutach pojawiło się: niepokój wokół rozmowy z Markiem (wcześniej nieuświadomiony), przekonanie „idę za wolno" (warte zbadania), i niespodziewane wspomnienie babci (przyjemne). Wszystkie trzy były „schowane" pod codziennym hałasem.',
      },
      benefits: [
        {
          label: "Czyszczenie głowy",
          description:
            'Przelanie myśli na papier uwalnia zasoby pamięci roboczej. Po ćwiczeniu większość osób zgłasza poczucie „lekkości" i większą klarowność myślenia przez resztę dnia.',
        },
        {
          label: "Dostęp do podświadomości",
          description:
            'Bezustanne pisanie bez cenzury pozwala przeskoczyć „strażnika" — wewnętrznego krytyka — i dotrzeć do myśli i emocji, które normalnie nie przebijają się do świadomości.',
        },
        {
          label: "Przetwarzanie emocji",
          description:
            "Badania Pennebakera pokazują, że regularne ekspresywne pisanie zmniejsza poziom kortyzolu, poprawia odporność i redukuje objawy stresu pourazowego.",
        },
        {
          label: "Kreatywność",
          description:
            'Usuwanie codziennego „szumu" z głowy tworzy przestrzeń dla nowych połączeń i pomysłów. Wiele osób zgłasza, że najlepsze pomysły przychodzą tuż po morning pages.',
        },
      ],
      pitfall:
        'Pułapka perfekcjonisty: „nie mam o czym pisać". Jeśli tak myślisz, pisz dosłownie: „nie mam o czym pisać, bo… i właśnie to jest ciekawe bo…"',
    },
    "06": {
      longDescription:
        'Klasyczna technika burzy mózgów (brainstorming) przeniesiona na format indywidualny. Badania pokazują, że w wielu kontekstach solowa burza mózgów jest produktywniejsza od grupowej — brak presji społecznej, oceniania przez innych i „groupthink". Kluczowe zasady: ilość ważniejsza od jakości, zakaz krytyki w trakcie, mile widziane szalone pomysły, budowanie na własnych pomysłach. Czas jest celowo krótki i intensywny — tworzy stan lekkiego stresu, który mobilizuje myślenie dywergentne.',
      example: {
        setup:
          'Problem: „Jak zachęcić użytkowników aplikacji do codziennego powrotu?"',
        execution:
          '1. Powiadomienia push z cytatami\n2. Streak — serie dni z rzędu\n3. Wyzwania 7-dniowe\n4. Punkty i odznaki\n5. Współzawodnictwo ze znajomymi\n6. Personalizowane rekomendacje na dany dzień\n7. „Tajne ćwiczenie" odblokowywane po 5 dniach\n8. Możliwość wysłania ćwiczenia znajomemu\n9. Tygodniowy raport postępów e-mailem\n10. Historia myśli — możliwość czytania własnych starych notatek\n11. Pytanie dnia zadane przez AI\n12. Społeczność — anonimowe dzielenie się przemyśleniami\n13. Integracja z kalendarzem jako „spotkanie z sobą"\n14. Tryb offline — bez internetu\n15. Wersja dla dzieci — ćwiczenia dostosowane do wieku',
        result:
          'Pomysł 10 („historia myśli") okazał się najbardziej oryginalny i potencjalnie najsilniejszy motywacyjnie. W 8 minut powstało 15 pomysłów — znacznie więcej niż przy nieskrępowanym „myśleniu o problemie".',
      },
      benefits: [
        {
          label: "Myślenie dywergentne",
          description:
            'Zdolność do generowania wielu różnorodnych rozwiązań z jednego punktu startowego. Bezpośrednie przeciwieństwo konwergentnego „szukania jednej właściwej odpowiedzi".',
        },
        {
          label: "Przełamywanie blokady twórczej",
          description:
            'Presja czasu i zasada „wszystko jest OK" eliminuje główne źródła blokady: perfekcjonizm i strach przed oceną. Regularny trening redukuje te blokady trwale.',
        },
        {
          label: "Zasób pomysłów",
          description:
            "Po kilku tygodniach zbudujesz bank pomysłów — nawet jeśli dziś żaden nie jest wdrożony, jutro może być dokładnie tym, czego szukałeś.",
        },
      ],
      pitfall:
        'Ocenianie pomysłów podczas generowania to najczęstszy błąd. „To bez sensu" i „to już istnieje" to myśli, które niszczą burzę mózgów. Selekcja — dopiero po.',
    },
    "07": {
      longDescription:
        'Ćwiczenie oparte na teście „Alternative Uses Task" (Guilford, 1967) — jednym z klasycznych narzędzi do mierzenia kreatywności i myślenia dywergentnego. Oryginalnie używany w psychologii do badania „fluency" (płynności), „flexibility" (elastyczności) i „originality" (oryginalności) myślenia. Cegła, spinacz, gazeta — to typowe obiekty testowe. Zdolność do widzenia przedmiotów poza ich funkcją pierwotną jest bezpośrednio związana z innowacyjnością i zdolnością do rozwiązywania problemów w niestandardowy sposób.',
      example: {
        setup: "Wybrany przedmiot: zwykła gumka do ścierania.",
        execution:
          "1. Antypoślizgowa podkładka pod laptopa\n2. Znacznik miejsca w książce\n3. Masażer punktowy do palców przy pisaniu\n4. Materiał do zrobienia pieczątki (wycinanie wzoru)\n5. Korek do małej buteleczki\n6. Obciążnik do lekkiej kartki na wietrze\n7. Rzeźba — materiał do modelowania małych form\n8. Grzechotka dla dziecka (wewnątrz pudełka)\n9. Ćwiczenie siły palców — ściskanie przez 60 sekund\n10. Materiał porównawczy do nauki kolorów (biały, różowy, niebieski)",
        result:
          'Punkty 4 i 7 wymagały przeskoku myślowego — gumka jako materiał, nie narzędzie. To właśnie ten rodzaj zmiany kategorii jest najcenniejszy: ujawnia, że „funkcja" obiektu jest społeczną umową, nie właściwością fizyczną.',
      },
      benefits: [
        {
          label: "Myślenie lateralne",
          description:
            "Zdolność do podejścia do problemu z zupełnie innego kierunku niż oczywisty. Sformalizowana przez Edwarda de Bono jako alternatywa dla logicznego myślenia krok-po-kroku.",
        },
        {
          label: "Dekonstrukcja funkcji",
          description:
            'Regularne ćwiczenie osłabia „ślepotę funkcjonalną" (functional fixedness) — neurologiczną tendencję do widzenia obiektów tylko przez pryzmat ich pierwotnej funkcji.',
        },
        {
          label: "Transfer analogii",
          description:
            'Umiejętność przenoszenia rozwiązań z jednej domeny do drugiej. Wiele innowacji to właśnie „zastosowanie czegoś ze świata X w świecie Y".',
        },
      ],
      pitfall:
        'Wybieranie zbyt „interesujących" przedmiotów. Siła ćwiczenia leży w banalnych obiektach. Im bardziej nudny przedmiot, tym trudniej — i tym lepszy trening.',
    },
    "08": {
      longDescription:
        "Technika wywodząca się z psychoanalizy (wolne skojarzenia Freuda) i stosowana dziś w terapii poznawczej, coachingu kreatywnym i mapowaniu myśli. W odróżnieniu od mapy myśli — gdzie skojarzenia wracają do centrum — łańcuch jest liniowy i kierunkowy. Każde kolejne słowo skojarzone jest z poprzednim, nie z tematem wyjściowym. To prowadzi do miejsc, których świadomość nigdy by nie wybrała — i właśnie tam często kryją się nieoczekiwane połączenia i pomysły.",
      example: {
        setup: 'Słowo startowe: „most".',
        execution:
          "most → woda → pragnienie → brak → niedobór → ubóstwo → godność → szacunek → granice → mur → Berlin → historia → pamięć → zdjęcia → babcia → ciepło → kuchnia → zapach → chleb → praca → ręce → dłonie → pismo → list → czekanie → nadzieja → wiosna → zmiana → strach → skok → most",
        result:
          'Łańcuch wrócił do „most" po 28 skokach, co jest rzadkie i znaczące. Ważniejsze: nieoczekiwane połączenie „ubóstwo → godność" i „czekanie → nadzieja" — dwie pary, które samodzielnie mogłyby stać się tematami eseju lub projektu. Żadna z nich nie była planowana.',
      },
      benefits: [
        {
          label: "Odkrywanie nieświadomych połączeń",
          description:
            "Mózg przechowuje ogromną sieć skojarzeń zbudowaną przez całe życie. Łańcuchy skojarzeń dają dostęp do tych połączeń, omijając świadomą cenzurę i schematy.",
        },
        {
          label: "Rozgrzewka kreatywna",
          description:
            "Jedno z najskuteczniejszych ćwiczeń przed pracą twórczą — pisaniem, projektowaniem, komponowaniem. Aktywuje sieć domyślną mózgu (default mode network) odpowiedzialną za kreatywność.",
        },
        {
          label: "Redukcja blokad myślowych",
          description:
            'Szybkie tempo bez analizy uniemożliwia zatrzymanie się na „właściwym" skojarzeniu. Uczy przepuszczania myśli zamiast trzymania się jednej i analizowania jej do wyczerpania.',
        },
      ],
      pitfall:
        'Próba tworzenia „ładnego" lub „logicznego" łańcucha. To ma być chaotyczne. Skojarzenia dźwiękowe, wizualne, emocjonalne — wszystkie są równie wartościowe.',
    },
    "09": {
      longDescription:
        'Technika inspirowana metodą sokratejską i podejściem „Five Whys" (Toyota Production System). Większość rozwiązań, które stosujemy — w pracy i życiu — nigdy nie przeszła przez rygorystyczne przesłuchanie. Przyjmujemy je jako dane, bo „zawsze tak było" lub „to oczywiste". Regularne kwestionowanie własnych rozwiązań to nie pesymizm, lecz intelektualna higiena — jak sprawdzanie, czy zamknąłeś drzwi. Filozoficznie zbliżone do postawy „via negativa": zrozumieć coś przez eliminację tego, czym nie jest.',
      example: {
        setup:
          'Rozwiązanie do zbadania: „Codzienne spotkanie zespołu o 9:00 rano".',
        execution:
          'Czy naprawdę rozwiązuje problem?\n„Problem miał być: brak synchronizacji. Ale czy synchronizacja naprawdę wymaga codziennego spotkania? Może problemem było coś innego."\n\nCo zakładam, nie sprawdzając?\n„Zakładam, że wszyscy muszą wiedzieć o wszystkim. Zakładam, że 9:00 to dobra pora dla każdego. Zakładam, że rozmowa jest lepsza niż pismo."\n\nCo by się stało, gdybym tego nie robił?\n„Próba przez 2 tygodnie: asynchroniczny update w Notion do 10:00. Spotkanie tylko gdy pojawi się prawdziwy konflikt lub decyzja."\n\nDlaczego robimy to od 2 lat bez pytania?\n„Bo nikt nigdy nie zapytał. Przyszło z poprzedniego managera. Nikt nie pamięta dlaczego."',
        result:
          "Eksperyment z asynchronicznym updatem pokazał, że 3 z 5 dni w tygodniu spotkanie było zbędne. Zaoszczędzone 45 minut dziennie × 5 osób = 3,75 godziny tygodniowo odzyskanej pracy.",
      },
      benefits: [
        {
          label: "Myślenie pierwszych zasad",
          description:
            'Elon Musk popularyzuje „first principles thinking" — rozkładanie problemu do fundamentów zamiast analogii i precedensów. Kwestionowanie rozwiązań to właśnie ten mięsień.',
        },
        {
          label: "Eliminacja zombie-procesów",
          description:
            'W każdej organizacji i w każdym życiu osobistym funkcjonują rozwiązania, które dawno przestały rozwiązywać problem, ale „zawsze tak było". Regularne audyty je ujawniają.',
        },
        {
          label: "Metapoznanie",
          description:
            'Zdolność do obserwowania własnego myślenia z zewnątrz. „Dlaczego myślę, że to jedyne rozwiązanie?" to pytanie wyższego rzędu, które zmienia jakość wszystkich decyzji.',
        },
      ],
      pitfall:
        "Kwestionowanie prowadzące do paraliżu decyzyjnego. Celem nie jest obalenie wszystkiego, ale świadome potwierdzenie lub modyfikacja. Zawsze kończ decyzją, nie zawieszeniem.",
    },
    "10": {
      longDescription:
        'Technika „reverse brainstorming" lub „assumption reversal" — stosowana w design thinking, innowacjach i filozofii. Metoda polega na wzięciu fundamentalnego założenia i zamianie go na jego przeciwieństwo, a następnie poważnym potraktowaniu tego odwrócenia. Pozornie absurdalne odwrócenie często ujawnia ukryte mechanizmy lub otwiera nowe przestrzenie rozwiązań. Słynny przykład: zamiast „jak sprawić, żeby klienci kupowali więcej?" → „jak sprawić, żeby klienci kupowali mniej?" (co doprowadziło Patagonia do kampanii „Don\'t Buy This Jacket").',
      example: {
        setup:
          'Założenie do odwrócenia: „Dobre onboarding powinno być jak najkrótsze i najprostsze".',
        execution:
          'Odwrócenie: „Dobre onboarding powinno być długie i skomplikowane."\n\nKiedy to mogłoby być prawdą?\n„Kiedy długość i trudność filtrują niezmotywowanych użytkowników. Duolingo celowo tworzy długie ścieżki, bo inwestycja czasu buduje zaangażowanie. LinkedIn onboarding zajmuje godzinę — ale ci, którzy je przechodzą, są 5× bardziej aktywni."\n\nCo to zmienia w naszym produkcie?\n„Może nasz problem z retencją nie pochodzi z za długiego onboardingu, ale z za krótkiego — użytkownicy nie inwestują wystarczająco dużo, żeby poczuć się zaangażowanymi."',
        result:
          'Hipoteza: dodanie opcjonalnego „głębokiego onboardingu" (15 minut zamiast 3) i zmierzenie retencji po 30 dniach. Odwrócenie zmieniło całą rozmowę o problemie.',
      },
      benefits: [
        {
          label: "Ujawnianie ukrytych założeń",
          description:
            'Odwrócenie jest jak świecenie latarką pod innym kątem — to co zawsze było w cieniu nagle staje się widoczne. Często okazuje się, że „oczywiste" założenie jest arbitralną konwencją.',
        },
        {
          label: "Innowacja przez paradoks",
          description:
            'Wiele przełomowych produktów i strategii powstało z odwrócenia branżowego dogmatu. Airbnb („nie musisz posiadać hoteli"), Spotify („nie musisz posiadać muzyki"), Uber („taksówki bez taksówek").',
        },
        {
          label: "Elastyczność poznawcza",
          description:
            "Zdolność do trzymania dwóch sprzecznych idei jednocześnie i eksplorowania obu bez natychmiastowego osądzania. Kluczowa cecha myślenia strategicznego.",
        },
      ],
      pitfall:
        'Zbyt szybkie odrzucanie odwróceń jako „absurdalnych". Absurdalność to sygnał, że dotknąłeś głębokiego założenia — wartego zbadania właśnie dlatego, że wydaje się oczywiste.',
    },
    "11": {
      longDescription:
        'Metoda stworzona przez dr. Edwarda de Bono w 1985 roku, opisana w książce „Six Thinking Hats". Stosowana przez Fortune 500, rządy i szkoły na całym świecie. Podstawowa idea: zamiast mieszać fakty, emocje, krytykę i optymizm w jednej rozmowie — separujemy je na 6 „kapeluszy". Każdy kapelusz to oddzielny tryb myślenia, zakładany przez wszystkich uczestników jednocześnie. W wersji solo: każdy kapelusz to oddzielna perspektywa, przez którą patrzymy na ten sam temat sekwencyjnie. Efekt: pełniejszy, mniej tendencyjny obraz sytuacji.',
      example: {
        setup: 'Decyzja: „Czy powinienem przejść z etatu na freelance?"',
        execution:
          'Biały (fakty): „Zarabiam X, na freelance mógłbym zarabiać X×1,5 ale bez stabilności. 30% czasu w obecnej pracy to praca, której nie lubię. Rynek freelancerów w mojej branży rośnie 12% rok do roku."\n\nCzerwony (emocje): „Boję się. Ekscytuje mnie. Czuję się uwięziony w etacie. Bałbym się co miesiąc o pieniądze. Tęsknię za wolnością wyboru projektów."\n\nCzarny (ryzyka): „Brak ubezpieczenia. Nieregularny dochód w pierwszych 6 miesiącach. Izolacja społeczna. Konieczność samodzielnej sprzedaży. Ryzyko pustek między projektami."\n\nŻółty (korzyści): „Wybór projektów. Wyższy potencjał zarobkowy. Elastyczny czas. Budowanie marki osobistej. Praca z różnymi branżami = szerszy rozwój."\n\nZielony (nowe pomysły): „A co jeśli zacznę freelance przy zachowanym etacie przez 6 miesięcy? Albo negocjuję formę B2B z obecnym pracodawcą? Albo buduję produkty pasywne zamiast usług?"\n\nNiebieski (wnioski): „Główne pytanie nie brzmi etat/freelance, ale: co chcę robić zawodowo? Decyzja w ciągu 3 miesięcy po zebraniu 2 klientów freelance na próbę."',
        result:
          "Czerwony kapelusz ujawnił sprzeczność: strach I ekscytacja jednocześnie. Zielony otworzył trzecią opcję (B2B z obecnym pracodawcą), której wcześniej nikt nie rozważał. Niebieski dostarczył konkretny, testowy plan działania.",
      },
      benefits: [
        {
          label: "Pełniejszy obraz sytuacji",
          description:
            "Każdy kapelusz wydobywa informacje, które inne tryby myślenia pomijają. Razem tworzą 360-stopniowy widok na problem — od danych przez emocje po kreatywne możliwości.",
        },
        {
          label: "Separacja emocji od faktów",
          description:
            'Czerwony kapelusz daje „oficjalne pozwolenie" na emocje — bez ich ukrywania lub dominowania. To jedno z najzdrowszych narzędzi do pracy z trudnymi decyzjami.',
        },
        {
          label: "Redukcja konfliktu",
          description:
            "W grupie: gdy wszyscy zakładają ten sam kapelusz, znika sprzeczność osobowości. Optymista i pesymista współpracują, bo oboje zakładają teraz czarny kapelusz razem.",
        },
        {
          label: "Strukturyzacja złożonych decyzji",
          description:
            'Sekwencja 6 kapeluszy zamienia „chaotyczną naradę" w ustrukturyzowany proces. Każdy aspekt dostaje swój czas i przestrzeń — nic nie ginie w hałasie.',
        },
      ],
      pitfall:
        'Pomijanie czerwonego kapelusza jako „niepoważnego". Emocje to dane — ignorowanie ich prowadzi do decyzji, które są logicznie poprawne, ale człowiek ich nie wykonuje, bo emocje sabotują wdrożenie.',
    },
  } as Record<
    string,
    {
      longDescription: string;
      example: { setup: string; execution: string; result: string };
      benefits: Array<{ label: string; description: string }>;
      pitfall: string;
    }
  >,
};
