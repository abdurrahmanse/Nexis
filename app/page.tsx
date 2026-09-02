import { FeatureGrid } from "@/components/home/feature-grid";
import { HeroSection } from "@/components/home/hero-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { githubStatsQueryOptions } from "@/queries/github-stats.query";
import { contentService } from "@/services/content.service";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  const globalContent = await contentService.getGlobalContent();

  await queryClient.prefetchQuery(githubStatsQueryOptions());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": globalContent.metadata.title,
    "url": globalContent.metadata.siteUrl,
    "description": globalContent.metadata.description,
    "author": {
      "@type": "Person",
      "name": globalContent.author.name,
      "url": globalContent.social.twitterHandle
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSection />
        <FeatureGrid />
        <NewsletterSection />
      </HydrationBoundary>
    </>
  );
}
