import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { agriculture } from "@/content/industries/agriculture";
import { AGRICULTURE_IMAGE } from "@/config/assets";

export const metadata: Metadata = {
  title: agriculture.title,
  description: agriculture.description,
  alternates: { canonical: agriculture.canonical },
  openGraph: {
    title: agriculture.title,
    description: agriculture.description,
    images: AGRICULTURE_IMAGE
      ? [{ url: AGRICULTURE_IMAGE, width: 1200, height: 630, alt: "Cortera agriculture" }]
      : undefined,
  },
};

export default function Page() {
  return <IndustryPage content={agriculture} />;
}
