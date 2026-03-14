import { useState } from "react";

type Category = "kreatywność" | "krytyczne myślenie" | "mindfulness";

interface Exercise {
  id: number;
  name: string;
  emoji: string;
  time: string;
  category: Category;
  color: string;
  description: string;
  prompt: string;
  tip: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    name: "10 pomysłów na...",
    emoji: "💡",
    time: "10 min",
    category: "kreatywność",
    color: "#F59E0B",
    description:
      "Wybierz temat i zapisz 10 pomysłów bez cenzury. Liczy się ilość, nie jakość.",
    prompt: `Dzisiejszy temat: „10 sposobów na ___". Pisz przez 10 minut. Nie oceniaj. Nie skreślaj.`,
    tip: "Pierwsze 5 pomysłów będą oczywiste. Złoto zaczyna się od 6.",
  },
  {
    id: 2,
    name: "A co jeśli?",
    emoji: "🌀",
    time: "5 min",
    category: "krytyczne myślenie",
    color: "#8B5CF6",
    description:
      "Zadaj sobie 3–5 pytań zaczynających się od 'A co jeśli...' i krótko odpowiedz.",
    prompt:
      "Wybierz coś ze swojego życia lub pracy. Zadaj pytania: A co jeśli zrobiłbym to odwrotnie? A co jeśli miałem rok, a nie tydzień?",
    tip: "Pytania zmieniają perspektywę szybciej niż odpowiedzi.",
  },
  {
    id: 3,
    name: "Zmiana perspektywy",
    emoji: "🔭",
    time: "5–8 min",
    category: "krytyczne myślenie",
    color: "#0EA5E9",
    description:
      "Weź problem lub sytuację i opisz ją z 3 różnych punktów widzenia.",
    prompt:
      "Opisz sytuację oczami: dziecka, eksperta w tej dziedzinie, kogoś z zewnątrz kto nic nie wie.",
    tip: "Każda perspektywa ujawnia coś, czego nie widzisz na co dzień.",
  },
  {
    id: 4,
    name: "30-sekundowe rozważania",
    emoji: "⏱️",
    time: "5 min",
    category: "mindfulness",
    color: "#10B981",
    description:
      "Wybierz 5–6 losowych tematów. Na każdy poświęć dokładnie 30 sekund głębokiej refleksji.",
    prompt:
      "Tematy: czas, cisza, pieniądze, strach, radość, granice. Ustaw timer. Myśl intensywnie przez 30 sekund o każdym.",
    tip: "Krótki czas wymusza skupienie i wyciąga nieoczekiwane intuicje.",
  },
  {
    id: 5,
    name: "Strumień świadomości",
    emoji: "🌊",
    time: "10–15 min",
    category: "mindfulness",
    color: "#06B6D4",
    description:
      "Pisz wszystko co przychodzi do głowy bez zatrzymywania się. Nie redaguj, nie myśl.",
    prompt:
      "Otwórz notatnik. Pisz przez 10 minut bez przerwy. Cokolwiek się pojawi – zdania, słowa, obrazy. Ręka się nie zatrzymuje.",
    tip: "To nie musi mieć sensu. Chodzi o opróżnienie głowy.",
  },
  {
    id: 6,
    name: "Solo burza mózgu",
    emoji: "⚡",
    time: "8 min",
    category: "kreatywność",
    color: "#F59E0B",
    description:
      "Ustaw timer i generuj pomysły na konkretny problem. Bez oceniania, bez hamulców.",
    prompt:
      "Wybierz jeden problem lub pytanie z Twojego życia. Generuj rozwiązania przez 8 minut. Każdy pomysł – choćby szalony – ma wartość.",
    tip: "Im głupszy pomysł, tym bliżej do przełomowego.",
  },
  {
    id: 7,
    name: "10 nietypowych zastosowań",
    emoji: "🔧",
    time: "5 min",
    category: "kreatywność",
    color: "#EC4899",
    description:
      "Wybierz losowy przedmiot i wymyśl 10 niestandardowych zastosowań.",
    prompt:
      "Dziś wybrany przedmiot: ___ (np. długopis, kubek, sznurek). Wymyśl 10 nieoczywistych zastosowań. Im bardziej abstrakcyjnie, tym lepiej.",
    tip: "To ćwiczenie buduje myślenie lateralne – widzenie poza oczywistą funkcją.",
  },
  {
    id: 8,
    name: "Łańcuchy skojarzeń",
    emoji: "🔗",
    time: "5 min",
    category: "kreatywność",
    color: "#F97316",
    description:
      "Zacznij od jednego słowa i twórz łańcuch wolnych skojarzeń przez 5 minut.",
    prompt:
      "Słowo startowe: ___ (np. 'okno'). Napisz skojarzenie, potem skojarzenie do skojarzenia, itd. Idź dokąd cię zaprowadzi.",
    tip: "Zaskakujące połączenia na końcu łańcucha to często najcenniejsze odkrycia.",
  },
  {
    id: 9,
    name: "Kwestionowanie rozwiązań",
    emoji: "❓",
    time: "8 min",
    category: "krytyczne myślenie",
    color: "#6366F1",
    description:
      "Weź jakieś gotowe rozwiązanie i zadaj mu serię trudnych pytań.",
    prompt:
      "Wybierz rozwiązanie, które stosujesz (w pracy, życiu). Zadaj: Czy to naprawdę rozwiązuje problem? Co by się stało gdybyś tego nie robił? Co ukryte zakładasz?",
    tip: "Najlepsze rozwiązania wytrzymują bezlitosne przesłuchanie.",
  },
  {
    id: 10,
    name: "Odwracanie założeń",
    emoji: "🔄",
    time: "5–8 min",
    category: "krytyczne myślenie",
    color: "#14B8A6",
    description: "Weź oczywiste założenie i odwróć je. Co by to oznaczało?",
    prompt:
      "Wybierz przekonanie: np. 'klienci chcą szybkiej obsługi'. Odwróć: 'klienci chcą powolnej obsługi' – kiedy to mogłoby być prawdą? Co to zmienia?",
    tip: "Odwrócenie założeń to metoda wielu przełomowych innowacji.",
  },
  {
    id: 11,
    name: "6 kapeluszy myślowych",
    emoji: "🎩",
    time: "15–20 min",
    category: "krytyczne myślenie",
    color: "#EF4444",
    description: "Przeanalizuj temat przez 6 różnych trybów myślenia de Bono.",
    prompt:
      "Temat: ___. Biały (fakty), Czerwony (emocje), Czarny (ryzyka), Żółty (korzyści), Zielony (kreatywność), Niebieski (proces). Po 2 min każdy.",
    tip: "Każdy kapelusz to inny mózg. Zakładaj tylko jeden naraz.",
  },
];

