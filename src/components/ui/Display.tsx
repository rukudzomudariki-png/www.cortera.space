"use strict";

import { PropsWithChildren } from "react";

export type DisplayProps = PropsWithChildren<{
  level?: 1 | 2 | 3;
  className?: string;
  accent?: string;
}>;

function renderWithEmphasis(text: string): React.ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={i} className="font-[var(--font-instrument-serif)] italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part.length ? <span key={i}>{part}</span> : null;
  });
}

export function Display({ children, level = 1, className, accent }: DisplayProps) {
  const size = { 1: "text-[var(--font-size-h1)]", 2: "text-[var(--font-size-h2)]", 3: "text-[var(--font-size-h3)]" }[level];
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
  let content: React.ReactNode = children;
  if (typeof children === "string") {
    if (accent && children.includes(accent)) {
      const idx = children.indexOf(accent);
      content = (
        <>
          {idx > 0 ? renderWithEmphasis(children.slice(0, idx)) : null}
          <em className="font-[var(--font-instrument-serif)] italic">{accent}</em>
          {idx + accent.length < children.length ? renderWithEmphasis(children.slice(idx + accent.length)) : null}
        </>
      );
    } else {
      content = renderWithEmphasis(children);
    }
  }
  return (
    <Tag
      className={`mb-0 font-sans font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-tight)] ${size} ${className ?? ""}`}
    >
      {content}
    </Tag>
  );
}
