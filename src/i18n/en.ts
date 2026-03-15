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
    notesPlaceholder: "Write your thoughts…",
    notesSave: "Save note",
    notesEmptyDay: "No notes for this day — add one 📝",
    notesEmpty: "No notes — add one 📝",
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
    readMore: "Full description & examples",
    checkDone: "✓ Completed",
    checkMark: "Mark as completed",
  },
  expanded: {
    longDesc: "Detailed description",
    example: "Example in practice",
    exampleSetup: "Context",
    exampleExecution: "Execution",
    exampleResult: "Result",
    benefits: "Effect on the mind",
    pitfall: "Common pitfall",
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
      'Are you sure you want to activate the plan "{name}"?\n\nThe new plan will take effect immediately.',
    deleteTitle: "Delete plan",
    deleteMsg:
      'Are you sure you want to delete the plan "{name}"?\n\nThis action cannot be undone.',
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
        "Choose a topic: \"10 ways to ___\". Write without stopping. Don't judge, don't cross anything out. The first 5 will be obvious — gold starts at number six.",
      tip: "The first 5 ideas will always be obvious. Gold starts at number 6.",
    },
    "02": {
      name: "What if?",
      description:
        'Ask yourself 3–5 questions starting with "What if..." and answer briefly.',
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
        'Choose a belief, e.g. "customers want fast service". Reverse it: "customers want slow service" — when could that be true?',
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
  exercisesExtended: {
    "01": {
      longDescription:
        "The technique originates from James Altucher's approach of generating 10 ideas daily as 'brain gymnastics'. The goal is to build a habit of generative thinking — treating the mind like a muscle requiring regular repetition. The first 5 ideas are always the obvious, 'safe' ones. Only from the 6th onwards does the brain reach into unknown territory. That's precisely in this discomfort zone where interesting connections emerge.",
      example: {
        setup:
          "Monday morning. Topic: '10 ways to improve team communication'.",
        execution:
          "1. Daily 15-minute stand-ups\n2. Anonymous feedback box\n3. Rotating meeting facilitators\n4. No-meeting Friday\n5. Weekly team lunch\n6. Random 1:1 short-chat pairs\n7. 'What I don't know' board — publicly admitting knowledge gaps\n8. Daily mood emoji in Slack\n9. '3-sentence retrospective' after each project\n10. Internal library — sharing books with personal notes",
        result:
          "Ideas 1–5 are standard practices from any management course. Idea 7 ('what I don't know board') emerged feeling slightly uncomfortable — and that's exactly the one that turned out most interesting to develop further.",
      },
      benefits: [
        {
          label: "Generative thinking",
          description:
            "Regular training increases thinking fluency — the ability to quickly produce a large number of ideas without the 'inner critic' blocking you.",
        },
        {
          label: "Breaking patterns",
          description:
            "Forcing yourself to reach idea 10 pushes the brain beyond obvious solutions and into unexpected associations.",
        },
        {
          label: "Tolerance for uncertainty",
          description:
            "Writing 'stupid' ideas without judgment trains comfort with imperfection — a crucial skill in creative and innovative processes.",
        },
        {
          label: "Generation habit",
          description:
            "After a few weeks of practice, you'll notice that during the day you spontaneously start generating alternatives and options where you previously stopped at the first idea.",
        },
      ],
      pitfall:
        "The biggest trap is stopping and evaluating each idea as you go. Write everything — selection happens after the exercise is done, never during.",
    },
    "02": {
      longDescription:
        "'What if?' is one of the most powerful tools in design thinking and philosophy. It allows temporarily suspending reality's constraints and exploring alternative scenarios. Used by screenwriters, architects, business strategists, and philosophers. The key is asking questions that challenge assumptions — not just modifying details.",
      example: {
        setup: "Working on a new product — a language learning app.",
        execution:
          "What if learning happened in just 60 seconds a day?\n→ It would force ultra-prioritization: what absolutely MUST fit in those 60 seconds? It creates an entirely different model.\n\nWhat if there were no grammar exercises at all?\n→ Learning through context and repetition. Like children. Maybe faster?\n\nWhat if the user was the teacher, not the student?\n→ Teaching others is the fastest way to learn. A peer-to-peer model.\n\nWhat if the app were intentionally boring?\n→ Paradox: it might filter out 'gamification addicts', leaving only truly motivated people.",
        result:
          "The third question ('user as teacher') opened a completely new product direction that wasn't in the original spec. The whole exercise took 8 minutes.",
      },
      benefits: [
        {
          label: "Questioning assumptions",
          description:
            "Every situation rests on hidden assumptions we treat as facts. 'What if?' reveals them and lets you consciously decide which ones are worth keeping.",
        },
        {
          label: "Scenario thinking",
          description:
            "Regular practice builds the ability to quickly model alternative futures — useful in planning, risk management, and decision-making.",
        },
        {
          label: "Innovation",
          description:
            "Most breakthrough innovations began with 'What if?'. The exercise builds the habit of seeking unexpected angles instead of optimizing the existing.",
        },
      ],
      pitfall:
        "Avoid questions that are only variations of the status quo ('What if we did this slightly faster?'). Seek questions that overturn the system's logic.",
    },
    "03": {
      longDescription:
        "A technique based on the concept of 'reframing' from cognitive psychology and solution-focused therapy. Each of us views reality through the filter of our own experiences, role, and knowledge. Consciously adopting another perspective activates cognitive empathy and reveals dimensions invisible from the default position. In negotiations, conflict management, and product design, this is one of the most valuable skills.",
      example: {
        setup:
          "Situation: a company wants to implement a mandatory time-tracking system.",
        execution:
          "Perspective 1 — new employee without context:\n'I don't see why, if tasks are completed on time. I feel controlled, like I'm not trusted.'\n\nPerspective 2 — company CFO:\n'Without time data I can't price projects, identify bottlenecks, or plan hiring. This is a management tool, not surveillance.'\n\nPerspective 3 — project manager:\n'It's double work for me: I have to remember to log time while my team is unhappy, which falls back on me.'",
        result:
          "Three perspectives revealed that the problem isn't the tool, but communication of its purpose. The CFO sees data, the employee sees control. Solution: transparency about the why, plus employees' access to their own statistics.",
      },
      benefits: [
        {
          label: "Cognitive empathy",
          description:
            "The ability to understand other people's way of thinking and feeling — regardless of whether we agree with them. The foundation of effective communication and leadership.",
        },
        {
          label: "Reducing blind spots",
          description:
            "Each perspective reveals aspects of a situation invisible from our default point of view. Regular practice reduces the risk of making decisions based on an incomplete picture.",
        },
        {
          label: "Conflict resolution",
          description:
            "Most conflicts stem not from actual conflicting interests, but from different perspectives on the same situation. Articulating them is the first step to resolution.",
        },
      ],
      pitfall:
        "The trap is describing other perspectives in your own words and values. True perspective shift requires entering that person's logic — even if you disagree with them.",
    },
    "04": {
      longDescription:
        "An exercise inspired by contemplative practices and mindfulness techniques. A short, precisely limited time forces concentration — the brain can't 'warm up' for the first 3 minutes. The effect is similar to the Japanese haiku technique: constraining the form unleashes depth of content. 30 seconds is long enough to touch the essence of a topic and short enough to avoid falling into a rumination loop.",
      example: {
        setup:
          "Tuesday morning, 7:15. Topics: time, silence, boundaries, gratitude, change.",
        execution:
          "TIME (30 sec): 'I always feel there's not enough in the morning. In the evening I regret how it passed. As if I lived in constant deficit of something I can never hold.'\n\nSILENCE (30 sec): 'When was the last time I sat in silence without my phone? I don't remember. That itself is unsettling.'\n\nBOUNDARIES (30 sec): 'I say yes too often. I see it clearly now. Boundaries are respect for your own time, not selfishness.'\n\nGRATITUDE (30 sec): 'Coffee. Health. Having someone to share my thoughts with. Small things.'\n\nCHANGE (30 sec): 'I'm afraid of it and want it at the same time. A paradox that never goes away.'",
        result:
          "The observation about silence ('I don't remember') became the starting point for a week-long experiment with 10 minutes of silence after waking.",
      },
      benefits: [
        {
          label: "Attention focus",
          description:
            "Training to maintain full attention on one object for a short, precise time. Directly translates to the ability to concentrate in daily work.",
        },
        {
          label: "Self-awareness",
          description:
            "Regular brief reflections build insight into your own values, beliefs, and emotions. Over time you start recognizing your thought patterns before they act automatically.",
        },
        {
          label: "Reducing rumination",
          description:
            "The 30-second limit teaches 'closing' a topic and moving on — instead of circling the same problem for hours.",
        },
      ],
      pitfall:
        "Don't extend the time when you 'get into' a topic. The 30-second boundary is fundamental — crossing it destroys the attention discipline effect.",
    },
    "05": {
      longDescription:
        "A technique known as 'morning pages' — popularized by Julia Cameron in 'The Artist's Way' (1992). The goal is not to create valuable text, but to empty the mind of mental noise: everyday worries, endless task lists, unrecognized emotions. Neuropsychologically, handwriting engages more brain areas than typing and slows the stream of thoughts to an observable pace. The therapeutic effect was documented by psychologist James Pennebaker in his research on 'expressive writing'.",
      example: {
        setup: "Wednesday, 6:50 am. Nothing in particular is happening.",
        execution:
          "'The tea went cold again. I have to call Mark today but I don't know what to say after last week's meeting. Maybe just text him. Writing feels safer. Why? It gives time to think. I don't have enough time to think lately. Everything is fast. This project is moving too fast or I'm too slow. Maybe too slow. I like slow. I like mornings when no one is messaging yet. The window has been dirty for a while. I should clean it. Or maybe I shouldn't — who is this \"should\"? Grandma always said that clean windows...'",
        result:
          "After 12 minutes three things surfaced: anxiety around the call with Mark (previously unconscious), the belief 'I'm moving too slow' (worth investigating), and an unexpected memory of grandma (pleasant). All three were 'hidden' beneath everyday noise.",
      },
      benefits: [
        {
          label: "Clearing the mind",
          description:
            "Putting thoughts on paper frees up working memory resources. After the exercise most people report a sense of 'lightness' and greater mental clarity for the rest of the day.",
        },
        {
          label: "Accessing the subconscious",
          description:
            "Continuous uncensored writing lets you bypass the 'gatekeeper' — the inner critic — and reach thoughts and emotions that normally don't surface to consciousness.",
        },
        {
          label: "Emotional processing",
          description:
            "Pennebaker's research shows that regular expressive writing lowers cortisol levels, improves immunity, and reduces symptoms of post-traumatic stress.",
        },
        {
          label: "Creativity",
          description:
            "Clearing everyday 'noise' from the mind creates space for new connections and ideas. Many people report their best ideas come right after morning pages.",
        },
      ],
      pitfall:
        "The perfectionist trap: 'I have nothing to write about'. If you think that, write literally: 'I have nothing to write about, because... and that's interesting because...'",
    },
    "06": {
      longDescription:
        "Classic brainstorming transferred to an individual format. Research shows that in many contexts solo brainstorming is more productive than group — no social pressure, peer evaluation, or groupthink. Key rules: quantity over quality, no criticism during the session, wild ideas are welcome, build on your own ideas. The time is deliberately short and intense — creating a state of mild stress that mobilizes divergent thinking.",
      example: {
        setup: "Problem: 'How do we encourage app users to return every day?'",
        execution:
          "1. Push notifications with quotes\n2. Streak — consecutive days\n3. 7-day challenges\n4. Points and badges\n5. Competition with friends\n6. Personalized daily recommendations\n7. 'Secret exercise' unlocked after 5 days\n8. Ability to send an exercise to a friend\n9. Weekly progress report by email\n10. Thought history — reading your own old notes\n11. AI daily question\n12. Community — anonymous thought sharing\n13. Calendar integration as 'meeting with yourself'\n14. Offline mode — no internet needed\n15. Kids version — age-appropriate exercises",
        result:
          "Idea 10 ('thought history') turned out most original and potentially the strongest motivator. In 8 minutes, 15 ideas emerged — far more than from unconstrained 'thinking about the problem'.",
      },
      benefits: [
        {
          label: "Divergent thinking",
          description:
            "The ability to generate many diverse solutions from a single starting point. The direct opposite of convergent 'search for the one right answer'.",
        },
        {
          label: "Breaking creative blocks",
          description:
            "Time pressure and the 'everything is OK' rule eliminate the main sources of blockage: perfectionism and fear of judgment. Regular practice reduces these blocks permanently.",
        },
        {
          label: "Idea bank",
          description:
            "After a few weeks you'll build a bank of ideas — even if none are implemented today, one could be exactly what you needed tomorrow.",
        },
      ],
      pitfall:
        "Evaluating ideas while generating is the most common mistake. 'That makes no sense' and 'that already exists' are thoughts that destroy brainstorming. Selection — only after.",
    },
    "07": {
      longDescription:
        "An exercise based on the 'Alternative Uses Task' (Guilford, 1967) — one of the classic tools for measuring creativity and divergent thinking. Originally used in psychology to study 'fluency', 'flexibility' and 'originality' of thinking. Brick, paperclip, newspaper — typical test objects. The ability to see objects beyond their primary function is directly linked to innovation and the ability to solve problems in unconventional ways.",
      example: {
        setup: "Selected object: a plain eraser.",
        execution:
          "1. Non-slip pad under a laptop\n2. Page marker in a book\n3. Finger pressure massager for writers\n4. Stamp material (carving a pattern)\n5. Cork for a small bottle\n6. Paperweight for a light sheet on a windy day\n7. Sculpture — material for modeling small forms\n8. Baby rattle (inside a box)\n9. Finger strength exercise — squeezing for 60 seconds\n10. Color reference material for teaching colors (white, pink, blue)",
        result:
          "Points 4 and 7 required a conceptual leap — the eraser as material, not a tool. That kind of category shift is the most valuable: it reveals that the 'function' of an object is a social convention, not a physical property.",
      },
      benefits: [
        {
          label: "Lateral thinking",
          description:
            "The ability to approach a problem from a completely different direction from the obvious. Formalized by Edward de Bono as an alternative to logical step-by-step thinking.",
        },
        {
          label: "Function deconstruction",
          description:
            "Regular practice weakens 'functional fixedness' — the neurological tendency to see objects only through the lens of their original function.",
        },
        {
          label: "Analogy transfer",
          description:
            "The ability to carry solutions from one domain to another. Many innovations are simply 'applying something from world X in world Y'.",
        },
      ],
      pitfall:
        "Choosing objects that are too 'interesting'. The power of the exercise lies in mundane objects. The more boring the object, the harder — and the better the training.",
    },
    "08": {
      longDescription:
        "A technique rooted in psychoanalysis (Freud's free associations) and used today in cognitive therapy, creative coaching, and mind mapping. Unlike a mind map — where associations return to the center — the chain is linear and directional. Each subsequent word is associated with the previous one, not the starting topic. This leads to places consciousness would never choose — and that's often where unexpected connections and ideas hide.",
      example: {
        setup: "Starting word: 'bridge'.",
        execution:
          "bridge → water → thirst → lack → shortage → poverty → dignity → respect → boundaries → wall → Berlin → history → memory → photos → grandma → warmth → kitchen → smell → bread → work → hands → palms → writing → letter → waiting → hope → spring → change → fear → leap → bridge",
        result:
          "The chain returned to 'bridge' after 28 hops, which is rare and meaningful. More important: the unexpected connections 'poverty → dignity' and 'waiting → hope' — two pairs that could each become the topic of an essay or project. Neither was planned.",
      },
      benefits: [
        {
          label: "Discovering subconscious connections",
          description:
            "The brain stores a vast network of associations built over a lifetime. Association chains access these connections, bypassing conscious censorship and habitual patterns.",
        },
        {
          label: "Creative warm-up",
          description:
            "One of the most effective exercises before creative work — writing, designing, composing. Activates the brain's default mode network, responsible for creativity.",
        },
        {
          label: "Reducing mental blocks",
          description:
            "Fast pace without analysis makes it impossible to stop at the 'right' association. Trains letting thoughts pass rather than latching onto one and analyzing it to exhaustion.",
        },
      ],
      pitfall:
        "Trying to create a 'pretty' or 'logical' chain. It should be chaotic. Phonetic, visual, emotional associations — all are equally valuable.",
    },
    "09": {
      longDescription:
        "A technique inspired by the Socratic method and the 'Five Whys' approach (Toyota Production System). Most solutions we apply — at work and in life — have never undergone rigorous questioning. We accept them as given because 'that's how it's always been' or 'it's obvious'. Regularly questioning your own solutions isn't pessimism but intellectual hygiene — like checking if you locked the door. Philosophically close to the 'via negativa' stance: understand something by eliminating what it is not.",
      example: {
        setup: "Solution under examination: 'Daily team meeting at 9:00 am'.",
        execution:
          "Does it actually solve the problem?\n'The problem was supposed to be: lack of synchronization. But does synchronization really require a daily meeting? Maybe the problem was something else.'\n\nWhat am I assuming without checking?\n'I assume everyone needs to know everything. I assume 9:00 is a good time for everyone. I assume talking is better than writing.'\n\nWhat would happen if I stopped doing this?\n'A 2-week trial: async update in Notion by 10:00. Meeting only when there's an actual conflict or decision.'\n\nWhy have we been doing this for 2 years without asking?\n'Because no one ever asked. It came from a previous manager. Nobody remembers why.'",
        result:
          "The async update experiment showed that 3 of 5 days a week the meeting was unnecessary. Saved time: 45 min/day × 5 people = 3.75 hours of reclaimed work per week.",
      },
      benefits: [
        {
          label: "First-principles thinking",
          description:
            "Elon Musk popularizes 'first principles thinking' — breaking a problem down to its foundations instead of analogies and precedents. Questioning solutions exercises exactly that muscle.",
        },
        {
          label: "Eliminating zombie processes",
          description:
            "In every organization and personal life, solutions exist that long ago stopped solving the problem but 'have always been this way'. Regular audits surface them.",
        },
        {
          label: "Metacognition",
          description:
            "The ability to observe your own thinking from the outside. 'Why do I think this is the only solution?' is a higher-order question that changes the quality of all decisions.",
        },
      ],
      pitfall:
        "Questioning leading to decision paralysis. The goal isn't to tear everything down, but to consciously confirm or modify. Always end with a decision, not a suspension.",
    },
    "10": {
      longDescription:
        "The 'reverse brainstorming' or 'assumption reversal' technique — used in design thinking, innovation, and philosophy. The method involves taking a fundamental assumption and flipping it to its opposite, then seriously entertaining the reversal. An apparently absurd reversal often reveals hidden mechanisms or opens new solution spaces. Famous example: instead of 'how do we make customers buy more?' → 'how do we make customers buy less?' (which led Patagonia to the 'Don't Buy This Jacket' campaign).",
      example: {
        setup:
          "Assumption to reverse: 'Good onboarding should be as short and simple as possible'.",
        execution:
          "Reversal: 'Good onboarding should be long and complicated.'\n\nWhen could this be true?\n'When length and difficulty filter out unmotivated users. Duolingo intentionally creates long paths, because time investment builds engagement. LinkedIn onboarding takes an hour — but those who complete it are 5× more active.'\n\nWhat does this change in our product?\n'Maybe our retention problem doesn't come from onboarding being too long, but too short — users don't invest enough to feel engaged.'",
        result:
          "Hypothesis: add an optional 'deep onboarding' (15 minutes instead of 3) and measure 30-day retention. The reversal changed the entire conversation about the problem.",
      },
      benefits: [
        {
          label: "Revealing hidden assumptions",
          description:
            "Reversal is like shining a flashlight from a different angle — what was always in shadow suddenly becomes visible. Often the 'obvious' assumption turns out to be an arbitrary convention.",
        },
        {
          label: "Innovation through paradox",
          description:
            "Many breakthrough products and strategies were born from inverting industry dogma. Airbnb ('you don't need to own hotels'), Spotify ('you don't need to own music'), Uber ('taxis without taxis').",
        },
        {
          label: "Cognitive flexibility",
          description:
            "The ability to hold two contradictory ideas simultaneously and explore both without immediate judgment. A key characteristic of strategic thinking.",
        },
      ],
      pitfall:
        "Dismissing reversals too quickly as 'absurd'. Absurdity is a signal that you've touched a deep assumption — worth examining precisely because it seems obvious.",
    },
    "11": {
      longDescription:
        "A method created by Dr. Edward de Bono in 1985, described in his book 'Six Thinking Hats'. Used by Fortune 500 companies, governments, and schools worldwide. The core idea: instead of mixing facts, emotions, criticism, and optimism in one discussion — separate them into 6 'hats'. Each hat is a distinct mode of thinking adopted by all participants simultaneously. In the solo version: each hat is a separate perspective through which you view the same topic sequentially. The result: a fuller, less biased picture of the situation.",
      example: {
        setup: "Decision: 'Should I leave employment and go freelance?'",
        execution:
          "White (facts): 'I earn X, freelance I could earn X×1.5 but without stability. 30% of my current job is work I don't enjoy. The freelance market in my field is growing 12% year-on-year.'\n\nRed (emotions): 'I'm scared. I'm excited. I feel trapped in employment. I'd worry about money every month. I miss the freedom to choose projects.'\n\nBlack (risks): 'No insurance. Irregular income for the first 6 months. Social isolation. Need to sell myself. Risk of gaps between projects.'\n\nYellow (benefits): 'Choice of projects. Higher earning potential. Flexible schedule. Building personal brand. Working across industries = broader development.'\n\nGreen (new ideas): 'What if I start freelance while keeping my job for 6 months? Or negotiate a B2B arrangement with my current employer? Or build passive products instead of services?'\n\nBlue (conclusions): 'The main question isn't employment/freelance, but: what do I want to do professionally? Decision within 3 months, after landing 2 trial freelance clients.'",
        result:
          "The Red hat revealed a contradiction: fear AND excitement simultaneously. The Green hat opened a third option (B2B with the current employer) that nobody had considered. The Blue hat delivered a concrete, testable action plan.",
      },
      benefits: [
        {
          label: "Fuller picture of the situation",
          description:
            "Each hat extracts information that other modes of thinking miss. Together they create a 360-degree view of the problem — from data through emotions to creative possibilities.",
        },
        {
          label: "Separating emotions from facts",
          description:
            "The Red hat gives 'official permission' for emotions — without hiding or letting them dominate. One of the healthiest tools for working through difficult decisions.",
        },
        {
          label: "Conflict reduction",
          description:
            "In a group: when everyone wears the same hat, personality clashes disappear. The optimist and the pessimist collaborate, because both are now wearing the black hat together.",
        },
        {
          label: "Structuring complex decisions",
          description:
            "The 6-hat sequence turns a 'chaotic discussion' into a structured process. Each aspect gets its own time and space — nothing gets lost in the noise.",
        },
      ],
      pitfall:
        "Skipping the Red hat as 'unserious'. Emotions are data — ignoring them leads to decisions that are logically correct but that people don't execute, because emotions sabotage implementation.",
    },
  },
};
