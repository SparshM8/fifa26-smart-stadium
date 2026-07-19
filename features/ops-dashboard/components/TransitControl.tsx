"use client"
import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/Card"
import { Train, Car, Navigation } from "lucide-react"
import { motion } from "framer-motion"

export function TransitControl() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Transit Load Monitoring</CardTitle>
          <button className="text-[var(--accent-cyan)] text-xs font-bold hover:underline">Manage Routes</button>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        
        {/* Metro Load */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-2 text-white text-sm font-bold">
              <Train className="w-4 h-4 text-zinc-400" />
              Metro System Load
            </div>
            <span className="text-[var(--danger)] text-sm font-bold">92%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "85%" }}
              animate={{ width: "92%" }}
              transition={{ duration: 2 }}
              className="h-full bg-[var(--danger)]"
            />
          </div>
          <p className="text-xs text-zinc-500 mt-2 font-mono">WARNING: Line B nearing critical capacity.</p>
        </div>

        {/* Parking */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-2 text-white text-sm font-bold">
              <Car className="w-4 h-4 text-zinc-400" />
              VIP Parking Lots
            </div>
            <span className="text-[var(--warning)] text-sm font-bold">88%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "80%" }}
              animate={{ width: "88%" }}
              transition={{ duration: 2 }}
              className="h-full bg-[var(--warning)]"
            />
          </div>
          <p className="text-xs text-zinc-500 mt-2 font-sans">Lot A full. Diverting traffic to Lot B.</p>
        </div>

      </CardContent>
    </Card>
  )
}
