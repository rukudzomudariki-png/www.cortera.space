"use client";

import Link from "next/link";
import { ASSETS } from "@/config/assets";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ContourBackdrop } from "@/components/ui/ContourBackdrop";
import { ArrowRight } from "lucide-react";
import { m } from "framer-motion";

export function Industries() {
  return (
    <Section variant="dark" id="industries">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>INDUSTRIES</Eyebrow>
        <Display level={2} className="mt-4">
          Two industries. One standard of safety.
        </Display>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/industries/mining"
            className="group relative block aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-[var(--radius-8)] border border-line focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <m.div className="absolute inset-0" whileHover={{ scale: 1.03 }} transition={{ duration: 0.6 }}>
              <MediaFrame
                src={ASSETS.heroMine}
                alt="Haul trucks driving through an underground mine tunnel"
                fill
                objectPosition="50% 55%"
                scrim="bottom"
                grain
                className="absolute inset-0"
              />
            </m.div>
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h2 className="text-[var(--font-size-h2)] font-semibold tracking-[var(--letter-spacing-tight)] text-text">Mining</h2>
              <p className="text-[var(--font-size-body)] text-muted mt-2 max-w-[30ch]">Autonomy for extraction, hauling and the hazards of working underground.</p>
              <ArrowRight className="mt-4 h-5 w-5 text-text transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </Link>
          <Link
            href="/industries/agriculture"
            className="group relative block aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-[var(--radius-8)] border border-line focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <ContourBackdrop opacity={0.35} />
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h2 className="text-[var(--font-size-h2)] font-semibold tracking-[var(--letter-spacing-tight)] text-text">Agriculture</h2>
              <p className="text-[var(--font-size-body)] text-muted mt-2 max-w-[30ch]">Autonomy for the field: machines that work the land with precision and care.</p>
              <ArrowRight className="mt-4 h-5 w-5 text-text transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
