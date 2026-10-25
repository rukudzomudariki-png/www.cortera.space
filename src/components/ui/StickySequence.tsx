"use client";


export type StickyStep = {
  index: string;
  title: string;
  body: string;
  schematic?: React.ReactNode;
};

export type StickySequenceProps = {
  steps: StickyStep[];
  className?: string;
};

export function StickySequence({ steps, className }: StickySequenceProps) {
  return (
    <div className={`space-y-6 md:space-y-0 ${className ?? ""}`}>
      {steps.map((s) => (
        <div
          key={s.index}
          className="md:sticky md:top-24 md:min-h-[60vh] flex flex-col md:flex-row gap-8 items-start bg-paper py-8 md:py-12"
        >
          <div className="md:w-1/2">
            <span className="font-mono text-[var(--font-size-label)] text-muted block mb-3">{s.index}</span>
            <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] mb-3">{s.title}</h3>
            <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-muted max-w-[52ch]">{s.body}</p>
          </div>
          <div className="md:w-1/2 w-full" aria-hidden="true">
            {s.schematic}
          </div>
        </div>
      ))}
    </div>
  );
}
