"use strict";

import { PropsWithChildren } from "react";

export type StatusChipProps = PropsWithChildren<{
  status: "Pre-release" | "In development";
  className?: string;
}>;

export function StatusChip({ status, className }: StatusChipProps) {
  const isPre = status === "Pre-release";
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] border border-line rounded-full px-3 py-1 ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-2 w-2 rounded-full ${
          isPre ? "bg-[linear-gradient(90deg,#FF7A45,#F0508A,#8B5CF6,#3B82F6,#2DD4BF)]" : "border border-line bg-transparent"
        }`}
      />
      {status}
    </span>
  );
}
