"use client"
import * as React from "react"
import { motion } from "framer-motion"

export function LoadingState({
  text = "Loading data...",
}: {
  text?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 min-h-[300px]">
      <div className="relative w-16 h-16 flex items-center justify-center mb-6">
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-[var(--primary)] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border-4 border-transparent border-t-[var(--accent-cyan)] rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <p className="text-sm font-sans text-zinc-400 animate-pulse">{text}</p>
    </div>
  )
}
