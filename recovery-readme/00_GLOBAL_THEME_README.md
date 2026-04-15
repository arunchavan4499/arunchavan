# Global Theme Recovery

## Scope
This file tracks global/light-mode accent updates discussed in chat.

## Canonical light-mode accent rule
When asked to replace green accent in light mode, use:

```css
background: radial-gradient(ellipse at center, #F5957A 0%, #E8705A 100%);
```

## 1) `src/index.css` token recovery
Set light theme tokens to peach-compatible values.

```css
:root {
  --primary: 11 75% 63%;
  --ring: 11 75% 63%;
  --sidebar-primary: 11 75% 63%;
  --sidebar-ring: 11 75% 63%;
}
```

Notes:
- Only light-mode tokens were changed in chat.
- Dark-mode tokens were preserved unless explicitly stated.

## 2) Certificates icon accent recovery (`src/components/CertificatesSection.tsx`)
Light mode should use peach radial gradient while keeping dark mode green behavior.

```tsx
<div className="bg-[radial-gradient(ellipse_at_center,_#F5957A_0%,_#E8705A_100%)] dark:bg-emerald-500/20 ...">
  ...
</div>
```

## 3) Footer Gmail hover accent recovery (`src/components/Footer.tsx`)
Gmail hover in light mode should be peach.

```tsx
className={
  social === "Gmail"
    ? "... hover:text-[#E8705A] dark:hover:text-emerald-400 ..."
    : "..."
}
```

## Verification
After restoring these global accents, run:

```bash
npm run build
```
