export const FEATURES_CONTENT = [
  {
    id: "components",
    title: "Beautiful, reusable components",
    description: "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), and [Framer Motion](https://framer.com/motion). Used in production on [Dub.co](https://dub.co).",
    large: true,
  },
  {
    id: "performance",
    title: "Performance first",
    description: "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
  },
  {
    id: "deploy",
    title: "One-click Deploy",
    description: "Jumpstart your next project by deploying Dashboard to [Vercel](https://vercel.com/) in one click.",
    alt: "Deploy with Vercel",
  },
  {
    id: "auth",
    title: "Built-in Auth",
    description: "Dashboard comes with authentication via [Clerk](https://clerk.com/)",
    alt: "Clerk logo",
  },
  {
    id: "hooks",
    title: "Hooks, utilities, and more",
    description: "Dashboard offers a collection of hooks, utilities, and `@vercel/og`",
    list: [
      "useIntersectionObserver",
      "useLocalStorage",
      "useScroll",
      "nFormatter",
      "capitalize",
      "truncate",
    ],
  },
] as const;
