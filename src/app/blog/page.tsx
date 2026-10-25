import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Display } from "@/components/ui/Display";
import { NewsTabs } from "@/components/news/NewsTabs";
import { PostCard } from "@/components/news/PostCard";
import { getAllPosts } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const posts = getAllPosts("blog");
  const empty = posts.length === 0;
  return {
    title: "Blog",
    description: "Notes from the Cortera team on Physical AI, agent safety and engineering.",
    alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
    robots: empty ? { index: false, follow: true } : undefined,
  };
}

export default function BlogPage() {
  const posts = getAllPosts("blog");
  return (
    <>
      <PageHeader
        height="clamp(420px, 56vh, 560px)"
        eyebrow="BLOG"
        title="Notes from the *work*."
        lede="Physical AI, agent safety and engineering, in our own words."
        image="/assets/logo-mark-dark.png"
        imageAlt=""
        imageRight="50%"
      />
      <Section variant="dark" className="!py-0">
        <Container className="pb-8 -mt-6 relative z-10">
          <NewsTabs active="blog" />
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
        </Container>
      </Section>
    </>
  );
}
