import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] px-4 text-center">
      <div className="space-y-8 animate-fade-up">
        {/* Abstract 404 Graphic */}
        <div className="relative mx-auto w-max">
          <h1 className="text-9xl md:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-gray-900 to-gray-400 dark:from-white dark:to-gray-700 opacity-20 dark:opacity-30 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white bg-white/50 dark:bg-black/50 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 select-none">
              Page Not Found
            </span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[500px] mx-auto leading-relaxed">
          The page you are looking for doesn't exist or has been moved to another URL.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-md hover:scale-105 transition-transform duration-300">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
