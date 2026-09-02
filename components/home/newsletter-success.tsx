"use client";

import { Mail } from "lucide-react";
import { useNewsletterContent } from "@/hooks/use-content";

export function NewsletterSuccess() {
  const { data: newsletterContent } = useNewsletterContent();

  if (!newsletterContent) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-900/20">
      <Mail className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
      <h3 className="font-display text-xl font-semibold text-green-700 dark:text-green-400">
        {newsletterContent.successTitle}
      </h3>
      <p className="text-center text-sm text-green-600 dark:text-green-500">
        {newsletterContent.successDescription}
      </p>
    </div>
  );
}
