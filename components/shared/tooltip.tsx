"use client";

import useMediaQuery from "@/lib/hooks/use-media-query";
import { ReactNode } from "react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Tooltip({
  children,
  content,
  fullWidth,
}: {
  children: ReactNode;
  content: ReactNode | string;
  fullWidth?: boolean;
}) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger
          className={`${fullWidth ? "w-full" : "inline-flex"} md:hidden`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden pb-8 align-middle">
            {typeof content === "string" ? (
              <span className="block text-center text-sm text-gray-700 dark:text-gray-300">
                {content}
              </span>
            ) : (
              content
            )}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <TooltipProvider delayDuration={100}>
      <UITooltip>
        <TooltipTrigger className="hidden md:inline-flex" asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent
          sideOffset={8}
          side="top"
          className="p-0"
        >
          {typeof content === "string" ? (
            <div className="block max-w-xs px-4 py-2 text-center text-sm text-gray-700 dark:text-gray-300">
              {content}
            </div>
          ) : (
            content
          )}
        </TooltipContent>
      </UITooltip>
    </TooltipProvider>
  );
}
