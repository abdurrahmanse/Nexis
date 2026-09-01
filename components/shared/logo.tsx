import Image from "next/image";
import Link from "next/link";
import { GLOBAL_CONTENT } from "@/data/content";

export function Logo() {
  return (
    <Link href="/" className="flex items-center font-display text-2xl">
      <Image
        src="/logo.png"
        alt={GLOBAL_CONTENT.logoAlt}
        width="30"
        height="30"
        className="mr-2 rounded-sm"
      />
      <p className="dark:text-white">{GLOBAL_CONTENT.projectName}</p>
    </Link>
  );
}
