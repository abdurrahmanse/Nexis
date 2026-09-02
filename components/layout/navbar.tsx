"use client";

import { Logo } from "@/components/shared/logo";
import { NavbarActions } from "./navbar-actions";
import useScroll from "@/lib/hooks/use-scroll";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <header
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-xl"
            : "bg-white/0 dark:bg-black/0"
        } z-30 transition-all`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex py-4 items-center justify-between">
          <Logo />
          <NavbarActions />
        </div>
      </header>
    </>
  );
}
