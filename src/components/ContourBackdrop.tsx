"use strict";

import { PropsWithChildren } from "react";

export type ContourBackdropProps = PropsWithChildren<{
  className?: string;
  opacity?: number;
}>;

const CONTOUR_VIEW = "0 0 800 600";

export function ContourBackdrop({ className, opacity = 0.35 }: ContourBackdropProps) {
  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
      style={{ backgroundColor: "var(--surface)" }}
    >
      <svg
        viewBox={CONTOUR_VIEW}
        preserveAspectRatio="none"
        className="w-full h-full block opacity-[0.35]"
        style={{ opacity }}
        fill="none"
        stroke="var(--text)"
        strokeWidth="1"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <path
            key={i}
            d={`M 0 ${600 - i * 60} Q 200 ${540 - i * 60} 400 ${580 - i * 60} T 800 ${560 - i * 60}`}
          />
        ))}
      </svg>
    </div>
  );
}
