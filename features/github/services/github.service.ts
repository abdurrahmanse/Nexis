import { githubApi } from "../api/github.api";
import { GithubRepositoryStats } from "../types";

export const githubService = {
  /**
   * Domain service to get repository statistics.
   * Encapsulates the specific parameters for the main repository.
   */
  async getRepositoryStats(
    owner: string = "steven-tey", 
    repo: string = "dashboard"
  ): Promise<GithubRepositoryStats> {
    try {
      return await githubApi.getRepository(owner, repo);
    } catch (error: any) {
      console.warn(`Failed to fetch GitHub repository stats: ${error?.message || "Unknown error"}. Falling back to 0 stars.`);
      return { stars: 0 };
    }
  },
};
