"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] px-4 text-center">
      <div className="space-y-8 animate-fade-up">
        {/* Error Graphic */}
        <div className="relative mx-auto w-max">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 mx-auto shadow-inner">
            <AlertTriangle className="h-16 w-16 text-red-600 dark:text-red-500 animate-pulse" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white bg-red-600 dark:bg-red-700 px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap select-none border-2 border-white dark:border-black">
              System Error
            </span>
          </div>
        </div>
        
        <div className="space-y-3 pt-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Something went wrong!
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[500px] mx-auto leading-relaxed">
            An unexpected error has occurred. We've been notified and our engineers are looking into it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button 
            onClick={() => reset()} 
            size="lg" 
            className="w-full sm:w-auto shadow-md group hover:scale-105 transition-transform duration-300"
          >
            <RefreshCcw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Try again
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
