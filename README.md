# Mental Gym 🧠

Poranne ćwiczenia umysłu — aplikacja mobilna (iOS + Android) zbudowana w Expo + React Native + TypeScript.

---

## Wymagania

- Node.js 18+
- npm lub yarn
- Aplikacja **Expo Go** na telefonie ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

---

## Uruchomienie (5 minut)

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom Expo dev server
npx expo start

# 3. Zeskanuj QR telefonem w Expo Go
```

Kod na żywo — zmiany widoczne natychmiast po zapisaniu pliku (Fast Refresh).

---

## Struktura projektu

```
MentalGym/
├── App.tsx                    # Entry point
├── app.json                   # Expo config (nazwa, ikona, bundle ID)
├── src/
│   ├── data/
│   │   └── exercises.ts       # Dane: ćwiczenia + plan tygodniowy
│   ├── theme/
│   │   └── index.ts           # Kolory, czcionki, spacing
│   ├── hooks/
│   │   ├── useProgress.ts     # AsyncStorage + timer
│   │   └── useNotifications.ts # Poranne przypomnienia
│   ├── components/
│   │   ├── ui.tsx             # Badge, Timer, ProgressRing itp.
│   │   └── ExerciseCard.tsx   # Karta ćwiczenia (rozwijana)
│   ├── screens/
│   │   ├── TodayScreen.tsx    # Dziś — 3 ćwiczenia dnia
│   │   ├── PlanScreen.tsx     # Plan tygodniowy
│   │   ├── LibraryScreen.tsx  # Wszystkie ćwiczenia z filtrem
│   │   └── ExerciseDetailScreen.tsx  # Szczegół + timer
│   └── navigation/
│       └── index.tsx          # Bottom tabs + Stack navigator
```

---

## Funkcje

- **Dziś** — 3 ćwiczenia dopasowane do dnia tygodnia, pasek postępu, oznaczanie ukończonych
- **Plan tygodniowy** — 7-dniowy harmonogram z kategoryzacją i szacowanym czasem
- **Biblioteka** — wszystkie 11 ćwiczeń, filtrowanie po kategorii
- **Szczegół ćwiczenia** — prompt startowy, wbudowany timer z pauzą i resetem
- **Postęp** — zapisywany lokalnie przez AsyncStorage
- **Haptyki** — delikatna wibracja przy oznaczaniu ukończonych

---

## Build produkcyjny (EAS)

```bash
# Instalacja EAS CLI
npm install -g eas-cli

# Logowanie do konta Expo
eas login

# Konfiguracja (jednorazowo)
eas build:configure

# Build dla Android (APK/AAB)
eas build --platform android

# Build dla iOS (IPA) — wymaga Apple Developer Account
eas build --platform ios
```

Buildy odbywają się w chmurze — nie potrzebujesz Maca do zbudowania wersji iOS.

---

## Kluczowe różnice vs React web

| Web | React Native |
|-----|-------------|
| `<div>` | `<View>` |
| `<p>`, `<span>` | `<Text>` |
| `<input>` | `<TextInput>` |
| CSS stylesheets | `StyleSheet.create({})` |
| `window.localStorage` | `AsyncStorage` |
| `react-router` | `React Navigation` |
| `onClick` | `onPress` |
| flexDirection: row (default) | flexDirection: column (default) |

---

## Rozszerzenia do dodania

- [ ] Powiadomienia push o poranku (hook `useNotifications.ts` gotowy)
- [ ] Pole notatek w ćwiczeniu (TextInput + AsyncStorage)
- [ ] Statystyki / streak
- [ ] Ciemny/jasny motyw
- [ ] Własne tematy do ćwiczeń (np. „10 pomysłów na...")
