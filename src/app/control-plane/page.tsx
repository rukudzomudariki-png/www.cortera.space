import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Control Plane",
  description: "Permissions, guardrails, monitoring, cost visibility, failure analysis and human oversight for every agent.",
  alternates: { canonical: "/control-plane" },
};

export default function Page() {
  return <PageHeader eyebrow="Control Plane" title="Control Plane" />;
}
