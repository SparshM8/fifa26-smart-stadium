"use client"
import * as React from "react"
import { motion } from "framer-motion"

export function SuggestedPrompts({ onSelect }: { onSelect?: (prompt: string) => void }) {
  const prompts = [
    "Show me the crowd heatmap",
    "Where is the nearest medical team?",
    "Route VIPs from Gate A to Suite 4",
    "Summarize active incidents"
  ]

  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto mb-6">
      {prompts.map((prompt, i) => (
        <motion.button
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          onClick={() => onSelect?.(prompt)}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-zinc-300 hover:text-white transition-colors backdrop-blur-md"
        >
          {prompt}
        </motion.button>
      ))}
    </div>
  )
}
