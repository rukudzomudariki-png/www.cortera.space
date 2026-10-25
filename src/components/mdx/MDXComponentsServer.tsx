import React from "react";
import { ExternalLink as ExtIcon } from "lucide-react";
import { FRAMEWORK_REPO_URL, HN_URL } from "@/config/links";
import { CodeBlock } from "./MDXComponents";

function slugify(text: string): string {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}

export function Callout({ children }: { children: React.ReactNode }) {
  return <div className="my-6 border border-line bg-surface px-5 py-4 text-text">{children}</div>;
}

export function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto" />
      {caption ? <figcaption className="font-mono text-[12px] text-muted mt-2">{caption}</figcaption> : null}
    </figure>
  );
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-text underline">
      {children}
      <ExtIcon size={14} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function HNLink({ children }: { children: React.ReactNode }) {
  if (!HN_URL) return null;
  return (
    <a href={HN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-text underline">
      {children}
      <ExtIcon size={14} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function RepoLink({ children }: { children: React.ReactNode }) {
  return (
    <a href={FRAMEWORK_REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-text underline">
      {children}
      <ExtIcon size={14} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function AnchorHeading({ level, children }: { level: 2 | 3; children: React.ReactNode }) {
  const text = React.Children.toArray(children).map((c) => (typeof c === "string" ? c : "")).join("");
  const id = slugify(text);
  const Tag = level === 2 ? "h2" : "h3";
  const size = level === 2 ? "text-[36px]" : "text-[26px]";
  return (
    <Tag id={id} className={`group mt-10 mb-4 font-sans font-semibold ${size} text-text scroll-mt-24`}>
      <a href={`#${id}`} className="mr-2 opacity-0 group-hover:opacity-100 text-muted transition-opacity" aria-label="Anchor link">
        #
      </a>
      {children}
    </Tag>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <AnchorHeading level={2}>{children}</AnchorHeading>;
}
export function H3({ children }: { children: React.ReactNode }) {
  return <AnchorHeading level={3}>{children}</AnchorHeading>;
}

export const mdxComponentsServer = {
  Callout,
  CodeBlock,
  Figure,
  ExternalLink,
  HNLink,
  RepoLink,
  h2: H2,
  h3: H3,
};
