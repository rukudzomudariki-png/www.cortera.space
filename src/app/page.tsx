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
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { PostCard } from "@/components/news/PostCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cortera — Physical AI for Mining & Agriculture",
  description: "Cortera builds intelligent robotic systems for mining and agriculture, and the control plane that keeps every agent, in the cloud or on the ground, safe, observable and under human oversight.",
};

function LatestStrip() {
  const posts = getAllPosts("announcements").slice(0, 3);
  if (posts.length === 0) return null;
  return (
    <Section variant="paper" id="latest">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>LATEST</Eyebrow>
        <Display level={2}>What we&apos;re *shipping*.</Display>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
        <div className="mt-8">
          <Button variant="ghost" href="/announcements">All announcements</Button>
        </div>
      </Container>
    </Section>
  );
}

export default function Home() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.cortera.space").replace(/\/$/, "");
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
      <LatestStrip />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Organization", name: "Cortera", url: siteUrl, logo: siteUrl + "/assets/logo-mark-dark.png", email: "team@cortera.space" },
            { "@type": "WebSite", name: "Cortera", url: siteUrl }
          ]
        }) }}
      />
    </>
  );
}