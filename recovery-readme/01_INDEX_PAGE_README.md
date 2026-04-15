# Index/Home Page Recovery

## Scope
Files touched in chat for Home page behavior:
- `src/pages/Index.tsx` (indirectly, because it renders `HeroSection`)
- `src/components/HeroSection.tsx`
- `src/components/HeroDividerTruckLoader.tsx` (new file in chat; currently missing in corrupted state)
- `src/components/CertificatesSection.tsx`
- `src/components/Footer.tsx`

## 1) Hero heading spacing recovery
Requirement from chat: heading bottom margin exactly 40px.

```tsx
<h1 className="font-semibold tracking-tight mb-10 text-foreground dark:text-white">
  ...
</h1>
```

## 2) Hero divider truck/lamp loader recovery
Requirement from chat:
- Truck moves across divider line.
- Lamp appears only with truck pass.
- No blink during motion.
- Reduced size variant.
- Dark mode lamp visibility fixed.

### `src/components/HeroDividerTruckLoader.tsx` (restoration snippet)
```tsx
import styled from "styled-components";

const HeroDividerTruckLoader = () => {
  return (
    <StyledWrapper aria-hidden="true">
      <div className="truckWrap">
        <span className="lamp" />
        <div className="truck">
          <span className="cargo" />
          <span className="cab" />
          <span className="wheel wheelRear" />
          <span className="wheel wheelFront" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  .truckWrap {
    position: absolute;
    top: 50%;
    left: -92px;
    width: 120px;
    height: 30px;
    transform: translateY(-50%);
    animation: truckPass 5.4s linear infinite;
  }

  .lamp {
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: currentColor;
    color: hsl(var(--foreground));
    opacity: 0.92;
    filter: drop-shadow(0 0 6px currentColor);
  }

  .truck {
    position: absolute;
    left: 14px;
    top: 50%;
    width: 56px;
    height: 18px;
    transform: translateY(-50%);
  }

  .cargo {
    position: absolute;
    left: 0;
    top: 4px;
    width: 34px;
    height: 10px;
    border-radius: 3px;
    background: hsl(var(--muted-foreground));
  }

  .cab {
    position: absolute;
    right: 0;
    top: 2px;
    width: 20px;
    height: 12px;
    border-radius: 3px;
    background: hsl(var(--foreground));
  }

  .wheel {
    position: absolute;
    bottom: -2px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: hsl(var(--foreground));
    animation: wheelSpin 0.45s linear infinite;
  }

  .wheelRear {
    left: 8px;
  }

  .wheelFront {
    right: 6px;
  }

  @keyframes truckPass {
    0% {
      transform: translate(-92px, -50%);
    }
    100% {
      transform: translate(calc(100vw + 92px), -50%);
    }
  }

  @keyframes wheelSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default HeroDividerTruckLoader;
```

### `src/components/HeroSection.tsx` integration snippet
```tsx
import HeroDividerTruckLoader from "@/components/HeroDividerTruckLoader";

<div className="relative mt-8 h-[72px] w-full overflow-hidden">
  <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border/80" />
  <HeroDividerTruckLoader />
</div>
```

## 3) Hero light-mode accent color direction
Chat updates changed several hardcoded light green highlights to peach direction (`#E8705A`) while preserving dark mode green variants.

## 4) Certificates and Footer alignment
- Certificates light-mode icon/badge accent switched to peach radial gradient (see global README).
- Footer Gmail hover switched to peach in light mode.

## Verification
```bash
npm run build
```
