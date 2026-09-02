import { contentService } from "@/services/content.service";
import { Heart } from "lucide-react";

export async function FooterAuthor() {
  const globalContent = await contentService.getGlobalContent();
  const footerContent = await contentService.getFooterContent();

  return (
    <p className="flex items-center text-gray-500 dark:text-gray-400 text-center text-sm sm:text-base">
      {footerContent.projectBy}{" "}
      <a
        className="font-semibold text-gray-600 dark:text-gray-300 underline-offset-4 transition-colors hover:underline mx-1"
        href={globalContent.author.twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {globalContent.author.name}
      </a>
      <Heart className="w-4 h-4 ml-1 text-red-500 fill-red-500 animate-pulse" />
    </p>
  );
}
