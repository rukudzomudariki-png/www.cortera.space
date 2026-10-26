"use client";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Section variant="dark">
      <Container className="py-[var(--section-padding)]">
        <Display level={1}>Something went wrong.</Display>
        <p className="mt-4 text-muted">Please try again or contact team@cortera.space.</p>
        <div className="mt-8 flex gap-4">
          <Button variant="primary" onClick={() => reset()}>Try again</Button>
          <Button variant="ghost" href="/">Back to home</Button>
        </div>
      </Container>
    </Section>
  );
}
