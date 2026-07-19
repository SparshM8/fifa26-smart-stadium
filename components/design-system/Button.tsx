import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "glass" | "destructive" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: never; // removed asChild — use a plain <a> or Link wrapper instead
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-[var(--primary)] text-white hover:opacity-90",
  glass:
    "bg-white/5 backdrop-blur border border-white/10 text-white hover:bg-white/10",
  destructive: "bg-[var(--danger)] text-white hover:opacity-90",
  outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white",
  ghost: "hover:bg-white/5 hover:text-white text-zinc-400",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-12 px-6 py-2 text-sm rounded-3xl",
  sm: "h-9 px-4 py-1 text-xs rounded-2xl",
  lg: "h-14 px-8 py-2 text-base rounded-full",
  icon: "h-12 w-12 rounded-full",
};

/**
 * Button — base interactive element.
 * No Radix Slot or CVA — uses plain discriminated Tailwind classes.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
