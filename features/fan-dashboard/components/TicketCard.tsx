import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/Card"
import { Badge } from "@/components/design-system/Badge"
import { QrCode } from "lucide-react"

export function TicketCard() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)]/20 to-[var(--background)]">
      <div className="absolute top-0 right-0 p-4">
        <Badge variant="cyan">Active</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">FIFA World Cup 2026™</CardTitle>
        <p className="text-sm text-zinc-400 font-sans mt-1">Final Match</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-6">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-white">ARG</div>
            <div className="text-xs text-zinc-500 font-sans">Argentina</div>
          </div>
          <div className="text-sm font-bold text-zinc-600">VS</div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-white">FRA</div>
            <div className="text-xs text-zinc-500 font-sans">France</div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl mb-4">
          <QrCode className="w-32 h-32 text-black" />
        </div>
        <p className="text-xs text-zinc-500 font-mono tracking-widest">TICKET-A92B-481C</p>
      </CardContent>
    </Card>
  )
}
