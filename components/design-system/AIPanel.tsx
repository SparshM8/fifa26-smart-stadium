"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";

export function AIPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative glass-panel rounded-[24px] overflow-hidden flex flex-col h-[400px]",
        className,
      )}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-cyan)]/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="p-4 border-b border-white/5 bg-white/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center border border-[var(--accent-cyan)]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <Sparkles className="w-5 h-5 text-[var(--accent-cyan)]" />
        </div>
        <div>
          <h4 className="text-white font-heading font-semibold text-sm">
            StadiumOS Copilot
          </h4>
          <p className="text-xs text-[var(--accent-cyan)] font-mono">
            System Online
          </p>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {/* Sample Message */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center shrink-0 border border-[var(--accent-cyan)]/30">
            <Sparkles className="w-4 h-4 text-[var(--accent-cyan)]" />
          </div>
          <div className="bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 rounded-2xl rounded-tl-sm p-4 text-sm text-white">
            I&apos;ve detected a 15% increase in traffic at Gate D. Would you
            like me to reroute incoming fans?
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 bg-white/5">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask AI..."
            className="w-full bg-black/40 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors font-sans"
          />
          <button 
            aria-label="Send message"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/30 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
