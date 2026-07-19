"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/design-system/Card";
import { Train, Car } from "lucide-react";

export function TransitStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Transit & Parking</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-[16px] border border-white/5">
          <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center">
            <Train className="w-5 h-5 text-[var(--accent-cyan)]" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white">Metro Line B</div>
            <div className="text-xs text-zinc-400">Next train in 4 mins</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-[var(--success)]">
              On Time
            </div>
            <div className="text-xs text-zinc-500">Normal Crowd</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-[16px] border border-white/5">
          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
            <Car className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white">
              VIP Parking (Lot A)
            </div>
            <div className="text-xs text-zinc-400">Your registered vehicle</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-[var(--warning)]">
              85% Full
            </div>
            <div className="text-xs text-zinc-500">Moderate Traffic</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
