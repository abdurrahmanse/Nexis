export const queryKeys = {
  github: {
    stats: (owner: string, repo: string) => ["github", "stats", owner, repo] as const,
  },
} as const;
