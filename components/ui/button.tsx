import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ButtonProps } from "@/types/components.types";

const buttonVariants = cva(
  "inline-flex items-center justify-center space-x-2 rounded-full text-sm transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "border border-black bg-black text-white hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white",
        secondary:
          "border border-gray-300 bg-white text-gray-600 hover:border-gray-800 shadow-md dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:border-gray-500",
        outline:
          "border border-gray-300 text-gray-600 hover:border-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-300 active:bg-gray-100 dark:active:bg-gray-800 rounded-md",
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
        link: "text-blue-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)



const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        <span>{children}</span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
