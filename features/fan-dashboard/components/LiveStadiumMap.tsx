"use client"
import * as React from "react"
import Link from "next/link"
import { Card } from "@/components/design-system/Card"
import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"

export function LiveStadiumMap() {
  return (
    <Card className="relative overflow-hidden h-[300px] md:h-full min-h-[300px] group">
      {/* Background Map Simulation */}
      <div className="absolute inset-0 bg-[#0a0f24] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Stadium Graphic */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <motion.div 
          className="relative w-[85%] h-[85%] rounded-[40%] border border-white/10 flex items-center justify-center transform-style-3d"
          animate={{ rotateZ: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-12 border border-emerald-500/20 bg-emerald-500/5 rounded-[30%]" />
        </motion.div>
      </div>

      {/* User Location Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <span className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-[var(--primary)] items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </span>
        </span>
      </div>

      {/* Destination Node */}
      <div className="absolute top-1/3 left-2/3 flex items-center justify-center">
        <span className="relative flex h-5 w-5">
          <span className="relative inline-flex rounded-full h-5 w-5 bg-white items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            <MapPin className="w-3 h-3 text-black" />
          </span>
        </span>
      </div>

      {/* Fake Path Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 5px rgba(37, 99, 235, 0.5))" }}>
        <path 
          d="M 50% 50% Q 60% 40% 66% 33%" 
          fill="transparent" 
          stroke="var(--primary)" 
          strokeWidth="2" 
          strokeDasharray="4 4" 
        />
      </svg>

      {/* UI Overlay linking to `/map` */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
        <div className="bg-black/75 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
          <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider font-mono">Suggested Route</div>
          <div className="text-xs font-bold text-white mt-0.5">Block 110 Restrooms</div>
        </div>
        <Link 
          href="/map?destination=Restrooms"
          className="h-12 w-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Open navigation for Block 110 Restrooms"
        >
          <Navigation className="w-5 h-5" />
        </Link>
      </div>
    </Card>
  )
}
