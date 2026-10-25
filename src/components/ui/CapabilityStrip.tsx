"use client";

const ITEMS = [
  "Permissions",
  "Guardrails",
  "Monitoring",
  "Cost visibility",
  "Failure analysis",
  "Human oversight",
];

const Dot = ({ className }: { className?: string }) => (
  <span
    className={`inline-block w-[4px] h-[4px] rounded-full shrink-0 ${className ?? ""}`}
    style={{ background: "var(--gradient-signature)" }}
    aria-hidden
  />
);

const track = () => (
  <>
    {ITEMS.map((item, i) => (
      <span key={item} className="flex items-center">
        <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted whitespace-nowrap">
          {item}
        </span>
        {i < ITEMS.length - 1 && <Dot className="mx-1" />}
      </span>
    ))}
  </>
);

export function CapabilityStrip() {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  if (reduced) {
    return (
      <div className="bg-bg border-t border-line border-b border-line h-[72px]">
        <div className="px-[var(--side-padding)] overflow-x-auto">
          <div className="flex items-center min-w-max">
            {track()}
          </div>
        </div>
      </div>
    );
  }

  if (isDesktop) {
    return (
      <div className="bg-bg border-t border-line border-b border-line h-[72px]">
        <div className="px-[var(--side-padding)] flex items-center justify-between">
          {track()}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg border-t border-line border-b border-line h-[72px]">
      <div className="px-[var(--side-padding)] overflow-hidden">
        <div
          className="flex items-center animate-marquee"
          tabIndex={0}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          <div className="min-w-max flex items-center">{track()}</div>
          <div className="min-w-max flex items-center" aria-hidden>
            {track()}
          </div>
        </div>
      </div>
    </div>
  );
}
