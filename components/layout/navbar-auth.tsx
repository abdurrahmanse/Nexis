"use client";

import { Button } from "@/components/ui/button";
import { useGlobalContent, useNavbarContent } from "@/hooks/use-content";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, LogIn } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function NavbarAuth() {
  const { data: globalContent, isLoading: isGlobalLoading } = useGlobalContent();
  const { data: navbarContent, isLoading: isNavbarLoading } = useNavbarContent();

  if (isGlobalLoading || isNavbarLoading || !globalContent || !navbarContent) {
    return <Skeleton className="h-8 w-24 rounded-md" />;
  }

  return (
    <>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button variant="default" className="px-4 py-1.5 text-sm h-auto">
            <LogIn className="h-4 w-4" />
            {navbarContent.signInButton}
          </Button>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label={globalContent.projectName}
              labelIcon={<LayoutDashboard className="h-4" />}
              href="/"
            />
          </UserButton.MenuItems>
        </UserButton>
      </Show>
    </>
  );
}
