"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

type MegaItem = { key: string; label: string; href: string; desc: string; img: string; alt: string };

const MEGA_ITEMS: MegaItem[] = [
  {
    key: "mining",
    label: "Mining",
    href: "/industries/mining",
    desc: "Robotic systems for mineral extraction and haulage.",
    img: "/assets/hero-mine.jpg",
    alt: "Two haul trucks driving through an underground mine tunnel",
  },
  {
    key: "agriculture",
    label: "Agriculture",
    href: "/industries/agriculture",
    desc: "Field robotics for planting, tending and harvest.",
    img: "/assets/control-terminal.jpg",
    alt: "Control terminal",
  },
];

const CENTER_LINKS = [
  { label: "Physical AI", href: "/physical-ai" },
  { label: "Control Plane", href: "/control-plane" },
  { label: "Industries", href: "/industries/mining", mega: true },
  { label: "Safety", href: "/safety" },
  { label: "Research", href: "/research" },
  { label: "News", href: "/announcements" },
  { label: "Company", href: "/company" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hovered, setHovered] = useState<string>(MEGA_ITEMS[0].key);
  const lastY = useRef(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (window.innerWidth >= 1024) {
        if (y > window.innerHeight && y > lastY.current) setHidden(true);
        else setHidden(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => { setOpen(false); setMegaOpen(false); }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openMega = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMegaOpen(true), 80);
  };
  const closeMega = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setMegaOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/announcements") return pathname.startsWith("/announcements") || pathname.startsWith("/blog");
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleMegaKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = MEGA_ITEMS[(idx + 1) % MEGA_ITEMS.length];
      setHovered(next.key);
      (document.getElementById(`mega-item-${next.key}`) as HTMLElement | null)?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = MEGA_ITEMS[(idx - 1 + MEGA_ITEMS.length) % MEGA_ITEMS.length];
      setHovered(prev.key);
      (document.getElementById(`mega-item-${prev.key}`) as HTMLElement | null)?.focus();
    } else if (e.key === "Escape") {
      setMegaOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-[250ms] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-bg/72 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-[var(--side-padding)] h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Logo variant="mark" width={28} height={28} />
            <span className="font-sans font-semibold text-[14px] tracking-[0.28em] text-text">
              CORTERA
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {CENTER_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  if (link.mega) openMega();
                }}
                onMouseLeave={() => {
                  if (link.mega) closeMega();
                }}
                onFocus={() => {
                  if (link.mega) setMegaOpen(true);
                }}
              >
                {link.mega ? (
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    className={`group relative text-[14px] font-sans text-text/80 hover:text-text transition-colors py-2 ${
                      isActive(link.href) ? "text-text" : ""
                    }`}
                    onClick={() => setMegaOpen((v) => !v)}
                    onFocus={() => setMegaOpen(true)}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-0 h-px bg-[image:var(--gradient-signature)] transition-all duration-200 ${
                        isActive(link.href) || megaOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative text-[14px] font-sans text-text/80 hover:text-text transition-colors py-2 ${
                      isActive(link.href) ? "text-text" : ""
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-0 h-px bg-[image:var(--gradient-signature)] transition-all duration-200 ${
                        isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{ transition: "width 200ms" }}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {APP_URL ? (
              <a
                href={APP_URL}
                className="hidden lg:inline-flex text-[14px] font-sans text-text/80 hover:text-text transition-colors"
              >
                Sign in
              </a>
            ) : null}
            <Button variant="primary" size="sm" href="/contact" className="hidden lg:inline-flex">
              Request a demo
            </Button>
            <button
              className="lg:hidden rounded-full p-2 text-text hover:bg-surface transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {megaOpen ? (
            <m.div
              ref={megaRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full h-[360px] bg-surface border-b border-line"
              onMouseLeave={closeMega}
            >
              <div className="mx-auto max-w-[var(--container-max)] px-[var(--side-padding)] h-full grid grid-cols-2 gap-8 items-center">
                <div className="flex flex-col gap-6">
                  {MEGA_ITEMS.map((item, idx) => (
                    <Link
                      key={item.key}
                      id={`mega-item-${item.key}`}
                      href={item.href}
                      tabIndex={0}
                      className={`group block focus:outline-none`}
                      onMouseEnter={() => setHovered(item.key)}
                      onFocus={() => setHovered(item.key)}
                      onKeyDown={(e) => handleMegaKey(e, idx)}
                    >
                      <span className="font-sans font-semibold text-[var(--font-size-h3)] text-text block">
                        {item.label}
                      </span>
                      <span className="text-muted text-[var(--font-size-body)]">{item.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className="relative h-[280px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <MediaFrame
                        src={MEGA_ITEMS.find((m) => m.key === hovered)!.img}
                        alt={MEGA_ITEMS.find((m) => m.key === hovered)!.alt}
                        fill
                        className="h-full w-full"
                      />
                    </m.div>
                  </AnimatePresence>
                </div>
              </div>
            </m.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {open ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-bg flex flex-col px-[var(--side-padding)] py-6 overflow-auto"
          >
            <div className="flex flex-col gap-2 mt-16">
              {[
                { label: "Physical AI", href: "/physical-ai" },
                { label: "Control Plane", href: "/control-plane" },
                { label: "Safety", href: "/safety" },
                { label: "Research", href: "/research" },
                { label: "News", href: "/announcements" },
                { label: "Company", href: "/company" },
              ].map((l, i) => (
                <m.div
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-sans font-semibold text-[40px] leading-tight text-text"
                  >
                    {l.label}
                  </Link>
                </m.div>
              ))}
              <m.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5 * 0.08, duration: 0.4 }}
                className="mt-2"
              >
                <details className="group">
                  <summary className="list-none cursor-pointer font-sans font-semibold text-[40px] leading-tight text-text">
                    Industries
                  </summary>
                  <div className="ml-4 mt-2 flex flex-col gap-1">
                    <Link href="/industries/mining" onClick={() => setOpen(false)} className="text-[28px] text-muted hover:text-text">
                      Mining
                    </Link>
                    <Link href="/industries/agriculture" onClick={() => setOpen(false)} className="text-[28px] text-muted hover:text-text">
                      Agriculture
                    </Link>
                  </div>
                </details>
              </m.div>
            </div>
            <div className="mt-auto pt-8">
              <Button variant="primary" size="lg" href="/contact" className="w-full">
                Request a demo
              </Button>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
