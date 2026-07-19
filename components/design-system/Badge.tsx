import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    "default" | "cyan" | "success" | "danger" | "warning" | "glass" | "outline";
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-[var(--primary)] text-white shadow hover:bg-[var(--primary)]/80",
  cyan: "bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20",
  success:
    "bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20",
  danger:
    "bg-[var(--danger)]/10 text-[var(--danger)] border border-[var(--danger)]/20",
  warning:
    "bg-[var(--warning)]/10 text-[var(--warning)] border border-[var(--warning)]/20",
  glass: "bg-white/5 backdrop-blur border border-white/10 text-white",
  outline: "text-white border border-white/20",
};

/**
 * Badge — compact label component for status, categories and tags.
 * No external variant library — uses plain discriminated Tailwind classes.
 */
export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-sans transition-colors",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
