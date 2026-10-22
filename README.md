# FlowFest — Event Management & Ticketing Platform (Next.js, Supabase)

**FlowFest** is an event management and ticketing platform built with **Next.js (App Router)**, **TypeScript**, and **Supabase**. It provides a data-driven catalog of competitions and events, modern calendar-style date picking, and a polished, animated interface for discovering and managing events.

## Features

- **Competitions & events catalog** — browse competitions powered by structured event data (`data/competitions.json`) with a dedicated `app/competitions` route
- **Data-driven architecture** — event content is managed as structured data, making it easy to add or update events without touching UI code
- **Supabase backend** — database and backend services powered by Supabase (`@supabase/supabase-js`)
- **Rich event UI** — date selection with React Day Picker and date-fns, dialogs, tabs, and labels from Radix UI
- **Smooth, modern interface** — Framer Motion animations, Lucide icons, and Tailwind CSS styling throughout

## Tech Stack

- **Framework:** Next.js (App Router) + React
- **Language:** TypeScript
- **Backend:** Supabase
- **Styling & UI:** Tailwind CSS, Radix UI, shadcn/ui
- **Motion & Dates:** Framer Motion, date-fns, React Day Picker

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To connect the backend features, create a Supabase project and add its URL and anon key to a `.env.local` file.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

---

⭐ If you find this project useful, consider giving it a star — contributions and feedback are welcome!
