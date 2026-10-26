import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = new URL(request.url);

  // Apex -> www redirect
  if (host === "cortera.space") {
    const target = new URL(url.pathname + url.search, "https://www.cortera.space");
    return NextResponse.redirect(target, 308);
  }

  // Trailing slash removal (except root)
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  // noindex on non-production hosts
  const siteHost = new URL(SITE_URL).host;
  if (host !== siteHost) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  // CSP Report-Only with per-request nonce
  const nonce = btoa(crypto.randomUUID());
  const csp = `default-src 'self'; img-src 'self' data: blob:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'nonce-${nonce}'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests`;
  response.headers.set("Content-Security-Policy-Report-Only", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: ["/:path*"],
};
