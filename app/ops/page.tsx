import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Command Center",
  description: "Stadium Operations Mission Control for FIFA World Cup 2026 organizers.",
}

import { OpsKPIs } from "@/features/ops-dashboard/components/OpsKPIs"
import { CrowdHeatmap } from "@/features/ops-dashboard/components/CrowdHeatmap"
import { IncidentFeed } from "@/features/ops-dashboard/components/IncidentFeed"
import { SecurityAlerts } from "@/features/ops-dashboard/components/SecurityAlerts"
import { ResourceTracker } from "@/features/ops-dashboard/components/ResourceTracker"
import { TransitControl } from "@/features/ops-dashboard/components/TransitControl"
import { OpsWeather } from "@/features/ops-dashboard/components/OpsWeather"
import { LiveCharts } from "@/features/ops-dashboard/components/LiveCharts"
import { OpsAIRecommendations } from "@/features/ops-dashboard/components/OpsAIRecommendations"
import { Activity, LayoutDashboard, Bot, Map } from "lucide-react"

export default function OpsDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#02040a]">
      {/* Ops Header */}
      <header className="sticky top-0 z-50 w-full bg-[#02040a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-8 justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[var(--accent-cyan)]" />
              <span className="font-heading text-lg font-bold tracking-tight text-white uppercase">StadiumOS <span className="text-[var(--accent-cyan)] opacity-80">Command</span></span>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"><LayoutDashboard className="w-3.5 h-3.5" /> Fan Hub</Link>
              <Link href="/copilot" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"><Bot className="w-3.5 h-3.5" /> Copilot</Link>
              <Link href="/map" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"><Map className="w-3.5 h-3.5" /> Navigate</Link>
              <span>|</span>
            </div>
            <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
               SYSTEM NOMINAL
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-8 py-6">
        
        <div className="mb-6">
           <OpsKPIs />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (Tactical) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <SecurityAlerts />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <CrowdHeatmap />
               <LiveCharts />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <ResourceTracker />
               <TransitControl />
            </div>
          </div>

          {/* Right Column (Logs & Intelligence) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <OpsAIRecommendations />
            <OpsWeather />
            <IncidentFeed />
          </div>

        </div>
      </main>
    </div>
  )
}
