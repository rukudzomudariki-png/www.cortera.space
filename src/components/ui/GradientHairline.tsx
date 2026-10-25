"use strict";

import { PropsWithChildren } from "react";

export type GradientHairlineProps = PropsWithChildren<{
  className?: string;
  height?: string;
}>;

export function GradientHairline({ children, className, height = "1px" }: GradientHairlineProps) {
  return (
    <div
      className={`relative h-[${height}] w-full ${className ?? ""}`}
      style={{
        backgroundImage: "var(--gradient-signature)",
        backgroundSize: "200% auto",
        opacity: 0.5,
      }}
    >
      {children}
    </div>
  );
}
