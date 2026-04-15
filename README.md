# Kindred Connect — Modern Portfolio

**A fast, accessible, and beautiful portfolio website** built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

## Latest UI Updates (April 2026)

- Scroll-reactive navbar with glassmorphism behavior tuned for a clean hero view:
	- At page top, navbar shell visually merges with the background.
	- On scroll, navbar reveals with blur/border/shadow and shrinks smoothly.
	- Navbar background remains transparent while preserving legibility.
- Active route indicator updated to a non-jumping line style on desktop and mobile.
- Dark mode toggle upgraded with View Transitions API circular reveal:
	- Reveal expands from exact click position.
	- Radius is viewport-safe using `Math.hypot`.
	- Reduced-motion and non-support fallbacks toggle theme instantly.
- Marquee section refined with duplicated-track seamless motion and tuned typography.

## Copilot Chat Summary (April 14-15, 2026)

This section summarizes the requests handled in this chat and the outcomes.

### Project Page Requests

- Added project card spotlight behavior where the hovered card zooms in while sibling cards blur/dim.
- Refined the hover interaction so zoom activates only inside a center hover zone on each card.
- Added project action icons:
- GitHub icon opens repository URL when available.
- Deploy icon appears only when a live URL exists.
- Added project overflow behavior using the same Show more / Show less pattern used by the certificates section.
- Toggle visibility is tied to project count greater than 6.

### Build and Debug Work

- Ran production build (`npm run build`) and resolved blockers in sequence.
- Missing module error from Vite config (`lovable-tagger`) was resolved by installing dependencies with `npm install`.
- Fixed syntax/import typos (`iimport` -> `import`) in `src/pages/About.tsx` and `src/pages/Contact.tsx`.
- Repaired truncated JSX/component endings in `src/pages/About.tsx` and `src/pages/Contact.tsx`.

### Final Status From This Chat

- Build now succeeds with `npm run build`.
- Build warning remains for stale Browserslist data.
- `npm audit` reported vulnerabilities; dependency hardening was not applied in this chat.

### Notes

- During this conversation, some edits were reverted/reset and then reapplied as needed.
- This summary captures the full request-and-fix flow, including intermediate failures and final successful build.

## Getting Started

### Prerequisites

- Node.js (v18+) and npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

Clone and set up locally:

```sh
# Clone the repository
git clone <YOUR_REPO_URL>

# Navigate to project
cd kindred-connect

# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev
```

### GitHub Heatmap Setup

The heatmap in `src/components/GitHubHeatmap.tsx` uses live GitHub data through the GraphQL API.

1. Copy `.env.example` to `.env.local`
2. Set your GitHub username and personal access token:

```sh
VITE_GITHUB_USERNAME=your-github-username
VITE_GITHUB_TOKEN=your-github-personal-access-token
```

3. Restart the dev server after changing env values.

Note: Vite `VITE_` variables are exposed to the browser at runtime. Use a read-only token dedicated to this site.

### Build & Deployment

```sh
# Production build
npm run build

# Preview production build
npm run preview
```

## Technologies

This project is built with:

- **Vite** — Lightning-fast build tool
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **shadcn/UI** — Accessible component library
- **React Router** — Client-side routing

## Development

```sh
npm run dev        # Start dev server
npm run build      # Production build
npm run test       # Run tests
npm run lint       # Run linter
```

## Project Structure

- `src/components/` — Reusable UI components
- `src/pages/` — Route pages
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions
- `src/index.css` — Global styles & typography system

## Accessibility

All components support:
- ✅ Reduced motion preferences
- ✅ Keyboard navigation
- ✅ Screen reader compatibility
- ✅ ARIA labels & roles
- ✅ 44x44px touch targets

## Dark Mode

Built-in dark mode support with localStorage persistence.

- Theme key: `kindred-theme`
- Toggle entrypoint: navbar desktop and mobile theme buttons
- Transition: click-origin circular reveal via View Transitions API
- Fallback: instant class toggle when View Transitions API is unavailable

---

**Questions?** Check [.github/copilot-instructions.md](.github/copilot-instructions.md) for AI agent guidelines.
