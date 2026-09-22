# kausthubh portfolio

A fast, static [Astro](https://astro.build) site for Kausthubh N: a home page, three project write-ups, and a stack + AI workflow page.

Live at <https://kausthubh-portfolio.vercel.app>.

## Routes

| Route | What it is |
| --- | --- |
| `/` | identity, project stack, links to the workflow page and email |
| `/projects/studi/` | Studi write-up |
| `/projects/amy/` | Amy write-up |
| `/projects/kriyan/` | Kriyan write-up |
| `/workflow/` | tools I use every day and build products with, with a last-updated date |
| `/404` | not-found page |
| `/sitemap.xml`, `/robots.txt` | generated at build time |

## Commands

```sh
bun install
bun run dev      # local dev server
bun run check    # astro check (types + templates)
bun run build    # check, then build to dist/
bun run preview  # serve dist/
```

## Where things live

```
src/
  data/site.ts           site URL, description, email, workflow last-updated date
  data/projects.ts       all project content; project pages are generated from it
  layouts/BaseLayout.astro   <head>, SEO/share tags, intro boot, page transitions
  components/IntroSequence.astro   first-visit logo intro on the home page
  components/ProjectStack.astro    desktop logo stack + mobile swipe fan
  pages/                 index, projects/[slug], workflow, 404, sitemap, robots
  styles/global.css      all shared styles
public/                  font, logos, project screenshots, tool icons
```

## Common edits

- **Add or edit a project:** edit `src/data/projects.ts`. The page, sitemap entry, and home stack come from it. The home stack layout and the logo view-transition rules in `global.css` currently assume exactly three projects, so a fourth needs those extended (`project-logo-<slug>` selectors and the `nth-child` fan positions).
- **Update the workflow page:** edit the tool lists in `src/pages/workflow.astro`, then bump `workflowUpdated` in `src/data/site.ts`.
- **Change the domain, description, or email:** `src/data/site.ts`. Canonical URLs, share tags, the sitemap, and robots.txt all read from it.

## How the moving parts work

- **Intro:** plays once per tab session on a first visit to `/` (and on reload). It is skipped for reduced-motion users and when arriving from another page on the site. A CSS failsafe reveals the page if the intro script ever fails to finish.
- **Project roll call:** the first time home is seen in a session, the desktop logo stack fans out and names each project, then fidgets every few seconds until someone hovers or focuses it. Skipped for reduced motion.
- **Page transitions:** native cross-document view transitions. The project logo morphs between home and its project page; browsers without support just navigate normally.
- **JavaScript:** everything is inline and small. The only emitted bundle is Astro's link prefetch script.

## Deploy

Vercel builds with `bun run build` and serves `dist/` (see `vercel.json`). `404.html` is picked up automatically.
