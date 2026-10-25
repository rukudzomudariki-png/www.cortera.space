"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientHairline } from "@/components/ui/GradientHairline";
import { HERO_IMAGE } from "@/config/assets";

const MASK_LAYERS =
  "linear-gradient(to right, transparent, white 14%), linear-gradient(to bottom, transparent, white 10%), linear-gradient(to top, transparent, white 10%)";

const maskStyle: React.CSSProperties = {
  maskImage: MASK_LAYERS,
  WebkitMaskImage: MASK_LAYERS,
  maskComposite: "intersect",
  WebkitMaskComposite: "intersect",
} as unknown as React.CSSProperties;

export function PhysicalAiHeader() {
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

  const visible = { y: 0, opacity: 1 };
  const hidden = reduced ? { y: 0, opacity: 1 } : { y: 12, opacity: 0 };

  return (
    <section className="relative bg-bg text-text overflow-hidden z-0" style={{ height: "clamp(560px, 80vh, 820px)" }}>
      <div
        ref={wrapRef}
        className="w-full h-[48svh] grain z-0 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-[70%] lg:h-auto"
        style={maskStyle}
      >
        <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg), transparent 45%)" }} />
        <div className="hidden lg:block absolute top-0 left-0 right-0 h-[140px] pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg), transparent)" }} />
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg), transparent)" }} />
        <Image
          src={HERO_IMAGE}
          alt="Tracked robot with a twin-lamp sensor arm in an underground mine tunnel"
          fill
          priority
          objectFit="cover"
          objectPosition="50% 50%"
          sizes="(min-width: 1024px) 70vw, 100vw"
          style={imgStyle}
        />
        <motion.div
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
            backgroundImage: "radial-gradient(circle at center, rgba(59, 130, 246, 0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [0.07, 0.10, 0.07] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      </div>

      <div className="lg:absolute lg:inset-x-0 lg:bottom-0 lg:z-30" style={{ paddingBottom: "clamp(60px, 8vh, 100px)" }}>
        <div className="px-6 lg:px-0 lg:max-w-[var(--container-max)] lg:mx-auto">
          <Container full>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-7">
                <motion.div initial={hidden} animate={visible} transition={{ duration: 0.5, delay: reduced ? 0 : 0.15 }} className="mb-2">
                  <GradientHairline className="w-[24px] h-[1px] mb-2" />
                  <Eyebrow>PHYSICAL AI</Eyebrow>
                </motion.div>

                <motion.div initial={hidden} animate={visible} transition={{ duration: 0.4, delay: reduced ? 0 : 0.35 }} className="mb-6">
                  <Display level={1} className="text-text">
                    Machines for the work <em className="font-[var(--font-instrument-serif)] italic">nobody</em> should have to risk.
                  </Display>
                </motion.div>

                <motion.p initial={hidden} animate={visible} transition={{ duration: 0.5, delay: reduced ? 0 : 0.85 }} className="mt-6">
                  <Lede className="text-[19px]" maxWidth="56ch">
                    Cortera builds intelligent robotic systems for mining and agriculture: machines designed to perceive, plan and act in conditions that defeat ordinary automation, with a human always able to step in.
                  </Lede>
                </motion.p>

                <motion.div initial={hidden} animate={visible} transition={{ duration: 0.5, delay: reduced ? 0 : 1.0 }} className="mt-10">
                  <div className="flex flex-col gap-4 w-full lg:flex-row lg:w-auto lg:gap-4">
                    <Button variant="primary" href="/contact" size="md" className="lg:w-auto">Request a demo</Button>
                    <Button variant="secondary" href="/control-plane" size="md" arrow className="lg:w-auto">See the Control Plane</Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
