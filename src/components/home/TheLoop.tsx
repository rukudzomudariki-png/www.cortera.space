"use client";

import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Container } from "@/components/ui/Container";

const NODES = [
  { label: "Build", sub: "Agents and robots" },
  { label: "Deploy", sub: "In the real world" },
  { label: "Observe", sub: "Permissions, monitoring, cost" },
  { label: "Improve", sub: "Failure analysis and review" },
];

export function TheLoop() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();

  return (
    <Section variant="paper" id="loop">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow className="text-muted">WHY ONE COMPANY</Eyebrow>
        <Display level={2} className="mt-4 text-ink">
          The robots and the controls depend on each other.
        </Display>
        <Lede className="mt-6 text-ink max-w-[60ch]" maxWidth="60ch">
          Because we build both halves, every machine ships with the oversight it needs, and every failure teaches the control plane something new.
        </Lede>

        {/* Desktop loop */}
        <div className="mt-16 hidden md:block">
          <svg ref={ref} viewBox="0 0 800 400" className="w-full max-w-[800px] mx-auto" aria-hidden="true">
            <m.circle
              cx="400"
              cy="200"
              r="150"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="1.5"
              initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
              animate={reduced || inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            {NODES.map((n, i) => {
              const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const x = 400 + 150 * Math.cos(angle);
              const y = 200 + 150 * Math.sin(angle);
              return (
                <g key={n.label}>
                  <circle cx={x} cy={y} r="6" fill="var(--ink)" />
                  <text x={x} y={y + (i < 2 ? -24 : 36)} textAnchor="middle" className="font-sans" style={{ fontSize: 16, fontWeight: 600, fill: "var(--ink)" }}>
                    {n.label}
                  </text>
                  <text x={x} y={y + (i < 2 ? -6 : 54)} textAnchor="middle" style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", fill: "var(--ink)", opacity: 0.7 }}>
                    {n.sub}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile vertical */}
        <div className="mt-12 md:hidden flex flex-col items-center gap-6">
          {NODES.map((n, i) => (
            <div key={n.label} className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-ink" />
              <p className="mt-2 font-sans font-semibold text-ink">{n.label}</p>
              <p className="font-mono text-[11px] text-ink/70">{n.sub}</p>
              {i < NODES.length - 1 && <div className="w-px h-8 bg-ink/30 mt-2" />}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
