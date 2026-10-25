import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";

export const metadata: Metadata = {
  title: "Cortera — Physical AI for Mining & Agriculture",
  description: "Cortera builds intelligent robotic systems for mining and agriculture, and the control plane that keeps every agent, in the cloud or on the ground, safe, observable and under human oversight.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
    </>
  );
}