const weekPlan = [
  { day: "Pon", exercises: [1, 5, 9] },
  { day: "Wt", exercises: [2, 7, 4] },
  { day: "Śr", exercises: [3, 8, 6] },
  { day: "Czw", exercises: [10, 5, 1] },
  { day: "Pt", exercises: [11, 4, 2] },
  { day: "Sob", exercises: [6, 8, 3] },
  { day: "Nd", exercises: [7, 9, 10] },
];

const categoryColors: Record<Category, string> = {
  kreatywność: "#F59E0B",
  "krytyczne myślenie": "#6366F1",
  mindfulness: "#10B981",
};

const categoryLabels: Record<Category, string> = {
  kreatywność: "🎨 Kreatywność",
  "krytyczne myślenie": "🧠 Krytyczne myślenie",
  mindfulness: "🌿 Mindfulness",
};

export default function App() {
  const [view, setView] = useState("plan"); // plan | library | today
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null,
  );
  const [activeDay, setActiveDay] = useState(0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const todayExerciseIds = weekPlan[activeDay].exercises;
  const todayExercises = todayExerciseIds.map(
    (id) => exercises.find((e) => e.id === id)!,
  );

  const toggleComplete = (dayIdx: number, exId: number) => {
    const key = `${dayIdx}-${exId}`;
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedToday = todayExerciseIds.filter(
    (id) => completed[`${activeDay}-${id}`],
  ).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0F",
        color: "#E8E8F0",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        maxWidth: 680,
        margin: "0 auto",
        padding: "0 0 80px 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "32px 24px 20px",
          borderBottom: "1px solid #1E1E2E",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: "#6B6B8A",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Poranne Ćwiczenia Umysłu
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 400,
            margin: 0,
            color: "#E8E8F0",
            lineHeight: 1.2,
          }}
        >
          Mental Gym
        </h1>
        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          {["today", "plan", "library"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "6px 16px",
                borderRadius: 20,
                border: view === v ? "1px solid #6366F1" : "1px solid #2A2A3E",
                background: view === v ? "#6366F1" : "transparent",
                color: view === v ? "#fff" : "#9999B8",
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: 0.5,
              }}
            >
              {v === "today"
                ? "Dziś"
                : v === "plan"
                  ? "Tygodniowy plan"
                  : "Biblioteka"}
            </button>
          ))}
        </div>
      </div>

      {/* TODAY VIEW */}
      {view === "today" && (
        <div style={{ padding: "24px 24px 0" }}>
          {/* Day selector */}
          <div
            style={{
              display: "flex",
              gap: 6,
              marginBottom: 28,
              overflowX: "auto",
              paddingBottom: 4,
            }}
          >
            {weekPlan.map((d, i) => {
              const done = d.exercises.filter(
                (id) => completed[`${i}-${id}`],
              ).length;
              return (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  style={{
                    minWidth: 52,
                    padding: "8px 4px",
                    borderRadius: 10,
                    border:
                      activeDay === i
                        ? "1px solid #6366F1"
                        : "1px solid #2A2A3E",
                    background: activeDay === i ? "#1A1A2E" : "transparent",
                    color: activeDay === i ? "#A5B4FC" : "#6B6B8A",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{d.day}</div>
                  {done > 0 && (
                    <div
                      style={{ fontSize: 9, color: "#10B981", marginTop: 2 }}
                    >
                      {"●".repeat(done)}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Progress */}
          <div
            style={{
              background: "#12121E",
              borderRadius: 14,
              padding: "16px 20px",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #1E1E2E",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: "#6B6B8A",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Postęp dnia
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#E8E8F0",
                  marginTop: 2,
                }}
              >
                {completedToday}{" "}
                <span style={{ color: "#3E3E5A", fontSize: 16 }}>/ 3</span>
              </div>
            </div>
            <div style={{ position: "relative", width: 52, height: 52 }}>
              <svg
                width="52"
                height="52"
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle
                  cx="26"
                  cy="26"
                  r="20"
                  fill="none"
                  stroke="#1E1E2E"
                  strokeWidth="4"
                />
                <circle
                  cx="26"
                  cy="26"
                  r="20"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="4"
                  strokeDasharray={`${(completedToday / 3) * 125.6} 125.6`}
                  strokeLinecap="round"
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  color: "#A5B4FC",
                }}
              >
                {Math.round((completedToday / 3) * 100)}%
              </div>
            </div>
          </div>

          {/* Exercises for today */}
          {todayExercises.map((ex, i) => {
            const key = `${activeDay}-${ex.id}`;
            const done = completed[key];
            return (
              <div
                key={ex.id}
                style={{
                  background: done ? "#0D1A12" : "#12121E",
                  border: `1px solid ${done ? "#10B981" : "#1E1E2E"}`,
                  borderRadius: 16,
                  marginBottom: 14,
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                <div style={{ padding: "18px 20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${ex.color}18`,
                        border: `1px solid ${ex.color}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        flexShrink: 0,
                      }}
                    >
                      {ex.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            color: "#6B6B8A",
                            letterSpacing: 2,
                            textTransform: "uppercase",
                          }}
                        >
                          {i + 1}.
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: done ? "#6B6B8A" : "#E8E8F0",
                            textDecoration: done ? "line-through" : "none",
                          }}
                        >
                          {ex.name}
                        </span>
                      </div>
                      <div
                        style={{ fontSize: 12, color: "#6B6B8A", marginTop: 4 }}
                      >
                        ⏱ {ex.time} ·{" "}
                        <span style={{ color: categoryColors[ex.category] }}>
                          {ex.category}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#9999B8",
                          marginTop: 8,
                          lineHeight: 1.6,
                        }}
                      >
                        {ex.description}
                      </div>
                      <div
                        style={{
                          background: "#0A0A14",
                          borderRadius: 10,
                          padding: "12px 14px",
                          marginTop: 12,
                          borderLeft: `3px solid ${ex.color}`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 11,
                            color: ex.color,
                            letterSpacing: 2,
                            textTransform: "uppercase",
                            marginBottom: 6,
                          }}
                        >
                          Prompt
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#C8C8E0",
                            lineHeight: 1.7,
                          }}
                        >
                          {ex.prompt}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#6B6B8A",
                          marginTop: 10,
                          fontStyle: "italic",
                        }}
                      >
                        💬 {ex.tip}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleComplete(activeDay, ex.id)}
                    style={{
                      marginTop: 16,
                      width: "100%",
                      padding: "10px",
                      borderRadius: 10,
                      border: `1px solid ${done ? "#10B981" : "#2A2A3E"}`,
                      background: done ? "#10B98122" : "transparent",
                      color: done ? "#10B981" : "#6B6B8A",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: 13,
                      letterSpacing: 1,
                      transition: "all 0.2s",
                    }}
                  >
                    {done ? "✓ Ukończono" : "Oznacz jako ukończone"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* WEEKLY PLAN VIEW */}
      {view === "plan" && (
        <div style={{ padding: "24px 24px 0" }}>
          <div
            style={{
              fontSize: 13,
              color: "#6B6B8A",
              marginBottom: 20,
              lineHeight: 1.7,
            }}
          >
            Każdy dzień zawiera{" "}
            <strong style={{ color: "#A5B4FC" }}>3 ćwiczenia</strong> z różnych
            kategorii — kreatywność, krytyczne myślenie i mindfulness rotują, by
            trenować różne tryby umysłu.
          </div>
          {weekPlan.map((d, i) => {
            const exs = d.exercises.map(
              (id) => exercises.find((e) => e.id === id)!,
            );
            const totalMins = exs.reduce((acc, e) => {
              const m = parseInt(e.time);
              return acc + m;
            }, 0);
            return (
              <div
                key={i}
                style={{
                  background: "#12121E",
                  border: "1px solid #1E1E2E",
                  borderRadius: 14,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "#1A1A2E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#A5B4FC",
                      }}
                    >
                      {d.day}
                    </div>
                    <div>
                      {exs.map((e, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: 13,
                            color: "#9999B8",
                            marginRight: 8,
                          }}
                        >
                          {e.emoji} {e.name}
                          {j < 2 ? " ·" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 12, color: "#6B6B8A", flexShrink: 0 }}
                  >
                    ~{totalMins} min
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #1A1A2A",
                    padding: "10px 18px",
                    display: "flex",
                    gap: 8,
                  }}
                >
                  {exs.map((e) => (
                    <span
                      key={e.id}
                      style={{
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 20,
                        background: `${categoryColors[e.category]}18`,
                        color: categoryColors[e.category],
                        border: `1px solid ${categoryColors[e.category]}30`,
                        letterSpacing: 0.5,
                      }}
                    >
                      {e.category}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
          <div
            style={{
              background: "#12121E",
              borderRadius: 14,
              padding: "16px 18px",
              marginTop: 8,
              border: "1px solid #1E1E2E",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#6B6B8A",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Legenda kategorii
            </div>
            {Object.entries(categoryLabels).map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: categoryColors[k as Category],
                  }}
                />
                <span style={{ fontSize: 13, color: "#9999B8" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LIBRARY VIEW */}
      {view === "library" && (
        <div style={{ padding: "24px 24px 0" }}>
          {!selectedExercise ? (
            <>
              <div style={{ fontSize: 13, color: "#6B6B8A", marginBottom: 20 }}>
                Wszystkie 11 ćwiczeń. Kliknij, by zobaczyć szczegóły i prompt.
              </div>
              {exercises.map((ex) => (
                <div
                  key={ex.id}
                  onClick={() => setSelectedExercise(ex)}
                  style={{
                    background: "#12121E",
                    border: "1px solid #1E1E2E",
                    borderRadius: 14,
                    padding: "16px 18px",
                    marginBottom: 10,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${ex.color}18`,
                      border: `1px solid ${ex.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {ex.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, color: "#E8E8F0" }}>
                      {ex.name}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#6B6B8A", marginTop: 3 }}
                    >
                      ⏱ {ex.time} ·{" "}
                      <span style={{ color: categoryColors[ex.category] }}>
                        {ex.category}
                      </span>
                    </div>
                  </div>
                  <div style={{ color: "#3E3E5A", fontSize: 18 }}>›</div>
                </div>
              ))}
            </>
          ) : (
            <div>
              <button
                onClick={() => setSelectedExercise(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#6366F1",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 14,
                  marginBottom: 20,
                  padding: 0,
                }}
              >
                ← Wróć do biblioteki
              </button>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: `${selectedExercise.color}18`,
                  border: `1px solid ${selectedExercise.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  marginBottom: 16,
                }}
              >
                {selectedExercise.emoji}
              </div>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  margin: "0 0 8px",
                  color: "#E8E8F0",
                }}
              >
                {selectedExercise.name}
              </h2>
              <div style={{ fontSize: 13, color: "#6B6B8A", marginBottom: 20 }}>
                ⏱ {selectedExercise.time} ·{" "}
                <span
                  style={{ color: categoryColors[selectedExercise.category] }}
                >
                  {selectedExercise.category}
                </span>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "#9999B8",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                {selectedExercise.description}
              </p>
              <div
                style={{
                  background: "#0A0A14",
                  borderRadius: 12,
                  padding: "16px 18px",
                  marginBottom: 16,
                  borderLeft: `3px solid ${selectedExercise.color}`,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: selectedExercise.color,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Prompt startowy
                </div>
                <div
                  style={{ fontSize: 14, color: "#C8C8E0", lineHeight: 1.8 }}
                >
                  {selectedExercise.prompt}
                </div>
              </div>
              <div
                style={{
                  background: "#12121E",
                  borderRadius: 12,
                  padding: "14px 16px",
                  border: "1px solid #1E1E2E",
                  fontSize: 13,
                  color: "#9999B8",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                💬 {selectedExercise.tip}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bottom nav hint */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 680,
          background: "#0A0A0F",
          borderTop: "1px solid #1E1E2E",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {["today", "plan", "library"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={{
              background: "transparent",
              border: "none",
              color: view === v ? "#A5B4FC" : "#6B6B8A",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 12,
              letterSpacing: 1,
              textTransform: "uppercase",
              padding: "4px 12px",
            }}
          >
            {v === "today"
              ? "📅 Dziś"
              : v === "plan"
                ? "📋 Plan"
                : "📚 Biblioteka"}
          </button>
        ))}
      </div>
    </div>
  );
}
