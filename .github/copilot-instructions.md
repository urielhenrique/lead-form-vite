# Copilot / AI agent instructions

Short, actionable guidance to quickly work in this repository.

1. Project overview
- Type: Vite + React single-page app (see `vite.config.js` and `src/main.jsx`).
- Source tree: `src/` contains `components/`, `pages/`, `assets/` and global styles in `src/index.css`.
- Routing: `src/App.jsx` uses `react-router-dom`; `Home` lives in `src/pages/Home.jsx`.

2. Important files and patterns
- Layout and global UI: `src/components/Layout.jsx` implements header, mobile menu and footer.
- UI components: imports use `@/components/...` (e.g. `@/components/ui/button`) — confirm how `@` is resolved.
- Small utility: `createPageUrl` is imported from `@/utils` (used by `Layout.jsx`).

3. Build / dev / lint commands
- Start dev server: `npm run dev` (runs `vite`).
- Build production: `npm run build` (runs `vite build`).
- Preview build: `npm run preview` (runs `vite preview`).
- Lint: `npm run lint` (runs `eslint .`).

4. Immediate checks for AI edits (do these before changing imports or adding components)
- Confirm dependency presence: `Layout.jsx` imports `framer-motion`, `lucide-react`, `react-router-dom` and others but `package.json` currently lists only `react` and `react-dom`. Run `npm install` and add missing dependencies if import errors occur.
- Check path alias: there is no `tsconfig.json`/`jsconfig.json` or alias in `vite.config.js` in the repo root. If imports use `@/...`, look for editor-level aliases or add this snippet to `vite.config.js` to map `@` -> `src`:

```js
// vite.config.js (snippet)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})
```

- Check for Tailwind usage: `Layout.jsx` contains Tailwind-like utility classes (e.g., `bg-slate-50`, `md:flex`), but there is no `tailwind.config.*` in the repo. Verify whether Tailwind is expected; otherwise classes may be ignored.

5. Conventions and code style
- Component placement: small, reusable UI components go under `src/components/` (e.g., `components/ui/*`).
- Pages: route-level views go under `src/pages/`.
- Global CSS: `src/index.css` is used for base styles. Avoid duplicating global resets across files.

6. When modifying routes or global layout
- Update `src/App.jsx` routes and ensure `createPageUrl()` (if used) matches route paths.
- For layout changes, edit `src/components/Layout.jsx` — it contains header, mobile menu logic, and the footer.

7. Troubleshooting tips for AI agents
- If you encounter unresolved imports referencing `@/...`, search for `jsconfig.json`/`tsconfig.json` or update `vite.config.js` as above.
- If class names look like Tailwind but styles don't apply, check package.json for `tailwindcss` and for PostCSS/Tailwind config.
- Run `npm run dev` and watch console errors — they are the fastest indicator of missing packages or alias misconfiguration.

8. Examples of useful, small PRs an AI agent can do
- Add a `vite` alias mapping for `@` if missing and verify the dev server starts.
- Add missing entries to `package.json` (e.g., `react-router-dom`, `framer-motion`, `lucide-react`) if imports fail during `npm run dev`.
- Replace `@/utils` imports with relative paths if the project prefers no alias.

If anything is unclear or you expect other conventions (e.g., Tailwind intended), tell me which parts to expand and I'll iterate.
