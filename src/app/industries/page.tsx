import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Industries } from "@/components/home/Industries";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description: "Cortera builds Physical AI for mining and agriculture.",
  alternates: { canonical: "/industries" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="INDUSTRIES"
        title="Two industries. One standard of *safety*."
        lede="Cortera builds Physical AI for the places where work is hardest and the stakes are highest."
      />
      <Industries />
      <Section variant="dark" className="border-t border-line">
        <Container className="py-[var(--section-padding)] flex flex-col items-center text-center gap-6">
          <Display level={2} accent="operation">
            Talk to us about your operation.
          </Display>
          <Lede className="max-w-[60ch]" maxWidth="60ch">
            Tell us about your site and its hazards. We will tell you honestly what is possible.
          </Lede>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/contact">
              Request a demo
            </Button>
            <Button variant="secondary" href="/company">
              Learn about Cortera
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
