"use strict";

import { PropsWithChildren } from "react";

export type SectionVariant = "dark" | "paper" | "sand";

export type SectionProps = PropsWithChildren<{
  variant?: SectionVariant;
  hairline?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}>;

export function Section({ children, variant = "dark", hairline, className, id, style }: SectionProps) {
  const base =
    variant === "paper"
      ? "bg-paper text-ink border border-paper-line"
      : variant === "sand"
      ? "bg-sand text-sand-ink"
      : "bg-bg text-text";
  return (
    <section
      id={id}
      style={style}
      className={`relative ${base} ${hairline ? "border-t border-line" : ""} ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
