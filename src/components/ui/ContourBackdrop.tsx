"use strict";

import { PropsWithChildren } from "react";

export type ContourBackdropProps = PropsWithChildren<{
  className?: string;
  opacity?: number;
  drift?: boolean;
}>;

export function ContourBackdrop({ className, opacity = 0.35, drift = false }: ContourBackdropProps) {
  const paths = [
    "M 80 300 C 200 120, 600 120, 720 300 C 600 480, 200 480, 80 300 Z",
    "M 120 300 C 220 160, 580 160, 680 300 C 580 440, 220 440, 120 300 Z",
    "M 160 300 C 240 200, 560 200, 640 300 C 560 400, 240 400, 160 300 Z",
    "M 200 300 C 260 240, 540 240, 600 300 C 540 360, 260 360, 200 300 Z",
    "M 240 300 C 280 270, 520 270, 560 300 C 520 330, 280 330, 240 300 Z",
    "M 100 180 Q 400 60 700 180",
    "M 100 420 Q 400 540 700 420",
  ];

  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
      style={{ backgroundColor: "var(--surface)" }}
    >
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ opacity }}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="contour-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF7A45" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#2DD4BF" />
          </linearGradient>
        </defs>
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={i === 2 ? "url(#contour-grad)" : "var(--text)"}
            strokeWidth={i === 2 ? 1.5 : 1}
            strokeOpacity={i === 2 ? 1 : 0.14}
            style={
              drift && i === 2
                ? {
                    strokeDasharray: "200 1000",
                    strokeDashoffset: 0,
                    animation: "contour-drift 40s linear infinite",
                  }
                : undefined
            }
          />
        ))}
      </svg>
      {drift ? (
        <style>{`@keyframes contour-drift { to { stroke-dashoffset: -1200; } } @media (prefers-reduced-motion: reduce) { path { animation: none !important; } }`}</style>
      ) : null}
    </div>
  );
}
