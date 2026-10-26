import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { getAllPosts } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts("blog").map((p) => ({ slug: p.slug }));
}

export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getAllPosts("blog").find((p) => p.slug === slug);
  const font = fs.readFileSync(path.join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#0A0A0B", color: "#F2F1EC", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 60 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 16, color: "#8E8E93" }}>{`${post?.category} ${post?.date}`}</div>
          <div style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.1, maxWidth: 700, display: "flex" }}>{post?.title}</div>
        </div>
        <div style={{ fontSize: 20, color: "#8E8E93", display: "flex" }}>Cortera</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Geist", data: font, style: "normal", weight: 400 }] }
  );
}
