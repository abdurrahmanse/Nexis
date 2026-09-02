"use client";

import { Button } from "@/components/ui/button";
import { GLOBAL_CONTENT, NAVBAR_CONTENT } from "@/data/index";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, LogIn } from "lucide-react";

export function NavbarAuth() {
  return (
    <>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button variant="default" className="px-4 py-1.5 text-sm h-auto">
            <LogIn className="h-4 w-4" />
            {NAVBAR_CONTENT.signInButton}
          </Button>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label={GLOBAL_CONTENT.projectName}
              labelIcon={<LayoutDashboard className="h-4" />}
              href="/"
            />
          </UserButton.MenuItems>
        </UserButton>
      </Show>
    </>
  );
}
