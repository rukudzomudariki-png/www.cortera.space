"use strict";

import Image from "next/image";
import { PropsWithChildren } from "react";

export type LogoVariant = "mark" | "lockup";

export type LogoProps = PropsWithChildren<{
  variant?: LogoVariant;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}>;

const MARK_SRC = "/assets/logo-mark-dark.png";
const LOCKUP_SRC = "/assets/logo-lockup-light.png";

export function Logo({ variant = "mark", className, width, height, style }: LogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src={MARK_SRC}
        alt="Cortera logo: a robot inside a cave-shaped dome"
        width={width ?? 120}
        height={height ?? 120}
        priority={width !== undefined ? width <= 48 : false}
        className={`mix-blend-screen ${className ?? ""}`}
        style={{
          filter: "brightness(1.1) contrast(1.2)",
          ...style,
        }}
      />
    );
  }
  return (
    <Image
      src={LOCKUP_SRC}
      alt="Cortera: Physical AI for Mining &amp; Agriculture"
      width={width ?? 240}
      height={height ?? 120}
      className={className ?? ""}
      style={style}
    />
  );
}
