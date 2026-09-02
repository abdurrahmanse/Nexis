"use client";

import Modal from "@/components/shared/modal";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlobalContent, useModalContent } from "@/hooks/use-content";
import { LogIn, Rocket } from "lucide-react";
import Image from "next/image";

export function DemoModal({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean; 
  setIsOpen: (isOpen: boolean) => void 
}) {
  const { data: globalContent, isLoading: isGlobalLoading } = useGlobalContent();
  const { data: modalContent, isLoading: isModalLoading } = useModalContent();

  const isLoading = isGlobalLoading || isModalLoading || !globalContent || !modalContent;

  return (
    <Modal showModal={isOpen} setShowModal={setIsOpen}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 dark:md:border-gray-800 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white dark:bg-black px-4 py-6 pt-8 text-center md:px-16">
          {isLoading ? (
            <>
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-8 w-48 rounded-md mt-2" />
              <Skeleton className="h-4 w-64 rounded-md mt-2" />
              <div className="flex w-full flex-col space-y-2 mt-4">
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </>
          ) : (
            <>
              <a href={globalContent.metadata.siteUrl}>
                <Image
                  src="/logo.png"
                  alt={globalContent.logoAlt}
                  className="h-10 w-10 rounded-full"
                  width={20}
                  height={20}
                />
              </a>
              <h3 className="font-display text-2xl font-bold dark:text-white">{modalContent.demoTitle}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {modalContent.demoDescription}
              </p>
              <div className="flex w-full flex-col space-y-2">
                <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-black px-4 py-2 text-sm text-white transition-all hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  <Rocket className="h-4 w-4" />
                  <span>{modalContent.deployButton}</span>
                </button>
                <button className="flex w-full items-center justify-center space-x-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-4 py-2 text-sm text-gray-700 dark:text-gray-300 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none">
                  <LogIn className="h-4 w-4" />
                  <span>{modalContent.signInButton}</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
