"use client";

import { useReducedMotion } from "framer-motion";

export function ControlPlaneDiagram() {
  const reduced = useReducedMotion();
  return (
    <div className="mt-10 w-full max-w-[720px] mx-auto">
      <svg viewBox="0 0 600 260" className="w-full h-auto" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="cp-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF7A45" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#2DD4BF" />
          </linearGradient>
        </defs>
        <g stroke="var(--ink)" strokeWidth={1.5}>
          <rect x="250" y="20" width="100" height="40" rx="8" />
        </g>
        <text x="300" y="45" textAnchor="middle" fontSize="12" fontFamily="var(--font-geist-mono)" fill="var(--ink)">Control Plane</text>
        <path d="M 270 60 L 150 150" stroke="var(--ink)" strokeWidth={1} strokeOpacity={0.4} />
        <path d="M 330 60 L 450 150" stroke="var(--ink)" strokeWidth={1} strokeOpacity={0.4} />
        <g stroke="var(--ink)" strokeWidth={1.5}>
          <path d="M 110 170 Q 100 150 120 150 Q 125 135 145 140 Q 160 130 175 145 Q 195 145 190 170 Z" />
        </g>
        <text x="150" y="200" textAnchor="middle" fontSize="11" fontFamily="var(--font-geist-mono)" fill="var(--ink)">Cloud agents</text>
        <g stroke="var(--ink)" strokeWidth={1.5}>
          <rect x="410" y="150" width="80" height="30" rx="6" />
          <circle cx="425" cy="190" r="6" />
          <circle cx="475" cy="190" r="6" />
        </g>
        <text x="450" y="215" textAnchor="middle" fontSize="11" fontFamily="var(--font-geist-mono)" fill="var(--ink)">Physical machines</text>
        {!reduced && (
          <>
            <circle r="4" fill="url(#cp-grad)"><animateMotion dur="4s" repeatCount="indefinite" path="M 270 60 L 150 150" /></circle>
            <circle r="4" fill="url(#cp-grad)"><animateMotion dur="4s" repeatCount="indefinite" path="M 330 60 L 450 150" begin="2s" /></circle>
          </>
        )}
      </svg>
    </div>
  );
}
