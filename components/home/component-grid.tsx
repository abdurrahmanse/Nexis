"use client";

import { DemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { AppWindow, ChevronDown, MessageSquare, MousePointerClick } from "lucide-react";
import { useState } from "react";
import { useComponentGridContent } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

export default function ComponentGrid() {
  const [isDemoModalOpen, setDemoModalOpen] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const { data: gridContent, isLoading } = useComponentGridContent();

  if (isLoading || !gridContent) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
      <DemoModal isOpen={isDemoModalOpen} setIsOpen={setDemoModalOpen} />
      <button
        onClick={() => setDemoModalOpen(true)}
        className="flex w-full items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 transition-all duration-75 hover:border-gray-800 dark:hover:border-gray-300 focus:outline-none active:bg-gray-100 dark:active:bg-gray-800"
      >
        <AppWindow className="mr-2 h-4 w-4 text-gray-500" />
        <p className="text-gray-600 dark:text-gray-300">{gridContent.modalTab}</p>
      </button>
      <Popover
        content={
          <div className="w-full rounded-md bg-white dark:bg-black p-2 max-w-xs">
            {gridContent.popoverItems.map((item) => (
              <button key={item} className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-900 active:bg-gray-200 dark:active:bg-gray-800 text-gray-700 dark:text-gray-300">
                {item}
              </button>
            ))}
          </div>
        }
        openPopover={isPopoverOpen}
        setOpenPopover={setPopoverOpen}
      >
        <button
          onClick={() => setPopoverOpen(!isPopoverOpen)}
          className="flex w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 transition-all duration-75 hover:border-gray-800 dark:hover:border-gray-300 focus:outline-none active:bg-gray-100 dark:active:bg-gray-800"
        >
          <div className="flex items-center">
            <MousePointerClick className="mr-2 h-4 w-4 text-gray-500" />
            <p className="text-gray-600 dark:text-gray-300">{gridContent.popoverTab}</p>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-all ${
              isPopoverOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </Popover>
      <Tooltip content={gridContent.tooltipContent}>
        <div className="flex w-full cursor-default items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 transition-all duration-75 hover:border-gray-800 dark:hover:border-gray-300 focus:outline-none active:bg-gray-100 dark:active:bg-gray-800">
          <MessageSquare className="mr-2 h-4 w-4 text-gray-500" />
          <p className="text-gray-600 dark:text-gray-300">{gridContent.tooltipTab}</p>
        </div>
      </Tooltip>
    </div>
  );
}
