"use client";

import { useEffect, useRef, useState } from "react";

interface ImpactCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function ImpactCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2500,
}: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-white sm:text-5xl">
        <span className="text-gradient-gold">{prefix}</span>
        {count.toLocaleString("en-IN")}
        <span className="text-gradient-gold">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium text-white/30">{label}</p>
    </div>
  );
}
