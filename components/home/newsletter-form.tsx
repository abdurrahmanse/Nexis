"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubscribeMutation } from "@/hooks/use-subscribe-mutation";
import { Loader2, Mail, Send } from "lucide-react";
import React, { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setSubscribed] = useState(false);

  const subscribeMutation = useSubscribeMutation();

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
    return (
      <div className="flex w-full flex-col items-center justify-center space-y-3 rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-900/20">
        <Mail className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
        <h3 className="font-display text-xl font-semibold text-green-700 dark:text-green-400">
          You're successfully subscribed!
        </h3>
        <p className="text-center text-sm text-green-600 dark:text-green-500">
          Thank you for joining our newsletter.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col space-y-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-black"
    >
      <div className="flex items-center space-x-2">
        <Mail className="h-5 w-5 text-gray-400" />
        <h3 className="font-display text-xl font-bold dark:text-white">Join the Newsletter</h3>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Get the latest updates directly in your inbox.
      </p>

      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 pt-2">
        <Input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button
          type="submit"
          disabled={subscribeMutation.isPending}
          variant="default"
        >
          {subscribeMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Send className="h-4 w-4 mr-2" />
          )}
          {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
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
