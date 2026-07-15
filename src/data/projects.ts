export type StackItem = {
  name: string;
  /** simple-icons export key, e.g. "siReact". Omit for concepts without a logo. */
  icon?: string;
  why: string;
};

export type Project = {
  name: string;
  slug: string;
  logo: string;
  alt: string;
  angle: number;
  description: string;
  status: string;
  tagline: string;
  summary: string;
  previewLayout: "desktop-led" | "mobile-led";
  previews: {
    src: string;
    alt: string;
    title: string;
    caption: string;
    width: number;
    height: number;
    mobile?: boolean;
  }[];
  facts: {
    label: string;
    value: string;
  }[];
  stack: StackItem[];
  story: string[];
  features: {
    title: string;
    body: string;
  }[];
  architecture: {
    title: string;
    body: string;
  }[];
  links: {
    label: string;
    href: string;
    note: string;
  }[];
};

export const projects: Project[] = [
  {
    name: "Studi",
    slug: "studi",
    logo: "/logos/optimized/studi-paper-airplane-logo-rounded.webp",
    alt: "Studi paper airplane logo",
    angle: -5,
    description: "Agentic AI tutor.",
    status: "actively building",
    tagline: "an AI tutor that teaches through questions, then builds the learning artifact you need.",
    summary:
      "Studi keeps the lesson in one conversation. It asks the next useful question, then generates a runnable or interactive Spark when seeing, testing, or manipulating the idea would teach it better than another paragraph.",
    previewLayout: "desktop-led",
    previews: [
      {
        src: "/projects/studi/01-chat-desktop.webp",
        alt: "Studi tutor home screen with conversation history and a central message composer",
        title: "the tutor",
        caption: "One focused question at a time, with past lessons close enough to resume without rebuilding the context.",
        width: 1280,
        height: 720,
      },
      {
        src: "/projects/studi/02-code-spark-inline-desktop.webp",
        alt: "Studi conversation with an inline Code Spark, terminal controls, and test results",
        title: "inline Code Spark",
        caption: "A small runnable workspace appears inside the lesson, with editable code, output, and visible checks in context.",
        width: 1280,
        height: 720,
      },
      {
        src: "/projects/studi/03-code-spark-expanded-desktop.webp",
        alt: "Expanded Studi Code Spark workspace with tutor context, editor, preview, and terminal",
        title: "expanded workspace",
        caption: "The same Spark expands into a larger editor and terminal while the conversation that created it stays attached.",
        width: 1280,
        height: 720,
      },
    ],
    facts: [
      { label: "status", value: "active build" },
      { label: "what it is", value: "agentic AI tutor" },
      { label: "core stack", value: "Next.js + Convex" },
      { label: "solo built", value: "design to deploy" },
    ],
    stack: [
      {
        name: "Next.js 16",
        icon: "siNextdotjs",
        why: "the App Router gives the tutor a solid application shell while streaming and server boundaries stay close to the feature code.",
      },
      {
        name: "Convex",
        icon: "siConvex",
        why: "the database, backend functions, scheduled work, and live subscriptions stay typed end to end in one place.",
      },
      {
        name: "Convex Agent",
        icon: "siConvex",
        why: "threads, streaming messages, tutor behavior, and tool calls share one inspectable agent boundary.",
      },
      {
        name: "Clerk",
        icon: "siClerk",
        why: "auth + billing + subscription state without rebuilding the basics, and it integrates cleanly with Convex.",
      },
      {
        name: "OpenRouter",
        icon: "siOpenrouter",
        why: "one API for every model, so I can swap or route models without touching product code.",
      },
      {
        name: "Bun",
        icon: "siBun",
        why: "one fast tool covers installs, scripts, the runtime, package management, and most of the local development loop.",
      },
      {
        name: "Vitest + Playwright",
        icon: "siVitest",
        why: "unit tests for the logic, browser tests for the flows. an AI product needs receipts, not vibes.",
      },
    ],
    story: [
      "most AI study tools optimize for producing an answer. that is useful when you are stuck on a task, but it is a bad default when the goal is to understand the idea well enough to use it again.",
      "I built Studi around a different loop: start from what the learner already believes, ask one smaller question, introduce a contrast, and only name the concept after they have noticed the pattern themselves.",
      "Sparks are what make that loop more than prompt writing. when words are the wrong medium, the tutor can build a graph, scene, quiz, flash-card deck, or runnable code exercise for that exact moment without sending the learner somewhere else.",
    ],
    features: [
      {
        title: "guided discovery, not answer dumping",
        body: "Studi asks one focused question at a time, adapts to what you say, and introduces the formal name only after you have found the idea yourself.",
      },
      {
        title: "Sparks that fit the learning moment",
        body: "When text is not enough, the tutor can build an interactive scene, Desmos graph, quiz, or flash-card deck around the exact concept in the conversation.",
      },
      {
        title: "runnable code practice inside the lesson",
        body: "Code and Test Sparks turn a concept into a small TypeScript, JavaScript, or Python workspace. You can predict, run, inspect the output, and repair visible failing checks without leaving the thread.",
      },
      {
        title: "threads that keep their context",
        body: "Each topic keeps its messages, attachments, and generated Sparks together, so you can return to a lesson without rebuilding the context from scratch.",
      },
      {
        title: "works from your actual material",
        body: "Attach a problem set, lecture slide, or photo of your notes and Studi uses that material as the starting point instead of teaching from a generic prompt.",
      },
      {
        title: "built as a real product",
        body: "Accounts, plan-based usage, billing state, file storage, and failure recovery are part of the same experience, not a demo layer added around the tutor.",
      },
    ],
    architecture: [
      {
        title: "one Spark tool, not six separate tools",
        body: "The tutor calls one generic create_spark tool with a Spark type and learning context. A typed skill catalog supplies the right prompt, schema, and validator for scenes, graphs, code, tests, quizzes, and flash cards, so adding a new Spark does not require rewiring the agent.",
      },
      {
        title: "structured generation before rendering",
        body: "A separate worker generates strict structured output, then Studi normalizes and validates it against the Spark contract before anything is stored or shown. Generated code never becomes trusted UI just because a model returned it.",
      },
      {
        title: "sandboxed interactive scenes",
        body: "Scene Sparks run as compact HTML, CSS, and JavaScript inside a restricted iframe with a CSP and no network access. A small runtime bridge reports readiness, size, interactions, checkpoints, and errors back to Studi without giving the scene access to the app.",
      },
      {
        title: "isolated code execution with limits",
        body: "Code and Test Sparks are admitted server-side, checked against plan limits, and run in isolated provider-backed workspaces with bounded files, commands, languages, and timeouts. The learner sees useful output without exposing production infrastructure.",
      },
      {
        title: "a persistent, streaming tutor",
        body: "Convex Agent owns the thread, messages, tool calls, and tutor behavior. Replies stream into the same persisted conversation through live subscriptions, while Clerk identity and usage state stay enforced on the backend.",
      },
      {
        title: "models are infrastructure, not product logic",
        body: "Tutor replies and Spark workers use task-specific model routes with guarded fallbacks. Providers can change without rewriting the chat UI, artifact contracts, or the teaching flow.",
      },
    ],
    links: [
      {
        label: "live site",
        href: "https://www.getstudi.com/",
        note: "getstudi.com",
      },
      {
        label: "GitHub",
        href: "https://github.com/kausthubh-coder/studi",
        note: "public source",
      },
    ],
  },
  {
    name: "Amy",
    slug: "amy",
    logo: "/logos/optimized/amy-icon-cat-alt.webp",
    alt: "Amy app cat logo",
    angle: 4,
    description: "Android calorie tracker.",
    status: "early Android release",
    tagline: "an Android calorie tracker where logging food feels as quick as writing a note.",
    summary:
      "Type one food per line and Amy turns it into editable calories and macros. Barcode, photo, label, dictation, and saved-meal tools are there when useful, while the diary stays local, readable, and exportable.",
    previewLayout: "mobile-led",
    previews: [
      {
        src: "/projects/amy/01-today.webp",
        alt: "Amy calorie tracker Today screen with an empty daily food log",
        title: "today",
        caption: "The daily log reads like a note, with calories aligned beside each entry and totals kept close to the writing surface.",
        width: 412,
        height: 915,
        mobile: true,
      },
      {
        src: "/projects/amy/02-ai-food-log.webp",
        alt: "Amy calorie tracker showing a natural-language food entry converted into calories and macros",
        title: "natural-language logging",
        caption: "A plain-language food line becomes a reviewable nutrition estimate without opening a database-style search flow.",
        width: 412,
        height: 915,
        mobile: true,
      },
      {
        src: "/projects/amy/03-settings-goals.webp",
        alt: "Amy settings screen with calorie, protein, carbohydrate, and fat goals",
        title: "goals",
        caption: "Calorie and macro targets remain explicit, editable, and reflected immediately in the daily progress view.",
        width: 412,
        height: 915,
        mobile: true,
      },
      {
        src: "/projects/amy/04-onboarding-target.webp",
        alt: "Amy onboarding screen for choosing a daily calorie target",
        title: "onboarding",
        caption: "Setup asks for a calorie target and weight goal instead of collecting personal information the tracker does not need.",
        width: 412,
        height: 915,
        mobile: true,
      },
    ],
    facts: [
      { label: "status", value: "early Android release" },
      { label: "what it is", value: "line-first food log" },
      { label: "data", value: "local + exportable" },
      { label: "install", value: "APK from GitHub" },
    ],
    stack: [
      {
        name: "Expo + React Native",
        icon: "siExpo",
        why: "one Android-first codebase covers the app, camera, image picker, speech input, deep links, and release builds.",
      },
      {
        name: "AsyncStorage",
        why: "the diary, saved meals, goals, corrections, and weight history stay on the device and work without an account.",
      },
      {
        name: "Open Food Facts",
        why: "it provides an open product database for barcode lookup without locking the app to a proprietary nutrition service.",
      },
      {
        name: "OpenRouter",
        icon: "siOpenrouter",
        why: "optional bring-your-own-key estimates handle text, food photos, and nutrition labels without making AI a requirement.",
      },
      {
        name: "Android widgets",
        icon: "siAndroid",
        why: "native home-screen widgets keep the calorie total and fastest capture actions available before the app is opened.",
      },
    ],
    story: [
      "most calorie trackers make a small habit feel like database work: search for a food, choose a serving, confirm it, dismiss another screen, and repeat. the friction is not dramatic, but it is enough to make daily logging easy to abandon.",
      "Amy starts from the behavior people already know: writing a list. one food goes on each line, structure is attached after the fact, and every estimate stays visible and editable instead of pretending to be exact.",
      "I also wanted the privacy model to be understandable. the diary works locally with no account, barcode lookup uses Open Food Facts, and AI features only run when the user adds their own OpenRouter key.",
    ],
    features: [
      {
        title: "one food per line",
        body: "Type the way you would write a quick note. Each line becomes an editable food entry with calories and macros aligned beside the original text.",
      },
      {
        title: "multiple capture paths, one review model",
        body: "Text, dictation, food photos, nutrition labels, barcodes, and saved meals all resolve into the same reviewable entry shape before they reach the diary.",
      },
      {
        title: "barcode serving review",
        body: "Open Food Facts results stop at a confirmation screen where the product name, serving count, grams, calories, and macros can be corrected before logging.",
      },
      {
        title: "daily totals, stats, and streaks",
        body: "The Today view tracks calorie and macro progress, while weekly totals, weight history, logged days, and streaks make longer patterns visible.",
      },
      {
        title: "saved meals and home-screen actions",
        body: "Repeat foods can be logged from saved meals, and two Android widgets deep-link directly into typing, dictation, photos, barcode scanning, or the daily summary.",
      },
      {
        title: "local data with a way out",
        body: "The app needs no account. Diary data stays on-device and can be exported or restored as JSON, with the user's OpenRouter key excluded from exports.",
      },
    ],
    architecture: [
      {
        title: "one local source of truth",
        body: "A typed app-data store owns entries, note lines, goals, saved meals, settings, weights, and migrations. Every screen reads and writes the same persisted local model.",
      },
      {
        title: "capture is normalized before storage",
        body: "Manual text, OpenRouter estimates, Open Food Facts products, and saved meals all become the same FoodDraft contract before the store creates a permanent entry.",
      },
      {
        title: "nutrition math stays deterministic",
        body: "Portion scaling, daily totals, macro progress, remaining calories, and streak calculations live in small domain functions rather than inside screens or model prompts.",
      },
      {
        title: "network features are optional boundaries",
        body: "The core diary does not need a server. Open Food Facts is called only for product lookup, and OpenRouter is called only for estimates when the user has configured a key.",
      },
      {
        title: "native widgets generated from the app config",
        body: "An Expo config plugin writes the Android widget providers, layouts, icons, metadata, and native bridge. The React Native store pushes a compact snapshot to both widgets after local changes.",
      },
    ],
    links: [
      {
        label: "live site",
        href: "https://openamy.app/",
        note: "openamy.app",
      },
      {
        label: "Android APK",
        href: "https://github.com/kausthubh-coder/amy/releases/latest",
        note: "latest release",
      },
      {
        label: "GitHub",
        href: "https://github.com/kausthubh-coder/amy",
        note: "source + issues",
      },
    ],
  },
  {
    name: "Kriyan",
    slug: "kriyan",
    logo: "/logos/kriyan-icon.svg",
    alt: "Kriyan icon",
    angle: -3,
    description: "Personal agent workspace.",
    status: "integrated local build",
    tagline: "a local-first personal operating system that keeps you on track and lets agents do work you can inspect.",
    summary:
      "Kriyan combines tasks, calendar, reminders, notes, sources, cited memory, and durable agent threads. Convex coordinates the product while a user-controlled node runs agents and maintains a readable Markdown and SQLite second brain.",
    previewLayout: "desktop-led",
    previews: [
      {
        src: "/projects/kriyan/01-today-desktop.webp",
        alt: "Kriyan Today dashboard showing current work, captured context, and a command composer",
        title: "today",
        caption: "Tasks, reminders, recent captures, knowledge changes, and active agent work meet in one daily control surface.",
        width: 1583,
        height: 989,
      },
      {
        src: "/projects/kriyan/02-sources-desktop.webp",
        alt: "Kriyan Sources screen listing connected services and their sync status",
        title: "sources",
        caption: "Every captured input keeps its origin, sync state, and downstream references visible instead of disappearing into agent context.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/kriyan/03-memory-desktop.webp",
        alt: "Kriyan Memory screen showing retained context and its supporting evidence",
        title: "memory",
        caption: "Derived facts and entities stay attached to citations, confidence, corrections, and the source material that produced them.",
        width: 1600,
        height: 1000,
      },
    ],
    facts: [
      { label: "status", value: "integrated local build" },
      { label: "what it is", value: "personal OS + agents" },
      { label: "coordination", value: "Convex + Bun node" },
      { label: "memory", value: "cited local vault" },
    ],
    stack: [
      {
        name: "Next.js 16",
        icon: "siNextdotjs",
        why: "the web app carries the dense productivity, knowledge, and agent surfaces while sharing typed repositories with the other clients.",
      },
      {
        name: "Convex",
        icon: "siConvex",
        why: "tasks, notes, reminders, sources, agent threads, jobs, and run events need one reactive coordination plane across clients.",
      },
      {
        name: "Expo",
        icon: "siExpo",
        why: "the mobile client turns the same task, reminder, note, and agent contracts into quick action surfaces and notifications.",
      },
      {
        name: "Tauri 2",
        icon: "siTauri",
        why: "the desktop shell keeps the accepted web product while adding a native boundary for local persistence and node control.",
      },
      {
        name: "Bun agent node",
        icon: "siBun",
        why: "a persistent user-controlled process can run local agents, hold leases, journal effects, and access the vault without sending private state through the UI.",
      },
      {
        name: "Markdown + SQLite",
        icon: "siSqlite",
        why: "memory stays readable and portable in Markdown while SQLite provides rebuildable full-text and optional vector retrieval.",
      },
    ],
    story: [
      "my work is spread across tasks, notes, calendars, files, browser research, and agent sessions. the hard part is not capturing more of it; the hard part is turning that context into the next action without losing where anything came from.",
      "Kriyan is built around two promises: keep me on track through normal productivity surfaces, and let personal agents do useful work through durable threads, explicit tools, and visible run state.",
      "the second brain is deliberately inspectable. source material stays referenced, authored work stays versioned, derived memory stays cited, and local Markdown remains readable even when the app or an agent is not running.",
    ],
    features: [
      {
        title: "a real Today surface",
        body: "Tasks, agenda items, reminders, recent captures, knowledge changes, and active agent work are prioritized together instead of living in separate dashboards.",
      },
      {
        title: "tasks, calendar, reminders, and notes",
        body: "The core productivity layer works without asking an agent: create work, schedule it, receive reminders, write rich notes, and keep changes synchronized across clients.",
      },
      {
        title: "sources, artifacts, and cited memory",
        body: "Raw inputs remain Sources, authored notes and research become Artifacts, and derived people, projects, places, and topics become Memory with provenance.",
      },
      {
        title: "durable personal-agent threads",
        body: "Agent conversations retain their chosen agent revision, ordered turns, run state, tool activity, and final result so work can survive retries and client restarts.",
      },
      {
        title: "inspectable corrections",
        body: "A remembered fact can be retracted, replaced, or restored without rewriting history. New conflicting evidence becomes visible instead of silently reviving old memory.",
      },
      {
        title: "web, mobile, and desktop clients",
        body: "The same typed product contracts drive a Next.js web app, an Expo mobile client, and a Tauri desktop shell without giving any client direct control over the agent node.",
      },
    ],
    architecture: [
      {
        title: "Convex is the coordination spine",
        body: "Reactive product state, agent threads, commands, jobs, leases, and bounded run events live in Convex so every client sees the same accepted state.",
      },
      {
        title: "agents run on a user-controlled node",
        body: "A persistent Bun process claims capability-compatible jobs, runs or resumes Pi sessions, journals durable effects, and reports redacted progress back through Convex.",
      },
      {
        title: "storage follows clear authority boundaries",
        body: "Convex owns editable product state, the Markdown vault owns derived transcripts and entity files, and node-local SQLite owns disposable full-text and vector indexes.",
      },
      {
        title: "turn submission is atomic and retry-safe",
        body: "One mutation commits the user message, pinned agent revision, command, and queued job. Stable identities and leases prevent duplicate turns or duplicate final answers during retries.",
      },
      {
        title: "memory is cited, projected, and reversible",
        body: "Stable source references become Markdown projections and reactive relations with provenance. Corrections append new evidence instead of mutating history in place.",
      },
      {
        title: "clients consume repositories, not infrastructure",
        body: "Web, Expo, and Tauri bind to the same typed repository contracts. The clients subscribe to state and submit intent; they never address the private node directly.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kausthubh-coder/kriyan",
        note: "public source",
      },
    ],
  },
];
