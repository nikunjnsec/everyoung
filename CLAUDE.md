# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

EverYoung — mobile-first e-commerce site for men's and women's clothing. Inspired by Everlane. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS. Intended for deployment to Azure Static Web Apps.

## Commands

```bash
npm run dev      # Start local dev server at http://localhost:3000
npm run build    # Build → generates /.next directory
npm run start    # Serve the build locally
npm run lint     # ESLint
```

**Static export**: `next.config.mjs` sets `output: 'export'` and `images: { unoptimized: true }`. `npm run build` generates `/out`, which Azure Static Web Apps serves. Use `npx serve out` to simulate Azure locally.

## Architecture

**All components are client components** (`"use client"`). There are no server components — all state and interactivity runs in the browser.

**Data is hardcoded**: Product data lives as a `PRODUCT` const in `ProductPage.tsx`. Navigation data lives as `NAV_ITEMS` in `NavDrawer.tsx`. No data-fetching layer exists yet.

**Azure**: `staticwebapp.config.json` handles SPA routing. The `/api` directory is reserved for future Azure Functions.

**Fonts**: Cormorant Garamond (`font-cormorant`) for the brand name/editorial headings. DM Sans (`font-sans`) for all body/UI text. Both loaded via `next/font/google` in `layout.tsx`. The Geist font files in `src/app/fonts/` are unused scaffolding and can be deleted.

**Colors & tokens**: Custom Tailwind tokens — `brand-black`, `brand-white`, `brand-gray`, `brand-border`, `brand-muted`, `accent-red`. Custom spacing: `tracking-extra-wide` (`0.2em`). Never use raw Tailwind color scales.

**State**: Color and size selection state lives in `ProductPage.tsx`. Drawer open/close state lives in `Navbar.tsx`. No global state management.

**Components**:
- `Navbar.tsx` — sticky header (3-col grid: hamburger | brand | search+cart), owns drawer state. Search and Cart buttons are UI-only stubs.
- `NavDrawer.tsx` — slide-in nav with Women/Men sections + nested sub-categories (accordion pattern via local `useState`)
- `ProductPage.tsx` — homepage, owns color/size state, composes all product sub-components
- `ColorSelector.tsx`, `SizeSelector.tsx` — controlled components (props only)
- `ProductAccordion.tsx` — uses `@radix-ui/react-accordion` (Description, Fit, Materials & Care, Details, Clarifications). Accordion animations defined in `globals.css`.

## Design Conventions

- Mobile-first always. Desktop breakpoints (`md:`) only if explicitly scoped.
- All Tailwind classes written mobile-first (no desktop-first overrides).
- Touch targets minimum 44×44px (size buttons are `w-12 h-12`).
- Use plain `<img>` with `object-cover` (not `next/image`) to stay compatible with static export.
- No test framework is configured.
