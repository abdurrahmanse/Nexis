import { FOOTER_CONTENT, GLOBAL_CONTENT } from "@/data/index";
import { Heart } from "lucide-react";
import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 py-8 flex flex-col items-center space-y-4 mt-8">
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
      <div className="flex items-center space-x-4">
        <a
          href={GLOBAL_CONTENT.author.buyMeACoffeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-6 py-2 transition-all duration-75 hover:scale-105"
        >
          <BuyMeACoffee className="w-6 h-6" />
          <p className="font-medium text-gray-600 dark:text-gray-300">{FOOTER_CONTENT.buyMeACoffee}</p>
        </a>
      </div>
    </footer>
  );
}
