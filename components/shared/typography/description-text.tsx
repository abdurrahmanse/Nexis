import { ReactNode } from "react";

export function DescriptionText({ children }: { children: ReactNode }) {
  return (
    <p
      className="mt-6 animate-fade-up animate-delay-250-forwards text-center text-gray-500 dark:text-gray-400 opacity-0 text-balance text-base sm:text-lg md:text-xl lg:text-2xl"
    >
      {children}
    </p>
  );
}
