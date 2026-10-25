"use client";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const PILLARS = [
  {
    index: "01",
    title: "Physical AI & robotics",
    body: "We build intelligent robotic systems for complex industrial work in mining and agriculture. Machines that perceive, decide and act where conditions are hard and mistakes are costly.",
    href: "/physical-ai",
  },
  {
    index: "02",
    title: "The AI control plane",
    body: "Permissions, guardrails, monitoring, cost visibility, failure analysis and human oversight for every agent, whether it runs in the cloud or on the ground.",
    href: "/control-plane",
  },
];

export function TwoPillars() {
  return (
    <Section variant="dark" id="platform">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>ONE COMPANY, TWO HALVES</Eyebrow>
        <Display level={2} accent="Govern" className="mt-4">
          Build the agents. Govern them.
        </Display>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-line">
          {PILLARS.map((p) => (
            <div
              key={p.index}
              className="relative group p-12 transition-colors duration-300 hover:bg-surface"
            >
              <span className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "var(--gradient-signature)" }} />
              <span className="font-mono text-[var(--font-size-label)] text-muted block mb-4">{p.index}</span>
              <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] text-text mb-4">{p.title}</h3>
              <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-muted max-w-[40ch] mb-8">{p.body}</p>
              <Button variant="ghost" href={p.href} arrow>
                Explore
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
