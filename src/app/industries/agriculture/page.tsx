import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { agriculture } from "@/content/industries/agriculture";

export const metadata: Metadata = {
  title: agriculture.title,
  description: agriculture.description,
  alternates: { canonical: agriculture.canonical },
};

export default function Page() {
  return <IndustryPage content={agriculture} />;
}
