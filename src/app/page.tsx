import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";
import { Manifesto } from "@/components/home/Manifesto";
import { TwoPillars } from "@/components/home/TwoPillars";
import { PhysicalAiFeature } from "@/components/home/PhysicalAiFeature";
import { ControlPlaneFeature } from "@/components/home/ControlPlaneFeature";
import { Industries } from "@/components/home/Industries";
import { TheLoop } from "@/components/home/TheLoop";
import { GlobalGlobe } from "@/components/home/GlobalGlobe";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PullQuote } from "@/components/ui/PullQuote";
import { Reveal } from "@/components/ui/Reveal";
import { ClosingLine } from "@/components/ui/ClosingLine";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cortera — Physical AI for Mining & Agriculture",
  description: "Cortera builds intelligent robotic systems for mining and agriculture, and the control plane that keeps every agent, in the cloud or on the ground, safe, observable and under human oversight.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <Manifesto />
      <TwoPillars />
      <PhysicalAiFeature />
      <ControlPlaneFeature />
      <Industries />
      <TheLoop />
      <GlobalGlobe />
      <Section variant="paper" id="quote">
        <Container className="py-[var(--section-padding)] flex justify-center">
          <Reveal>
            <PullQuote text="Today is your opportunity to build the tomorrow you want." attribution="Ken Poirot" />
          </Reveal>
        </Container>
      </Section>
      <Section variant="sand" id="closing" className="py-[clamp(120px,16vw,240px)]">
        <Container className="flex flex-col items-center text-center gap-8">
          <ClosingLine />
          <Lede className="text-sand-ink max-w-[60ch]" maxWidth="60ch">
            Talk to us about bringing safe, intelligent autonomy to your operation.
          </Lede>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/contact" className="bg-sand-ink text-sand">
              Request a demo
            </Button>
            <Button variant="secondary" href="/safety" className="border-sand-ink text-sand-ink">
              Read our approach to safety
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
