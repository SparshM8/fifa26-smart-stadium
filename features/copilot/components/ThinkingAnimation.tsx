"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function ThinkingAnimation() {
  return (
    <div className="flex w-full gap-4 justify-start">
      <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/10 flex items-center justify-center shrink-0 border border-[var(--accent-cyan)]/20 mt-1 relative">
        <Sparkles className="w-4 h-4 text-[var(--accent-cyan)] opacity-50" />
        <motion.div 
          className="absolute inset-0 rounded-full border border-[var(--accent-cyan)]/50"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 backdrop-blur-md flex items-center gap-1.5 h-12">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-[var(--accent-cyan)] rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  )
}
