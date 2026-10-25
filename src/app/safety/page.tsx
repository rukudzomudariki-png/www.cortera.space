import { Metadata } from "next";
import { ASSETS } from "@/config/assets";
import { SECURITY_EMAIL } from "@/config/links";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { StickySequence } from "@/components/ui/StickySequence";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "How Cortera designs autonomous systems to stay inside their limits: defined boundaries, human oversight, containment and complete records, for robots and agents alike.",
  openGraph: { images: [{ url: ASSETS.heroMine }] },
};

const steps = [
  {
    index: "01",
    title: "Defined limits",
    body: "Every machine and agent starts with explicit boundaries. Anything not allowed is denied.",
    schematic: (
      <svg viewBox="0 0 240 160" className="w-full h-auto" aria-hidden="true">
        <rect x="40" y="30" width="160" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <circle cx="120" cy="80" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="120" y="84" textAnchor="middle" fontSize="10" fill="currentColor">allowed</text>
      </svg>
    ),
  },
  {
    index: "02",
    title: "Human oversight",
    body: "Actions that carry real risk can wait for a person's approval. People can take over or halt a machine at any time.",
    schematic: (
      <svg viewBox="0 0 240 160" className="w-full h-auto" aria-hidden="true">
        <circle cx="80" cy="80" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="160" cy="80" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="104" y1="80" x2="136" y2="80" stroke="var(--gradient-signature)" strokeWidth="1.5" />
        <text x="80" y="84" textAnchor="middle" fontSize="9" fill="currentColor">agent</text>
        <text x="160" y="84" textAnchor="middle" fontSize="9" fill="currentColor">person</text>
      </svg>
    ),
  },
  {
    index: "03",
    title: "Containment",
    body: "If something goes beyond its limits, it is stopped and held until a person reviews it.",
    schematic: (
      <svg viewBox="0 0 240 160" className="w-full h-auto" aria-hidden="true">
        <rect x="60" y="40" width="120" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="120" y1="40" x2="120" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="120" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    index: "04",
    title: "Complete records",
    body: "Decisions and actions are logged, so incidents can be reviewed, explained and learned from.",
    schematic: (
      <svg viewBox="0 0 240 160" className="w-full h-auto" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, i) => (
          <rect key={i} x={40} y={20 + i * 30} width="160" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
        <line x1="40" y1="20" x2="40" y2={20 + 3 * 30 + 22} stroke="var(--gradient-signature)" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        eyebrow="SAFETY"
        title="Autonomy only works if people can *trust* it."
        lede="Safety is not a feature we add at the end. It decides what our machines and agents are allowed to do, what happens when they step outside it, and what we can prove afterwards."
        image={ASSETS.heroMine}
        imageAlt="Haul trucks in an underground mine tunnel"
        imageRight="70%"
        brightness={0.8}
        grain
      />

      <Section variant="paper" id="layers">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>HOW WE DESIGN FOR SAFETY</Eyebrow>
          <Display level={2} accent="harm" className="mt-4">
            Four layers between an action and harm.
          </Display>
          <div className="mt-12">
            <StickySequence steps={steps} />
          </div>
        </Container>
      </Section>

      <Section variant="dark">
        <Container className="py-[var(--section-padding)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Eyebrow>ON THE GROUND</Eyebrow>
              <Lede className="mt-4">
                Our robots are designed to work within defined limits, record what they do and hand control to a person when it matters.
              </Lede>
            </div>
            <div>
              <Eyebrow>IN THE CLOUD</Eyebrow>
              <Lede className="mt-4">
                Our Control Plane applies the same ideas to software agents: permissions, guardrails, monitoring and review.
              </Lede>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="ghost" href="/physical-ai">
              Physical AI
            </Button>
            <Button variant="ghost" href="/control-plane">
              Control Plane
            </Button>
          </div>
        </Container>
      </Section>

      <Section variant="paper">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>OUR POSITION</Eyebrow>
          <Display level={2} accent="risk-free" className="mt-4">
            No autonomous system is risk-free.
          </Display>
          <Lede className="mt-6">
            We design assuming things will go wrong, and we build to catch, contain and learn from it. We will not promise zero incidents, and you should be wary of anyone who does.
          </Lede>
        </Container>
      </Section>

      <Section variant="dark">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>REPORTING A CONCERN</Eyebrow>
          <Display level={2} accent="us" className="mt-4">
            Found something? Tell us.
          </Display>
          <Lede className="mt-6">
            If you believe you have found a security or safety issue in anything we publish, please report it privately so we can fix it.
          </Lede>
          <div className="mt-8">
            {SECURITY_EMAIL ? (
              <Button variant="primary" href={`mailto:${SECURITY_EMAIL}`}>
                Email security
              </Button>
            ) : (
              <Button variant="primary" href="/contact">
                Contact us
              </Button>
            )}
          </div>
        </Container>
      </Section>

      <Section variant="dark" className="border-t border-line">
        <Container className="py-[var(--section-padding)] text-center flex flex-col items-center gap-6">
          <Display level={2} accent="only" className="mt-4">
            Safe autonomy is the only kind worth building.
          </Display>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/contact">
              Request a demo
            </Button>
            <Button variant="secondary" href="/research">
              See our research
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
