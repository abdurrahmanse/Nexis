import { contentService } from "@/services/content.service";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const globalContent = await contentService.getGlobalContent();
  
  return {
    title: globalContent.metadata.title,
    description: globalContent.metadata.description,
    twitter: {
      card: "summary_large_image",
      title: globalContent.metadata.title,
      description: globalContent.metadata.description,
      creator: globalContent.social.twitterHandle,
    },
    metadataBase: new URL(globalContent.metadata.siteUrl),
  };
}
