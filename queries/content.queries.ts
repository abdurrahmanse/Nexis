import { queryOptions } from "@tanstack/react-query";
import { contentService } from "@/services/content.service";

/**
 * TanStack Query definitions for UI Content.
 * Centralizes query keys, functions, and cache configuration.
 */
const contentQueryKeys = {
  all: ["content"] as const,
  global: () => [...contentQueryKeys.all, "global"] as const,
  navbar: () => [...contentQueryKeys.all, "navbar"] as const,
  footer: () => [...contentQueryKeys.all, "footer"] as const,
  hero: () => [...contentQueryKeys.all, "hero"] as const,
  modal: () => [...contentQueryKeys.all, "modal"] as const,
  componentGrid: () => [...contentQueryKeys.all, "componentGrid"] as const,
  features: () => [...contentQueryKeys.all, "features"] as const,
  newsletter: () => [...contentQueryKeys.all, "newsletter"] as const,
};

export function globalContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.global(),
    queryFn: () => contentService.getGlobalContent(),
  });
}

export function navbarContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.navbar(),
    queryFn: () => contentService.getNavbarContent(),
  });
}

export function footerContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.footer(),
    queryFn: () => contentService.getFooterContent(),
  });
}

export function heroContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.hero(),
    queryFn: () => contentService.getHeroContent(),
  });
}

export function modalContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.modal(),
    queryFn: () => contentService.getModalContent(),
  });
}

export function componentGridContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.componentGrid(),
    queryFn: () => contentService.getComponentGridContent(),
  });
}

export function featuresContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.features(),
    queryFn: () => contentService.getFeaturesContent(),
  });
}

export function newsletterContentQueryOptions() {
  return queryOptions({
    queryKey: contentQueryKeys.newsletter(),
    queryFn: () => contentService.getNewsletterContent(),
  });
}
