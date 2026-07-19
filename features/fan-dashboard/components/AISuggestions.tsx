"use client"
import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/design-system/Card"
import { Sparkles, ArrowRight } from "lucide-react"

export function AISuggestions() {
  return (
    <Card className="border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/5">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-[var(--accent-cyan)]" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h4 className="font-heading font-bold text-white mb-1">Smart Recommendation</h4>
          <p className="text-sm text-zinc-300 font-sans mb-3 leading-relaxed">
            Halftime is in 10 minutes. The restroom queue at Block 110 is currently only a 2-minute wait. We suggest going now to avoid the rush.
          </p>
          <Link 
            href="/map?destination=Restrooms"
            className="text-sm font-bold text-[var(--accent-cyan)] flex items-center gap-1.5 hover:underline focus-visible:outline-none focus-visible:underline"
            aria-label="Route to Block 110 Restrooms"
          >
            Route me there <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
