import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CoverArt } from "./CoverArt";
function formatDate(date: string): string {
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  if (date.length === 7) { const [y, m] = date.split("-"); return monthNames[parseInt(m,10)-1] + " " + y; }
  const [y, m, d] = date.split("-"); return parseInt(d,10) + " " + monthNames[parseInt(m,10)-1] + " " + y;
}
import type { Post } from "@/lib/content";

export function PostCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <article className={`group relative border border-line bg-surface rounded-[8px] overflow-hidden transition-colors hover:border-text/30 ${featured ? "md:col-span-2" : ""}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <CoverArt slug={post.slug} style={post.coverStyle} cover={post.cover} className="absolute inset-0" />
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="border border-line px-2 py-0.5">{post.category}</span>
          <time dateTime={post.date.length === 7 ? post.date + "-01" : post.date}>{formatDate(post.date)}</time>
        </div>
        {featured ? (
          <h2 className="font-sans font-semibold text-text line-clamp-2 text-[clamp(22px,2.4vw,32px)]">
            <Link href={`/${post.section}/${post.slug}`} className="after:absolute after:inset-0 focus:outline-none">
              {post.title}
            </Link>
          </h2>
        ) : (
          <h3 className="font-sans font-semibold text-text line-clamp-2 text-[var(--font-size-h3)]">
            <Link href={`/${post.section}/${post.slug}`} className="after:absolute after:inset-0 focus:outline-none">
              {post.title}
            </Link>
          </h3>
        )}
        <p className="text-muted line-clamp-3 text-[var(--font-size-body)]">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-mono text-[11px] text-muted">{post.readingTime > 2 ? `${post.readingTime} min read` : ""}</span>
          <ArrowUpRight size={16} className="text-muted transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-signature)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
    </article>
  );
}
