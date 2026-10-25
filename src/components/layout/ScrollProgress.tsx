"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const t = setTimeout(() => setReduced(mq.matches), 0);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => { clearTimeout(t); mq.removeEventListener("change", handler); };
  }, []);
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[70] h-[2px] origin-left"
      style={{ scaleX: scrollYProgress, background: "var(--gradient-signature)" }}
    />
  );
}
