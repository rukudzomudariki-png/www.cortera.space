import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { GradientHairline } from "@/components/ui/GradientHairline";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { StickySequence } from "@/components/ui/StickySequence";
import { ASSETS } from "@/config/assets";
import {
  SchematicPermissions,
  SchematicContainment,
  SchematicMonitoring,
  SchematicCost,
  SchematicFailure,
  SchematicReview,
} from "@/components/control-plane/Schematics";
import { Plug, Code, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Control Plane",
  description:
    "The Cortera Control Plane sets permissions, guardrails and oversight for AI agents: see what they do, what it costs, and why they fail, in the cloud or on the ground.",
  openGraph: {
    images: [{ url: ASSETS.controlTerminal, width: 1200, height: 800, alt: "Hands at a keyboard in front of a dense terminal" }],
  },
  alternates: { canonical: "/control-plane" },
};

const STEPS = [
  { index: "01", title: "Permissions", body: "Every action an agent can take is a rule: allow, deny, or require approval. Anything not listed is denied.", schematic: <SchematicPermissions /> },
  { index: "02", title: "Containment", body: "Each agent declares what it is meant to touch. If it goes beyond that, it is frozen until a person reviews it.", schematic: <SchematicContainment /> },
  { index: "03", title: "Monitoring", body: "A live record of every run and event: what each agent is doing, what it did, when, and how.", schematic: <SchematicMonitoring /> },
  { index: "04", title: "Cost visibility", body: "See cost per agent and per run. When a cost is not reported, it says so. It is never shown as zero.", schematic: <SchematicCost /> },
  { index: "05", title: "Failure analysis", body: "Failures are grouped into patterns and traced to their cause. Plain-English signals alert you when a run matches a failure mode you define.", schematic: <SchematicFailure /> },
  { index: "06", title: "Review and improvement", body: "Improvements arrive as drafts. They must pass evaluation and human approval before going live. Nothing deploys itself.", schematic: <SchematicReview /> },
];

