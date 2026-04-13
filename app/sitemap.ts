import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/produits", "/a-propos", "/contact"];

  return routes.map((route, index) => ({
    url: new URL(route, siteConfig.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8
  }));
}

