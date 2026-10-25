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
};

export function PageHeader({ eyebrow, title, lede, variant = "dark" }: PageHeaderProps) {
  return (
    <Section variant={variant}>
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display level={1}>{title}</Display>
        {lede ? <Lede className="mt-6">{lede}</Lede> : null}
      </Container>
    </Section>
  );
}