export default function Page() {
  return (
    <>
      {/* Header */}
      <Section variant="dark" className="relative overflow-hidden min-h-[560px] h-[clamp(560px,80vh,820px)]">
        <div className="lg:hidden h-[44svh] w-full relative">
          <MediaFrame
            src={ASSETS.controlTerminal}
            alt="Hands at a keyboard in front of a dense terminal"
            fill
            className="absolute inset-0 duotone-blue"
            scrim="bottom"
            grain
          />
        </div>
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[65%]">
          <MediaFrame
            src={ASSETS.controlTerminal}
            alt="Hands at a keyboard in front of a dense terminal"
            fill
            className="absolute inset-0 duotone-blue"
            scrim="none"
            grain
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(59,130,246,0.10) 0%, transparent 55%)",
            }}
            aria-hidden="true"
          />
        </div>
        <Container className="relative z-10 h-full flex flex-col justify-end pb-[clamp(80px,10vh,140px)]">
          <div className="max-w-[48ch]">
            <Eyebrow>THE CONTROL PLANE</Eyebrow>
            <Display level={1} accent="control room" className="mt-4">
              Every agent, one control room.
            </Display>
            <Lede className="mt-6 max-w-[56ch]" maxWidth="56ch">
              Cortera is the control plane for AI agents. Connect agents from any framework, then decide what they may do, watch what they do, and understand what went wrong, whether they run in the cloud or on the ground.
            </Lede>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" href="/contact">Request a demo</Button>
              <Button variant="secondary" href="/physical-ai">See Physical AI</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section variant="paper" id="problem">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow className="text-muted">WHY IT MATTERS</Eyebrow>
          <Display level={2} className="mt-4 text-ink" accent="faster">
            Agents are gaining power faster than oversight.
          </Display>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Lede className="text-ink" maxWidth="52ch">
              Teams are connecting agents to real tools, real data and real machines. Without a control layer, nobody can say what an agent is allowed to do, what it just did, or what it cost, and failures are found after the damage is done.
            </Lede>
            <ul className="space-y-4 font-mono text-[var(--font-size-body)] text-ink">
              {["What is this agent allowed to do?", "What did it actually do?", "What did it cost?", "Why did it fail, and will it happen again?"].map((q, i) => (
                <li key={q} className="flex gap-4 border-t border-paper-line pt-4 first:border-t-0 first:pt-0">
                  <span className="text-muted">0{i + 1}</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section variant="dark" id="capabilities">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>WHAT IT DOES</Eyebrow>
          <Display level={2} className="mt-4" accent="proof">
            Permission, containment, proof.
          </Display>
          <div className="mt-12">
            <StickySequence steps={STEPS} />
          </div>
        </Container>
      </Section>

      {/* Bring any agent */}
      <Section variant="paper" id="connect">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow className="text-muted">OPEN BY DESIGN</Eyebrow>
          <Display level={2} className="mt-4 text-ink" accent="already">
            Bring the agents you already have.
          </Display>
          <Lede className="mt-6 text-ink" maxWidth="60ch">
            Cortera does not care which framework an agent was built with. Connect it through an API, an SDK or MCP, and it gets the same permissions, monitoring and oversight as everything else. Agents built on Cortera are simply another client.
          </Lede>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-l border-paper-line">
            {[
              { icon: Plug, title: "API", body: "Send runs and events from any system over a documented interface." },
              { icon: Code, title: "SDK", body: "Instrument an agent in a few lines and report what it does." },
              { icon: Server, title: "MCP", body: "Connect through Cortera's hosted MCP server, with no extra setup for the developer." },
            ].map((c) => (
              <div key={c.title} className="p-6 border-b border-r border-paper-line">
                <c.icon className="h-5 w-5 text-ink mb-3" aria-hidden="true" />
                <h3 className="font-sans font-semibold text-[var(--font-size-body)] text-ink mb-2">{c.title}</h3>
                <p className="text-[var(--font-size-body)] text-ink/70 leading-[var(--line-height-body)]">{c.body}</p>
              </div>
            ))}
          </div>
          {/* Diagram */}
          <div className="mt-16">
            <svg viewBox="0 0 720 160" className="w-full max-w-[720px] mx-auto" aria-hidden="true">
              <text x="60" y="24" textAnchor="middle" fontSize="10" fontFamily="var(--font-geist-mono)" fill="var(--ink)" opacity="0.7">Your agents</text>
              {[40, 80, 120].map((y) => (
                <circle key={y} cx="60" cy={y + 10} r="6" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
              ))}
              <text x="360" y="24" textAnchor="middle" fontSize="10" fontFamily="var(--font-geist-mono)" fill="var(--ink)" opacity="0.7">Cortera</text>
              <circle cx="360" cy="80" r="14" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
              <text x="660" y="24" textAnchor="middle" fontSize="10" fontFamily="var(--font-geist-mono)" fill="var(--ink)" opacity="0.7">Tools, data and machines</text>
              {[40, 80, 120].map((y) => (
                <circle key={y} cx="660" cy={y + 10} r="6" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
              ))}
              {[50, 90, 130].map((y) => (
                <line key={`l-${y}`} x1="66" y1={y} x2="346" y2="80" stroke="var(--ink)" strokeWidth="1" opacity="0.4" />
              ))}
              {[50, 90, 130].map((y) => (
                <line key={`r-${y}`} x1="374" y1="80" x2="654" y2={y} stroke="var(--ink)" strokeWidth="1" opacity="0.4" />
              ))}
              <rect x="470" y="72" width="12" height="16" rx="1" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
            </svg>
          </div>
        </Container>
      </Section>

      {/* Human in loop */}
      <Section variant="dark" id="oversight">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>HUMAN OVERSIGHT</Eyebrow>
          <Display level={2} className="mt-4" accent="matters">
            People decide what matters.
          </Display>
          <Lede className="mt-6" maxWidth="60ch">
            The actions that carry real risk can be set to wait for approval. Approvals expire, so a yes today is not a yes forever. And when an agent steps outside its boundaries, it stops until a person says otherwise.
          </Lede>
          <div className="mt-12">
            <svg viewBox="0 0 720 120" className="w-full max-w-[720px] mx-auto" aria-hidden="true">
              <circle cx="120" cy="60" r="16" fill="none" stroke="var(--text)" strokeWidth="1.5" />
              <text x="120" y="64" textAnchor="middle" fontSize="8" fontFamily="var(--font-geist-mono)" fill="var(--text)">request</text>
              <line x1="136" y1="60" x2="304" y2="60" stroke="var(--text)" strokeWidth="1.5" />
              <circle cx="360" cy="60" r="20" fill="none" stroke="var(--text)" strokeWidth="1.5" />
              <text x="360" y="56" textAnchor="middle" fontSize="8" fontFamily="var(--font-geist-mono)" fill="var(--text)">approval</text>
              <text x="360" y="68" textAnchor="middle" fontSize="8" fontFamily="var(--font-geist-mono)" fill="var(--text)">required</text>
              <line x1="380" y1="60" x2="568" y2="60" stroke="var(--text)" strokeWidth="1.5" />
              <circle cx="600" cy="60" r="16" fill="none" stroke="var(--text)" strokeWidth="1.5" />
              <text x="600" y="64" textAnchor="middle" fontSize="8" fontFamily="var(--font-geist-mono)" fill="var(--text)">run/decline</text>
              <rect x="352" y="30" width="16" height="8" fill="none" stroke="var(--text)" strokeWidth="1.5" />
            </svg>
          </div>
        </Container>
      </Section>

      {/* Cloud and ground */}
      <Section variant="dark" id="physical">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>CLOUD AND GROUND</Eyebrow>
          <Display level={2} className="mt-4" accent="robots">
            The same controls for robots.
          </Display>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Lede maxWidth="52ch">
                Cortera also builds intelligent robotic systems for mining and agriculture. Our machines connect to the Control Plane, so a robot on a mine site is governed like any other agent.
              </Lede>
              <div className="mt-8">
                <Button variant="ghost" href="/physical-ai" arrow>
                  Explore Physical AI
                </Button>
              </div>
            </div>
            <MediaFrame
              src={ASSETS.heroRobot}
              alt="Tracked robot with a twin-lamp sensor arm in an underground mine tunnel"
              fill
              className="aspect-[16/10] rounded-[var(--radius-8)] overflow-hidden"
              scrim="bottom"
              grain
              parallax
            />
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section variant="paper" id="principles">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow className="text-muted">BUILT TO BE TRUSTED</Eyebrow>
          <Display level={2} className="mt-4 text-ink" accent="foundation">
            Security isn&apos;t a feature. It&apos;s the foundation.
          </Display>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 border-t border-l border-paper-line">
            {[
              { title: "Default-deny", body: "Unlisted actions are blocked. Agents start with nothing and are granted only what they need." },
              { title: "Credentials stay on the server", body: "Secrets and API keys are designed to never reach the client." },
              { title: "Reviewed, not automatic", body: "Generated agents and proposed fixes are drafts that a person must approve." },
              { title: "Honest numbers", body: "If something was not measured, the product says so instead of guessing." },
            ].map((p) => (
              <div key={p.title} className="p-6 border-b border-r border-paper-line">
                <h3 className="font-sans font-semibold text-[var(--font-size-h3)] text-ink mb-2">{p.title}</h3>
                <p className="text-[var(--font-size-body)] text-ink/70 leading-[var(--line-height-body)]">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section variant="dark" className="border-t border-line">
        <GradientHairline />
        <Container className="py-[var(--section-padding)] text-center">
          <Display level={2} accent="autonomous">
            The guardrails for autonomous work.
          </Display>
          <Lede className="mt-6 mx-auto" maxWidth="56ch">
            See what your agents can do, what they are doing, and what it costs. Talk to us about the Control Plane.
          </Lede>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" href="/contact">Request a demo</Button>
            <Button variant="secondary" href="/safety">Read our approach to safety</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
