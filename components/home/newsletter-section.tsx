"use client";

import { NewsletterProvider } from "@/features/newsletter/context/newsletter.context";
import { NewsletterForm } from "./newsletter-form";

export function NewsletterSection() {
  return (
    <NewsletterProvider>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 my-10 flex justify-center">
        <NewsletterForm />
      </section>
    </NewsletterProvider>
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 my-10 flex justify-center">
      <NewsletterForm />
    </section>
  );
}
