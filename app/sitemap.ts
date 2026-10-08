import type { MetadataRoute } from "next";
import { LAST_UPDATED, PAGES, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES).map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: p.priority,
    images: [absoluteUrl(p.path === "/" ? "/opengraph-image" : `${p.path}/opengraph-image`)],
  }));
}
