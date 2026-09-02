import { FOOTER_CONTENT, GLOBAL_CONTENT } from "@/data/index";
import { Heart } from "lucide-react";

export function FooterAuthor() {
  return (
    <p className="flex items-center text-gray-500 dark:text-gray-400 text-center text-sm sm:text-base">
      {FOOTER_CONTENT.projectBy}{" "}
      <a
        className="font-semibold text-gray-600 dark:text-gray-300 underline-offset-4 transition-colors hover:underline mx-1"
        href={GLOBAL_CONTENT.author.twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {GLOBAL_CONTENT.author.name}
      </a>
      <Heart className="w-4 h-4 ml-1 text-red-500 fill-red-500 animate-pulse" />
    </p>
  );
}
