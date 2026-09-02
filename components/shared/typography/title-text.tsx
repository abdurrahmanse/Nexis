import { ReactNode } from "react";

export function TitleText({ children }: { children: ReactNode }) {
  return (
    <h1
      className="animate-fade-up animate-delay-150-forwards bg-linear-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-center font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent opacity-0 drop-shadow-sm text-balance leading-[1.1] pb-2"
    >
      {children}
    </h1>
  );
}
