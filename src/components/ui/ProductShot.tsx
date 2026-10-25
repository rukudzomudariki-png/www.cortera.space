"use client";

import { MediaFrame } from "@/components/ui/MediaFrame";

export type ProductShotProps = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  parallax?: boolean;
  scrim?: "none" | "bottom" | "top";
  grain?: boolean;
};

export function ProductShot({ src, alt, ...rest }: ProductShotProps) {
  if (!src) return null;
  return <MediaFrame src={src} alt={alt} {...rest} />;
}
