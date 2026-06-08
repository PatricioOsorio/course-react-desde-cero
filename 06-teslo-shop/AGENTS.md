# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Communication style

Default: caveman full.
Safety override: plain language for destructive/irreversible operations.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then production build
- `npm run lint` — ESLint, fails on any warning (`--max-warnings 0`)
- `npm run lint:fix` — ESLint with autofix
- `npm run format` — lint:fix then Prettier write across repo
- `npm run code:clean` — lint:fix + format; run before committing
- `npm run preview` — preview the production build

Dependencies are locked with `bun.lock` (installed via `bun install`); the scripts themselves run through npm/node.

There is no test runner configured in this project.

## Architecture

Teslo Shop — a React 19 + TypeScript + Vite SPA. Course project (`06-teslo-shop`).

**Feature-module layout.** `src/` is split into four top-level domains, each with its own `layouts/` and `pages/` folders:

- `shop/` — public storefront (Home, Product, Gender)
- `auth/` — Login, Register
- `admin/` — Dashboard, Products, admin Product editor
- `shared/` — cross-cutting code: `components/ui` (ShadCN), `components/` (custom like `Loading`), `lib/utils.ts`, `interfaces/`, `hooks/`

Each page/component lives in its own folder with an `index.ts` barrel that re-exports the component (and its `.interfaces.ts` when present). Import from the barrel, not the file. Components are exported as **named** exports but barrels also expose a `default` consumed by the router's lazy loader.

**Routing.** `src/app.router.tsx` defines a `createBrowserRouter` tree. Routes use React Router v7 `lazy: { Component }` with dynamic `import()` for code-splitting — each layout and page is loaded on demand. Three route groups (`/`, `/auth`, `/admin`) each mount a layout with nested children; unknown paths and bare group roots `Navigate` to sensible defaults. When adding a page: create the folder + barrel, then register it as a lazy route here.

**Path aliases** (kept in sync between `vite.config.ts` and `tsconfig.app.json`): `@/*` → `src`, plus `@shop`, `@auth`, `@admin`, `@shared`, `@styles`. Always import via aliases.

## Conventions

- **ShadCN UI** (`components.json`): style `radix-maia`, base color `neutral`, icon library `hugeicons` (`@hugeicons/react`). UI primitives land in `src/shared/components/ui`. CSS variables theming; global styles in `src/styles/app.css`, theme overrides in `src/styles/themes/`.
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config`; config is CSS-first).
- **React Compiler is enabled** (`babel-plugin-react-compiler` through `@rolldown/plugin-babel` in `vite.config.ts`) — do not hand-add `useMemo`/`useCallback` for memoization the compiler already handles.
- **Prettier**: single quotes, semicolons, width 100, trailing commas. `prettier-plugin-tailwindcss` sorts class names; `prettier-plugin-organize-attributes` orders JSX attributes as `id/name/key/ref` → default → `class/className`.
- **ESLint** flat config enforces `react/jsx-sort-props` (shorthand first, callbacks last, reserved first) as a warning, and lint runs with zero-warning tolerance — so prop ordering and unused vars (prefix intentional unused with `_`) will break the build.
- TypeScript is strict-ish: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (use `import type` for type-only imports), `erasableSyntaxOnly` (no TS enums / param properties).
