"use client";

import { DemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { COMPONENT_GRID_CONTENT } from "@/data/index";

export default function ComponentGrid() {
  const [isDemoModalOpen, setDemoModalOpen] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
      <DemoModal isOpen={isDemoModalOpen} setIsOpen={setDemoModalOpen} />
      <button
        onClick={() => setDemoModalOpen(true)}
        className="flex w-full items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 transition-all duration-75 hover:border-gray-800 dark:hover:border-gray-300 focus:outline-none active:bg-gray-100 dark:active:bg-gray-800"
      >
        <p className="text-gray-600 dark:text-gray-300">{COMPONENT_GRID_CONTENT.modalTab}</p>
      </button>
      <Popover
        content={
          <div className="w-full rounded-md bg-white dark:bg-black p-2 max-w-xs">
            {COMPONENT_GRID_CONTENT.popoverItems.map((item) => (
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
          <p className="text-gray-600 dark:text-gray-300">{COMPONENT_GRID_CONTENT.popoverTab}</p>
          <ChevronDown
            className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-all ${
              isPopoverOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </Popover>
      <Tooltip content={COMPONENT_GRID_CONTENT.tooltipContent}>
        <div className="flex w-full cursor-default items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 transition-all duration-75 hover:border-gray-800 dark:hover:border-gray-300 focus:outline-none active:bg-gray-100 dark:active:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300">{COMPONENT_GRID_CONTENT.tooltipTab}</p>
        </div>
      </Tooltip>
    </div>
  );
}
