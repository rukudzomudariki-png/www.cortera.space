"use strict";

import { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{
  full?: boolean;
  className?: string;
}>;

export function Container({ children, full, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto ${className ?? ""} ${
        full ? "w-full" : `max-w-[var(--container-max)] px-[var(--side-padding)]`
      }`}
    >
      {children}
    </div>
  );
}
