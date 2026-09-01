"use client";

import { useQuery } from "@tanstack/react-query";
import { githubService } from "../services/github.service";
import { queryKeys } from "@/lib/query/query-keys";

export function useGithubStats(
  owner: string = "steven-tey",
  repo: string = "dashboard"
) {
  return useQuery({
    queryKey: queryKeys.github.stats(owner, repo),
    queryFn: () => githubService.getRepositoryStats(owner, repo),
    // Data is static for 24 hours per previous fetch config
    staleTime: 1000 * 60 * 60 * 24,
  });
}
