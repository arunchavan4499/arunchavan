# Projects Page Recovery

## Scope
- `src/pages/Projects.tsx`
- `src/index.css` (project spotlight CSS rules)

## Chat-session status
- Direct code edits were executed on the Projects page and related global CSS.
- The page behavior was iteratively updated during chat based on user feedback.

## What was changed in chat
- Added project card spotlight interaction:
  - hovered card zooms in.
  - non-hovered cards blur and dim.
- Refined spotlight trigger to center hover zone only:
  - zoom activates only when cursor is inside center range of the card.
  - center range used in chat: 25% to 75% on both x and y axes.
- Added project action icons:
  - GitHub icon links to repository when `repositoryUrl` exists.
  - Deploy icon links to live URL when `liveUrl` exists.
- Added overflow handling with ShowMoreLess:
  - first 6 cards are shown by default.
  - additional cards appear in `ShowMoreLess` when count is greater than 6.

## 1) Imports and project model recovery (`src/pages/Projects.tsx`)

```tsx
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState, type MouseEvent } from "react";
import ShowMoreLess from "@/components/ShowMoreLess";

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tint: string;
  repositoryUrl?: string;
  liveUrl?: string;
};

const VISIBLE_PROJECT_COUNT = 6;
```

## 2) Center-zone hover recovery (`src/pages/Projects.tsx`)

```tsx
const [centerHoverProjectId, setCenterHoverProjectId] = useState<number | null>(null);

const handleProjectMouseMove = (event: MouseEvent<HTMLDivElement>, projectId: number) => {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return;
  }

  const rect = event.currentTarget.getBoundingClientRect();
  const xRatio = (event.clientX - rect.left) / rect.width;
  const yRatio = (event.clientY - rect.top) / rect.height;
  const isInCenterRange = xRatio > 0.25 && xRatio < 0.75 && yRatio > 0.25 && yRatio < 0.75;

  setCenterHoverProjectId((currentId) => {
    if (isInCenterRange) {
      return currentId === projectId ? currentId : projectId;
    }

    return currentId === projectId ? null : currentId;
  });
};
```

## 3) Project action icons recovery (`src/pages/Projects.tsx`)

```tsx
{project.repositoryUrl && (
  <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
    <Github className="h-4 w-4" aria-hidden="true" />
  </a>
)}

{project.liveUrl && (
  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live deployment`}>
    <ExternalLink className="h-4 w-4" aria-hidden="true" />
  </a>
)}
```

## 4) Show more recovery (`src/pages/Projects.tsx`)

```tsx
const hasOverflowProjects = filteredProjects.length > VISIBLE_PROJECT_COUNT;
const primaryProjects = hasOverflowProjects ? filteredProjects.slice(0, VISIBLE_PROJECT_COUNT) : filteredProjects;
const overflowProjects = hasOverflowProjects ? filteredProjects.slice(VISIBLE_PROJECT_COUNT) : [];

{hasOverflowProjects && (
  <ShowMoreLess
    previewHeight={0}
    showMoreLabel="- Show more -"
    showLessLabel="- Show less -"
    className="pt-3"
  >
    <div className="project-spotlight grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {overflowProjects.map((project, index) => renderProjectCard(project, index + VISIBLE_PROJECT_COUNT))}
    </div>
  </ShowMoreLess>
)}
```

## 5) Spotlight CSS recovery (`src/index.css`)

```css
@media (hover: hover) and (pointer: fine) {
  .project-spotlight-card {
    transition: filter 240ms ease, transform 240ms ease, opacity 240ms ease;
  }

  .project-spotlight-center-active .project-spotlight-card {
    filter: blur(2.2px);
    transform: scale(0.97);
    opacity: 0.74;
  }

  .project-spotlight-item.project-spotlight-item-centered .project-spotlight-card {
    filter: blur(0);
    transform: scale(1.05);
    opacity: 1;
  }
}
```

## Verification

```bash
npm run build
```
