import { Metadata } from "next";
import { ASSETS } from "@/config/assets";
import { SHOW_LEADERSHIP } from "@/config/links";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { TwoPillars } from "@/components/home/TwoPillars";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Cortera builds Physical AI for mining and agriculture and the control plane that keeps autonomous agents safe, observable and under human oversight.",
  openGraph: { images: [{ url: ASSETS.heroRobot }] },
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="COMPANY"
        title="We build autonomy people can *trust*."
        lede="Cortera is a frontier lab for Physical and cloud AI. We build intelligent machines for mining and agriculture, and the control plane that keeps every agent safe, observable and under human oversight."
        image={ASSETS.heroRobot}
        imageAlt="Tracked robot with a twin-lamp sensor arm in an underground mine tunnel"
        imageRight="70%"
        brightness={0.85}
      />
      <Section variant="paper">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>MISSION</Eyebrow>
          <p className="mt-6 font-sans font-medium text-[clamp(28px,4.5vw,52px)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
            Make autonomous operations safer, more reliable and more effective, starting with the industries where the work is hardest.
          </p>
        </Container>
      </Section>

      <TwoPillars />

      <Section variant="paper">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>WHAT WE BELIEVE</Eyebrow>
          <Display level={2} accent="commitments" className="mt-4">
            Four commitments.
          </Display>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 border border-paper-line">
            {[
              { idx: "01", title: "People stay in control", body: "autonomy is designed around human oversight, not around removing it." },
              { idx: "02", title: "Safety comes first", body: "limits, containment and records are built in from the start." },
              { idx: "03", title: "Honesty over hype", body: "we say what works, what does not, and what is unfinished." },
              { idx: "04", title: "Built for the real world", body: "we design for hard conditions and for people who do hard work." },
            ].map((p) => (
              <div key={p.idx} className="p-8 border-b border-r border-paper-line last:border-b-0">
                <span className="font-mono text-[var(--font-size-label)] text-muted block mb-2">{p.idx}</span>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-muted text-[var(--font-size-body)]">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="dark">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>WHAT WE&apos;RE BUILDING</Eyebrow>
          <div className="mt-8 divide-y divide-line">
            {[
              { title: "Physical AI", href: "/physical-ai", desc: "Intelligent robotic systems for complex industrial work in mining and agriculture." },
              { title: "The Control Plane", href: "/control-plane", desc: "Permissions, guardrails, monitoring, cost visibility, failure analysis and human oversight for every agent." },
              { title: "Research", href: "/research", desc: "Containing agents when they go wrong, explaining why, and keeping them efficient." },
            ].map((r) => (
              <a key={r.href} href={r.href} className="group block py-6 hover:bg-surface transition-colors px-4 -mx-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[var(--font-size-h3)]">{r.title}</h3>
                    <p className="text-muted text-[var(--font-size-body)] mt-1">{r.desc}</p>
                  </div>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {SHOW_LEADERSHIP ? (
        <Section variant="paper">
          <Container className="py-[var(--section-padding)]">
            <Eyebrow>LEADERSHIP</Eyebrow>
            <div className="mt-6 border border-paper-line p-6 flex items-baseline gap-4">
              <div>
                <h3 className="font-semibold">Rukudzo Mudariki</h3>
                <p className="text-muted text-[var(--font-size-body)]">Founder & CEO</p>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section variant="sand" className="py-[clamp(120px,16vw,240px)]">
        <Container className="flex flex-col items-center text-center gap-8">
          <Display level={2} accent="problem" className="text-sand-ink">
            Bring us your hardest problem.
          </Display>
          <Lede className="text-sand-ink max-w-[60ch]" maxWidth="60ch">
            Tell us about your operation and your constraints.
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
