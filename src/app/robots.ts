import type { MetadataRoute } from "next";
import { SITE_URL, IS_PRODUCTION } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
