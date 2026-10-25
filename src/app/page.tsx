import { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Logo } from "@/components/ui/Logo";
import { PullQuote } from "@/components/ui/PullQuote";
import { ClosingLine } from "@/components/ui/ClosingLine";
import { ContourBackdrop } from "@/components/ContourBackdrop";
import { IndustriesCard } from "@/components/IndustriesCard";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cortera — Physical AI for Mining & Agriculture",
  description: "Intelligent robotic systems for mining and agriculture, governed by a cloud AI control plane for permissions, guardrails, monitoring, cost visibility, failure analysis, and human oversight.",
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <Section variant="dark" hairline>
          <Container>
            <Reveal once>
              <Eyebrow>Control plane</Eyebrow>
              <Display level={2} accent="governs">The control plane governs cloud and physical agents</Display>
              <Lede className="mt-6">
                Permissions, guardrails, monitoring, cost visibility, failure analysis, and human oversight for the robotics that extract minerals and tend crops.
              </Lede>
              <MediaFrame
                src="/assets/control-terminal.jpg"
                alt="Hands at a keyboard with a dense terminal on a monitor"
                width={900}
                height={600}
                objectPosition="50% 50%"
                scrim="bottom"
                className="mt-10 rounded-none"
                style={{ filter: "grayscale(1) saturate(0.5) hue-rotate(210px) brightness(1.05)" }}
              />
            </Reveal>
          </Container>
        </Section>

        <Section variant="dark" hairline>
          <Container>
            <Reveal once delay={80}>
              <Eyebrow>Physical AI feature</Eyebrow>
              <div className="grid md:grid-cols-2 gap-[var(--side-padding)] items-center">
                <div>
                  <Display level={3}>Robots for the rock face and the field</Display>
                  <Lede className="mt-4">
                    Cortera builds intelligent robotic systems for mineral extraction and agriculture, operated through a single AI control plane with safety, security, and human oversight at every layer.
                  </Lede>
                  <div className="mt-8 flex gap-4">
                    <Button variant="primary">See mining systems</Button>
                    <Button variant="secondary">See agriculture systems</Button>
                  </div>
                </div>
                <div className="relative h-[60svh] min-h-[420px]">
                  <div
                    className="absolute inset-0 grain"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%), linear-gradient(to right, var(--bg) 0%, var(--bg) 55%, transparent 100%)",
                      maskImage:
                        "radial-gradient(circle at 80% 50%, black 55%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at 80% 50%, black 55%, transparent 100%)",
                    }}
                    aria-hidden
                  >
                    <ImageLogoMark />
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        <Section variant="dark" hairline>
          <Container>
            <Reveal once delay={160}>
              <Eyebrow>Claims we can stand behind</Eyebrow>
              <PullQuote />
            </Reveal>
          </Container>
        </Section>

        <Section variant="dark" hairline id="industries">
          <Container>
            <Reveal once delay={240}>
              <Eyebrow>Industries</Eyebrow>
              <Display level={2}>Mining and agriculture</Display>
              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <IndustriesCard
                  src="/assets/hero-mine.jpg"
                  alt="Two haul trucks driving through an underground mine tunnel"
                  objectPosition="70% 60%"
                  label="Mining"
                  title="Mineral extraction"
                />
                <div className="relative group h-[56svh] min-h-[340px] overflow-hidden border border-line rounded-[var(--radius-8)] bg-surface">
                  <ContourBackdrop className="h-full w-full" opacity={0.5} />
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">Agriculture</span>
                    <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] text-text">Field robotics</h3>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        <Section variant="sand">
          <Container className="py-[var(--section-padding)]">
            <ClosingLine />
          </Container>
        </Section>
      </main>
      <footer className="border-t border-line bg-surface py-[var(--section-padding)]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[var(--font-size-label)] text-muted">
            <Logo variant="mark" width={28} height={28} />
            <p>Cortera. Physical AI for mining and agriculture.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

function ImageLogoMark() {
  return (
    <Image
      src="/assets/logo-mark-dark.png"
      alt=""
      aria-hidden="true"
      width={560}
      height={560}
      priority
      className="w-full h-full object-cover object-[70%_50%]"
      style={{
        filter: "brightness(1.05) contrast(1.1)",
        opacity: 0.85,
      }}
    />
  );
}
