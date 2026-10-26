const vercelEnv = process.env.VERCEL_ENV;

export const IS_PRODUCTION = vercelEnv === "production";

function resolveSiteUrl(): string {
  if (vercelEnv === "production") {
    const url = process.env.NEXT_PUBLIC_SITE_URL;
    if (!url) throw new Error("NEXT_PUBLIC_SITE_URL is required in production");
    if (!url.startsWith("https://")) throw new Error("NEXT_PUBLIC_SITE_URL must be https");
    if (url.endsWith("/")) throw new Error("NEXT_PUBLIC_SITE_URL must not have a trailing slash");
    if (url !== "https://www.cortera.space") throw new Error("NEXT_PUBLIC_SITE_URL must be https://www.cortera.space");
    return url;
  }
  if (vercelEnv === "preview") {
    const vercelUrl = process.env.VERCEL_URL;
    if (vercelUrl) return `https://${vercelUrl}`;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl().replace(/\/$/, "");
