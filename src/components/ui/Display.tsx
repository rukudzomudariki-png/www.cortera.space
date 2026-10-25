"use strict";

import { PropsWithChildren } from "react";

export type DisplayProps = PropsWithChildren<{
  level?: 1 | 2 | 3;
  className?: string;
  accent?: string;
}>;

export function Display({ children, level = 1, className, accent }: DisplayProps) {
  const size = { 1: "text-[var(--font-size-h1)]", 2: "text-[var(--font-size-h2)]", 3: "text-[var(--font-size-h3)]" }[level];
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
  const content =
    children && accent ? (
      <>
        {String(children).split(accent).map((part, i) =>
          part.length ? <span key={i}>{part}</span> : null
        )}
        <em key="accent" className="font-[var(--font-instrument-serif)] italic">
          {accent}
        </em>
      </>
    ) : (
      children
    );
  return (
    <Tag
      className={`mb-0 font-sans font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-tight)] ${size} ${className ?? ""}`}
    >
      {content}
    </Tag>
  );
}
