import * as React from "react";
import { Card, CardContent } from "@/components/design-system/Card";
import { MapPin } from "lucide-react";

export function SeatInformation() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center border border-[var(--primary)]/30">
            <MapPin className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-white text-lg">
              Your Seat
            </h3>
            <p className="font-sans text-xs text-zinc-400">
              Estadio Azteca, Mexico City
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
            <div className="text-xs text-zinc-500 font-sans mb-1">Gate</div>
            <div className="font-heading font-bold text-white text-xl">4B</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
            <div className="text-xs text-zinc-500 font-sans mb-1">Block</div>
            <div className="font-heading font-bold text-white text-xl">112</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
            <div className="text-xs text-zinc-500 font-sans mb-1">Row/Seat</div>
            <div className="font-heading font-bold text-white text-xl">
              F-24
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
