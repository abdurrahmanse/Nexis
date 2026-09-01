import { env } from "@/config/env";
import { apiClient } from "@/lib/api/client";
import { GithubRepositoryResponse, GithubRepositoryStats } from "../types";

const GITHUB_API_BASE_URL = "https://api.github.com";

export const githubApi = {
  /**
   * Fetches the repository statistics from the GitHub API.
   * Isolates the external API details (URL, headers, structure) from the application.
   */
  async getRepository(owner: string, repo: string): Promise<GithubRepositoryStats> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (env.github.oauthToken) {
      headers["Authorization"] = `Bearer ${env.github.oauthToken}`;
    }

    try {
      const data = await apiClient.get<GithubRepositoryResponse>(
        `/repos/${owner}/${repo}`,
        {
          baseURL: GITHUB_API_BASE_URL,
          headers,
          retries: 2,
          // Revalidate every 24 hours (Next.js specific fetch option)
          next: { revalidate: 86400 },
        }
      );

      // Transform API response to our domain model
      return {
        stars: data.stargazers_count || 0,
      };
    } catch (error) {
      console.error("Failed to fetch GitHub repository stats:", error);
      // Return fallback data instead of crashing the page
      return { stars: 0 };
    }
  },
};
