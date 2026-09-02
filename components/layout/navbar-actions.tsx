"use client";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { NavbarAuth } from "./navbar-auth";

export function NavbarActions() {
  return (
    <div className="flex items-center space-x-4">
      <ThemeToggle />
      <NavbarAuth />
    </div>
  );
}
