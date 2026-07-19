"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/design-system/Card";
import { Sparkles, ArrowRight } from "lucide-react";

export function OpsAIRecommendations() {
  return (
    <Card className="border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/5">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--accent-cyan)]" />
          <CardTitle className="text-lg text-[var(--accent-cyan)]">
            AI Tactical Command
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-300 font-sans mb-4">
          Predictive model indicates a 92% probability of extreme congestion at
          Gate 4 in 15 minutes due to sudden train arrival.
        </p>

        <div className="space-y-2">
          <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 flex justify-between items-center text-sm transition-colors text-white text-left">
            <span>Reroute digital signage to Gate 5</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </button>
          <button className="w-full bg-[var(--accent-cyan)]/10 hover:bg-[var(--accent-cyan)]/20 border border-[var(--accent-cyan)]/30 rounded-xl p-3 flex justify-between items-center text-sm transition-colors text-[var(--accent-cyan)] text-left font-medium">
            <span>Deploy 5 Volunteers to Gate 4</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
