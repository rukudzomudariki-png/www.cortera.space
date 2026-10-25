"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const steps = [
  { n: "01", title: "Perceive", body: "Cameras, depth and other sensors build a continuous picture of the machine's surroundings, including the conditions that make perception difficult." },
  { n: "02", title: "Plan", body: "The system weighs what it sees against its task and its limits, and chooses actions it is allowed to take." },
  { n: "03", title: "Act", body: "Commands become controlled movement, with checks that can hold or stop a machine before it exceeds its remit." },
  { n: "04", title: "Oversee", body: "Every decision is recorded. People can review, approve, take over or halt a machine at any time." },
];

function Schematic({ index }: { index: number }) {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } };
  const transition = reduced ? {} : { duration: 0.8, ease: "easeInOut" as const };
  if (index === 0) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g0" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#2DD4BF" /></linearGradient>
        </defs>
        <g stroke="var(--text)" strokeOpacity={0.8} strokeWidth={1.5}>
          <motion.path d="M 100 95 L 92 110 L 108 110 Z" {...anim} transition={transition} />
          <motion.circle cx="100" cy="90" r="4" {...anim} transition={{ ...transition, delay: 0.1 }} />
        </g>
        <g stroke="url(#g0)" strokeWidth={1.5} fill="none">
          <motion.path d="M 100 80 A 20 20 0 0 1 120 100" {...anim} transition={{ ...transition, delay: 0.2 }} />
          <motion.path d="M 100 70 A 30 30 0 0 1 130 100" {...anim} transition={{ ...transition, delay: 0.3 }} />
          <motion.path d="M 100 60 A 40 40 0 0 1 140 100" {...anim} transition={{ ...transition, delay: 0.4 }} />
          <motion.path d="M 100 80 A 20 20 0 0 0 80 100" {...anim} transition={{ ...transition, delay: 0.2 }} />
          <motion.path d="M 100 70 A 30 30 0 0 0 70 100" {...anim} transition={{ ...transition, delay: 0.3 }} />
          <motion.path d="M 100 60 A 40 40 0 0 0 60 100" {...anim} transition={{ ...transition, delay: 0.4 }} />
        </g>
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F0508A" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient>
        </defs>
        <g stroke="var(--text)" strokeOpacity={0.8} strokeWidth={1.5}>
          <motion.path d="M 40 100 L 80 60 L 120 100 L 160 60" {...anim} transition={transition} />
          <motion.path d="M 80 60 L 80 140" {...anim} transition={{ ...transition, delay: 0.1 }} />
          <motion.path d="M 120 100 L 120 140" {...anim} transition={{ ...transition, delay: 0.15 }} />
          <motion.circle cx="40" cy="100" r="4" {...anim} transition={{ ...transition, delay: 0.2 }} />
          <motion.circle cx="160" cy="60" r="4" {...anim} transition={{ ...transition, delay: 0.25 }} />
        </g>
        <motion.path d="M 40 100 L 80 60 L 120 100 L 160 140" stroke="url(#g1)" strokeWidth={2} fill="none" {...anim} transition={{ ...transition, delay: 0.3 }} />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FF7A45" /><stop offset="100%" stopColor="#F0508A" /></linearGradient>
        </defs>
        <motion.circle cx="100" cy="100" r="70" stroke="var(--text)" strokeOpacity={0.25} strokeWidth={1} strokeDasharray="4 4" fill="none" {...anim} transition={transition} />
        <g stroke="var(--text)" strokeOpacity={0.8} strokeWidth={1.5}>
          <motion.path d="M 100 100 L 100 60 L 125 45" {...anim} transition={transition} />
          <motion.circle cx="100" cy="100" r="6" {...anim} transition={{ ...transition, delay: 0.1 }} />
          <motion.circle cx="125" cy="45" r="4" {...anim} transition={{ ...transition, delay: 0.2 }} />
        </g>
        <motion.path d="M 100 100 L 140 70" stroke="url(#g2)" strokeWidth={2} strokeDasharray="4 4" fill="none" {...anim} transition={{ ...transition, delay: 0.3 }} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#3B82F6" /></linearGradient>
      </defs>
      <g stroke="var(--text)" strokeOpacity={0.8} strokeWidth={1.5}>
        <motion.circle cx="45" cy="60" r="10" {...anim} transition={transition} />
        <motion.path d="M 45 70 L 45 120 M 45 85 L 30 105 M 45 85 L 60 105 M 45 120 L 35 150 M 45 120 L 55 150" {...anim} transition={{ ...transition, delay: 0.1 }} />
      </g>
      <g stroke="var(--text)" strokeOpacity={0.8} strokeWidth={1.5}>
        <motion.rect x="130" y="80" width="40" height="30" rx="4" {...anim} transition={{ ...transition, delay: 0.2 }} />
        <motion.path d="M 140 110 L 135 135 M 160 110 L 165 135" {...anim} transition={{ ...transition, delay: 0.25 }} />
      </g>
      <motion.path d="M 60 95 L 130 95" stroke="url(#g3)" strokeWidth={1.5} fill="none" {...anim} transition={{ ...transition, delay: 0.3 }} />
      <motion.path d="M 92 88 L 98 96 L 110 82" stroke="url(#g3)" strokeWidth={2} fill="none" {...anim} transition={{ ...transition, delay: 0.5 }} />
    </svg>
  );
}

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = blockRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLDivElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="dark" id="how-it-works">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>HOW IT WORKS</Eyebrow>
        <Display level={2} className="mt-4">
          From sensing to action, <em className="font-[var(--font-instrument-serif)] italic">supervised</em> at every step.
        </Display>

        <div className="mt-12 lg:hidden space-y-12">
          {steps.map((s, i) => (
            <div key={s.n}>
              <div className="w-full aspect-square max-w-[240px] mx-auto">
                <Schematic index={i} />
              </div>
              <p className="font-mono text-[var(--font-size-h1)] font-semibold mt-6 text-text">{s.n}</p>
              <h3 className="mt-2 text-[var(--font-size-h3)] font-semibold text-text">{s.title}</h3>
              <p className="mt-3 text-[var(--font-size-body)] text-muted leading-[var(--line-height-body)]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-12 mt-16">
          <div className="col-span-5 sticky top-[120px] self-start h-[calc(100vh-120px)] flex flex-col justify-center">
            <p className="font-mono text-[var(--font-size-display)] font-semibold text-text leading-none">{steps[active].n}</p>
            <div className="mt-8 w-full aspect-square max-w-[360px]">
              <Schematic index={active} />
            </div>
          </div>
          <div className="col-span-7">
            {steps.map((s, i) => (
              <div
                key={s.n}
                ref={(el) => { blockRefs.current[i] = el; }}
                className="min-h-[70vh] flex flex-col justify-center transition-opacity duration-300"
                style={{ opacity: i === active ? 1 : 0.35 }}
              >
                <h3 className="text-[var(--font-size-h2)] font-semibold text-text">{s.title}</h3>
                <p className="mt-4 text-[var(--font-size-body)] text-muted leading-[var(--line-height-body)] max-w-[48ch]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
