import { MetadataRoute } from 'next';
import { contentService } from "@/services/content.service";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const globalContent = await contentService.getGlobalContent();
  const siteUrl = globalContent.metadata.siteUrl;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/sign-in/', '/sign-up/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
