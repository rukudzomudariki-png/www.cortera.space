"use strict";

import { PropsWithChildren } from "react";

export type ClosingLineProps = PropsWithChildren<{
  className?: string;
  line1?: string;
  line2?: string;
}>;

export function ClosingLine({
  className,
  line1 = "A BETTER",
  line2 = "TOMORROW",
}: ClosingLineProps) {
  return (
    <p
      className={`font-serif text-[var(--font-size-display)] uppercase tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-tight)] text-center text-sand-ink ${className ?? ""}`}
    >
      <span className="block">{line1}</span>
      <span className="block">{line2}</span>
    </p>
  );
}
