export const dynamic = "force-static";

import { getAllPosts, dateToPubDate } from "@/lib/content";
import { SITE_URL } from "@/config/site";


export function GET() {
  const posts = getAllPosts("announcements");
  const siteUrl = SITE_URL;
  const items = posts
    .map((p) => {
      const url = `${siteUrl}/announcements/${p.slug}`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${dateToPubDate(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Cortera Announcements</title>
    <link>${siteUrl}/announcements</link>
    <description>News from Cortera: releases, research and company updates.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
