"use client"
import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/Card"

export function CrowdHeatmap() {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle className="text-lg">Live Stadium Density</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] relative">
        <div className="absolute inset-4 border border-white/5 bg-white/[0.02] rounded-[40%] flex items-center justify-center overflow-hidden">
          
          {/* Field */}
          <div className="w-[40%] h-[60%] border border-emerald-500/20 bg-emerald-500/5 rounded-[20%] relative z-10" />

          {/* Heat Nodes */}
          <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-[var(--danger)]/30 blur-[40px] rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] right-[30%] w-24 h-24 bg-[var(--warning)]/30 blur-[30px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[40%] right-[15%] w-40 h-40 bg-[var(--danger)]/20 blur-[50px] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-[10%] left-[40%] w-20 h-20 bg-[var(--primary)]/30 blur-[20px] rounded-full" />
          
        </div>
        
        <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md rounded-lg p-3 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-white">
            <div className="w-3 h-3 rounded-full bg-[var(--danger)]" /> High Density
          </div>
          <div className="flex items-center gap-2 text-xs text-white">
            <div className="w-3 h-3 rounded-full bg-[var(--warning)]" /> Moderate
          </div>
          <div className="flex items-center gap-2 text-xs text-white">
            <div className="w-3 h-3 rounded-full bg-[var(--primary)]" /> Flowing
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
