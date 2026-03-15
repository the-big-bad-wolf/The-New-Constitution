# Project Guidelines

## Project Overview

This project is a website built to promote a brand new constitution aimed at limiting the government through careful design of the political system. The constitution is designed to align the political incentives of politicians in such a way to produce limited government. The website contains a proposed draft of this new constitution, a rationale for the design choices made in the draft, and a landing page to introduce the project and its goals. The website is built with Astro, SolidJS and TypeScript. The live site is hosted at https://newconstitution.pages.dev/

## Code Style

- Follow existing Astro + TypeScript style in `src/pages/*.astro`, `src/layouts/*.astro`, and `src/components/*`.
- Keep TypeScript strict-compatible (`tsconfig` extends `astro/tsconfigs/strict`). Add explicit types in scripts/utilities when inference is unclear.
- Prefer small, focused components and utilities over large inline blocks.
- Reuse existing Tailwind + daisyUI patterns from `src/misc.css` and component classes before adding new global styles.

## Architecture

- `src/layouts/MainLayout.astro` is the shared page shell (SEO/meta tags, Navbar, Footer).
- `src/pages/index.astro` is a composed landing page using reusable sections/components.
- `src/pages/draft.astro` and `src/pages/rationale.astro` render content collection entries (`documents`) and build a table of contents from rendered headings.
- `src/content/documents/*.md` is the source of long-form document content.
- `src/utils/toc.ts` contains TOC transformation logic and should stay framework-agnostic.
- `src/components/Morpher.tsx` is a Solid island; mount interactive components with Astro client directives (for example, `client:load`).

## Build and Test

- Install dependencies: `npm install`
- Local dev server: `npm run dev`
- Production build: `npm run build` (runs `astro check` before `astro build`)
- Preview build output: `npm run preview`
- No dedicated test runner is configured in `package.json`; validate changes via `npm run build` at minimum.

## Conventions

- Content collection: keep using the default `defineCollection` setup in `src/content.config.ts` for `documents`.
- For draft/rationale pages, preserve the pattern: `getEntry(...)` -> `render(...)` -> `buildTocItems(headings)`.
- Keep shared metadata/SEO changes centralized in `src/layouts/MainLayout.astro`.
- When updating copy-heavy sections, edit markdown files in `src/content/documents/` instead of hardcoding text in page components.
