import type { LucideIcon } from "lucide-react";

export type IndustryCapability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type IndustryContent = {
  slug: "mining" | "agriculture";
  title: string;
  description: string;
  canonical: string;
  eyebrow: string;
  h1: string;
  lede: string;
  conditions: {
    h2: string;
    lede: string;
    items: string[];
  };
  build: {
    h2: string;
    blocks: IndustryCapability[];
  };
  closing: {
    h2: string;
    lede: string;
  };
  otherIndustry: {
    label: string;
    href: string;
    description: string;
  };
};
