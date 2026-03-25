import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[1px_1px_0_#000] neo-press",
        destructive:
          "bg-destructive text-destructive-foreground border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[1px_1px_0_#000] neo-press",
        outline:
          "border-[3px] border-black bg-background text-black shadow-[4px_4px_0_#000] hover:bg-secondary/20 hover:shadow-[6px_6px_0_#000] active:shadow-[1px_1px_0_#000] neo-press",
        secondary:
          "bg-secondary text-secondary-foreground border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[1px_1px_0_#000] neo-press",
        ghost: "hover:bg-accent hover:text-accent-foreground border-transparent",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-500 text-white border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[1px_1px_0_#000] neo-press"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-md px-10 text-lg font-black",
        icon: "h-10 w-10 border-[3px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
