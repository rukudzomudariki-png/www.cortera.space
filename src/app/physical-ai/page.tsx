import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ContourBackdrop } from "@/components/ui/ContourBackdrop";
import { PhysicalAiHeader } from "@/components/physical-ai/PhysicalAiHeader";
import { HowItWorks } from "@/components/physical-ai/HowItWorks";
import { ControlPlaneDiagram } from "@/components/physical-ai/ControlPlaneDiagram";
import { ASSETS } from "@/config/assets";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Physical AI",
  description:
    "Cortera builds intelligent robotic systems for mining and agriculture, designed to perceive, plan and act in hard conditions with a human always able to step in.",
  alternates: { canonical: "/physical-ai" },
  openGraph: { images: [{ url: "/assets/hero-robot.jpg", alt: "Tracked robot with a twin-lamp sensor arm in an underground mine tunnel" }] },
};

const conditions = [
  "Dust and low visibility",
  "Uneven, shifting terrain",
  "Limited or no connectivity",
  "Heat, vibration and wear",
  "People and machines sharing space",
];

export default function PhysicalAiPage() {
  return (
    <>
      <PhysicalAiHeader />

      <Section variant="paper">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>WHY THIS IS HARD</Eyebrow>
          <Display level={2} className="mt-4 text-ink">
            The real world is the <em className="font-[var(--font-instrument-serif)] italic">hardest</em> environment for AI.
          </Display>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal>
              <Lede className="text-ink" maxWidth="68ch">
                Dust, darkness, vibration, uneven ground, unreliable connectivity and constantly changing surroundings. A model that works on a screen can fail on a slope. Physical AI has to be built for the place it works, not adapted to it afterwards.
              </Lede>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="divide-y divide-paper-line border-t border-paper-line">
                {conditions.map((c, i) => (
                  <li key={c} className="py-4 flex items-baseline gap-4">
                    <span className="font-mono text-[var(--font-size-label)] text-ink/60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[var(--font-size-body)] text-ink">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <HowItWorks />

      <Section variant="paper" id="safety">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>BUILT TO BE SUPERVISED</Eyebrow>
          <Display level={2} className="mt-4 text-ink">
            Autonomy with an <em className="font-[var(--font-instrument-serif)] italic">off switch</em> that always works.
          </Display>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-paper-line border-t border-paper-line">
            {[
              { icon: UserCheck, title: "Human oversight", body: "People stay in control. Approval and takeover are part of the design, not an add-on." },
              { icon: ShieldCheck, title: "Defined limits", body: "Each machine operates within explicit boundaries that are checked before actions run." },
              { icon: FileText, title: "Full records", body: "Actions and decisions are logged so incidents can be reviewed and explained." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="py-8 md:px-8 first:md:pl-0 last:md:pr-0">
                <Icon className="h-6 w-6 text-ink" aria-hidden="true" />
                <h3 className="mt-4 text-[var(--font-size-h3)] font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[var(--font-size-body)] text-ink/80 leading-[var(--line-height-body)]">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="ghost" href="/safety" arrow className="text-ink">
              Read our approach to safety
            </Button>
          </div>
        </Container>
      </Section>

      <Section variant="dark" id="industries">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>WHERE IT WORKS</Eyebrow>
          <Display level={2} className="mt-4">
            Built first for <em className="font-[var(--font-instrument-serif)] italic">mining</em> and agriculture.
          </Display>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/industries/mining"
              className="group relative block aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-[var(--radius-8)] border border-line focus-visible:ring-2 focus-visible:ring-focus-ring"
            >
              <div className="absolute inset-0 transition-transform duration-600 ease-out group-hover:scale-[1.03]">
                <MediaFrame
                  src={ASSETS.heroMine}
                  alt="Haul trucks driving through an underground mine tunnel"
                  fill
                  objectPosition="50% 55%"
                  scrim="bottom"
                  grain
                  className="absolute inset-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h2 className="text-[var(--font-size-h2)] font-semibold tracking-[var(--letter-spacing-tight)] text-text">Mining</h2>
                <p className="text-[var(--font-size-body)] text-muted mt-2 max-w-[30ch]">Extraction, hauling and the hazards of working underground.</p>
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
                <p className="text-[var(--font-size-body)] text-muted mt-2 max-w-[30ch]">Machines that work the land with precision and care.</p>
                <ArrowRight className="mt-4 h-5 w-5 text-text transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      <Section variant="paper" id="control-plane">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>CLOUD AND GROUND</Eyebrow>
          <Display level={2} className="mt-4 text-ink">
            Every machine is <em className="font-[var(--font-instrument-serif)] italic">governed</em> like every other agent.
          </Display>
          <Lede className="mt-6 text-ink" maxWidth="60ch">
            Our robots connect to the Cortera Control Plane, the same layer that sets permissions, guardrails and oversight for cloud agents. One place to see what runs, what it costs, and what went wrong.
          </Lede>
          <ControlPlaneDiagram />
          <div className="mt-10">
            <Button variant="primary" href="/control-plane" className="bg-ink text-paper hover:bg-surface hover:text-ink">
              Explore the Control Plane
            </Button>
          </div>
        </Container>
      </Section>

      <Section variant="sand" className="py-[clamp(120px,16vw,240px)]">
        <Container className="flex flex-col items-center text-center gap-8">
          <Display level={2} className="text-sand-ink">
            Bring safe autonomy to your operation.
          </Display>
          <Lede className="text-sand-ink" maxWidth="60ch">
            Tell us about your site, your conditions and your constraints. We will tell you honestly what is possible.
          </Lede>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/contact" className="bg-sand-ink text-sand">
              Request a demo
            </Button>
            <Button variant="secondary" href="/company" className="border-sand-ink text-sand-ink">
              Learn about Cortera
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
