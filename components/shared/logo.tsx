"use client";

import Image from "next/image";
import Link from "next/link";
import { useGlobalContent } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

export function Logo() {
  const { data: globalContent, isLoading } = useGlobalContent();

  if (isLoading || !globalContent) {
    return <Skeleton className="h-8 w-32 rounded-md" />;
  }

  return (
    <Link href="/" className="flex items-center font-display text-2xl">
      <Image
        src="/logo.png"
        alt={globalContent.logoAlt}
        width="30"
        height="30"
        className="mr-2 rounded-sm"
      />
      <p className="dark:text-white">{globalContent.projectName}</p>
    </Link>
  );
}
