import { ReactNode } from "react";

interface AnnouncementBadgeProps {
  href: string;
  icon: ReactNode;
  text: string;
  rightIcon?: ReactNode;
}

export function AnnouncementBadge({ href, icon, text, rightIcon }: AnnouncementBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
    >
      {icon}
      <p className="text-sm font-semibold text-[#1d9bf0]">{text}</p>
      {rightIcon}
    </a>
  );
}
