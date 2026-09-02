"use client";

import { useQuery } from "@tanstack/react-query";
import { githubStatsQueryOptions } from "../queries/github-stats.query";

export function useGithubStats(
  owner?: string,
  repo?: string
) {
  return useQuery(githubStatsQueryOptions(owner, repo));
}
