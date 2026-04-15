import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
};

const CountUp = ({ to, from = 0, duration = 1.2, className }: CountUpProps) => {
  const [value, setValue] = useState(from);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const delta = to - from;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + delta * eased);

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [to, from, duration]);

  return <span className={className}>{Math.round(value)}</span>;
};

export default CountUp;
