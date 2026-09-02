import { contentRepository } from "@/repositories/content.repository";

// Simulate network latency (useful for testing loading states)
// Change to 0 in production to avoid hydration mismatch/flicker
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Service to manage all UI content.
 * Consumes the repository layer and applies any business logic or transformations.
 */
export const contentService = {
  getGlobalContent: async () => {
    await delay(0);
    return contentRepository.getGlobalContent();
  },
  
  getNavbarContent: async () => {
    await delay(0);
    return contentRepository.getNavbarContent();
  },
  
  getFooterContent: async () => {
    await delay(0);
    return contentRepository.getFooterContent();
  },

  getHeroContent: async () => {
    await delay(0);
    return contentRepository.getHeroContent();
  },
  
  getModalContent: async () => {
    await delay(0);
    return contentRepository.getModalContent();
  },
  
  getComponentGridContent: async () => {
    await delay(0);
    return contentRepository.getComponentGridContent();
  },
  
  getFeaturesContent: async () => {
    await delay(0);
    return contentRepository.getFeaturesContent();
  },

  getNewsletterContent: async () => {
    await delay(0);
    return contentRepository.getNewsletterContent();
  },
};
