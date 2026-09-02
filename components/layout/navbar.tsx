"use client";

import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { GLOBAL_CONTENT, NAVBAR_CONTENT } from "@/data/index";
import useScroll from "@/lib/hooks/use-scroll";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, LogIn } from "lucide-react";

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
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="default" className="px-4 py-1.5 text-sm h-auto">
                  <LogIn className="h-4 w-4 mr-2" />
                  {NAVBAR_CONTENT.signInButton}
                </Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label={GLOBAL_CONTENT.projectName}
                    labelIcon={<LayoutDashboard className="h-4 w-4" />}
                    href="/"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </Show>
          </div>
        </div>
      </header>
    </>
  );
}
