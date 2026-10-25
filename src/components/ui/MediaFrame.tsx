"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type MediaFrameProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  objectPosition?: string;
  objectFit?: string;
  scrim?: "none" | "bottom" | "top";
  grain?: boolean;
  parallax?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function MediaFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  objectPosition = "50% 50%",
  objectFit = "cover",
  scrim = "none",
  grain = false,
  parallax = false,
  className,
  style,
  children,
}: MediaFrameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced || !parallax || !wrapRef.current) return;
    const handle = (e: MouseEvent) => {
      const el = wrapRef.current!;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [reduced, parallax]);

  const wrapCls = `relative overflow-hidden ${className ?? ""}`;
  const imgStyle: React.CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: reduced ? "none" : "transform 0.2s ease-out",
    willChange: "transform",
  };

  const scrimCls = scrim === "bottom" ? "scrim-bottom" : scrim === "top" ? "scrim-top" : "";

  return (
    <div ref={wrapRef} className={wrapCls} style={style}>
      {children}
      <div className={`absolute inset-0 ${scrimCls} ${grain ? "grain" : ""}`} />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        fill={fill}
        sizes="100vw"
        className={`object-[${objectPosition}] object-[${objectFit}] block w-full h-full`}
        style={imgStyle}
      />
    </div>
  );
}
