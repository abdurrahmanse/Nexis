"use client";

import { Github } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { useGlobalContent, useHeroContent } from "@/hooks/use-content";
import { useGithubStats } from "@/hooks/use-github-stats";
import { DEPLOY_URL } from "@/lib/constants";
import { nFormatter } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export function HeroCta() {
  const { data: stats, isLoading: isStatsLoading } = useGithubStats();
  const stars = stats?.stars || 0;

  const { data: globalContent, isLoading: isGlobalLoading } = useGlobalContent();
  const { data: heroContent, isLoading: isHeroLoading } = useHeroContent();

  if (isGlobalLoading || isHeroLoading || !globalContent || !heroContent) {
    return (
      <div className="mx-auto mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto px-4 sm:px-0">
         <Skeleton className="h-10 w-full sm:w-32 rounded-full" />
         <Skeleton className="h-10 w-full sm:w-40 rounded-full" />
      </div>
    );
  }

  return (
    <div className="mx-auto mt-6 flex flex-col sm:flex-row animate-fade-up animate-delay-300-forwards items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 opacity-0 w-full sm:w-auto px-4 sm:px-0">
      <Button variant="default" className="w-full sm:w-auto group" asChild>
        <a href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
          <svg
            className="h-4 w-4 group-hover:text-black dark:group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L20 20H4L12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{heroContent.deployButton}</p>
        </a>
      </Button>
      <Button variant="secondary" className="w-full sm:w-auto" asChild>
        <a
          href={`https://github.com/${globalContent.social.githubRepo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>
            <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
            {isStatsLoading ? (
              <div className="inline-block h-4 w-8 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
            ) : (
              <span className="font-semibold">{nFormatter(stars)}</span>
            )}
          </p>
        </a>
      </Button>
    </div>
  );
}
