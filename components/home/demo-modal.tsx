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
      <div className="w-full overflow-hidden md:max-w-md md:rounded-3xl border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white/70 dark:bg-black/50 backdrop-blur-2xl px-4 py-8 text-center md:px-16">
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
              <div className="flex w-full flex-col space-y-3 mt-4">
                <button className="flex w-full items-center justify-center space-x-2 rounded-xl border-2 border-black dark:border-white bg-black dark:bg-white px-4 py-3 text-sm font-bold text-white dark:text-black transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-y-0 active:shadow-none focus:outline-none">
                  <Rocket className="h-4 w-4" />
                  <span>{modalContent.deployButton}</span>
                </button>
                <button className="flex w-full items-center justify-center space-x-2 rounded-xl border-2 border-black dark:border-white bg-white dark:bg-black px-4 py-3 text-sm font-bold text-black dark:text-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-y-0 active:shadow-none focus:outline-none">
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
