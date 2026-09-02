import { MetadataRoute } from "next";
import { contentService } from "@/services/content.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const globalContent = await contentService.getGlobalContent();
  const siteUrl = globalContent.metadata.siteUrl;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ];
}
