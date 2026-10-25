"use strict";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";

export type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  variant?: "dark" | "paper";
  height?: string;
};

export function PageHeader({ eyebrow, title, lede, variant = "dark", height }: PageHeaderProps) {
  const m = title.match(/\*(.+?)\*/);
  const accent = m?.[1];
  const clean = title.replace(/\*/g, "");
  return (
    <Section variant={variant} className={height ? "relative overflow-hidden" : ""} style={height ? { height } : undefined}>
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display level={1} accent={accent}>{clean}</Display>
        {lede ? <Lede className="mt-6">{lede}</Lede> : null}
      </Container>
    </Section>
  );
}
