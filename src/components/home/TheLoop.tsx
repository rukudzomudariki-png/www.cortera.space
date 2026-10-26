"use client";

import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Container } from "@/components/ui/Container";

const NODES = [
  { label: "Build", sub: ["Agents", "and robots"] },
  { label: "Deploy", sub: ["In the real", "world"] },
  { label: "Observe", sub: ["Permissions,", "monitoring, cost"] },
  { label: "Improve", sub: ["Failure analysis", "and review"] },
];

const R = 150;
const CENTER = { x: 400, y: 200 };
const LABEL_OFFSET = R + 6 + 12;

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

        <div className="mt-16 flex justify-center">
          <svg
            ref={ref}
            viewBox="-120 0 1040 460"
            className="w-full max-w-[420px] h-auto mx-auto overflow-visible"
            aria-hidden="true"
            style={{ overflow: "visible" }}
          >
            <m.circle
              cx={CENTER.x}
              cy={CENTER.y}
              r={R}
              fill="none"
              stroke="var(--ink)"
              strokeWidth="1.5"
              initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
              animate={reduced || inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            {NODES.map((n, i) => {
              const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const ux = Math.cos(angle);
              const uy = Math.sin(angle);
              const nx = CENTER.x + R * ux;
              const ny = CENTER.y + R * uy;
              const lx = CENTER.x + LABEL_OFFSET * ux;
              const ly = CENTER.y + LABEL_OFFSET * uy;
              const anchor =
                i === 0 ? "middle" : i === 1 ? "start" : i === 2 ? "middle" : "end";
              return (
                <g key={n.label}>
                  <circle cx={nx} cy={ny} r="6" fill="var(--ink)" />
                  <text
                    x={lx}
                    y={ly}
                    textAnchor={anchor}
                    dominantBaseline="middle"
                    className="font-sans"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      fill: "var(--ink)",
                      paintOrder: "stroke",
                      stroke: "var(--paper)",
                      strokeWidth: 6,
                      strokeLinejoin: "round",
                    }}
                  >
                    {n.label}
                  </text>
                  <text
                    x={lx}
                    y={i === 2 ? ly - 28 : ly + 16}
                    textAnchor={anchor}
                    className="font-sans"
                    style={{
                      fontSize: 11,
                      fill: "var(--ink)",
                      opacity: 0.85,
                      paintOrder: "stroke",
                      stroke: "var(--paper)",
                      strokeWidth: 6,
                      strokeLinejoin: "round",
                    }}
                  >
                    {n.sub.map((line, idx) => (
                      <tspan
                        key={idx}
                        x={lx}
                        dy={idx === 0 ? 0 : 13}
                      >
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </Container>
    </Section>
  );
}