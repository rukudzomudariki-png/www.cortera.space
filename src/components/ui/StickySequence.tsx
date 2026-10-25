"use client";

import { useEffect, useRef, useState } from "react";

export type StickyStep = {
  index: string;
  title: string;
  body: string;
  schematic: React.ReactNode | ((active: boolean) => React.ReactNode);
};

export type StickySequenceProps = {
  steps: StickyStep[];
  className?: string;
};

export function StickySequence({ steps, className }: StickySequenceProps) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(i)) setActive(i);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [steps.length]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${className ?? ""}`}>
      <div className="hidden lg:block">
        <div className="sticky top-24 h-[70vh] flex items-center justify-center">
          <div className="w-full max-w-[420px] aspect-square flex items-center justify-center">
            {typeof steps[active]?.schematic === "function"
              ? (steps[active].schematic as (a: boolean) => React.ReactNode)(true)
              : steps[active]?.schematic}
          </div>
        </div>
      </div>
      <div className="space-y-24">
        {steps.map((s, i) => (
          <div
            key={s.index}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            data-index={i}
            className="min-h-[60vh] flex flex-col justify-center"
          >
            <div className="lg:hidden mb-6 flex items-center justify-center aspect-square max-w-[280px] mx-auto w-full">
              {typeof s.schematic === "function"
                ? (s.schematic as (a: boolean) => React.ReactNode)(i === active)
                : s.schematic}
            </div>
            <p className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted mb-2">
              {s.index}
            </p>
            <h3 className="font-sans font-semibold text-[var(--font-size-h3)] tracking-[var(--letter-spacing-tight)] mb-4">
              {s.title}
            </h3>
            <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-muted max-w-[48ch]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
