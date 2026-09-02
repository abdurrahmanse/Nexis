import { githubRepository } from "@/repositories/github.repository";
import { GithubRepositoryStats } from "@/types/github.types";
import { logger } from "@/lib/core/logger";
import { NetworkError } from "@/lib/core/errors";

export class GithubService {
  /**
   * Domain service to get repository statistics.
   * Includes enterprise retry logic and safe fallbacks for rate limits.
   */
  async getRepositoryStats(
    owner: string = "abdurrahmanse", 
    repo: string = "dashboard"
  ): Promise<GithubRepositoryStats> {
    const MAX_RETRIES = 2;
    let attempt = 0;

    while (attempt <= MAX_RETRIES) {
      try {
        const stats = await githubRepository.getRepository(owner, repo);
        return stats;
      } catch (error: any) {
        attempt++;
        const isRateLimit = error?.message?.includes("API rate limit exceeded");
        
        if (isRateLimit || attempt > MAX_RETRIES) {
          logger.warn(`GitHub API failure. Rate Limited: ${isRateLimit}`, { owner, repo, error: error?.message });
          // Business Logic Fallback: Return 0 stars silently to keep UI rendering without crashing.
          return { stars: 0 }; 
        }

        logger.info(`Retrying GitHub API fetch (Attempt ${attempt}/${MAX_RETRIES})`);
        await new Promise(res => setTimeout(res, 1000 * attempt)); // Exponential backoff
      }
    }
    
    return { stars: 0 };
  }
}

export const githubService = new GithubService();
