"use client"
import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/Card"
import { Users, HeartPulse } from "lucide-react"

export function ResourceTracker() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">Resource Deployment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Volunteers */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-white font-medium text-sm">
              <Users className="w-4 h-4 text-zinc-400" />
              Active Volunteers
            </div>
            <span className="text-sm font-bold text-white">124 / 150</span>
          </div>
          <div className="space-y-2">
             <div className="bg-white/5 border border-white/5 rounded-lg p-2 flex justify-between items-center text-xs text-zinc-400">
               <span>Sector A (Gates 1-3)</span>
               <span className="text-white font-bold">42 Assigned</span>
             </div>
             <div className="bg-white/5 border border-[var(--warning)]/20 rounded-lg p-2 flex justify-between items-center text-xs text-[var(--warning)]">
               <span>Sector B (Gates 4-6)</span>
               <span className="font-bold">18 Assigned (Low)</span>
             </div>
          </div>
        </div>

        {/* Medical */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-white font-medium text-sm">
              <HeartPulse className="w-4 h-4 text-zinc-400" />
              Medical Teams
            </div>
            <span className="text-sm font-bold text-[var(--danger)]">3 Active Calls</span>
          </div>
          <div className="space-y-2">
             <div className="bg-black/40 border border-[var(--danger)]/20 rounded-lg p-2 flex justify-between items-center text-xs text-zinc-300">
               <span>Team Alpha</span>
               <span className="text-[var(--danger)] font-bold">En Route - Blk 112</span>
             </div>
             <div className="bg-black/40 border border-[var(--primary)]/20 rounded-lg p-2 flex justify-between items-center text-xs text-zinc-300">
               <span>Team Bravo</span>
               <span className="text-[var(--primary)] font-bold">Available - HQ</span>
             </div>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}
