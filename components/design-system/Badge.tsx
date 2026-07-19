import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-white shadow hover:bg-[var(--primary)]/80",
        cyan: "bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20",
        success: "bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20",
        danger: "bg-[var(--danger)]/10 text-[var(--danger)] border border-[var(--danger)]/20",
        warning: "bg-[var(--warning)]/10 text-[var(--warning)] border border-[var(--warning)]/20",
        glass: "glass text-white",
        outline: "text-white border border-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
