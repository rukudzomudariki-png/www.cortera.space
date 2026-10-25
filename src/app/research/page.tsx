import { Metadata } from "next";
import { ASSETS } from "@/config/assets";
import { FRAMEWORK_REPO_URL, FRAMEWORK_RELEASES_URL, HN_URL } from "@/config/links";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { ProgramRow } from "@/components/ui/ProgramRow";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Thesis } from "@/components/research/Thesis";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Cortera researches how to make autonomous agents safe to run: containing them when they go wrong, understanding why, and keeping them efficient. Cortera Framework, CorMCP and Teralis.",
  openGraph: { images: [{ url: ASSETS.controlTerminal }] },
};

const SchematicFramework = (
  <svg viewBox="0 0 240 160" className="w-full h-auto" aria-hidden="true">
    <rect x="20" y="40" width="60" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="50" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <line x1="80" y1="60" x2="150" y2="60" stroke="var(--gradient-signature)" strokeWidth="1.5" />
    <rect x="150" y="40" width="60" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="50" y="100" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6">Action</text>
    <text x="180" y="100" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6">node</text>
    <rect x="34" y="48" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="40" y="58" textAnchor="middle" fontSize="8" fill="currentColor">🔒</text>
  </svg>
);

const SchematicCorMCP = (
  <svg viewBox="0 0 240 160" className="w-full h-auto" aria-hidden="true">
    {Array.from({ length: 6 }).map((_, i) => (
      <rect key={i} x={10 + (i % 3) * 28} y={10 + Math.floor(i / 3) * 28} width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1" />
    ))}
    <path d="M 94 80 L 120 80" stroke="var(--gradient-signature)" strokeWidth="2" />
    <polygon points="120,76 128,80 120,84" fill="currentColor" />
    <rect x="132" y="60" width="80" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="172" y="84" textAnchor="middle" fontSize="10" fill="currentColor">agent</text>
  </svg>
);

