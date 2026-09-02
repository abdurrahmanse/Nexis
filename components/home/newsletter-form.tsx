"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useNewsletterContent } from "@/hooks/use-content";
import { useSubscribeMutation } from "@/hooks/use-subscribe-mutation";
import { Loader2, Mail, Send } from "lucide-react";
import React, { useState } from "react";
import { NewsletterSuccess } from "./newsletter-success";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setSubscribed] = useState(false);

  const subscribeMutation = useSubscribeMutation();
  const { data: newsletterContent, isLoading } = useNewsletterContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    subscribeMutation.mutate(email, {
      onSuccess: () => {
        setSubscribed(true);
      },
    });
  };

  if (isSubscribed) {
    return <NewsletterSuccess />;
  }

  if (isLoading || !newsletterContent) {
    return (
      <div className="flex w-full max-w-md flex-col space-y-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-black">
        <Skeleton className="h-6 w-48 rounded-md" />
        <Skeleton className="h-4 w-64 rounded-md" />
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 pt-2">
          <Skeleton className="h-10 w-full flex-1 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col space-y-3 rounded-3xl border-2 border-black dark:border-white bg-white/60 dark:bg-black/40 backdrop-blur-xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
    >
      <div className="flex items-center space-x-2">
        <Mail className="h-5 w-5 text-gray-400" />
        <h3 className="font-display text-xl font-bold dark:text-white">{newsletterContent.title}</h3>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {newsletterContent.description}
      </p>

      <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 pt-4">
        <Input
          type="email"
          required
          placeholder={newsletterContent.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 rounded-xl border-2 border-black dark:border-white focus-visible:ring-0 focus-visible:border-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
        />
        <Button
          type="submit"
          disabled={subscribeMutation.isPending}
          variant="default"
          className="h-12 rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all font-bold px-6"
        >
          {subscribeMutation.isPending ? (
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
          ) : (
            <Send className="h-5 w-5 mr-2" />
          )}
          {subscribeMutation.isPending ? newsletterContent.subscribingButton : newsletterContent.subscribeButton}
        </Button>
      </div>
      {subscribeMutation.isError && (
        <p className="text-sm text-red-500">
          {subscribeMutation.error instanceof Error
            ? subscribeMutation.error.message
            : "An error occurred"}
        </p>
      )}
    </form>
  );
}
