# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Akaris.ai landing page — a one-page marketing site for an AI education platform. Built with Vite + React + TypeScript + Tailwind CSS v4.

The app lives in the `akaris-ai/` subdirectory. All commands below must be run from there.

## Commands

```bash
cd akaris-ai
npm run dev       # start dev server (localhost:5173 or next available port)
npm run build     # type-check + production build → dist/
npm run preview   # preview production build locally
npm run lint      # ESLint
```

## Architecture

```
akaris-ai/
  src/
    components/   # One file per section: Navbar, Hero, Courses, WhyAkaris,
    │             # Instructors, CTA, Footer
    data/         # courses.ts, instructors.ts — typed data arrays, edit here to
    │             # update content without touching components
    App.tsx       # Composes all sections in order
    index.css     # @import "tailwindcss" + @theme custom tokens + global resets
  public/
    assets/instructors/  # Placeholder SVGs; replace with real .jpg photos
    staticwebapp.config.json  # Azure Static Web Apps config
  netlify.toml    # Netlify build + SPA redirect config
```

## Tailwind v4 Custom Colours

Defined via `@theme` in `src/index.css` (not `tailwind.config.js` — v4 dropped that):

| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| `navy-950`     | `#0b1120` | Page background              |
| `navy-900`     | `#0f172a` | Section alternating bg       |
| `navy-800`     | `#162032` | Card bg / borders            |
| `gold-500`     | `#d4af37` | Primary brand accent         |
| `gold-400`     | `#e9c33a` | Hover state / gradient start |
| `gold-600`     | `#b8960c` | Gradient end                 |

## Adding Content

- **New course**: add an entry to `src/data/courses.ts`
- **New instructor**: add an entry to `src/data/instructors.ts`, drop a photo at `public/assets/instructors/<slug>.jpg`, update the `image` path. The `InstructorCard` component falls back to initials if the image fails to load.
- **New section**: create `src/components/MySection.tsx`, import and add to `App.tsx`

## Deployment

- **Vercel / Netlify**: auto-detected as Vite — no extra config needed beyond `netlify.toml`
- **Azure Static Web Apps**: `public/staticwebapp.config.json` is already configured
- Build output: `dist/`
