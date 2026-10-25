import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { mining } from "@/content/industries/mining";

export const metadata: Metadata = {
  title: mining.title,
  description: mining.description,
  alternates: { canonical: mining.canonical },
  openGraph: {
    title: mining.title,
    description: mining.description,
    images: [{ url: "/assets/hero-mine.jpg", width: 1200, height: 630, alt: "Cortera mining" }],
  },
};

export default function Page() {
  return <IndustryPage content={mining} />;
}
