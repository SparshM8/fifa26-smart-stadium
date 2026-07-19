"use client"
import * as React from "react"
import { motion } from "framer-motion"

export function LocationMarker({ x, y }: { x: string, y: string }) {
  return (
    <div 
      className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
    >
      <div className="relative flex h-8 w-8 items-center justify-center">
        <motion.div 
          className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-40"
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_10px_rgba(37,99,235,0.8)] border-[3px] border-[var(--primary)]" />
      </div>
      
      {/* View Cone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] w-16 h-16 origin-bottom" style={{ transform: "translate(-50%, -100%) rotate(45deg)" }}>
        <div className="w-full h-full bg-gradient-to-t from-[var(--primary)]/30 to-transparent rounded-full blur-sm" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
      </div>
    </div>
  )
}
