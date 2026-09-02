import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

export interface AnnouncementBadgeProps {
  href: string;
  icon: ReactNode;
  text: string;
  rightIcon?: ReactNode;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
