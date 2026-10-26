import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Physical AI",
  description: "Intelligent robotic systems for complex industrial work in mining and agriculture.",
  alternates: { canonical: "/physical-ai" },
};

export default function Page() {
  return <PageHeader eyebrow="Physical AI" title="Physical AI" />;
}