const layers = ["Agent", "Python", "Rust core", "C enforcement", "Operating system"];
const SchematicTeralis = (
  <svg viewBox="0 0 240 200" className="w-full h-auto" aria-hidden="true">
    {layers.map((l, i) => (
      <g key={l}>
        <rect x="40" y={10 + i * 34} width="160" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="120" y={27 + i * 34} textAnchor="middle" fontSize="10" fill="currentColor">{l}</text>
      </g>
    ))}
    <line x1="120" y1="10" x2="120" y2={10 + 4 * 34 + 26} stroke="var(--gradient-signature)" strokeWidth="1.5" />
    <rect x="36" y={10 + 2 * 34 - 4} width="168" height={3 * 34 + 8} rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="RESEARCH"
        title="Making autonomous agents safe to *run*."
        lede="Agents act faster than people can review them. Our research is about building the machinery that keeps them inside their limits: containing them when they go wrong, explaining why, and keeping them efficient."
        image={ASSETS.controlTerminal}
        imageAlt="Terminal photo"
        imageRight="60%"
        duotone
        brightness={0.9}
      />
      <div className="flex gap-4 px-[var(--side-padding)] py-6">
        <Button variant="primary" href={FRAMEWORK_REPO_URL} external>
          View on GitHub
        </Button>
        <Button variant="secondary" href="/contact">
          Talk to us
        </Button>
      </div>
      <Thesis />

      <Section variant="dark" id="programs">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>PROGRAMS</Eyebrow>
          <Display level={2} accent="question" className="mt-4">
            Three programs. One question: how do you trust an agent?
          </Display>
        </Container>
        <Container>
          <ProgramRow
            index="01"
            name="Cortera Framework"
            id="cortera-framework"
            status="Pre-release"
            explanation="A framework for building applications that agents can safely use. Every capability is a defined Action with its permissions, scope and audit trail built in. Each Action declares its blast radius, the downstream actions it is allowed to reach, and an actor that exceeds it is automatically contained until a person reviews it."
            capabilities={[
              "Actions as the single primitive: one definition, many surfaces",
              "Blast radius and automatic containment",
              "Risk modes, provenance tracking and behavioral drift detection",
              "An MCP server that exposes Actions as tools, and a standalone guard service",
            ]}
            actions={
              <>
                <Button variant="primary" href={FRAMEWORK_REPO_URL} external>
                  View on GitHub
                </Button>
                <Button variant="ghost" href={FRAMEWORK_RELEASES_URL} external>
                  Release notes
                </Button>
                {HN_URL ? (
                  <Button variant="ghost" href={HN_URL} external>
                    Discussion on Hacker News
                  </Button>
                ) : null}
              </>
            }
            schematic={SchematicFramework}
          >
            <CodeBlock code="npm install @cortera/core" />
            <p className="mt-2 text-[var(--font-size-label)] text-muted">
              Published as @cortera/* packages. Release notes list known gaps, including test coverage still to be added for some packages.
            </p>
          </ProgramRow>
          <ProgramRow
            index="02"
            name="CorMCP"
            id="cormcp"
            status="In development"
            explanation="A standalone tool for the token cost of MCP. Connecting an agent to many MCP servers can fill its context with tool definitions and bulky results before any work starts. CorMCP is designed to sit between an agent and its MCP servers so the agent can find and load only the tools it needs. It works with any MCP server."
            capabilities={[
              "Designed to cut tool-definition and result bloat",
              "Works with any MCP server",
              "Independent of the Cortera Framework and Control Plane",
            ]}
            actions={
              <Button variant="ghost" href="/contact">
                Talk to us
              </Button>
            }
            schematic={SchematicCorMCP}
          />
          <ProgramRow
            index="03"
            name="Teralis"
            id="teralis"
            status="In development"
            explanation="A ground-up rebuild of the Cortera Framework's security core, designed so containment is enforced below the agent, not just inside its code. A Rust core is designed to evaluate permissions and blast radius as a graph, so multi-step escalation is caught. A C layer is designed to enforce limits at the operating-system level, and Python handles integrations away from the trust boundary."
            capabilities={[
              "Blast radius as a reachability graph, to catch multi-step escalation",
              "Short-lived signed capability tokens scoped to what an agent may do",
              "A containment ladder: freeze, explain, and stop an agent that tries to escape",
              "Hash-chained failure reports and behavioral drift detection",
            ]}
            actions={
              <Button variant="ghost" href="/contact">
                Talk to us
              </Button>
            }
            schematic={SchematicTeralis}
          />
        </Container>
      </Section>

      {/* How they fit */}
      <Section variant="paper">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>HOW THEY FIT</Eyebrow>
          <Display level={2} accent="successor" className="mt-4">
            A foundation, its successor, and a tool that stands alone.
          </Display>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-paper-line">
            {[
              { title: "Cortera Framework", body: "the released foundation developers build on." },
              { title: "Teralis", body: "its ground-up rebuild, in development." },
              { title: "CorMCP", body: "independent; works with any MCP server and any agent." },
            ].map((c) => (
              <div key={c.title} className="p-8">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-muted text-[var(--font-size-body)]">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-muted">The Control Plane is where people see and govern all of it.</span>
            <Button variant="ghost" href="/control-plane">
              Explore the Control Plane
            </Button>
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section variant="dark">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>HOW WE DO RESEARCH</Eyebrow>
          <Display level={2} accent="doesn't" className="mt-4">
            Say what works. Say what doesn&apos;t.
          </Display>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Test before claiming", body: "we do not publish results we cannot reproduce." },
              { title: "Say what is unfinished", body: "our release notes list known gaps." },
              { title: "Build in public where we can", body: "the Cortera Framework is developed openly on GitHub." },
            ].map((c) => (
              <div key={c.title}>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-muted text-[var(--font-size-body)]">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section variant="dark" className="border-t border-line">
        <Container className="py-[var(--section-padding)] text-center flex flex-col items-center gap-6">
          <Display level={2} accent="us">
            Work on this with us.
          </Display>
          <Lede className="text-muted max-w-[56ch]">
            If you build agents, break systems or care about safety research, we would like to hear from you.
          </Lede>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/contact">
              Get in touch
            </Button>
            <Button variant="secondary" href={FRAMEWORK_REPO_URL} external>
              View on GitHub
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
