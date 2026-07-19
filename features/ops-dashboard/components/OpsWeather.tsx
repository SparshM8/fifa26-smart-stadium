"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/design-system/Card"
import { CloudLightning, Thermometer, Wind } from "lucide-react"

export function OpsWeather() {
  return (
    <Card className="bg-gradient-to-br from-blue-900/30 to-[var(--background)] border-blue-500/20">
      <CardContent className="p-5">
        <div className="grid grid-cols-3 gap-4 divide-x divide-white/10">
          
          <div className="flex flex-col items-center justify-center text-center">
            <Thermometer className="w-5 h-5 text-zinc-400 mb-1" />
            <div className="font-heading font-bold text-white text-xl">22°C</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Surface Temp</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <Wind className="w-5 h-5 text-blue-400 mb-1" />
            <div className="font-heading font-bold text-white text-xl">14 <span className="text-sm text-zinc-500">km/h</span></div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Wind Shear</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <CloudLightning className="w-5 h-5 text-[var(--warning)] mb-1 animate-pulse" />
            <div className="font-heading font-bold text-[var(--warning)] text-xl">12 <span className="text-sm text-zinc-500">km</span></div>
            <div className="text-[10px] text-[var(--warning)] uppercase tracking-wider">Lightning Prox.</div>
          </div>

        </div>
      </CardContent>
    </Card>
  )
}
