"use strict";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { MediaFrame } from "@/components/ui/MediaFrame";

export type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  variant?: "dark" | "paper";
  height?: string;
  image?: string;
  imageAlt?: string;
  imageRight?: string;
  brightness?: number;
  duotone?: boolean;
  grain?: boolean;
  mobileImageTop?: boolean;
};

export function PageHeader({
  eyebrow,
  title,
  lede,
  variant = "dark",
  height,
  image,
  imageAlt = "",
  imageRight = "60%",
  brightness = 1,
  duotone = false,
  grain = true,
  mobileImageTop = false,
}: PageHeaderProps) {
  const m = title.match(/\*(.+?)\*/);
  const accent = m?.[1];
  const clean = title.replace(/\*/g, "");
  const h = height ?? "clamp(560px, 80vh, 820px)";

  if (!image) {
    return (
      <Section variant={variant} style={{ height: h }}>
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Display level={1} accent={accent}>{clean}</Display>
          {lede ? <Lede className="mt-6">{lede}</Lede> : null}
        </Container>
      </Section>
    );
  }

  return (
    <Section variant={variant} className="relative overflow-hidden" style={{ height: h }}>
      <div
        className={`absolute ${mobileImageTop ? "top-0 left-0 w-full h-[52svh] lg:h-full" : "top-0 right-0 w-full lg:w-[var(--imgw)] h-[44svh] lg:h-full"}`}
        style={{ ["--imgw" as string]: imageRight }}
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          <MediaFrame
            src={image}
            alt={imageAlt}
            fill
            priority
            objectPosition="50% 50%"
            scrim="none"
            grain={grain}
            className={`absolute inset-0 ${duotone ? "duotone-blue" : ""}`}
            style={{ filter: `brightness(${brightness})` }}
          />
        </div>
      </div>
      <Container className="relative z-10 h-full flex flex-col justify-end pb-[clamp(40px,6vh,80px)]">
        <div className="max-w-[42%] min-w-[280px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Display level={1} accent={accent} className="mt-2">
            {clean}
          </Display>
          {lede ? <Lede className="mt-6" maxWidth="56ch">{lede}</Lede> : null}
        </div>
      </Container>
    </Section>
  );
}
