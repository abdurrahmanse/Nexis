"use client";

import { useNewsletterContent } from "@/hooks/use-content";
import { Mail } from "lucide-react";

export function NewsletterSuccess() {
  const { data: newsletterContent } = useNewsletterContent();

  if (!newsletterContent) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 rounded-3xl border-2 border-black dark:border-white bg-green-50/70 dark:bg-green-900/40 backdrop-blur-xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-500 hover:-translate-y-2">
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
