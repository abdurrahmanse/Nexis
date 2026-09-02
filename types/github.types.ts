// Raw API response type from GitHub
export interface GithubRepositoryResponse {
  stargazers_count: number;
  [key: string]: any;
}

// Clean Domain Model used by our application
export interface GithubRepositoryStats {
  stars: number;
}
