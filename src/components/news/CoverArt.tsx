import { ASSETS } from "@/config/assets";

type CoverStyle = "blast-radius" | "contour" | "grid";

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function CoverArt({ slug, style, cover, className }: { slug: string; style: CoverStyle; cover?: string; className?: string }) {
  if (cover) {
    const resolved = (ASSETS as Record<string, string>)[cover] ?? cover;
    return (
      <div className={`relative overflow-hidden bg-surface ${className ?? ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolved} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-bg/40" />
      </div>
    );
  }
  const seed = hash(slug);
  const strokes = "rgba(242,241,236,0.14)";
  if (style === "blast-radius") {
    const r1 = 20 + (seed % 15);
    const r2 = r1 + 18;
    const r3 = r2 + 18;
    return (
      <svg viewBox="0 0 100 62.5" className={`block w-full h-full ${className ?? ""}`} aria-hidden="true">
        <rect width="100" height="62.5" fill="var(--surface)" />
        <circle cx="50" cy="31.25" r={r3} fill="none" stroke={strokes} strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="31.25" r={r2} fill="none" stroke={strokes} strokeWidth="0.5" />
        <circle cx="50" cy="31.25" r={r1} fill="none" stroke={strokes} strokeWidth="0.5" strokeDasharray="1 3" />
        <circle cx="30" cy="20" r="1.5" fill={strokes} />
        <circle cx="72" cy="42" r="1.5" fill={strokes} />
        <circle cx="60" cy="18" r="1.5" fill={strokes} />
        <line x1="10" y1="31.25" x2="90" y2="31.25" stroke="url(#g)" strokeWidth="0.8" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF7A45" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (style === "contour") {
    const lines = 6;
    return (
      <svg viewBox="0 0 100 62.5" className={`block w-full h-full ${className ?? ""}`} aria-hidden="true">
        <rect width="100" height="62.5" fill="var(--surface)" />
        {Array.from({ length: lines }).map((_, i) => {
          const y = 10 + i * 8 + ((seed >> (i * 2)) % 4);
          return (
            <path
              key={i}
              d={`M0 ${y} Q25 ${y - 4} 50 ${y + 2} T100 ${y}`}
              fill="none"
              stroke={i === 2 ? "url(#cg)" : strokes}
              strokeWidth="0.5"
            />
          );
        })}
        <defs>
          <linearGradient id="cg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F0508A" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  // grid
  const dots: React.ReactNode[] = [];
  for (let y = 4; y < 62; y += 6) {
    for (let x = 4; x < 100; x += 6) {
      dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r="0.4" fill={strokes} />);
    }
  }
  return (
    <svg viewBox="0 0 100 62.5" className={`block w-full h-full ${className ?? ""}`} aria-hidden="true">
      <rect width="100" height="62.5" fill="var(--surface)" />
      {dots}
      <path d="M4 31.25 L34 31.25 L50 19 L66 43 L96 43" fill="none" stroke="url(#gg)" strokeWidth="1" />
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
