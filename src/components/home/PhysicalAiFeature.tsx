"use client";

import { ASSETS } from "@/config/assets";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { m } from "framer-motion";

export function PhysicalAiFeature() {
  return (
    <Section variant="dark" id="physical-ai" className="h-[clamp(560px,90vh,900px)] overflow-hidden">
      <Container className="relative h-full py-[var(--section-padding)]">
        <div className="grid grid-cols-12 h-full items-center">
          <div className="col-span-12 lg:col-span-6 relative z-10">
            <Eyebrow>PHYSICAL AI</Eyebrow>
            <Display level={2} className="mt-4">
              Where the work is hardest, the machines should be smartest.
            </Display>
            <Lede className="mt-6">
              Underground, open-pit and in the field, conditions change by the minute. Our systems are designed to perceive, plan and act in them, with a human always able to step in.
            </Lede>
            <div className="mt-8">
              <Button variant="primary" href="/physical-ai">
                Explore Physical AI
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div
        className="absolute top-0 right-0 bottom-0 w-[60%] pointer-events-none"
        style={{ mixBlendMode: "screen", filter: "brightness(1.1) contrast(1.2)" }}
        aria-hidden="true"
      >
        <m.div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at center, #3B82F6, transparent 70%)" }}
          animate={{ opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <Image
          src={ASSETS.logoMarkDark}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 768px) 60vw, 60vw"
          className="object-contain"
          style={{
            maskImage:
              "radial-gradient(circle at center, black 45%, transparent 85%), linear-gradient(to left, transparent, black 30%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 45%, transparent 85%), linear-gradient(to left, transparent, black 30%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <div className="absolute inset-0 grain" />
      </div>
    </Section>
  );
}
