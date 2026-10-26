import { getAllPosts } from "@/lib/content";
import { SITE_URL } from "@/config/site";
import type { MetadataRoute } from "next";

const siteUrl = SITE_URL;
const buildTime = new Date();

const staticRoutes: { path: string; lastModified?: Date }[] = [
  { path: "/", lastModified: buildTime },
  { path: "/physical-ai", lastModified: buildTime },
  { path: "/control-plane", lastModified: buildTime },
  { path: "/industries", lastModified: buildTime },
  { path: "/industries/mining", lastModified: buildTime },
  { path: "/industries/agriculture", lastModified: buildTime },
  { path: "/safety", lastModified: buildTime },
  { path: "/research", lastModified: buildTime },
  { path: "/company", lastModified: buildTime },
  { path: "/contact", lastModified: buildTime },
  { path: "/privacy", lastModified: buildTime },
  { path: "/terms", lastModified: buildTime },
  { path: "/announcements", lastModified: buildTime },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const r of staticRoutes) {
    entries.push({ url: `${siteUrl}${r.path}`, lastModified: r.lastModified ?? buildTime });
  }
  for (const p of getAllPosts("announcements")) {
    entries.push({ url: `${siteUrl}/announcements/${p.slug}`, lastModified: new Date(p.date.length === 7 ? p.date + "-01" : p.date) });
  }
  const blogPosts = getAllPosts("blog");
  if (blogPosts.length > 0) {
    entries.push({ url: `${siteUrl}/blog`, lastModified: buildTime });
    for (const p of blogPosts) {
      entries.push({ url: `${siteUrl}/blog/${p.slug}`, lastModified: new Date(p.date.length === 7 ? p.date + "-01" : p.date) });
    }
  }
  return entries;
}
