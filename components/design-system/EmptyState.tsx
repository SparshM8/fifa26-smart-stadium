import * as React from "react"
import { Search } from "lucide-react"

export function EmptyState({
  title = "No data found",
  description = "There is currently no data available for this section.",
  icon = <Search className="w-8 h-8 text-zinc-500" />
}: {
  title?: string
  description?: string
  icon?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-white/10 rounded-[24px] bg-white/[0.02]">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
        {icon}
      </div>
      <h3 className="text-lg font-heading font-medium text-white mb-2">{title}</h3>
      <p className="text-sm font-sans text-zinc-500 max-w-sm">{description}</p>
    </div>
  )
}
