# Kindred Connect — Modern Portfolio

**A fast, accessible, and beautiful portfolio website** built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

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
npm run lint       # Run linter
```

## Project Structure

- `src/components/` — Reusable UI components
- `src/components/ui/` — shadcn/UI primitives
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
