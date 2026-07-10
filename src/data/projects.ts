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
    description: "Personal agentic tutor.",
    status: "actively building",
    tagline: "an AI tutor that teaches you instead of doing your homework for you.",
    summary:
      "Studi is an agentic tutor built around Socratic chat. It asks you questions back, streams its thinking live, and when words aren't enough it builds the exact artifact you need — an interactive scene, a graph, a quiz — right inside the conversation.",
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
        name: "React 19",
        icon: "siReact",
        why: "the ecosystem I move fastest in — suspense and transitions do real work in a streaming chat UI.",
      },
      {
        name: "TypeScript",
        icon: "siTypescript",
        why: "typed end to end from schema to component. refactors stay boring, which is the point.",
      },
      {
        name: "Convex",
        icon: "siConvex",
        why: "reactive database + backend in one. live subscriptions make the streaming tutor feel alive for free.",
      },
      {
        name: "Convex Agent",
        icon: "siConvex",
        why: "one agent owns tutor behavior and tool wiring, so the product logic lives in one inspectable place.",
      },
      {
        name: "Clerk",
        icon: "siClerk",
        why: "auth + billing + subscription state without building any of it myself. shipped in a day.",
      },
      {
        name: "OpenRouter",
        icon: "siOpenrouter",
        why: "one API for every model, so I can swap or route models without touching product code.",
      },
      {
        name: "Bun",
        icon: "siBun",
        why: "installs and scripts fast enough that I never think about the toolchain. that's all I want from it.",
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
        title: "socratic chat",
        body: "Studi answers questions with questions when that's what teaching requires. It pushes you to work the idea instead of just reading a summary of it.",
      },
      {
        title: "live streaming replies",
        body: "Assistant responses stream token-by-token through Convex subscriptions, so a session feels like a conversation, not a request queue.",
      },
      {
        title: "Sparks — generated learning artifacts",
        body: "When words stop working, Studi generates the right artifact inline: sandboxed HTML/CSS/JS scenes, Desmos graphs, quizzes, and flashcard decks scoped to the exact concept in the thread.",
      },
      {
        title: "multi-thread sessions",
        body: "Every topic gets its own thread with full history, so you can run calculus in one lane and chemistry in another without the tutor losing the plot.",
      },
      {
        title: "file + image attachments",
        body: "Drop in a problem set, a lecture slide, or a photo of your notebook and the tutor works from your actual material.",
      },
      {
        title: "quotas, billing, waitlist",
        body: "Real product plumbing: usage tracking per plan, Clerk-synced subscriptions, and an early-access waitlist with handoff. Not a demo — a product.",
      },
    ],
    architecture: [
      {
        title: "streaming tutor pipeline",
        body: "User messages persist through Convex mutations, assistant work is scheduled through backend actions, and the frontend subscribes to streamed UI messages. The session feels live because it literally is.",
      },
      {
        title: "generated Sparks",
        body: "Artifacts render in a sandboxed boundary so generated HTML/CSS/JS can be interactive without being trusted. Each Spark is scoped to the conversation that created it.",
      },
      {
        title: "agent and model boundary",
        body: "One Studi Convex Agent owns tutor behavior and tool wiring; OpenRouter owns model access. Model routing stays swappable without touching product UI.",
      },
      {
        title: "product plumbing",
        body: "Clerk handles auth and subscription state; Convex tracks threads, messages, uploads, usage, billing sync, telemetry, and waitlist handoff.",
      },
    ],
    links: [
      {
        label: "live site",
        href: "https://studi-qypn.vercel.app/",
        note: "early-access landing page",
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
    description: "Best open-source calorie tracker.",
    status: "exploratory",
    tagline: "a calorie tracker with a personality, because logging food shouldn't feel like filing taxes.",
    summary:
      "Amy is where I test softer, character-led interfaces: a cat with memory and moods sitting on top of a genuinely useful tracker. The bet is that personality makes a daily-use app stick where a spreadsheet with buttons doesn't.",
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
    description: "My take on personal AI agents.",
    status: "prototype lane",
    tagline: "my take on personal AI agents — a repeatable path from rough thought to inspected artifact.",
    summary:
      "Kriyan is where I run local AI workflow experiments: how prompts, tools, files, and preview loops become a practical building environment instead of a party trick. The product is the loop: plan, build, inspect, tighten.",
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
