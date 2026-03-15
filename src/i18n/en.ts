// src/i18n/en.ts
import type { pl } from "./pl";

export const en: typeof pl = {
  days: {
    short: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    locale: "en-US",
  },
  nav: {
    gym: "Gym",
    plan: "Plan",
    library: "Library",
    stats: "Stats",
  },
  gym: {
    title: "Gym",
    currentWeek: "Current week",
    exerciseProgress: "{done} / {total} exercises",
    allDone: "All exercises completed!",
    viewOnly: "👁 View mode — exercises can only be completed today",
  },
  stats: {
    title: "Statistics",
    streakOne: "day in a row",
    streakMany: "days in a row",
    completed: "Completed tasks",
    today: "Today",
    thisWeek: "This week",
    week: "Week",
    total: "All time total",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
  },
  library: {
    title: "Library",
    count: "{count} exercises",
    filterAll: "All",
    filterCreativity: "Creativity",
    filterCritical: "Critical",
    filterMindfulness: "Mindfulness",
  },
  plan: {
    title: "Weekly plan",
    manage: "⚙ Plans",
    activeLabel: "Active: ",
    edit: "✎ Edit",
    intro:
      "Each day combines 3 exercises from different categories. The rotation ensures training of creativity, critical thinking, and mindfulness.",
    categoryCreativity: "Creativity",
    categoryCritical: "Critical thinking",
    categoryMindfulness: "Mindfulness",
    today: "TODAY",
    defaultPlan: "Default plan",
  },
  exercise: {
    back: "‹ Back",
    timer: "Timer",
    timerDone: "✓ Done!",
    start: "Start",
    pause: "Pause",
    restart: "Restart",
    reset: "Reset",
    minLabel: "{min} min",
    promptSection: "Starting prompt",
    tipSection: "Tip",
    notesDay: "Notes from this day",
    notesAll: "Note history",
    notesPlaceholder: "Write your thoughts after the exercise…",
    notesSave: "Save note",
    notesEmptyDay: "No notes for this day — add one after the exercise 📝",
    notesEmpty: "No notes — add one after the exercise 📝",
    deleteNoteTitle: "Delete note",
    deleteNoteMsg: "Are you sure you want to delete this note?",
    deletePhotoTitle: "Delete photo",
    deletePhotoMsg: "Delete this photo?",
    photoCamera: "📷 Camera",
    photoGallery: "🖼 Gallery",
    permDenied: "Permission denied",
    permCamera: "Allow camera access in settings.",
    permGallery: "Allow gallery access in settings.",
    cancel: "Cancel",
    delete: "Delete",
  },
  card: {
    quickNote: "Quick note",
    notePlaceholder: "Write a thought…",
    prompt: "Prompt",
    noteCount: {
      one: "{count} note",
      few: "{count} notes",
      many: "{count} notes",
    },
    noteDetails: "— available in details",
    done: "✓ Completed",
    tapToComplete: "Tap to complete →",
  },
  language: {
    switchTo: "Polski",
    label: "Language",
  },
  planManager: {
    back: "‹ Back",
    title: "Training plans",
    newPlan: "+ New",
    built: "Built-in",
    active: "ACTIVE",
    activate: "Activate",
    duplicate: "Duplicate",
    edit: "Edit",
    delete: "Delete",
    activateTitle: "Change active plan",
    activateMsg:
      "Are you sure you want to activate the plan \"{name}\"?\n\nThe new plan will take effect immediately.",
    deleteTitle: "Delete plan",
    deleteMsg:
      "Are you sure you want to delete the plan \"{name}\"?\n\nThis action cannot be undone.",
    cancel: "Cancel",
  },
  planEditor: {
    cancelNav: "‹ Cancel",
    editTitle: "Edit plan",
    newTitle: "New plan",
    save: "Save",
    namePlaceholder: "Plan name…",
    noNameTitle: "No name",
    noNameMsg: "Please enter a plan name.",
    emptyDayTitle: "Empty day",
    emptyDayMsg: "Every day must have at least one exercise.",
    selected: "SELECTED",
    available: "AVAILABLE — TAP TO ADD",
    exerciseCount: "{count} / 5 exercises",
    limitNote: "Reached the limit of 5 exercises for this day.",
    daysFull: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    daysShort: ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  },
  categories: {
    kreatywnosc: "Creativity",
    krytyczne: "Critical thinking",
    mindfulness: "Mindfulness",
  },
  exercises: {
    "01": {
      name: "10 ideas for...",
      description:
        "Choose a topic and write 10 ideas without censorship. Quantity matters, not quality.",
      prompt:
        'Choose a topic: "10 ways to ___". Write without stopping. Don\'t judge, don\'t cross anything out. The first 5 will be obvious — gold starts at number six.',
      tip: "The first 5 ideas will always be obvious. Gold starts at number 6.",
    },
    "02": {
      name: "What if?",
      description:
        "Ask yourself 3–5 questions starting with \"What if...\" and answer briefly.",
      prompt:
        "Choose a situation from life or work. Ask: What if I do this in reverse? What if I have a year instead of a week? What if I don't do it at all?",
      tip: "Questions change perspective faster than answers.",
    },
    "03": {
      name: "Change of perspective",
      description:
        "Take a problem or situation and describe it from 3 different points of view.",
      prompt:
        "Describe the same situation through the eyes of: (1) a child, (2) an expert in that field, (3) someone from outside who knows nothing. What will each notice differently?",
      tip: "Every perspective reveals something you don't see every day.",
    },
    "04": {
      name: "30-sec. reflections",
      description:
        "Choose 5–6 topics. Devote exactly 30 seconds of deep reflection to each.",
      prompt:
        "Topics: time / silence / fear / joy / boundaries / change. Set a timer. Think intensely for 30 seconds on each. Write down what comes up.",
      tip: "Short time forces focus and draws out unexpected intuitions.",
    },
    "05": {
      name: "Stream of consciousness",
      description:
        "Write everything that comes to mind without stopping. Don't edit.",
      prompt:
        "Open a notebook. Write for 10 minutes without stopping — sentences, words, fragments of thought. The hand doesn't stop. It doesn't have to make sense.",
      tip: "It doesn't have to make sense. It's about emptying your head.",
    },
    "06": {
      name: "Solo brainstorm",
      description:
        "Set a timer and generate ideas for a specific problem. No judging.",
      prompt:
        "Choose one problem or question from your life. Generate solutions for 8 minutes. Every idea — even a crazy one — goes on paper.",
      tip: "The dumber the idea, the closer to a breakthrough.",
    },
    "07": {
      name: "10 unusual uses",
      description:
        "Choose a random object and come up with 10 non-standard uses.",
      prompt:
        "Today's chosen object: _______. Come up with 10 non-obvious uses. The more abstract, the better.",
      tip: "The exercise builds lateral thinking — seeing beyond the obvious function.",
    },
    "08": {
      name: "Chains of associations",
      description:
        "Start with one word and create a chain of free associations for 5 minutes.",
      prompt:
        "Starting word: _______. Write an association, then an association to the association. Go where it takes you. Don't control the direction.",
      tip: "Surprising connections at the end of the chain are the most valuable discoveries.",
    },
    "09": {
      name: "Questioning solutions",
      description:
        "Take a ready-made solution and ask it a series of tough questions.",
      prompt:
        "Choose a solution you use. Ask: Does it really solve the problem? What would happen if I didn't do it? What am I assuming without checking?",
      tip: "The best solutions withstand ruthless interrogation.",
    },
    "10": {
      name: "Reversing assumptions",
      description:
        "Take an obvious assumption and reverse it. What would it mean?",
      prompt:
        "Choose a belief, e.g. \"customers want fast service\". Reverse it: \"customers want slow service\" — when could that be true?",
      tip: "Reversing assumptions is the method behind many breakthrough innovations.",
    },
    "11": {
      name: "6 thinking hats",
      description:
        "Analyze a topic through 6 different de Bono thinking modes.",
      prompt:
        "Topic: _______.\n\n🤍 White – facts\n❤️ Red – emotions\n🖤 Black – risks\n💛 Yellow – benefits\n💚 Green – creativity\n💙 Blue – process\n\n2 minutes for each hat.",
      tip: "Wear only one hat at a time. Each one is a different brain.",
    },
  },
};
