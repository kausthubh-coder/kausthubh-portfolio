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
      "Studi combines Socratic chat with generated learning tools. It keeps the conversation central, then opens an inspectable workspace when a concept needs code, a graph, a quiz, or an interactive scene.",
    previewLayout: "desktop-led",
    previews: [
      {
        src: "/projects/studi/01-chat-desktop.webp",
        alt: "Studi tutor home screen with conversation history and a central message composer",
        title: "the tutor",
        caption: "A focused chat surface that keeps past threads close without crowding the current question.",
        width: 1280,
        height: 720,
      },
      {
        src: "/projects/studi/02-code-spark-inline-desktop.webp",
        alt: "Studi conversation with an inline Code Spark, terminal controls, and test results",
        title: "inline Code Spark",
        caption: "Generated code stays inside the lesson, with run controls and visible test results beside it.",
        width: 1280,
        height: 720,
      },
      {
        src: "/projects/studi/03-code-spark-expanded-desktop.webp",
        alt: "Expanded Studi Code Spark workspace with tutor context, editor, preview, and terminal",
        title: "expanded workspace",
        caption: "The same Spark can open into a larger workspace without losing the conversation that created it.",
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
        why: "app router + streaming server components fit a tutor that talks in real time, and I know it cold.",
      },
      {
        name: "Convex",
        icon: "siConvex",
        why: "the whole database and backend are typed end to end, and all of it lives in one folder.",
      },
      {
        name: "Convex Agent",
        icon: "siConvex",
        why: "one agent owns tutor behavior and tool wiring, so the product logic lives in one inspectable place.",
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
        why: "fast installs and scripts, plus a runtime, package manager, test runner, and bundler in one tool.",
      },
      {
        name: "Vitest + Playwright",
        icon: "siVitest",
        why: "unit tests for the logic, browser tests for the flows. an AI product needs receipts, not vibes.",
      },
    ],
    story: [
      "every \"AI study tool\" I tried was the same thing: a chat box that hands you the answer, you nod, and you've learned nothing. that's not tutoring, that's outsourcing.",
      "so I built Studi around the loop a good tutor actually runs: you say what you don't get, it asks you something back, and when explaining in words stops working it just builds the thing — a sandboxed interactive scene, a Desmos graph, a quiz on the exact concept you're stuck on.",
      "the goal the whole time has been to make the AI feel like a tutor with tools in its hands, not a text box wearing a nicer skin. everything below exists in service of that one idea.",
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
    description: "Open-source calorie tracker.",
    status: "exploratory",
    tagline: "a calorie tracker that turns plain language into a clean daily log.",
    summary:
      "Amy makes the daily loop deliberately small: say what you ate, review the nutrition estimate, and move on. Goals and onboarding stay calm, legible, and close to the data they change.",
    previewLayout: "mobile-led",
    previews: [
      {
        src: "/projects/amy/01-today.webp",
        alt: "Amy calorie tracker Today screen with an empty daily food log",
        title: "today",
        caption: "A quiet daily dashboard that makes the next entry obvious without turning food into a spreadsheet.",
        width: 412,
        height: 915,
        mobile: true,
      },
      {
        src: "/projects/amy/02-ai-food-log.webp",
        alt: "Amy calorie tracker showing a natural-language food entry converted into calories and macros",
        title: "natural-language logging",
        caption: "A short phrase becomes a reviewable calorie and macro estimate in the same screen.",
        width: 412,
        height: 915,
        mobile: true,
      },
      {
        src: "/projects/amy/03-settings-goals.webp",
        alt: "Amy settings screen with calorie, protein, carbohydrate, and fat goals",
        title: "goals",
        caption: "Nutrition targets are editable in one place and reflected directly in the daily view.",
        width: 412,
        height: 915,
        mobile: true,
      },
      {
        src: "/projects/amy/04-onboarding-target.webp",
        alt: "Amy onboarding screen for choosing a daily calorie target",
        title: "onboarding",
        caption: "The first-run flow asks only for the information needed to set a useful starting target.",
        width: 412,
        height: 915,
        mobile: true,
      },
    ],
    facts: [
      { label: "status", value: "exploratory" },
      { label: "what it is", value: "character-led tracker" },
      { label: "core bet", value: "personality = retention" },
      { label: "vibe", value: "calm, not loud" },
    ],
    stack: [
      {
        name: "React",
        icon: "siReact",
        why: "character UI is state-machine heavy, and React makes tiny reactive states cheap to build.",
      },
      {
        name: "Motion",
        icon: "siFramer",
        why: "the personality lives in the micro-animations. Motion makes them precise instead of janky.",
      },
      {
        name: "Local-first",
        why: "your food log is personal. keeping data on-device first builds the trust the app depends on.",
      },
      {
        name: "Prompt design",
        why: "Amy's voice is a written artifact, iterated like code — the character is a prompt with taste.",
      },
      {
        name: "Character UI",
        why: "the experiment itself: once the interface has a personality, every screen becomes a conversation.",
      },
    ],
    story: [
      "calorie trackers die in week two. not because the math is hard — because the app feels like a chore. Amy is my bet that a little character with actual memory can fix the retention problem that features never do.",
      "the hard part is trust. the app has to feel calm and specific, not like a template wearing a cute cat icon. so the design language leans on simple states and tiny reactions instead of heavy screens and confetti.",
      "it's also my sandbox for a bigger question: how does personality change product structure? once the interface has a character, every screen becomes a conversation, and that changes what you build.",
    ],
    features: [
      {
        title: "character with memory",
        body: "Amy remembers your patterns and reacts to them — small acknowledgments over time instead of streak-guilt notifications.",
      },
      {
        title: "low-friction logging",
        body: "The core loop stays fast: quick entries, reviewable history, calm follow-up moments. The character never gets in the way of the tracker.",
      },
      {
        title: "quiet emotional UI",
        body: "Tiny reactions and simple states carry the personality. No mascot takeover screens, no gamified noise.",
      },
    ],
    architecture: [
      {
        title: "character-led UI",
        body: "The interface experiments with personality, memory, and daily-use states without turning the product into a mascot screen.",
      },
      {
        title: "local-first sketches",
        body: "Data stays close to the device while I test what the product wants to be — no premature backend, no premature accounts.",
      },
    ],
    links: [],
  },
  {
    name: "Kriyan",
    slug: "kriyan",
    logo: "/logos/kriyan-icon.svg",
    alt: "Kriyan icon",
    angle: -3,
    description: "Personal AI workspace.",
    status: "prototype lane",
    tagline: "a personal AI workspace that turns scattered context into an inspectable plan for what to do next.",
    summary:
      "Kriyan brings tasks, connected sources, and retained context into one local-first surface. The product is the loop: capture what matters, understand where it came from, and turn it into work you can inspect.",
    previewLayout: "desktop-led",
    previews: [
      {
        src: "/projects/kriyan/01-today-desktop.webp",
        alt: "Kriyan Today dashboard showing current work, captured context, and a command composer",
        title: "today",
        caption: "Current work and captured context share one surface, with the next action always within reach.",
        width: 1583,
        height: 989,
      },
      {
        src: "/projects/kriyan/02-sources-desktop.webp",
        alt: "Kriyan Sources screen listing connected services and their sync status",
        title: "sources",
        caption: "Connections stay explicit: what is available, where it came from, and whether it is current.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/kriyan/03-memory-desktop.webp",
        alt: "Kriyan Memory screen showing retained context and its supporting evidence",
        title: "memory",
        caption: "Retained context is presented as inspectable evidence rather than an invisible agent state.",
        width: 1600,
        height: 1000,
      },
    ],
    facts: [
      { label: "status", value: "prototype lane" },
      { label: "what it is", value: "local agent workflows" },
      { label: "core loop", value: "plan → build → inspect" },
      { label: "runs", value: "local-first" },
    ],
    stack: [
      {
        name: "TypeScript",
        icon: "siTypescript",
        why: "agent plumbing is all contracts between steps — types catch the drift before the loop does.",
      },
      {
        name: "Local agents",
        why: "running on my machine means the loop touches real files with zero latency and zero cloud trust.",
      },
      {
        name: "CLI workflows",
        icon: "siGnubash",
        why: "everything scriptable and composable from the terminal. no walled-garden UI between me and the loop.",
      },
      {
        name: "Sandboxed previews",
        why: "risky output runs in throwaway environments, so a bad loop costs nothing to discard.",
      },
      {
        name: "Static shells",
        why: "generated apps land in dead-simple static shells — easy to inspect, easy to throw away.",
      },
    ],
    story: [
      "everyone's building agents that generate code. almost nobody's building the path from rough thought to something you can actually inspect and trust. that gap is what Kriyan is for.",
      "the experiments center on one loop: plan, build, inspect, tighten. every artifact an agent produces has to be inspectable — files you can read, previews you can click, sandboxes you can throw away.",
      "I also use it to answer a question I keep hitting in real work: how much structure does an AI workflow need before the structure becomes drag? Kriyan is where I find that line on purpose.",
    ],
    features: [
      {
        title: "local agent loop",
        body: "Prompts become files, files become previews, and every step in between stays on disk where you can read it.",
      },
      {
        title: "sandbox-first builds",
        body: "Risky ideas run in disposable build loops first. Only what survives inspection graduates into reusable templates or project structure.",
      },
      {
        title: "CLI-native workflows",
        body: "Everything is scriptable and composable from the terminal — no walled-garden UI between you and the loop.",
      },
    ],
    architecture: [
      {
        title: "inspectable artifacts",
        body: "The core design rule: nothing the agent makes is a black box. Files, previews, and diffs are the interface.",
      },
      {
        title: "disposable sandboxes",
        body: "Experiments run in throwaway environments so a bad loop costs nothing and a good one is easy to promote.",
      },
    ],
    links: [],
  },
];
