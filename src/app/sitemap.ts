import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saedamim.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...projects.map(({ slug }) => ({ url: `${siteUrl}/projects/${slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
