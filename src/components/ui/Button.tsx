"use strict";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PropsWithChildren } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  arrow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}>;

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-[var(--font-size-label)]",
  md: "px-6 py-3 text-[var(--font-size-body)]",
  lg: "px-8 py-4 text-[var(--font-size-body)]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  arrow = false,
  className,
  disabled = false,
  type = "button",
  external = false,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-sans font-semibold rounded-full border-transparent select-none transition-colors duration-200";
  const styles: Record<string, string> = {
    primary: "bg-text text-ink hover:bg-surface-2 focus-visible:ring-2 ring-focus-ring ring-offset-2 ring-offset-bg",
    secondary: "border border-line bg-transparent text-text hover:bg-surface hover:border-transparent",
    ghost: "bg-transparent text-muted underline underline-offset-4 hover:text-text focus-visible:ring-2 ring-focus-ring",
  };
  const Comp = href ? "a" : "button";
  return (
    <Comp
      {...(href ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : { onClick, type })}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${sizes[size]} ${className ?? ""}`}
    >
      {children}
      {arrow && <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
      {external && <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </Comp>
  );
}
