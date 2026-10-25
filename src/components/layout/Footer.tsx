"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { CONTACT_EMAIL } from "@/config/contact";

const columns = [
  {
    heading: "Platform",
    links: [
      { label: "Physical AI", href: "/physical-ai" },
      { label: "Control Plane", href: "/control-plane" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Mining", href: "/industries/mining" },
      { label: "Agriculture", href: "/industries/agriculture" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Company", href: "/company" },
      { label: "Research", href: "/research" },
      { label: "Safety", href: "/safety" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setYear(new Date().getFullYear()), 0); return () => clearTimeout(t); }, []);
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const x = process.env.NEXT_PUBLIC_X_URL;
  const github = process.env.NEXT_PUBLIC_GITHUB_URL;

  return (
    <footer className="bg-surface border-t border-line">
      <Container>
        <div className="pt-[var(--section-padding)]">
          <div
            aria-hidden="true"
            className="h-px w-full"
            style={{ background: "var(--gradient-signature)" }}
          />
          <div
            aria-hidden="true"
            className="mt-8 font-sans font-semibold tracking-[var(--letter-spacing-tight)] text-surface-2 select-none pointer-events-none text-[clamp(4rem,18vw,14rem)] leading-none"
          >
            CORTERA
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <Logo
              variant="lockup"
              width={160}
              height={80}
              style={{ filter: "invert(1)", mixBlendMode: "screen" }}
            />
            <p className="font-sans font-semibold text-text">Physical AI for Mining &amp; Agriculture</p>
            <p className="text-muted max-w-[40ch]">
              Frontier Physical and cloud AI, with the controls to run it safely.
            </p>
            <a href={"mailto:" + CONTACT_EMAIL} className="text-text hover:text-muted transition-colors">{CONTACT_EMAIL}</a>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[var(--font-size-label)] uppercase tracking-[var(--letter-spacing-wide)] text-muted mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-text hover:text-muted transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6 pb-[var(--section-padding)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[var(--font-size-label)] text-muted">
          <p>© {year} Cortera. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {linkedin ? (
              <a href={linkedin} aria-label="LinkedIn" className="hover:text-text transition-colors">
                LinkedIn
              </a>
            ) : null}
            {x ? (
              <a href={x} aria-label="X" className="hover:text-text transition-colors">
                X
              </a>
            ) : null}
            {github ? (
              <a href={github} aria-label="GitHub" className="hover:text-text transition-colors">
                GitHub
              </a>
            ) : null}
            <a href={"mailto:" + CONTACT_EMAIL} className="hover:text-text transition-colors">{CONTACT_EMAIL}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
