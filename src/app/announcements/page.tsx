import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Display } from "@/components/ui/Display";
import { Button } from "@/components/ui/Button";
import { NewsTabs } from "@/components/news/NewsTabs";
import { PostCard } from "@/components/news/PostCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Announcements",
  description: "News from Cortera: releases, research and company updates.",
  alternates: { canonical: "/announcements", types: { "application/rss+xml": "/announcements/rss.xml" } },
};

export default function AnnouncementsPage() {
  const posts = getAllPosts("announcements");
  return (
    <>
      <PageHeader
        height="clamp(420px, 56vh, 560px)"
        eyebrow="ANNOUNCEMENTS"
        title="What's *new* at Cortera."
        lede="Releases, research and company updates."
        image="/assets/logo-mark-dark.png"
        imageAlt=""
        imageRight="50%"
      />
      <Section variant="dark" className="!py-0">
        <Container className="pb-8 -mt-6 relative z-10">
          <NewsTabs active="announcements" />
        </Container>
      </Section>
      <Section variant="dark">
        <Container className="py-[var(--section-padding)]">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <Display level={2}>Nothing here *yet*.</Display>
              <p className="text-muted mt-4">We will post here when there is something worth saying.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((p, i) => (
                <PostCard key={p.slug} post={p} featured={i === 0} />
              ))}
            </div>
          )}
          <div className="mt-12 flex items-center gap-4 text-muted">
            <span>Follow along by RSS.</span>
            <Button variant="ghost" href="/announcements/rss.xml">RSS feed</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
