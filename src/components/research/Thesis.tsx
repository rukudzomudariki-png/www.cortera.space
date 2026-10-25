"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

const TEXT = "Safety cannot be a layer added after the fact. It has to live in the machinery: what an agent may touch, what happens when it steps outside, and a record of everything it did.";

function Word({ word, progress, index, total }: { word: string; progress: ReturnType<typeof useScroll>["scrollYProgress"]; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start * 0.6, Math.min(1, end * 0.6 + 0.2)], [0.25, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

export function Thesis() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const words = TEXT.split(" ");
  return (
    <Section variant="paper">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>OUR VIEW</Eyebrow>
        <p
          ref={ref as unknown as React.RefObject<HTMLParagraphElement>}
          className="mt-6 font-sans font-medium text-[clamp(28px,4.5vw,52px)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]"
        >
          {reduced
            ? TEXT
            : words.map((w, i) => (
                <Word key={i} word={w} progress={scrollYProgress} index={i} total={words.length} />
              ))}
        </p>
      </Container>
    </Section>
  );
}
