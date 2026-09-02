"use client";

import Modal from "@/components/shared/modal";
import { GLOBAL_CONTENT, MODAL_CONTENT } from "@/data/index";
import Image from "next/image";

export function DemoModal({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean; 
  setIsOpen: (isOpen: boolean) => void 
}) {
  return (
    <Modal showModal={isOpen} setShowModal={setIsOpen}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 dark:md:border-gray-800 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white dark:bg-black px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://dashboard.dev">
            <Image
              src="/logo.png"
              alt={GLOBAL_CONTENT.logoAlt}
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold dark:text-white">{MODAL_CONTENT.demoTitle}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {MODAL_CONTENT.demoDescription}
          </p>
        </div>
      </div>
    </Modal>
  );
}
