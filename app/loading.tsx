import { Skeleton } from "@/components/shared/skeleton";

export default function Loading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <div className="z-10 w-full max-w-xl px-5 xl:px-0 flex flex-col items-center">
        {/* Announcement Badge Skeleton */}
        <Skeleton className="h-8 w-48 rounded-full mb-6" />
        
        {/* Title Text Skeleton */}
        <div className="w-full flex flex-col items-center space-y-4">
          <Skeleton className="h-12 md:h-20 w-4/5 rounded-lg" />
          <Skeleton className="h-12 md:h-20 w-3/5 rounded-lg" />
        </div>
        
        {/* Description Text Skeleton */}
        <div className="w-full flex flex-col items-center mt-6 space-y-2">
          <Skeleton className="h-6 w-full max-w-md rounded-md" />
          <Skeleton className="h-6 w-3/4 max-w-sm rounded-md" />
        </div>
        
        {/* Hero CTA Skeleton */}
        <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
          <Skeleton className="h-10 w-36 rounded-full" />
          <Skeleton className="h-10 w-36 rounded-full" />
        </div>
      </div>

      {/* Feature Grid Skeleton */}
      <div className="my-10 grid w-full max-w-(--breakpoint-xl) grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 mt-20">
        {[1, 2, 3, 4, 5].map((i, index) => (
          <div
            key={i}
            className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-md flex flex-col ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* Demo Area Skeleton */}
            <div className="flex h-60 items-center justify-center p-6">
              <Skeleton className="h-full w-full rounded-md" />
            </div>
            {/* Card Content Skeleton */}
            <div className="mx-auto flex w-full max-w-lg flex-col items-center p-4">
              <Skeleton className="h-8 w-3/4 mb-4 rounded-md" />
              <div className="w-full space-y-2 flex flex-col items-center">
                <Skeleton className="h-4 w-5/6 rounded-sm" />
                <Skeleton className="h-4 w-4/5 rounded-sm" />
                <Skeleton className="h-4 w-2/3 rounded-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
