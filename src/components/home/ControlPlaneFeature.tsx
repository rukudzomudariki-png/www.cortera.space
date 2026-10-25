"use client";

import { ASSETS } from "@/config/assets";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Lock, Shield, Activity, DollarSign, Search, UserCheck } from "lucide-react";

const CAPS = [
  { icon: Lock, title: "Permissions", body: "Default-deny rules decide exactly what each agent is allowed to do." },
  { icon: Shield, title: "Guardrails", body: "Limits that stop an agent before it exceeds its remit." },
  { icon: Activity, title: "Monitoring", body: "A live record of what every agent is doing, and what it did." },
  { icon: DollarSign, title: "Cost visibility", body: "See what each agent, run and model costs. Unknown cost is never shown as zero." },
  { icon: Search, title: "Failure analysis", body: "Trace a failure to its cause and group repeats into patterns." },
  { icon: UserCheck, title: "Human oversight", body: "Approvals and review for the actions that matter." },
];

export function ControlPlaneFeature() {
  return (
    <Section variant="paper" id="control-plane">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow className="text-muted">THE CONTROL PLANE</Eyebrow>
        <Display level={2} className="mt-4 text-ink">
          Autonomy you can actually see.
        </Display>
        <div className="mt-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <Lede className="text-ink" maxWidth="40ch">
              Every agent, every action, every cost, in one place. Cortera decides what an agent may do, watches what it does, and explains why when something goes wrong.
            </Lede>
            <div className="mt-8">
              <Button variant="secondary" href="/control-plane">
                Explore the Control Plane
              </Button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <MediaFrame
              src={ASSETS.controlTerminal}
              alt="Engineer working at a keyboard in front of a dense terminal display"
              fill
              className="aspect-[16/10] rounded-[var(--radius-8)] overflow-hidden duotone-blue"
              parallax={false}
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-paper-line">
          {CAPS.map((c) => (
            <div key={c.title} className="p-6 border-b border-r border-paper-line">
              <c.icon className="h-5 w-5 text-ink mb-3" aria-hidden="true" />
              <h3 className="font-sans font-semibold text-[var(--font-size-body)] text-ink mb-2">{c.title}</h3>
              <p className="text-[var(--font-size-body)] text-ink/70 leading-[var(--line-height-body)]">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
