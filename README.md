# The New Constitution

Public website: <https://newconstitution.pages.dev/>

## Overview

This Astro project publishes the draft and rationale for The New Constitution,
including a responsive homepage, structured long-form documents,
and share/discussion links.

## Tech Stack

- Astro 5
- SolidJS integration for interactive text morphing
- Tailwind CSS + daisyUI
- TypeScript (strict Astro config)

## Development

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Production build:

```bash
pnpm build
```

Preview production output:

```bash
pnpm preview
```

## Content

Document content lives in the `documents` collection under `src/content/documents`:

- `draft.md`
- `rationale.md`

Collection schema is defined in `src/content.config.ts`.
