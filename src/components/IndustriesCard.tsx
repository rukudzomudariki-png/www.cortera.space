"use client";

import { motion } from "framer-motion";
import { MediaFrame } from "@/components/ui/MediaFrame";

export type IndustriesCardProps = {
  src: string;
  alt: string;
  objectPosition: string;
  label: string;
  title: string;
  contour?: boolean;
};

export function IndustriesCard({
  src,
  alt,
  objectPosition,
  label,
  title,
  contour = false,
}: IndustriesCardProps) {
  return (
    <div className="relative group h-[56svh] min-h-[340px] overflow-hidden border border-line rounded-[var(--radius-8)]">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <MediaFrame
          src={src}
          alt={alt}
          fill
          objectPosition={objectPosition}
          scrim="bottom"
          grain
          style={{ filter: contour ? "none" : "brightness(0.9) saturate(0.95)" }}
        />
      </motion.div>
      {contour && <div className="absolute inset-0 -z-10" />}
      <div className="absolute bottom-0 left-0 p-6 z-10">
        <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-1">
          {label}
        </span>
        <h3 className="text-[var(--font-size-h3)] font-semibold tracking-[var(--letter-spacing-tight)] text-text">
          {title}
        </h3>
      </div>
    </div>
  );
}
