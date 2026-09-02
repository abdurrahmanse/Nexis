import { z } from "zod";

export const GlobalContentSchema = z.object({
  projectName: z.string(),
  logoAlt: z.string(),
  author: z.object({
    name: z.string(),
    twitterUrl: z.string().url(),
    buyMeACoffeeUrl: z.string().url(),
  }),
  social: z.object({
    twitterHandle: z.string(),
    twitterAnnouncement: z.string().url(),
    githubRepo: z.string(),
  }),
  metadata: z.object({
    title: z.string(),
    description: z.string(),
    siteUrl: z.string().url(),
  }),
});

export const FeatureContentSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  large: z.boolean().optional(),
  alt: z.string().optional(),
  list: z.array(z.string()).optional(),
});

export const FeaturesContentSchema = z.array(FeatureContentSchema);

export const NewsletterContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  placeholder: z.string(),
  subscribeButton: z.string(),
  subscribingButton: z.string(),
  successTitle: z.string(),
  successDescription: z.string(),
});
