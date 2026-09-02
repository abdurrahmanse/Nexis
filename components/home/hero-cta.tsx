"use client";

import { Github } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlobalContent, useHeroContent } from "@/hooks/use-content";
import { useGithubStats } from "@/hooks/use-github-stats";
import { DEPLOY_URL } from "@/lib/constants";
import { nFormatter } from "@/lib/utils";

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
      <Button variant="default" className="w-full sm:w-auto group rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all font-bold text-base h-12 px-6" asChild>
        <a href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
          <svg
            className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform"
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
      <Button variant="outline" className="w-full sm:w-auto rounded-xl border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all font-bold text-base h-12 px-6" asChild>
        <a
          href={`https://github.com/${globalContent.social.githubRepo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p className="ml-2">
            <span className="hidden sm:inline-block">{heroContent.githubButton}</span>{" "}
            {isStatsLoading ? (
              <div className="inline-block h-4 w-8 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800 ml-1" />
            ) : (
              <span className="font-semibold text-gray-500 dark:text-gray-400 ml-1">({nFormatter(stars)})</span>
            )}
          </p>
        </a>
      </Button>
    </div>
  );
}
