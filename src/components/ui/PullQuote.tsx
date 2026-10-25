"use strict";

import { PropsWithChildren } from "react";

export type PullQuoteProps = PropsWithChildren<{
  text?: string;
  attribution?: string;
  className?: string;
}>;

export function PullQuote({
  text = "Today is your opportunity to build the tomorrow you want.",
  attribution = "Ken Poirot",
  className,
}: PullQuoteProps) {
  return (
    <blockquote
      className={`relative border-t border-line pt-8 italic font-serif text-[var(--font-size-h2)] leading-[var(--line-height-tighter)] text-text ${className ?? ""}`}
    >
      {text}
      <footer className="mt-6 font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted">
        {attribution}
      </footer>
    </blockquote>
  );
}
