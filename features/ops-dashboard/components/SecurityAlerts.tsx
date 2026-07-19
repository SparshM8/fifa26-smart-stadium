"use client"
import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/Card"
import { ShieldAlert } from "lucide-react"

export function SecurityAlerts() {
  return (
    <Card className="border-[var(--danger)]/30 bg-[var(--danger)]/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--danger)] animate-pulse" />
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[var(--danger)] animate-pulse" />
          <CardTitle className="text-lg text-[var(--danger)]">Active Security Alerts</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="bg-black/40 border border-[var(--danger)]/20 rounded-lg p-3">
             <div className="flex justify-between items-start mb-1">
               <span className="text-sm font-bold text-white">Unauthorized Access</span>
               <span className="text-xs text-[var(--danger)] font-mono">00:12 ago</span>
             </div>
             <p className="text-xs text-zinc-400">Gate 4, Sector B. Facial recognition flagged unknown individual tailgating.</p>
          </div>
          <div className="bg-black/40 border border-[var(--warning)]/20 rounded-lg p-3">
             <div className="flex justify-between items-start mb-1">
               <span className="text-sm font-bold text-white">Suspicious Package</span>
               <span className="text-xs text-[var(--warning)] font-mono">04:33 ago</span>
             </div>
             <p className="text-xs text-zinc-400">Level 2 Concourse, near Restroom Block 112. Security team investigating.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
