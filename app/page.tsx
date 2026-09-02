import { FeatureGrid } from "@/components/home/feature-grid";
import { HeroSection } from "@/components/home/hero-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { githubStatsQueryOptions } from "@/features/github/queries/github-stats.query";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(githubStatsQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroSection />
      <FeatureGrid />
      <NewsletterSection />
    </HydrationBoundary>
  );
}
