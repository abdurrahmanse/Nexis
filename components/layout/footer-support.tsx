import { contentService } from "@/services/content.service";
import { LifeBuoy } from "lucide-react";

export async function FooterSupport() {
  const globalContent = await contentService.getGlobalContent();
  const footerContent = await contentService.getFooterContent();

  return (
    <div className="flex items-center space-x-4">
      <a
        href="mailto:support@nexis.app"
        className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <LifeBuoy className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <p className="font-medium text-gray-600 dark:text-gray-300">{footerContent.buyMeACoffee}</p>
      </a>
    </div>
  );
}
