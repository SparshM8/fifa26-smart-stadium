"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, MapPin, Search, Plus } from "lucide-react";

export function CopilotSidebar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col h-full w-[300px] glass border-r border-white/5",
        className,
      )}
    >
      <div className="p-4 border-b border-white/5">
        <button className="w-full flex items-center gap-2 justify-center py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[16px] text-sm font-medium text-white transition-colors">
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>

      {/* Location Context Panel */}
      <div className="p-4 border-b border-white/5 bg-[var(--accent-cyan)]/5">
        <div className="text-xs font-bold font-mono text-[var(--accent-cyan)] uppercase tracking-wider mb-3 flex items-center gap-2">
          <MapPin className="w-3 h-3" /> Spatial Context
        </div>
        <div className="space-y-2">
          <div className="bg-black/40 rounded-lg p-2 border border-[var(--accent-cyan)]/20">
            <div className="text-xs text-white font-medium">
              Camera Feed Active
            </div>
            <div className="text-[10px] text-zinc-400 font-mono">
              Gate 4, Sector B (Node #401)
            </div>
          </div>
          <div className="bg-black/40 rounded-lg p-2 border border-white/10">
            <div className="text-xs text-white font-medium">
              IoT Sensor Array
            </div>
            <div className="text-[10px] text-zinc-400 font-mono">
              Turnstile through-put: 42/min
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-xs font-bold font-mono text-zinc-500 uppercase tracking-wider mb-3">
          Today
        </div>
        <div className="space-y-1">
          {[
            "Analyze Gate 4 crowd density",
            "Where is the nearest medical team?",
            "Forecast halftime concession load",
            "Reroute parking lot A to B",
          ].map((title, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              <MessageSquare className="w-4 h-4 shrink-0 text-zinc-500" />
              <span className="truncate">{title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-white/5 bg-black/20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
