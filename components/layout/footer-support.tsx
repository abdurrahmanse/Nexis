import { FOOTER_CONTENT, GLOBAL_CONTENT } from "@/data/index";
import { BuyMeACoffee } from "../shared/icons";

export function FooterSupport() {
  return (
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
  );
}
