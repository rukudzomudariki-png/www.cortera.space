import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Button } from "@/components/ui/Button";
import { CopyLink } from "@/components/ui/CopyLink";
import { CoverArt } from "@/components/news/CoverArt";
import { PostCard } from "@/components/news/PostCard";
import { getAllPosts, getPost, getHeadings, formatDate, dateToIso } from "@/lib/content";
import { mdxComponentsServer as mdxComponents } from "@/components/mdx/MDXComponentsServer";


export function generateStaticParams() {
  return getAllPosts("announcements").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("announcements", slug);
  if (!post) return {};
  const url = post.canonicalUrl ?? `/announcements/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: dateToIso(post.date),
      authors: [post.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("announcements", slug);
  if (!post) notFound();
  const headings = getHeadings(post.content);
  const toc = headings.filter((h) => h.level === 2);
  const others = getAllPosts("announcements").filter((p) => p.slug !== slug).slice(0, 2);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const articleUrl = `${siteUrl}/announcements/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: dateToIso(post.date),
    author: { "@type": "Organization", name: "Cortera" },
    publisher: { "@type": "Organization", name: "Cortera" },
    mainEntityOfPage: articleUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section variant="dark">
        <Container className="py-[var(--section-padding)] max-w-[900px]">
          <Link href="/announcements" className="font-mono text-[12px] text-muted hover:text-text">← Announcements</Link>
          <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span className="border border-line px-2 py-0.5">{post.category}</span>
            <time dateTime={dateToIso(post.date)}>{formatDate(post.date)}</time>
          </div>
          <Display level={1} className="mt-4">{post.title}</Display>
          <Lede className="mt-4">{post.excerpt}</Lede>
          <p className="font-mono text-[12px] text-muted mt-4">
            By {post.author}{post.readingTime > 2 ? ` · ${post.readingTime} min read` : ""}
          </p>
          <div className="mt-8 aspect-[21/9] overflow-hidden rounded-[8px] border border-line">
            <CoverArt slug={post.slug} style={post.coverStyle} cover={post.cover} className="w-full h-full" />
          </div>
        </Container>
      </Section>
      <Section variant="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            {toc.length >= 3 ? (
              <nav aria-label="Table of contents" className="sticky top-[120px] flex flex-col gap-2">
                {toc.map((h) => (
                  <a key={h.id} href={`#${h.id}`} className="text-[13px] text-muted hover:text-ink">{h.text}</a>
                ))}
              </nav>
            ) : null}
          </aside>
          <Container className="lg:col-span-6 max-w-[68ch]">
            <article className="prose-article">
              {await (async () => {
                const { content } = await (await import("next-mdx-remote/rsc")).compileMDX({ source: post.content, components: mdxComponents, options: { mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]] } } });
                return content;
              })()}
            </article>
            <div className="mt-12 border-t border-paper-line pt-6">
              <p className="font-mono text-[12px] text-muted mb-3">Share</p>
              <div className="flex items-center gap-4">
                <CopyLink url={articleUrl} />
                <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(articleUrl)}`} className="text-ink underline">Email this article</a>
              </div>
            </div>
            {others.length > 0 ? (
              <div className="mt-12">
                <p className="font-mono text-[12px] text-muted mb-4">More announcements</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {others.map((p) => <PostCard key={p.slug} post={p} />)}
                </div>
              </div>
            ) : null}
          </Container>
          <div className="lg:col-span-3" />
        </div>
      </Section>
      <Section variant="dark" className="border-t border-line">
        <Container className="py-[var(--section-padding)] text-center">
          <Display level={2}>Want to talk about *this*?</Display>
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="primary" href="/contact">Get in touch</Button>
            <Button variant="secondary" href="/research">Explore Research</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
