import { ReactNode } from "react";

export function TitleText({ children }: { children: ReactNode }) {
  return (
    <h1
      className="animate-fade-up animate-delay-150-forwards bg-linear-to-br from-black to-stone-500 dark:from-white dark:to-stone-400 bg-clip-text text-center font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm text-balance leading-tight sm:leading-tight md:leading-[5rem] lg:leading-[5.5rem]"
    >
      {children}
    </h1>
  );
}
