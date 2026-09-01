"use client";

import useMediaQuery from "@/lib/hooks/use-media-query";
import { ReactNode } from "react";
import { Popover as UIPopover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

export default function Popover({
  children,
  content,
  align = "center",
  openPopover,
  setOpenPopover,
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openPopover: boolean;
  setOpenPopover: (open: boolean) => void;
  mobileOnly?: boolean;
}) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer open={openPopover} onOpenChange={setOpenPopover}>
        <div className="sm:hidden" onClick={() => setOpenPopover(true)}>
          {children}
        </div>
        <DrawerContent>
          <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden pb-8 align-middle">
            {content}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <UIPopover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild className="hidden sm:inline-flex">
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-auto p-0"
      >
        {content}
      </PopoverContent>
    </UIPopover>
  );
}
