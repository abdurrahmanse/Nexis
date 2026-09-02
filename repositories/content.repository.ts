import {
    COMPONENT_GRID_CONTENT,
    FEATURES_CONTENT,
    FOOTER_CONTENT,
    GLOBAL_CONTENT,
    HERO_CONTENT,
    MODAL_CONTENT,
    NAVBAR_CONTENT,
    NEWSLETTER_CONTENT,
} from "@/data/index";

/**
 * Content Repository
 * 
 * Responsible for fetching content data.
 * Currently uses the local `data/` folder as a mock data source.
 * In the future, this is where `apiClient.get(...)` will be implemented
 * to fetch from the real backend, without changing the contract.
 */
export const contentRepository = {
  async getGlobalContent() {
    return GLOBAL_CONTENT;
  },
  
  async getNavbarContent() {
    return NAVBAR_CONTENT;
  },
  
  async getFooterContent() {
    return FOOTER_CONTENT;
  },
  
  async getHeroContent() {
    return HERO_CONTENT;
  },
  
  async getModalContent() {
    return MODAL_CONTENT;
  },
  
  async getComponentGridContent() {
    return COMPONENT_GRID_CONTENT;
  },
  
  async getFeaturesContent() {
    return FEATURES_CONTENT;
  },
  
  async getNewsletterContent() {
    return NEWSLETTER_CONTENT;
  },
};
