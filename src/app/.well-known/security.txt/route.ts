import { NextResponse } from "next/server";

export function GET() {
  const email = process.env.NEXT_PUBLIC_SECURITY_EMAIL;
  if (!email) return new NextResponse(null, { status: 404 });
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();
  const body = `Contact: mailto:${email}\nExpires: ${expires}\nPreferred-Languages: en\nCanonical: https://www.cortera.space/.well-known/security.txt\n`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
