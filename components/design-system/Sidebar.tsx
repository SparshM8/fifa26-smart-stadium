"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, ShieldAlert, Car, Settings } from "lucide-react"

const items = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Users, label: "Crowd Flow" },
  { icon: ShieldAlert, label: "Security" },
  { icon: Car, label: "Transport" },
  { icon: Settings, label: "Settings" },
]

export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col h-full w-64 glass-panel border-y-0 border-l-0 rounded-none", className)}>
      <div className="flex-1 py-8 px-4 space-y-2">
        {items.map((item, i) => (
          <button
            key={i}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-sm font-medium transition-colors",
              item.active 
                ? "bg-[var(--primary)] text-white soft-shadow" 
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn("w-5 h-5", item.active ? "text-white" : "text-zinc-500")} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
