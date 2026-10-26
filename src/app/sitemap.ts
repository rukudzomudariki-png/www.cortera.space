import { getAllPosts } from "@/lib/content";
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  entries.push({ url: `${siteUrl}/announcements`, lastModified: new Date() });
  for (const p of getAllPosts("announcements")) {
    entries.push({ url: `${siteUrl}/announcements/${p.slug}`, lastModified: new Date(p.date.length === 7 ? p.date + "-01" : p.date) });
  }
  const blogPosts = getAllPosts("blog");
  if (blogPosts.length > 0) {
    entries.push({ url: `${siteUrl}/blog`, lastModified: new Date() });
    for (const p of blogPosts) {
      entries.push({ url: `${siteUrl}/blog/${p.slug}`, lastModified: new Date(p.date.length === 7 ? p.date + "-01" : p.date) });
    }
  }
  return entries;
}
