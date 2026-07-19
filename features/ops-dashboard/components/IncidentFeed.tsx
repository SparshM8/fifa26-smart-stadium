"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/design-system/Card";
import { Badge } from "@/components/design-system/Badge";

export function IncidentFeed() {
  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">Live Incident Feed</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-4 pr-2">
        <div className="relative pl-4 border-l-2 border-[var(--primary)]/30 pb-4">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[var(--primary)]" />
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm text-white font-medium">
              Logistics: Concession Stock
            </span>
            <span className="text-xs text-zinc-500 font-mono">18:42:10</span>
          </div>
          <p className="text-xs text-zinc-400 mb-2">
            Block 112 reporting low inventory on water.
          </p>
          <Badge variant="cyan" className="text-[10px] px-2 py-0">
            Assigned
          </Badge>
        </div>

        <div className="relative pl-4 border-l-2 border-[var(--danger)]/30 pb-4">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[var(--danger)]" />
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm text-white font-medium">
              Medical: Heat Exhaustion
            </span>
            <span className="text-xs text-zinc-500 font-mono">18:38:05</span>
          </div>
          <p className="text-xs text-zinc-400 mb-2">
            Fan in Sector 4 requesting medical assistance.
          </p>
          <Badge variant="danger" className="text-[10px] px-2 py-0">
            En Route
          </Badge>
        </div>

        <div className="relative pl-4 border-l-2 border-white/10 pb-4">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white/30" />
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm text-white font-medium">
              System: Camera Offline
            </span>
            <span className="text-xs text-zinc-500 font-mono">18:15:22</span>
          </div>
          <p className="text-xs text-zinc-400 mb-2">
            Camera node #402 (Gate 2) lost connection.
          </p>
          <Badge variant="glass" className="text-[10px] px-2 py-0">
            Investigating
          </Badge>
        </div>

        <div className="relative pl-4 border-l-2 border-white/10 pb-4">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[var(--success)]" />
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm text-white font-medium">
              Crowd: Gate 1 Cleared
            </span>
            <span className="text-xs text-zinc-500 font-mono">18:02:44</span>
          </div>
          <p className="text-xs text-zinc-400 mb-2">
            Queue at Gate 1 returned to normal levels.
          </p>
          <Badge variant="success" className="text-[10px] px-2 py-0">
            Resolved
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
