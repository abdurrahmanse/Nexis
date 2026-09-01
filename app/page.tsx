import { FeatureGrid } from "@/components/home/feature-grid";
import { HeroSection } from "@/components/home/hero-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { githubService } from "@/features/github/services/github.service";
import { queryKeys } from "@/lib/query/query-keys";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.github.stats("steven-tey", "dashboard"),
    queryFn: () => githubService.getRepositoryStats(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroSection />
      <FeatureGrid />
      <NewsletterSection />
    </HydrationBoundary>
  );
}
