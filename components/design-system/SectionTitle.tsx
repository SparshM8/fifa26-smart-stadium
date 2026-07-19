import * as React from "react"
import { cn } from "@/lib/utils"

export function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-zinc-400 text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
