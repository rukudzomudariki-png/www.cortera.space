import Link from "next/link";
import { ASSETS, AGRICULTURE_IMAGE } from "@/config/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GradientHairline } from "@/components/ui/GradientHairline";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ContourBackdrop } from "@/components/ui/ContourBackdrop";
import { ArrowRight } from "lucide-react";
import type { IndustryContent } from "@/content/industries/types";

function parseAccent(s: string): { text: string; accent?: string } {
  const m = s.match(/\*(.+?)\*/);
  return { text: s.replace(/\*/g, ""), accent: m?.[1] };
}

export function IndustryPage({ content }: { content: IndustryContent }) {
  const isMining = content.slug === "mining";
  const heroImage = isMining ? ASSETS.heroMine : AGRICULTURE_IMAGE;
  const section3Image = isMining ? ASSETS.heroRobot : AGRICULTURE_IMAGE;

  const h1 = parseAccent(content.h1);
  const conditionsH2 = parseAccent(content.conditions.h2);
  const buildH2 = parseAccent(content.build.h2);
  const closingH2 = parseAccent(content.closing.h2);

  return (
    <>
      {/* HEADER */}
      <Section variant="dark" className="relative overflow-hidden" style={{ height: "clamp(560px, 80vh, 820px)" }}>
        <div
          className="absolute top-0 right-0 w-full lg:w-[70%] h-[44svh] lg:h-full"
          style={
            heroImage
              ? {
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }
              : undefined
          }
        >
          {heroImage ? (
            <MediaFrame
              src={heroImage}
              alt={isMining ? "Haul trucks driving through an underground mine tunnel" : "Agricultural field"}
              fill
              priority
              objectPosition="50% 50%"
              scrim="none"
              grain
              className="absolute inset-0"
              style={{ filter: "brightness(0.8)" }}
            />
          ) : (
            <ContourBackdrop opacity={0.35} drift />
          )}
        </div>
        <Container className="relative z-10 h-full flex flex-col justify-end pb-[clamp(40px,6vh,80px)]">
          <div className="max-w-[42%] min-w-[280px]">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Display level={1} accent={h1.accent} className="mt-2">
              {h1.text}
            </Display>
            <Lede className="mt-6" maxWidth="56ch">
              {content.lede}
            </Lede>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="/contact">
                Request a demo
              </Button>
              <Button variant="secondary" href="/control-plane">
                See the Control Plane
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CONDITIONS */}
      <Section variant="paper">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>THE CONDITIONS</Eyebrow>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Display level={2} accent={conditionsH2.accent}>
                {conditionsH2.text}
              </Display>
              <Lede className="mt-6">{content.conditions.lede}</Lede>
            </div>
            <ul className="divide-y divide-paper-line">
              {content.conditions.items.map((item, i) => (
                <li key={item} className="py-4">
                  <Reveal delay={i * 0.08}>
                    <span className="font-mono text-[var(--font-size-label)] text-muted mr-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--font-size-body)]">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* WHAT WE BUILD */}
      <Section variant="dark" id="what-we-build">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>WHAT WE BUILD</Eyebrow>
          <Display level={2} accent={buildH2.accent} className="mt-4">
            {buildH2.text}
          </Display>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              {section3Image ? (
                <MediaFrame
                  src={section3Image}
                  alt={
                    isMining
                      ? "Tracked robot with a twin-lamp sensor arm in an underground mine tunnel"
                      : "Agricultural field"
                  }
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  scrim="bottom"
                  grain
                  className="rounded-[var(--radius-8)]"
                />
              ) : (
                <div className="relative h-[300px] rounded-[var(--radius-8)] overflow-hidden">
                  <ContourBackdrop opacity={0.35} />
                </div>
              )}
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-line">
              {content.build.blocks.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="p-6">
                    <Icon className="h-6 w-6 text-muted mb-4" aria-hidden="true" />
                    <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] mb-2">
                      {b.title}
                    </h3>
                    <p className="text-[var(--font-size-body)] text-muted leading-[var(--line-height-body)]">
                      {b.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* OVERSIGHT */}
      <Section variant="paper" id="oversight">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>SAFE BY DESIGN</Eyebrow>
          <Display level={2} accent="step in" className="mt-4">
            A human can always step in.
          </Display>
          <Lede className="mt-6" maxWidth="56ch">
            Every Cortera machine is designed to work within defined limits, record what it does, and hand control to a person when it matters.
          </Lede>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-paper-line">
            {[
              { title: "Defined limits", body: "Boundaries are set before the machine moves and checked as it works." },
              { title: "Human takeover", body: "People can approve, take over or halt a machine at any time." },
              { title: "Full records", body: "Decisions and actions are logged so incidents can be reviewed and explained." },
            ].map((c) => (
              <div key={c.title} className="p-6">
                <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] mb-2">
                  {c.title}
                </h3>
                <p className="text-[var(--font-size-body)] text-muted leading-[var(--line-height-body)]">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button variant="ghost" href="/safety">
              Read our approach to safety
            </Button>
          </div>
        </Container>
      </Section>

      {/* HOW WE WORK */}
      <Section variant="dark" id="approach">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>HOW WE WORK</Eyebrow>
          <Display level={2} accent="site" className="mt-4">
            Start with your site, not our slides.
          </Display>
          <div className="mt-12 relative">
            <GradientHairline className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { n: "01", title: "Understand", body: "We learn your site, your conditions and your constraints." },
                { n: "02", title: "Design", body: "We shape the system around how your people already work." },
                { n: "03", title: "Prove under supervision", body: "We test in controlled conditions with people in the loop." },
                { n: "04", title: "Expand with oversight", body: "We widen scope only as trust is earned, with the Control Plane watching throughout." },
              ].map((s) => (
                <Reveal key={s.n}>
                  <span className="font-mono text-[var(--font-size-label)] text-muted block mb-2">{s.n}</span>
                  <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[var(--font-size-body)] text-muted leading-[var(--line-height-body)]">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CONNECTED */}
      <Section variant="paper">
        <Container className="py-[var(--section-padding)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/control-plane"
              className="group block rounded-[var(--radius-8)] border border-paper-line p-8 hover:bg-paper transition-colors"
            >
              <h3 className="text-[var(--font-size-h2)] font-semibold tracking-[var(--letter-spacing-tight)]">
                The Control Plane
              </h3>
              <p className="text-[var(--font-size-body)] text-muted mt-2">
                Permissions, guardrails and oversight for every machine and agent.
              </p>
              <ArrowRight className="mt-4 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href={content.otherIndustry.href}
              className="group block rounded-[var(--radius-8)] border border-paper-line p-8 hover:bg-paper transition-colors"
            >
              <h3 className="text-[var(--font-size-h2)] font-semibold tracking-[var(--letter-spacing-tight)]">
                {content.otherIndustry.label}
              </h3>
              <p className="text-[var(--font-size-body)] text-muted mt-2">
                {content.otherIndustry.description.replace(`${content.otherIndustry.label}: `, "")}
              </p>
              <ArrowRight className="mt-4 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* CLOSING */}
      <Section variant="dark" className="border-t border-line">
        <Container className="py-[var(--section-padding)] flex flex-col items-center text-center gap-6">
          <Display level={2} accent={closingH2.accent}>
            {closingH2.text}
          </Display>
          <Lede className="max-w-[60ch]" maxWidth="60ch">
            {content.closing.lede}
          </Lede>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/contact">
              Request a demo
            </Button>
            <Button variant="secondary" href="/company">
              Learn about Cortera
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
