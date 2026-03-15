# Mental Gym 🧠

**Mental Gym** to codzienny trener umysłu — aplikacja mobilna (iOS + Android) na Expo / React Native / TypeScript, która pomaga budować nawyk regularnych ćwiczeń poznawczych z trzech dziedzin: **kreatywności**, **krytycznego myślenia** i **uważności (mindfulness)**.

Każdego dnia dostajesz zestaw 3 krótkich ćwiczeń (5–20 min). Zaznaczasz ukończone, piszesz notatki, robisz zdjęcia — aplikacja śledzi postępy i buduje passę dni z rzędu.

---

## Spis treści

1. [Funkcje aplikacji](#funkcje-aplikacji)
2. [Ćwiczenia](#ćwiczenia)
3. [Wymagania](#wymagania)
4. [Szybki start](#szybki-start)
5. [Budowanie i publikacja (Play Store)](#budowanie-i-publikacja-play-store)
6. [Struktura projektu](#struktura-projektu)
7. [Architektura techniczna](#architektura-techniczna)
8. [Ekrany i nawigacja](#ekrany-i-nawigacja)
9. [Model danych](#model-danych)
10. [Internacjonalizacja](#internacjonalizacja)
11. [Motywy (Dark / Light)](#motywy-dark--light)
12. [Powiadomienia](#powiadomienia)
13. [Dodawanie ćwiczeń](#dodawanie-ćwiczeń)

---

## Funkcje aplikacji

| Funkcja            | Opis                                                          |
| ------------------ | ------------------------------------------------------------- |
| **Dzienny plan**   | 3 ćwiczenia dziennie z rotacją kategorii                      |
| **Timer**          | Odliczanie z parametrami min/max dla każdego ćwiczenia        |
| **Notatki**        | Tekstowe wpisy powiązane z dniem i ćwiczeniem                 |
| **Zdjęcia**        | Aparat / galeria — zdjęcia dołączane do notatek               |
| **Historia**       | Pełna historia notatek per ćwiczenie                          |
| **Passe (streak)** | Licznik dni z rzędu, w których ukończono ≥ 1 ćwiczenie        |
| **Statystyki**     | Ukończone zadania (dziś / tydzień / łącznie) + heatmapa       |
| **Plany własne**   | Tworzenie, edytowanie i przełączanie planów tygodniowych      |
| **Biblioteka**     | Przeglądanie wszystkich ćwiczeń z filtrami kategorii          |
| **Pełny opis**     | Ekran rozszerzony z teorią, przykładem, korzyściami i pułapką |
| **Język PL / EN**  | Pełna internacjonalizacja, przełącznik w ustawieniach         |
| **Dark / Light**   | Motyw ciemny i jasny, trwały wybór                            |

---

## Ćwiczenia

Aplikacja zawiera **11 ćwiczeń poznawczych** podzielonych na 3 kategorie:

### 💡 Kreatywność

| ID  | Ćwiczenie                                                                       | Czas   |
| --- | ------------------------------------------------------------------------------- | ------ |
| 01  | **10 pomysłów na…** — generowanie 10 pomysłów bez cenzury na wybrany temat      | 10 min |
| 06  | **Solo burza mózgów** — intensywne generowanie rozwiązań konkretnego problemu   | 8 min  |
| 07  | **10 niezwykłych zastosowań** — nieoczywiste użycia zwykłych przedmiotów        | 5 min  |
| 08  | **Łańcuchy skojarzeń** — linearny łańcuch wolnych skojarzeń od słowa startowego | 5 min  |

### 🔍 Krytyczne myślenie

| ID  | Ćwiczenie                                                                                              | Czas      |
| --- | ------------------------------------------------------------------------------------------------------ | --------- |
| 02  | **A co jeśli?** — pytania burzące założenia rzeczywistości                                             | 5 min     |
| 03  | **Zmiana perspektywy** — opis sytuacji z 3 różnych punktów widzenia                                    | 5–8 min   |
| 09  | **Kwestionowanie rozwiązań** — przesłuchanie istniejącego rozwiązania pytaniami sokratejskimi          | 8 min     |
| 10  | **Odwracanie założeń** — reverse brainstorming (co jeśli odwrócimy dogmat?)                            | 5–8 min   |
| 11  | **6 kapeluszy myślowych** — metoda de Bono: fakty / emocje / ryzyka / korzyści / kreatywność / wnioski | 15–20 min |

### 🧘 Mindfulness

| ID  | Ćwiczenie                                                                                | Czas      |
| --- | ---------------------------------------------------------------------------------------- | --------- |
| 04  | **30-sekundowe rozważania** — intensywna refleksja nad 5–6 tematami po 30 sekund         | 5 min     |
| 05  | **Strumień świadomości** — pisanie wszystkiego bez cenzury i redagowania (morning pages) | 10–15 min |

Każde ćwiczenie ma:

- Krótki opis + prompt startowy + wskazówkę (w kartach i na ekranie szczegółów)
- Rozszerzony opis teoretyczny, przykład krok po kroku, listę korzyści i typową pułapkę (ekran `ExerciseExpanded`)

---

## Wymagania

- **Node.js** 18+
- **npm** lub yarn
- **Expo Go** na telefonie — [iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

Opcjonalnie, do budowania natywnego:

- Xcode 15+ (iOS)
- Android Studio (Android)

---

## Szybki start

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom serwer deweloperski
npx expo start

# 3. Zeskanuj QR w Expo Go (LAN) lub użyj tunelu
npx expo start --tunnel
```

Kod na żywo — Fast Refresh odświeża widok natychmiast po zapisaniu pliku.

```bash
# Pozostałe skrypty
npx expo start --android   # Emulator Android
npx expo start --ios       # Symulator iOS
```

---

## Budowanie i publikacja (Play Store)

### Wymagania wstępne

1. **Konto Expo** — załóż bezpłatnie na [expo.dev](https://expo.dev)
2. **EAS CLI** — zainstalowany:
   ```bash
   npm install -g eas-cli
   eas login
   ```
3. **Konto Google Play** — potrzebne do publikacji ([play.google.com/console](https://play.google.com/console))

---

### Krok 1 — Zaloguj się i połącz projekt z EAS

```bash
eas login                # Zaloguj się kontem expo.dev
eas init                 # Utwórz projekt EAS i wpisz projectId do app.json
```

Po `eas init` skopiuj wygenerowany `projectId` i wstaw go w [app.json](app.json):

```json
"extra": {
  "eas": {
    "projectId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```

---

### Krok 2 — Zbuduj APK do testów (preview)

Szybkie testowanie na fizycznym urządzeniu:

```bash
npm run build:preview
# lub bezpośrednio:
eas build --platform android --profile preview
```

Po zakończeniu (5–10 min) EAS wyśle link do pobrania `.apk`. Zainstaluj na telefonie.

---

### Krok 3 — Zbuduj AAB do publikacji (production)

Google Play wymaga formatu **Android App Bundle** (`.aab`):

```bash
npm run build:production
# lub bezpośrednio:
eas build --platform android --profile production
```

EAS automatycznie zarządza podpisem (keystore). Przy pierwszym buildzie zapyta, czy wygenerować nowy keystore — wybierz **"Generate new keystore"** i zapisz dane do bezpiecznego miejsca.

> ⚠️ **Ważne**: Keystore to klucz do Twojej aplikacji. Jeśli go zgubisz, nie będziesz mógł wydać aktualizacji. EAS może go przechowywać za Ciebie (domyślne) lub możesz użyć własnego.

---

### Krok 4 — Przygotuj profil Play Store

W [Google Play Console](https://play.google.com/console):

1. **Utwórz nową aplikację** → wpisz nazwę "Mental Gym"
2. Uzupełnij **Konfigurację sklepu**:
   - Krótki opis (80 znaków): _Codzienny trener umysłu — kreatywność, myślenie krytyczne, mindfulness_
   - Pełny opis (4000 znaków): patrz sekcja poniżej
   - Ikona aplikacji: 512×512 px PNG (bez przezroczystości)
   - Grafika wyróżniona (feature graphic): 1024×500 px
   - Zrzuty ekranu: min. 2 zdjęcia telefonu (320–3840 px)
3. Wypełnij **Ocenę treści** (questionnaire) → kategoria: Zdrowie i kondycja lub Produktywność
4. Ustaw **cenę** (bezpłatna lub płatna)

#### Sugerowany opis sklepu (PL)

```
Mental Gym to codzienny trener umysłu, który pomaga budować nawyk regularnych ćwiczeń poznawczych z trzech dziedzin:

🧠 KREATYWNOŚĆ
Techniki takie jak "10 pomysłów na...", solo burza mózgów, łańcuchy skojarzeń czy niestandardowe zastosowania pobudzają myślenie generatywne i myślenie lateralne.

🔍 KRYTYCZNE MYŚLENIE
"A co jeśli?", zmiana perspektywy, kwestionowanie rozwiązań czy odwracanie założeń uczą analizowania problemów z różnych kątów i rozbijania ukrytych przekonań.

🧘 MINDFULNESS
Strumień świadomości (morning pages) i 30-sekundowe rozważania rozwijają uważność i wgląd we własne myśli.

FUNKCJE APLIKACJI
• Dzienny plan z 3 ćwiczeniami dziennie
• Timer dostosowany do każdego ćwiczenia
• Notatki i zdjęcia powiązane z ćwiczeniami
• Historia notatek i postępów
• Passe (streak) — dni z rzędu z aktywnym treningiem
• Statystyki tygodniowe i łączne
• Tworzenie własnych planów tygodniowych
• Biblioteka wszystkich ćwiczeń z filtrami
• Rozszerzony opis każdego ćwiczenia z przykładami i korzyściami
• Obsługa języka polskiego i angielskiego
• Motyw ciemny i jasny

Każde ćwiczenie zajmuje 5–20 minut. Żadnych subskrypcji. Żadnych danych w chmurze. Wszystko działa lokalnie.
```

---

### Krok 5 — Automatyczne przesłanie do Play Store

Skonfiguruj klucz API Google Play:

1. W Google Play Console → **Konfiguracja** → **Dostęp do interfejsu API** → utwórz klucz konta usługi (JSON)
2. Zapisz plik jako `google-services-key.json` w katalogu projektu
3. Dodaj do `.gitignore`:
   ```
   google-services-key.json
   ```
4. Prześlij build:
   ```bash
   npm run submit:android
   # lub bezpośrednio:
   eas submit --platform android
   ```

EAS wybierze ostatni build production i prześle go na ścieżkę **Internal testing** (jak ustawiono w `eas.json`).

---

### Profile buildów (eas.json)

| Profil        | Format        | Użycie                                   |
| ------------- | ------------- | ---------------------------------------- |
| `development` | APK (debug)   | Testy na urządzeniu z Expo Dev Client    |
| `preview`     | APK (release) | Testy wewnętrzne — udostępnianie linkiem |
| `production`  | AAB (release) | Publikacja w Google Play                 |

---

### Wersjonowanie

Wersja aplikacji jest zarządzana przez `app.json`:

- `version` — wersja wyświetlana użytkownikom (np. `"1.0.1"`)
- `android.versionCode` — liczba całkowita, musi rosnąć przy każdej publikacji (np. `2`)
- `autoIncrement: true` w profilu `production` automatycznie zwiększa `versionCode`

Aby wydać aktualizację:

```bash
# Zaktualizuj version w app.json, np. "1.0.1"
# Następnie zbuduj i wyślij
npm run build:production
npm run submit:android
```

---

## Struktura projektu

```
MentalGym/
├── app.json                     # Konfiguracja Expo (nazwa, slug, pakiet)
├── babel.config.js
├── tsconfig.json
│
└── src/
    ├── App.tsx                  # Root: providers + NavigationContainer
    │
    ├── navigation/
    │   └── index.tsx            # Bottom tabs + stack routes
    │
    ├── screens/
    │   ├── TodayScreen.tsx      # Główny ekran — dzienny plan i postęp
    │   ├── LibraryScreen.tsx    # Biblioteka wszystkich ćwiczeń
    │   ├── PlanScreen.tsx       # Widok aktywnego planu tygodniowego
    │   ├── StatsScreen.tsx      # Statystyki, streak, ustawienia
    │   ├── ExerciseDetailScreen.tsx   # Szczegóły ćwiczenia (timer, notatki, zdjęcia)
    │   ├── ExerciseExpandedScreen.tsx # Rozszerzony opis teoretyczny
    │   ├── PlanManagerScreen.tsx      # Zarządzanie planami
    │   └── PlanEditorScreen.tsx       # Edytor planu tygodniowego
    │
    ├── components/
    │   ├── ExerciseCard.tsx     # Karta ćwiczenia (tryb kompaktowy i rozwinięty)
    │   └── ui.tsx               # CategoryBadge, TimePill, CheckButton
    │
    ├── data/
    │   ├── exercises.ts         # Definicje 11 ćwiczeń + domyślny plan tygodnia
    │   └── exercises_extended.ts # Zbiór ID ćwiczeń z rozszerzonym opisem
    │
    ├── hooks/
    │   ├── PlanContext.tsx      # Kontekst planów (CRUD AsyncStorage)
    │   ├── ProgressContext.tsx  # Kontekst postępów (wrapper)
    │   ├── useProgress.ts       # Logika postępów, notatek, zdjęć, timera
    │   └── useNotifications.ts  # Expo Notifications — poranne powiadomienia
    │
    ├── i18n/
    │   ├── pl.ts                # Wszystkie teksty (język źródłowy)
    │   ├── en.ts                # Tłumaczenia angielskie (typeof pl)
    │   └── LanguageContext.tsx  # Kontekst języka + funkcja interpolate()
    │
    └── theme/
        ├── index.ts             # Palety kolorów, spacing, radius, fontSize
        └── ThemeContext.tsx     # Kontekst motywu (dark/light, categoryColors)
```

---

## Architektura techniczna

### Stack

| Warstwa       | Technologia                                     |
| ------------- | ----------------------------------------------- |
| Framework     | React Native 0.81 + Expo 54                     |
| Język         | TypeScript 5.9                                  |
| Nawigacja     | React Navigation 6 (Bottom Tabs + Native Stack) |
| Persystencja  | AsyncStorage                                    |
| Animacje      | React Native Reanimated 4                       |
| Gesty         | React Native Gesture Handler                    |
| Media         | expo-image-picker + expo-file-system            |
| Haptyki       | expo-haptics                                    |
| Powiadomienia | expo-notifications                              |
| Ikony         | @expo/vector-icons (Ionicons)                   |

### Przepływ danych

```
AsyncStorage
    │
    ├── PlanContext       → activeDays, plans, activePlanId
    ├── ProgressContext   → completedByDate, completedToday, streak
    ├── ThemeContext      → isDark, colors, categoryColors
    └── LanguageContext   → language, t (translations)
                              │
                         Screens / Components
```

Wszystkie konteksty ładują dane z AsyncStorage przy starcie aplikacji i synchronizują zapis przy każdej mutacji. Brak zewnętrznego backendu — cała logika działa lokalnie na urządzeniu.

---

## Ekrany i nawigacja

### Zakładki (Bottom Tabs)

| Zakładka   | Ekran           | Opis                                                       |
| ---------- | --------------- | ---------------------------------------------------------- |
| Gym        | `TodayScreen`   | Dzienny widok ćwiczeń, nawigacja po tygodniach, ukończenia |
| Plan       | `PlanScreen`    | Aktywny plan tygodniowy z podziałem na dni                 |
| Biblioteka | `LibraryScreen` | Wszystkie ćwiczenia z filtrowaniem po kategorii            |
| Statystyki | `StatsScreen`   | Streak, liczniki, heatmapa, theme/język                    |

### Ekrany modalne (Stack)

| Route              | Ekran                    | Otwierany z             |
| ------------------ | ------------------------ | ----------------------- |
| `ExerciseDetail`   | `ExerciseDetailScreen`   | Kliknięcie ćwiczenia    |
| `ExerciseExpanded` | `ExerciseExpandedScreen` | Przycisk „Pełny opis"   |
| `PlanManager`      | `PlanManagerScreen`      | Przycisk „⚙ Plany"      |
| `PlanEditor`       | `PlanEditorScreen`       | „+ Nowy" lub „✎ Edytuj" |

### Parametry tras

```typescript
type RootStackParamList = {
  Tabs: undefined;
  ExerciseDetail: {
    exerciseId: string;
    dateStr?: string; // YYYY-MM-DD — jeśli otwierane z TodayScreen
    isViewOnly?: boolean; // Tryb podglądu dla przeszłych / przyszłych dni
  };
  ExerciseExpanded: { exerciseId: string };
  PlanManager: undefined;
  PlanEditor: { planId?: string }; // brak = nowy plan
};
```

---

## Model danych

### Ćwiczenie (`Exercise`)

```typescript
interface Exercise {
  id: string; // "01"–"11"
  emoji: string; // "💡"
  timeMin: number; // Minimalny czas (minuty)
  timeMax: number; // Maksymalny czas (minuty)
  category: "kreatywnosc" | "krytyczne" | "mindfulness";
}
```

Nazwy, opisy, prompty i wskazówki są przechowywane w plikach i18n, nie w obiekcie ćwiczenia, co umożliwia obsługę wielu języków.

### Plan tygodniowy (`WeekPlanSet`)

```typescript
interface DayPlan {
  exerciseIds: string[]; // np. ["01", "05", "09"]
}

interface WeekPlanSet {
  id: string; // "default" lub timestamp
  name: string; // Wyświetlana nazwa
  createdAt: string; // ISO 8601
  days: DayPlan[]; // Zawsze 7 elementów (Pon–Nd)
}
```

AsyncStorage keys:

- `plans:list` — JSON: `WeekPlanSet[]` (tylko plany użytkownika, bez domyślnego)
- `plans:active` — string: aktywny `id`

### Postępy

```typescript
// Klucz: "progress:YYYY-MM-DD:exerciseId", wartość: "1"
completedByDate: Record<string, Set<string>>;
// Przykład: { "2026-03-15": Set(["01", "05"]) }
```

### Notatka (`NoteEntry`)

```typescript
interface NoteEntry {
  id: string; // Timestamp jako string (unikalny klucz)
  text: string; // Treść notatki
  createdAt: string; // ISO 8601
  date?: string; // YYYY-MM-DD — dzień wykonania ćwiczenia
  imageUris?: string[]; // file:// URIs lokalnych zdjęć
}
```

AsyncStorage key: `notes:exerciseId` → `NoteEntry[]`  
Zdjęcia: `Documents/notes_images/{exerciseId}/{noteId}_{ts}.jpg`

---

## Internacjonalizacja

System i18n oparty o plik źródłowy `pl.ts` i jego angielski odpowiednik `en.ts`.

### Struktura tłumaczeń (`pl.ts`)

```
pl
├── days         — nazwy dni tygodnia, locale
├── nav          — etykiety zakładek
├── gym          — ekran Gym
├── stats        — ekran Statystyki
├── library      — ekran Biblioteka
├── plan         — ekran Plan
├── exercise     — ekran szczegółów ćwiczenia
├── expanded     — ekran rozszerzonego opisu
├── card         — karta ćwiczenia (ExerciseCard)
├── language     — przełącznik języka
├── categories   — nazwy kategorii
├── exercises    — { "01"…"11": { name, description, prompt, tip } }
├── planManager  — ekran zarządzania planami
├── planEditor   — ekran edytora planu
└── exercisesExtended — { "01"…"11": { longDescription, example, benefits[], pitfall } }
```

### Dodawanie języka

1. Utwórz `src/i18n/xx.ts` eksportujący `const xx: typeof pl = { … }`
2. Zarejestruj w `LanguageContext.tsx` w mapie `translations`
3. Dodaj opcję w `StatsScreen` (przełącznik języka)

### Interpolacja

```typescript
import { interpolate } from "../i18n/LanguageContext";

interpolate(t.planManager.activateMsg, { name: "Mój plan" });
// Zamienia {name} → "Mój plan"
```

---

## Motywy (Dark / Light)

`ThemeContext` dostarcza obiekt `colors: ColorScheme` i `categoryColors`.

```typescript
// Dostęp w każdym ekranie
const { colors, categoryColors, isDark, toggleTheme } = useTheme();
```

**Kolory kategorii:**

| Kategoria   | Kolor (Dark & Light)     |
| ----------- | ------------------------ |
| kreatywnosc | `#C47A2A` (pomarańczowy) |
| krytyczne   | `#4060C8` (niebieski)    |
| mindfulness | `#2D9060` (zielony)      |

Motyw jest zapisywany w AsyncStorage pod kluczem `app:theme`.

---

## Powiadomienia

`useNotifications` obsługuje poranne przypomnienia przez `expo-notifications`.

```typescript
const { requestPermission, scheduleReminder, cancelReminder } =
  useNotifications();

// Poproś o zgodę
await requestPermission();

// Ustaw codzienne przypomnienie o 8:00
await scheduleReminder(8, 0);

// Usuń przypomnienie
await cancelReminder();
```

Powiadomienie jest powtarzalne (daily trigger). Wymaga uprawnień od użytkownika.

---

## Dodawanie ćwiczeń

1. **`src/data/exercises.ts`** — dodaj obiekt do tablicy `EXERCISES`:

   ```typescript
   {
     id: "12",
     emoji: "🎯",
     timeMin: 5,
     timeMax: 10,
     category: "krytyczne",
   }
   ```

2. **`src/i18n/pl.ts`** — dodaj klucz `"12"` w sekcjach `exercises` i `exercisesExtended`:

   ```typescript
   exercises: {
     "12": { name: "…", description: "…", prompt: "…", tip: "…" }
   }
   exercisesExtended: {
     "12": { longDescription: "…", example: { setup, execution, result }, benefits: [], pitfall: "…" }
   }
   ```

3. **`src/i18n/en.ts`** — to samo po angielsku.

4. **`src/data/exercises_extended.ts`** — dodaj `"12"` do `EXTENDED_EXERCISE_IDS`.

5. Opcjonalnie dodaj ćwiczenie do domyślnego planu w `WEEK_PLAN` (w `exercises.ts`).

---

## Licencja

MIT
