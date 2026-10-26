"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientHairline } from "@/components/ui/GradientHairline";
import { HERO_IMAGE } from "@/config/assets";

const EYEBROW = "PHYSICAL AI FOR MINING & AGRICULTURE";
const HEADLINE = "Frontier AI, built for the physical world.";
const ACCENT = "physical";
const WORDS = HEADLINE.split(" ");
const LEDE =
  "Cortera builds intelligent robotic systems for mining and agriculture, and the control plane that keeps every agent, in the cloud or on the ground, safe, observable and under human oversight.";

// Mask: left, top and bottom edges dissolve so no image rectangle is ever visible.
const MASK_LAYERS =
  "linear-gradient(to right, transparent, white 14%), linear-gradient(to bottom, transparent, white 10%), linear-gradient(to top, transparent, white 10%)";

const maskStyle: React.CSSProperties = {
  maskImage: MASK_LAYERS,
  WebkitMaskImage: MASK_LAYERS,
  maskComposite: "intersect",
  WebkitMaskComposite: "intersect",
} as unknown as React.CSSProperties;

export function Hero() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced || typeof window === "undefined") return;
    const el = wrapRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      let x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      let y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      x = Math.max(-12, Math.min(12, x));
      y = Math.max(-12, Math.min(12, y));
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, [reduced]);

  const imgStyle: React.CSSProperties = {
    filter: "brightness(0.85) saturate(0.9)",
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: reduced ? "none" : "transform 0.2s ease-out",
    willChange: "transform",
  };

  const visible = !reduced ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 };
  const hidden = !reduced ? { y: 12, opacity: 0 } : { y: 0, opacity: 1 };

  return (
    <section className="relative bg-bg text-text overflow-hidden z-0 h-[100svh] min-h-[720px]">
      {/* Image layer: right side, 78% of viewport on desktop; full-width block on mobile */}
      <div
        ref={wrapRef}
        className="w-full h-[52svh] grain z-0 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-[78vw] lg:h-auto"
        style={maskStyle}
      >
        {/* Left-to-right overlay: bg at container left edge -> transparent at 45% (desktop) */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent 45%)" }}
        />
        {/* Top scrim under nav */}
        <div
          className="hidden lg:block absolute top-0 left-0 right-0 h-[140px] pointer-events-none"
          style={{ background: "linear-gradient(to bottom, var(--bg), transparent)" }}
        />
        {/* Bottom scrim */}
        <div
          className="hidden lg:block absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
        />
        <Image
          src={HERO_IMAGE}
          alt="Tracked robot with a twin-lamp sensor arm in an underground mine tunnel"
          fill
          priority
          objectFit="cover"
          objectPosition="50% 50%"
          sizes="(min-width: 1024px) 78vw, 100vw"
          style={imgStyle}
        />
        {/* Radial glow on the robot's lamps, slow pulse */}
        <m.div
          className="hidden lg:block pointer-events-none"
          style={{
            position: "absolute",
            left: "50%",
            top: "33%",
            width: "44vw",
            height: "44vw",
            maxWidth: "640px",
            maxHeight: "640px",
            transform: "translate(-50%, -50%)",
            backgroundImage:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.07, 0.10, 0.07] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      </div>

      {/* Top-right signature under the nav (desktop only) */}
      <div className="hidden lg:block absolute top-[80px] right-[var(--side-padding)] z-20 text-right">
        <p className="font-mono text-[11px] text-muted leading-none">FRONTIER PHYSICAL AND CLOUD AI</p>
        <p className="font-mono text-[11px] text-muted leading-none">BUILT FOR THE GLOBE</p>
      </div>

      {/* Text block: bottom-left on desktop, static flow on mobile */}
      <div
        className="lg:absolute lg:inset-x-0 lg:bottom-0 lg:z-30"
        style={{ paddingBottom: "clamp(120px, 14vh, 180px)" }}
      >
        <div className="px-6 lg:px-0 lg:max-w-[var(--container-max)] lg:mx-auto">
          <Container full>
            <div className="grid grid-cols-12 lg:grid-cols-12">
              <div className="col-span-12 lg:col-span-7">
                {/* Eyebrow with preceding 24px gradient hairline */}
                <m.div
                  initial={hidden}
                  animate={visible}
                  transition={{ duration: 0.5, delay: reduced ? 0 : 0.15 }}
                  className="mb-2"
                >
                  <GradientHairline className="w-[24px] h-[1px] mb-2" />
                  <Eyebrow>{EYEBROW}</Eyebrow>
                </m.div>

                {/* Headline: word-by-word reveal, "physical" in Instrument Serif italic */}
                <m.h1
                  initial={hidden}
                  animate={visible}
                  transition={{ duration: 0.4, delay: reduced ? 0 : 0.35 }}
                  className="mb-6 font-sans font-semibold tracking-[-0.035em] leading-[1.02] text-[clamp(2.75rem,8vw,3.5rem)] lg:text-[var(--font-size-display)] text-text"
                >
                  {WORDS.map((word, i) => {
                    const isAccent = word === ACCENT;
                    return (
                      <m.span
                        key={i}
                        className="inline-block"
                        initial={hidden}
                        animate={visible}
                        transition={{ duration: 0.4, delay: reduced ? 0 : 0.35 + i * 0.06 }}
                      >
                        {isAccent ? (
                          <em className="font-[var(--font-instrument-serif)] italic">{word}</em>
                        ) : (
                          word
                        )}
                        {i < WORDS.length - 1 && " "}
                      </m.span>
                    );
                  })}
                </m.h1>

                {/* Lede */}
                <m.p
                  initial={hidden}
                  animate={visible}
                  transition={{ duration: 0.5, delay: reduced ? 0 : 0.85 }}
                  className="mt-6"
                >
                  <Lede className="text-[19px]" maxWidth="56ch">
                    {LEDE}
                  </Lede>
                </m.p>

                {/* Buttons */}
                <m.div
                  initial={hidden}
                  animate={visible}
                  transition={{ duration: 0.5, delay: reduced ? 0 : 1.0 }}
                  className="mt-10"
                >
                  <div className="flex flex-col gap-4 w-full lg:flex-row lg:w-auto lg:gap-4">
                    <Button variant="primary" href="/contact" size="md" className="lg:w-auto">
                      Request a demo
                    </Button>
                    <Button variant="secondary" href="/physical-ai" size="md" arrow className="lg:w-auto">
                      Explore Physical AI
                    </Button>
                  </div>
                </m.div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Bottom-center scroll cue (desktop only) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 hidden lg:block" style={{ bottom: "48px" }}>
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-[1px] h-[40px]">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px]"
              style={{ background: "linear-gradient(to bottom, transparent, var(--muted), transparent)" }}
              aria-hidden
            />
            {!reduced && (
              <m.div
                className="absolute left-1/2 -translate-x-1/2 top-0"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "9999px",
                  background: "var(--gradient-signature)",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ y: [0, 40] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
            )}
          </div>
          <span className="font-mono text-[10px] text-muted">SCROLL</span>
        </div>
      </div>
    </section>
  );
}
