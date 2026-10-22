# FlowFest — Event Management & Ticketing Platform (Next.js, TypeScript)

**FlowFest** is an event management and ticketing platform built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. It provides a data-driven catalog of competitions and events in a clean, modern interface for discovering what's on and managing event content.

## Features

- **Competitions & events catalog** — browse competitions powered by structured event data (`data/competitions.json`) with a dedicated `app/competitions` route
- **Data-driven architecture** — event content is managed as structured JSON data, making it easy to add or update events without touching UI code
- **Modern App Router structure** — server-rendered pages with reusable components in `components/` and shared utilities in `lib/`
- **Polished interface** — Tailwind CSS 4 styling with Radix UI primitives, Lucide icons, and CSS animations (`tw-animate-css`)
- **Fast development workflow** — Turbopack-powered dev server (`next dev --turbopack`)

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript
- **Styling & UI:** Tailwind CSS 4, Radix UI, Lucide React

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

---

⭐ If you find this project useful, consider giving it a star — contributions and feedback are welcome!
