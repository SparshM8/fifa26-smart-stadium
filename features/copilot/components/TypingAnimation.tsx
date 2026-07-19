"use client"
import * as React from "react"
import { motion } from "framer-motion"

export function TypingAnimation({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <div className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: i * 0.05 }}
          className="mr-1 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
