import { contentRepository } from "@/repositories/content.repository";
import { GlobalContentSchema, FeaturesContentSchema, NewsletterContentSchema } from "@/schemas/content.schema";
import { logger } from "@/lib/core/logger";
import { ValidationError, AppError } from "@/lib/core/errors";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class ContentService {
  async getGlobalContent() {
    try {
      await delay(0);
      const data = await contentRepository.getGlobalContent();
      const parsed = GlobalContentSchema.safeParse(data);
      
      if (!parsed.success) {
        logger.error("Global content validation failed", parsed.error);
        throw new ValidationError("Invalid global content configuration format.");
      }
      return parsed.data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error("Failed to fetch global content", error);
      throw new AppError("Internal Content Service Error", "CONTENT_SERVICE_ERROR");
    }
  }
  
  async getNavbarContent() {
    return contentRepository.getNavbarContent();
  }
  
  async getFooterContent() {
    return contentRepository.getFooterContent();
  }

  async getHeroContent() {
    return contentRepository.getHeroContent();
  }
  
  async getModalContent() {
    return contentRepository.getModalContent();
  }
  
  async getComponentGridContent() {
    return contentRepository.getComponentGridContent();
  }
  
  async getFeaturesContent() {
    try {
      const data = await contentRepository.getFeaturesContent();
      const parsed = FeaturesContentSchema.safeParse(data);
      
      if (!parsed.success) {
        logger.error("Features content validation failed", parsed.error);
        // Business Logic: Fallback to an empty safe array instead of completely crashing the marketing page.
        return []; 
      }
      return parsed.data;
    } catch (error) {
      logger.error("Failed to fetch features content", error);
      return []; // Resilient fallback
    }
  }

  async getNewsletterContent() {
    try {
      const data = await contentRepository.getNewsletterContent();
      const parsed = NewsletterContentSchema.safeParse(data);
      
      if (!parsed.success) {
        throw new ValidationError("Invalid newsletter configuration.");
      }
      return parsed.data;
    } catch (error) {
      logger.error("Failed to fetch newsletter content", error);
      throw error;
    }
  }
}

// Export a singleton instance
export const contentService = new ContentService();
