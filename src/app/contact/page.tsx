import { Metadata } from "next";
import { ASSETS } from "@/config/assets";
import { CONTACT_EMAIL, buildMailto } from "@/config/contact";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cortera to talk about Physical AI for mining and agriculture, the Control Plane, or research collaboration.",
  openGraph: { images: [{ url: ASSETS.heroRobot }] },
  alternates: { canonical: "/contact" },
};

const topics = [
  {
    index: "01",
    title: "Request a demo",
    desc: "Walk through Physical AI or the Control Plane with us.",
    subject: "Demo request",
    body:
      "Hi Cortera team,\n\nI'd like to see a demo of:\n[ ] Physical AI   [ ] Control Plane\n\nName:\nOrganisation:\nRole:\n\nWhat we want to explore:\n",
  },
  {
    index: "02",
    title: "Mining or agriculture operations",
    desc: "Tell us about your site and its constraints.",
    subject: "Operations inquiry",
    body:
      "Hi Cortera team,\n\nIndustry: Mining / Agriculture\nName:\nOrganisation:\n\nOur site and conditions:\nThe task we want to improve:\nSafety or regulatory constraints:\n",
  },
  {
    index: "03",
    title: "Research and collaboration",
    desc: "Cortera Framework, CorMCP, Teralis and agent safety.",
    subject: "Research inquiry",
    body:
      "Hi Cortera team,\n\nName:\nAffiliation:\n\nWhat I'd like to discuss:\nLinks (paper, repo, project):\n",
  },
  {
    index: "04",
    title: "Something else",
    desc: "Press, partnerships, or anything that does not fit above.",
    subject: "Hello Cortera",
    body: "Hi Cortera team,\n\n",
  },
];

const includeItems = [
  "Who you are and what you operate",
  "The conditions and constraints on site",
  "What you want to improve or explore",
  "Anything we should know about safety or regulation",
];

export default function ContactPage() {
  const primaryMailto = buildMailto({ subject: "Hello Cortera", body: "Hi Cortera team,\n\n" });

  return (
    <>
      <Section variant="dark" className="relative overflow-hidden" style={{ height: "clamp(520px, 74vh, 760px)" }}>
        <div
          aria-hidden="true"
          className="relative w-full h-[40svh] lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-[60%] lg:h-full pointer-events-none"
          style={{ mixBlendMode: "screen", filter: "brightness(1.1) contrast(1.2)" }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at center, #3B82F6, transparent 70%)" }}
          />
          <Image
            src={ASSETS.logoMarkDark}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 45%, transparent 85%), linear-gradient(to left, transparent, black 30%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 45%, transparent 85%), linear-gradient(to left, transparent, black 30%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div className="absolute inset-0 grain" />
        </div>

        <Container className="relative z-10 h-full flex flex-col justify-end pt-[40svh] lg:pt-0 pb-[clamp(40px,6vh,80px)]">
          <div className="max-w-[42%] min-w-[280px]">
            <Eyebrow>CONTACT</Eyebrow>
            <Display level={1} accent="operation" className="mt-2">
              Let&apos;s talk about your *operation*.
            </Display>
            <Lede className="mt-6" maxWidth="56ch">
              Tell us about your site, your conditions and your constraints. We will tell you honestly what is possible.
            </Lede>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href={primaryMailto}>
                Email team@cortera.space
              </Button>
              <CopyEmailButton />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="paper" id="topics">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>WHAT ARE YOU AFTER?</Eyebrow>
          <Display level={2} accent="point" className="mt-4">
            Pick a starting *point*.
          </Display>
          <div className="mt-12 border-t border-paper-line">
            {topics.map((t) => (
              <a
                key={t.index}
                href={buildMailto({ subject: t.subject, body: t.body })}
                aria-label={`${t.title} (opens your email app)`}
                className="group block border-b border-paper-line py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[var(--font-size-label)] text-muted w-8 shrink-0">{t.index}</span>
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-[var(--font-size-h3)] text-ink">{t.title}</h3>
                    <p className="text-muted text-[var(--font-size-body)] mt-1">{t.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-ink transition-transform group-hover:translate-x-1">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="dark">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>TO HELP US REPLY WELL</Eyebrow>
          <Display level={2} accent="help" className="mt-4">
            Four things that *help*.
          </Display>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-line">
            {includeItems.map((item, i) => (
              <div key={item} className="p-6 border-b border-r border-line last:border-b-0 lg:last:border-r-0">
                <span className="font-mono text-[var(--font-size-label)] text-muted block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-text text-[var(--font-size-body)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="paper" id="direct">
        <Container className="py-[var(--section-padding)]">
          <Eyebrow>OR JUST WRITE</Eyebrow>
          <a
            href={`mailto:`}
            className="block font-sans font-semibold text-[clamp(28px,6vw,64px)] tracking-[var(--letter-spacing-tight)] text-ink mt-4 bg-[linear-gradient(90deg,#FF7A45,#F0508A,#8B5CF6,#3B82F6,#2DD4BF)] bg-no-repeat bg-bottom bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-[background-size] duration-200"
          >
            <span className="bg-clip-text">{CONTACT_EMAIL}</span>
          </a>
          <div className="mt-4">
            <CopyEmailButton />
          </div>
          <p className="mt-6 text-muted text-[var(--font-size-body)]">No form, no tracking. Your email goes straight to our team inbox.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-muted text-[var(--font-size-body)]">Reporting a security or safety concern? See our approach on the Safety page.</p>
            <Button variant="ghost" href="/safety">Safety</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
