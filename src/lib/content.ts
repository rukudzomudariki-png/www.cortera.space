import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

export type Section = "announcements" | "blog";

export type CoverStyle = "blast-radius" | "contour" | "grid";

export interface PostFrontmatter {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverStyle: CoverStyle;
  cover?: string;
  author: string;
  draft: boolean;
  canonicalUrl?: string;
}

export interface Post {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  coverStyle: CoverStyle;
  cover?: string;
  author: string;
  draft: boolean;
  canonicalUrl?: string;
  readingTime: number;
  wordCount: number;
  content: string;
  section: Section;
}

const schema = z.object({
  title: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/),
  category: z.string(),
  excerpt: z.string().max(180),
  coverStyle: z.enum(["blast-radius", "contour", "grid"]),
  cover: z.string().optional(),
  author: z.string().default("Cortera"),
  draft: z.boolean().default(false),
  canonicalUrl: z.string().url().optional(),
});

const CONTENT_ROOT = path.join(process.cwd(), "content");

function dirFor(section: Section) {
  return path.join(CONTENT_ROOT, section);
}


// Actually slug = filename without extension, kebab-case
function slugFromFile(file: string) {
  return file.replace(/\.mdx?$/, "").toLowerCase();
}

function parseDateSort(date: string): number {
  // month-only sorts as 1st
  const full = date.length === 7 ? date + "-01" : date;
  return new Date(full + "T00:00:00Z").getTime();
}

export function formatDate(date: string): string {
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  if (date.length === 7) {
    const [y, m] = date.split("-");
    return `${monthNames[parseInt(m, 10) - 1]} ${y}`;
  }
  const [y, m, d] = date.split("-");
  return `${parseInt(d, 10)} ${monthNames[parseInt(m, 10) - 1]} ${y}`;
}

export function dateToIso(date: string): string {
  return date.length === 7 ? date + "-01" : date;
}

export function dateToPubDate(date: string): Date {
  const full = date.length === 7 ? date + "-01" : date;
  return new Date(full + "T00:00:00Z");
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function getAllPosts(section: Section): Post[] {
  const dir = dirFor(section);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f));
  const posts: Post[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const parsed = schema.parse(data);
    const slug = slugFromFile(file);
    // validate kebab-case
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
      throw new Error(`Invalid slug (not kebab-case) for ${file}: ${slug}`);
    }
    const wordCount = countWords(content);
    const readingTime = Math.ceil(wordCount / 220);
    const post: Post = {
      title: parsed.title,
      slug,
      date: parsed.date,
      category: parsed.category,
      excerpt: parsed.excerpt,
      coverStyle: parsed.coverStyle,
      cover: parsed.cover,
      author: parsed.author,
      draft: parsed.draft,
      canonicalUrl: parsed.canonicalUrl,
      readingTime,
      wordCount,
      content,
      section,
    };
    if (post.draft) continue;
    posts.push(post);
  }
  posts.sort((a, b) => parseDateSort(b.date) - parseDateSort(a.date));
  return posts;
}

export function getPost(section: Section, slug: string): Post | undefined {
  return getAllPosts(section).find((p) => p.slug === slug);
  // Note: getAllPosts excludes drafts; for draft lookup not needed
}

export function getPostIncludingDrafts(section: Section, slug: string): Post | undefined {
  // re-read
  const dir = dirFor(section);
  if (!fs.existsSync(dir)) return undefined;
  const files = fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f));
  for (const file of files) {
    const s = slugFromFile(file);
    if (s !== slug) continue;
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const parsed = schema.parse(data);
    const wordCount = countWords(content);
    return {
      title: parsed.title,
      slug: s,
      date: parsed.date,
      category: parsed.category,
      excerpt: parsed.excerpt,
      coverStyle: parsed.coverStyle,
      cover: parsed.cover,
      author: parsed.author,
      draft: parsed.draft,
      canonicalUrl: parsed.canonicalUrl,
      readingTime: Math.ceil(wordCount / 220),
      wordCount,
      content,
      section,
    };
  }
  return undefined;
}

export function hasBlogPosts(): boolean {
  return getAllPosts("blog").length > 0;
}

export function getCategories(posts: Post[]): string[] {
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function getHeadings(content: string): { id: string; text: string; level: number }[] {
  const lines = content.split("\n");
  const headings: { id: string; text: string; level: number }[] = [];
  for (const line of lines) {
    const m = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].replace(/`([^`]+)`/g, "$1").trim();
    headings.push({ id: slugify(text), text, level });
  }
  return headings;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
