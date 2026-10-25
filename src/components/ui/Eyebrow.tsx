"use strict";

import { PropsWithChildren } from "react";

export type EyebrowProps = PropsWithChildren<{
  className?: string;
  as?: "span" | "div" | "p" | "h2" | "h3" | "h4" | "h5" | "h6";
}>;

export function Eyebrow({ children, className, as: Comp = "p" }: EyebrowProps) {
  return (
    <Comp
      className={`inline-block mb-2 font-mono text-[var(--font-size-label)] font-semibold uppercase tracking-[var(--letter-spacing-wide)] text-muted ${className ?? ""}`}
    >
      {children}
    </Comp>
  );
}
