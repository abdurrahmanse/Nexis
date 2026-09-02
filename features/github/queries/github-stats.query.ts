import { queryOptions } from "@tanstack/react-query";
import { githubService } from "../services/github.service";
import { queryKeys } from "@/lib/query/query-keys";

export const githubStatsQueryOptions = (
  owner: string = "steven-tey",
  repo: string = "dashboard"
) => {
  return queryOptions({
    queryKey: queryKeys.github.stats(owner, repo),
    queryFn: () => githubService.getRepositoryStats(owner, repo),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
