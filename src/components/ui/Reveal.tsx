"use client";

import { useEffect, useRef, useState } from "react";
import { m, type Easing, type Variants } from "framer-motion";

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
};

const revealVariants: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)" as unknown as Easing,
    },
  },
};

export function Reveal({ children, className, once = true, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    return (
      <div ref={ref} className={className ?? ""}>
        {children}
      </div>
    );
  }
  return (
    <m.div
      ref={ref}
      initial={!visible ? "hidden" : "visible"}
      animate={visible ? "visible" : "hidden"}
      variants={revealVariants}
      transition={{ delay }}
      className={className ?? ""}
    >
      {children}
    </m.div>
  );
}
