"use strict";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Button } from "@/components/ui/Button";
import { GradientHairline } from "@/components/ui/GradientHairline";
import { Logo } from "@/components/ui/Logo";
import { PullQuote } from "@/components/ui/PullQuote";
import { ClosingLine } from "@/components/ui/ClosingLine";

export default function DesignPage() {
  return (
    <>
      <Section variant="dark">
        <Container>
          <Eyebrow>Design system — Cortera</Eyebrow>
          <Display level={1}>Tokens, primitives, and asset pipeline</Display>
          <p className="mt-4 text-muted max-w-[68ch]">
            A reference route showing every primitive in all variants across dark, paper, and sand
            backgrounds, plus token swatches and the fluid type scale.
          </p>
        </Container>
      </Section>

      <Section variant="dark" hairline>
        <Container>
          <Eyebrow>Color tokens</Eyebrow>
          <Display level={3}>Dark base</Display>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-2">
            {[
              ["--bg", "#0A0A0B"],
              ["--surface", "#111113"],
              ["--surface-2", "#17171A"],
              ["--line", "rgba(255,255,255,0.08)"],
              ["--text", "#F2F1EC"],
              ["--muted", "#8E8E93"],
            ].map(([name, value]) => (
              <Swatch key={name} name={name} value={value} />
            ))}
          </div>
          <Display level={3} className="mt-8">Paper</Display>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              ["--paper", "#F7F6F2"],
              ["--ink", "#0A0A0B"],
              ["--paper-line", "rgba(10,10,11,0.10)"],
            ].map(([name, value]) => (
              <Swatch key={name} name={name} value={value} />
            ))}
          </div>
          <Display level={3} className="mt-8">Sand</Display>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              ["--sand", "#C6B391"],
              ["--sand-ink", "#24140D"],
              ["--focus-ring", "#3B63E0"],
            ].map(([name, value]) => (
              <Swatch key={name} name={name} value={value} />
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="paper">
        <Container className="bg-paper min-h-[300px] flex items-center justify-center">
          <Display level={2} accent="paper">Paper section variant</Display>
        </Container>
      </Section>

      <Section variant="sand">
        <Container className="min-h-[300px] flex flex-col items-center justify-center gap-4">
          <Eyebrow>Sand section</Eyebrow>
          <ClosingLine />
        </Container>
      </Section>

      <Section variant="dark" hairline>
        <Container>
          <Eyebrow>Typography scale</Eyebrow>
          <div className="mt-6 space-y-6 max-w-[68ch]">
            <div>
              <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">Display</span>
              <p className="text-[var(--font-size-display)] font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-tight)] text-text">
                Display heading at clamp scale
              </p>
            </div>
            <div>
              <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">H1</span>
              <h1 className="text-[var(--font-size-h1)] font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-tight)] text-text">H1 heading</h1>
            </div>
            <div>
              <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">H2</span>
              <h2 className="text-[var(--font-size-h2)] font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-tight)] text-text">H2 heading</h2>
            </div>
            <div>
              <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">H3</span>
              <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-tight)] text-text">H3 heading</h3>
            </div>
            <div>
              <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">Body</span>
              <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-text">Body paragraph at 1.6 line height, max 68ch measure.</p>
            </div>
            <div>
              <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">Label / eyebrow</span>
              <p className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted">LABEL / EYEBROW TEXT</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="dark" hairline>
        <Container>
          <Eyebrow>Buttons</Eyebrow>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost" arrow>
              Ghost with arrow
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </Container>
      </Section>

      <Section variant="paper" hairline>
        <Container className="bg-paper min-h-[400px] flex flex-col items-center justify-center gap-6">
          <Logo variant="lockup" width={320} height={160} />
          <Logo variant="mark" width={80} height={80} />
          <Button variant="primary">Primary on paper</Button>
        </Container>
      </Section>

      <Section variant="dark" hairline>
        <Container>
          <Eyebrow>Gradient hairline</Eyebrow>
          <GradientHairline className="mt-6" />
        </Container>
      </Section>

      <Section variant="dark" hairline>
        <Container>
          <Eyebrow>Pull quote</Eyebrow>
          <PullQuote />
        </Container>
      </Section>
    </>
  );
}

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-[var(--radius-8)] border border-line p-2">
      <div className="w-8 h-8 rounded-[var(--radius-8)]" style={{ backgroundColor: value }} />
      <span className="font-mono text-[10px] text-muted truncate">{name}</span>
      <span className="font-mono text-[10px] text-muted">{value}</span>
    </div>
  );
}
