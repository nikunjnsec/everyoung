# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

EverYoung — mobile-first e-commerce site for men's and women's clothing. Inspired by Everlane. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS. Deployed to Azure Static Web Apps.

## Commands

```bash
npm run dev      # Start local dev server at http://localhost:3000
npm run build    # Static export → generates /out directory
npm run lint     # ESLint
npx serve out    # Serve the static export locally (simulates Azure)
```

## Architecture

**Static export**: `next.config.mjs` has `output: 'export'`. This means:
- No server components that fetch data at request time
- No `next/image` optimization — use plain `<img>` with `object-cover`
- Build output goes to `/out`, which Azure Static Web Apps serves

**Azure**: `staticwebapp.config.json` handles SPA routing. The `/api` directory is reserved for future Azure Functions.

**Fonts**: Cormorant Garamond (`font-cormorant`) for the brand name/editorial headings. DM Sans (`font-sans`) for all body/UI text. Both loaded via `next/font/google` in `layout.tsx`.

**Colors**: Custom Tailwind tokens — `brand-black`, `brand-white`, `brand-gray`, `brand-border`, `brand-muted`, `accent-red`. Never use raw Tailwind color scales.

**State**: Color and size selection state lives in `ProductPage.tsx`. Drawer open/close state lives in `Navbar.tsx`. No global state management.

**Components**:
- `Navbar.tsx` — sticky header, owns drawer state
- `NavDrawer.tsx` — slide-in nav with Women/Men + nested sub-categories
- `ProductPage.tsx` — homepage, owns color/size state, composes all product sub-components
- `ColorSelector.tsx`, `SizeSelector.tsx` — controlled components (props only)
- `ProductAccordion.tsx` — uses `@radix-ui/react-accordion` (Description, Fit, Materials & Care, Details, Clarifications)

## Design Conventions

- Mobile-first always. Desktop breakpoints (`md:`) only if explicitly scoped.
- All Tailwind classes written mobile-first (no desktop-first overrides).
- Touch targets minimum 44×44px (size buttons are `w-12 h-12`).
