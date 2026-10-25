import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section variant="dark">
      <Container className="py-[var(--section-padding)]">
        <Display level={1}>Off the map.</Display>
        <div className="mt-8">
          <Button variant="ghost" href="/">Back to home</Button>
        </div>
      </Container>
    </Section>
  );
}
