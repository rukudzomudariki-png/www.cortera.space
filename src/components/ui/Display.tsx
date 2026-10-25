"use strict";

import { PropsWithChildren } from "react";

export type DisplayProps = PropsWithChildren<{
  level?: 1 | 2 | 3;
  className?: string;
  accent?: string;
}>;

export function Display({ children, level = 1, className, accent }: DisplayProps) {
  const size = { 1: "text-[var(--font-size-h1)]", 2: "text-[var(--font-size-h2)]", 3: "text-[var(--font-size-h3)]" }[level];
  return (
    <h1
      className={`mb-0 font-sans font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-tight)] ${size} ${className ?? ""}`}
    >
      {children && accent ? (
        <>
          {String(children).split(accent).map((part, i) =>
            part.length ? (
              <span key={i}>{part}</span>
            ) : null
          )}
          <em key="accent" className="font-mono italic">
            {accent}
          </em>
        </>
      ) : (
        children
      )}
    </h1>
  );
}
