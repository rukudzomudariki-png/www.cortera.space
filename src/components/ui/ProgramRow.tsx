"use strict";

import { PropsWithChildren } from "react";
import { StatusChip } from "@/components/ui/StatusChip";

export type ProgramRowProps = PropsWithChildren<{
  index: string;
  name: string;
  status: "Pre-release" | "In development";
  explanation: string;
  capabilities: string[];
  actions?: React.ReactNode;
  schematic?: React.ReactNode;
  id?: string;
}>;

export function ProgramRow({
  index,
  name,
  status,
  explanation,
  capabilities,
  actions,
  schematic,
  id,
  children,
}: ProgramRowProps) {
  return (
    <div id={id} className="border-t border-line py-[var(--section-padding)]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-[var(--font-size-label)] text-muted">{index}</span>
            <h3 className="text-[var(--font-size-h2)] font-semibold tracking-[var(--letter-spacing-tight)]">{name}</h3>
          </div>
          <div className="mb-6">
            <StatusChip status={status} />
          </div>
          <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-muted max-w-[60ch] mb-6">
            {explanation}
          </p>
          <ul className="space-y-2 mb-6">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[var(--font-size-body)]">
                <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[linear-gradient(90deg,#FF7A45,#F0508A,#8B5CF6,#3B82F6,#2DD4BF)]" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          {actions ? <div className="flex flex-wrap gap-3 items-center">{actions}</div> : null}
          {children}
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          {schematic}
        </div>
      </div>
    </div>
  );
}
