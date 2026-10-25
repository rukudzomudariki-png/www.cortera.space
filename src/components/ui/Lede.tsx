"use strict";

import { PropsWithChildren } from "react";

export type LedeProps = PropsWithChildren<{
  className?: string;
  maxWidth?: string;
}>;

export function Lede({ children, className, maxWidth = "68ch" }: LedeProps) {
  return (
    <p
      className={`max-w-[${maxWidth}] text-[var(--font-size-body)] leading-[var(--line-height-body)] text-muted ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
