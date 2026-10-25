"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ContourBackdrop } from "@/components/ContourBackdrop";

const LINKS = [
  { name: "Mining", href: "#mining" },
  { name: "Agriculture", href: "#agriculture" },
  { name: "Control plane", href: "#control-plane" },
  { name: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = `fixed inset-x-0 top-0 z-[60] ${scrolled ? "backdrop-blur-md bg-surface/[0.6] border-b border-line" : "bg-transparent"}`;

  return (
    <nav className={cls}>
      <div className="flex items-center justify-between gap-4 px-[var(--side-padding)] py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo variant="mark" width={36} height={36} />
          <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-text">
            CORTERA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[var(--font-size-label)] font-mono uppercase tracking-[var(--letter-spacing-wide)]">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-muted transition-colors"
              onMouseEnter={() => setMega(link.name)}
              onMouseLeave={() => setMega(null)}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-line px-4 py-1.5 text-[var(--font-size-label)] hover:bg-surface transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            className={`rounded-full p-2 text-text hover:bg-surface transition-colors ${
              scrolled ? "bg-surface/[0.4]" : ""
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {mega && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-0 right-0 top-full border-b border-line bg-surface z-[55]"
          >
            <div className="mx-auto max-w-[var(--container-max)] px-[var(--side-padding)] py-10 flex gap-10">
              {mega === "Mining" && (
                <div className="w-[42%]">
                  <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-3">Mining</span>
                  <MediaFrame
                    src="/assets/hero-mine.jpg"
                    alt="Two haul trucks driving through an underground mine tunnel"
                    width={560}
                    height={420}
                    objectPosition="70% 60%"
                    scrim="bottom"
                    className="rounded-none"
                    style={{ filter: "brightness(0.9) saturate(0.9)" }}
                  />
                  <Link href="#mining" className="mt-3 inline-block font-mono text-[var(--font-size-label)] text-text underline underline-offset-4">
                    Visit Mining
                  </Link>
                </div>
              )}
              {mega === "Agriculture" && (
                <div className="w-[42%]">
                  <span className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted block mb-3">Agriculture</span>
                  <ContourBackdrop className="h-[300px] w-full" opacity={0.5} />
                  <Link href="#agriculture" className="mt-3 inline-block font-mono text-[var(--font-size-label)] text-text underline underline-offset-4">
                    Visit Agriculture
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 bg-bg/90 backdrop-blur-sm z-[50]" onClick={() => setOpen(false)} />
            <motion.ul
              ref={menuRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed inset-x-0 top-full z-[55] border-b border-line bg-bg flex flex-col items-start justify-start gap-0 px-[var(--side-padding)] py-8"
            >
              {LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block font-mono text-[var(--font-size-body)] uppercase tracking-[var(--letter-spacing-wide)] text-text py-4 hover:bg-surface transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block font-mono text-[var(--font-size-body)] uppercase tracking-[var(--letter-spacing-wide)] text-text py-4 hover:bg-surface transition-colors rounded-full mx-2"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
