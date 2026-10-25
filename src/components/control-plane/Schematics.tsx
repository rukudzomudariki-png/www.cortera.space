"use client";

import { motion, useReducedMotion } from "framer-motion";

const stroke = "var(--text)";

function S({ children, ...p }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden="true" {...p}>
      {children}
    </svg>
  );
}

export function SchematicPermissions() {
  const reduced = useReducedMotion();
  return (
    <S>
      {[40, 70, 100].map((y, i) => (
        <g key={y}>
          <line x1="20" y1={y} x2="180" y2={y} stroke={stroke} strokeWidth="1.5" opacity="0.8" />
          <text x="24" y={y - 6} fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.7">
            {["resource.action", "resource.action", "resource.action"][i]}
          </text>
          {i === 0 && (
            <text x="160" y={y - 6} fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.9">
              allow
            </text>
          )}
          {i === 1 && (
            <text x="162" y={y - 6} fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.9">
              deny
            </text>
          )}
          {i === 2 && (
            <text x="150" y={y - 6} fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.9">
              approval
            </text>
          )}
        </g>
      ))}
      <motion.path
        d="M 90 120 L 90 135 M 80 135 L 100 135 M 82 135 L 82 150 M 98 135 L 98 150"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <text x="100" y="155" fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.7">
        closed
      </text>
    </S>
  );
}

export function SchematicContainment() {
  const reduced = useReducedMotion();
  return (
    <S>
      <motion.rect
        x="30"
        y="20"
        width="140"
        height="120"
        rx="4"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="6 4"
        opacity="0.8"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <circle cx="100" cy="80" r="12" fill="none" stroke={stroke} strokeWidth="1.5" />
      <text x="100" y="84" fontSize="8" textAnchor="middle" fontFamily="var(--font-geist-mono)" fill={stroke}>
        agent
      </text>
      <motion.line
        x1="100"
        y1="80"
        x2="185"
        y2="60"
        stroke="url(#g)"
        strokeWidth="1.5"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <text x="170" y="55" fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.9">
        lock
      </text>
    </S>
  );
}

export function SchematicMonitoring() {
  const reduced = useReducedMotion();
  return (
    <S>
      <line x1="20" y1="80" x2="180" y2="80" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      {[30, 55, 80, 105, 130, 155].map((x) => (
        <motion.line
          key={x}
          x1={x}
          y1="72"
          x2={x}
          y2="88"
          stroke={stroke}
          strokeWidth="1.5"
          initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 0.3, delay: (x - 30) / 200 }}
        />
      ))}
      <text x="20" y="60" fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.7">
        runs / events
      </text>
    </S>
  );
}

export function SchematicCost() {
  const reduced = useReducedMotion();
  const bars = [160, 120, 90, 60];
  return (
    <S>
      {bars.map((w, i) => (
        <motion.rect
          key={i}
          x="20"
          y={30 + i * 28}
          width={w}
          height="12"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          opacity="0.8"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
      <motion.line
        x1="20"
        y1={30 + 4 * 28}
        x2="100"
        y2={30 + 4 * 28}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.7"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <text x="108" y={30 + 4 * 28 + 4} fontSize="8" fontFamily="var(--font-geist-mono)" fill={stroke} opacity="0.7">
        not reported
      </text>
    </S>
  );
}

export function SchematicFailure() {
  const reduced = useReducedMotion();
  const marks = [
    [40, 40],
    [60, 110],
    [90, 30],
    [120, 100],
    [150, 50],
  ];
  return (
    <S>
      {marks.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          initial={reduced ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        />
      ))}
      <motion.circle
        cx="100"
        cy="80"
        r="14"
        fill="none"
        stroke="url(#g2)"
        strokeWidth="1.5"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <text x="100" y="84" fontSize="8" textAnchor="middle" fontFamily="var(--font-geist-mono)" fill={stroke}>
        cluster
      </text>
    </S>
  );
}

export function SchematicReview() {
  const reduced = useReducedMotion();
  return (
    <S>
      <circle cx="40" cy="80" r="12" fill="none" stroke={stroke} strokeWidth="1.5" />
      <text x="40" y="84" fontSize="8" textAnchor="middle" fontFamily="var(--font-geist-mono)" fill={stroke}>
        draft
      </text>
      <motion.line
        x1="52"
        y1="80"
        x2="88"
        y2="80"
        stroke={stroke}
        strokeWidth="1.5"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4 }}
      />
      <rect x="88" y="68" width="36" height="24" rx="2" fill="none" stroke={stroke} strokeWidth="1.5" />
      <text x="106" y="84" fontSize="7" textAnchor="middle" fontFamily="var(--font-geist-mono)" fill={stroke}>
        evaluation
      </text>
      <motion.line
        x1="124"
        y1="80"
        x2="160"
        y2="80"
        stroke={stroke}
        strokeWidth="1.5"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      <circle cx="170" cy="80" r="10" fill="none" stroke={stroke} strokeWidth="1.5" />
      <text x="170" y="76" fontSize="7" textAnchor="middle" fontFamily="var(--font-geist-mono)" fill={stroke}>
        person
      </text>
      <text x="170" y="86" fontSize="7" textAnchor="middle" fontFamily="var(--font-geist-mono)" fill={stroke}>
        approval
      </text>
    </S>
  );
}
