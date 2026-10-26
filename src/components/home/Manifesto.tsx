"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

const TEXT = "Autonomous machines are about to run the hardest work on Earth. Cortera builds them, and builds the controls that keep them safe.";
const WORDS = TEXT.split(" ");

function Word({ word, progress, index, total }: { word: string; progress: ReturnType<typeof useScroll>["scrollYProgress"]; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start * 0.6, Math.min(1, end * 0.6 + 0.2)], [0.25, 1]);
  return (
    <m.span style={{ opacity }} className="inline-block" aria-hidden="true">{word} </m.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <Section variant="dark" id="mission">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>OUR MISSION</Eyebrow>
        <p
          ref={ref as unknown as React.RefObject<HTMLParagraphElement>}
          className="mt-6 font-sans font-medium text-[clamp(28px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]"
          aria-label={TEXT}
        >
          {reduced
            ? TEXT
            : WORDS.map((w, i) => (
                <Word key={i} word={w} progress={scrollYProgress} index={i} total={WORDS.length} />
              ))}
        </p>
      </Container>
    </Section>
  );
}
