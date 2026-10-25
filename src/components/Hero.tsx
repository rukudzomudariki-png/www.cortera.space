"use client";

import { Display } from "@/components/ui/Display";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const RADIAL_GLOW_STYLE = {
  position: "absolute" as const,
  left: "25%",
  top: "45%",
  width: "30vw",
  height: "30vw",
  maxWidth: "700px",
  maxHeight: "700px",
  transform: "translate(-50%, -50%)",
  backgroundImage: "radial-gradient(circle at center, rgba(59, 130, 246, 0.10) 0%, transparent 70%)",
  pointerEvents: "none" as const,
  zIndex: 0,
} as React.CSSProperties;

export function Hero() {
  return (
    <section className="relative bg-bg text-text overflow-hidden min-h-[70svh]">
      <MediaFrame
        src="/assets/hero-mine.jpg"
        alt="Two haul trucks driving through an underground mine tunnel"
        fill
        priority
        objectPosition="50% 58%"
        objectFit="cover"
        scrim="bottom"
        grain
        parallax
        style={{ filter: "brightness(0.8) saturate(0.85)" }}
      >
        {/* Top scrim under nav */}
        <div
          className="absolute inset-x-0 top-0 h-[140px]"
          style={{
            background: "linear-gradient(to bottom, var(--bg), transparent 40%)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
        {/* Left-to-right fade: dark on far left, transparent at 60% */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--bg) 0%, var(--bg) 40%, transparent 60%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 15,
          }}
        />
        {/* Bottom scrim */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40vh]"
          style={{
            background: "linear-gradient(to top, var(--bg), transparent 35%)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
        {/* Cool radial glow at vanishing point, slow pulse */}
        <motion.div
          style={RADIAL_GLOW_STYLE}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-[20]">
          <Container>
            <Reveal once>
              <Eyebrow>PHYSICAL AI FOR MINING &amp; AGRICULTURE</Eyebrow>
              <Display level={1} accent="frontier">
                Frontier Physical AI, built for the real world
              </Display>
              <Lede className="mt-6 max-w-[48ch]">
                Cortera operates intelligent robotic systems for mining and agriculture, governed by a cloud AI control plane for permissions, guardrails, monitoring, cost visibility, failure analysis, and human oversight.
              </Lede>
              <div className="mt-10 flex items-center gap-4">
                <Button variant="primary" size="lg" arrow>
                  See the systems
                </Button>
                <Button variant="ghost" size="lg" arrow>
                  Control plane
                </Button>
              </div>
            </Reveal>
          </Container>
        </div>
      </MediaFrame>
    </section>
  );
}
