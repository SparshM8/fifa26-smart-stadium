"use client"
import * as React from "react"
import { InteractiveMap } from "@/features/smart-navigation/components/InteractiveMap"
import { MapControls } from "@/features/smart-navigation/components/MapControls"
import { NavigationSheet } from "@/features/smart-navigation/components/NavigationSheet"
import { Activity, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SmartNavigationPage() {
  const [layers, setLayers] = React.useState({ heatmap: false, wheelchair: false, emergency: false })
  const [activeRoute, setActiveRoute] = React.useState<string | null>(null)

  // Parse search params safely on the client side
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const dest = params.get("destination")
      if (dest) {
        // Map parameter labels to the proper key casing (e.g. "restrooms" to "Restrooms")
        const formattedDest = dest.charAt(0).toUpperCase() + dest.slice(1).toLowerCase()
        const validDests = ["Food", "Restrooms", "Medical", "Parking", "My Seat"]
        if (validDests.includes(formattedDest)) {
          setActiveRoute(formattedDest)
        }
      }
    }
  }, [])

  const handleRoute = (destination: string) => {
    setActiveRoute(destination || null)
  }

  return (
    <div className="h-screen w-full flex flex-col bg-[#0a0a0a] overflow-hidden relative">
      
      {/* Absolute Header overlaying the map */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent pt-4 pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[var(--primary)]" />
              <span className="font-heading text-lg font-bold text-white tracking-tight drop-shadow-lg">Smart <span className="text-[var(--primary)]">Nav</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Map Background */}
      <main className="absolute inset-0 z-0">
        <InteractiveMap layers={layers} activeRoute={activeRoute} />
      </main>

      {/* Floating UI Elements */}
      <MapControls layers={layers} setLayers={setLayers} />
      <NavigationSheet onRoute={handleRoute} activeRoute={activeRoute} />

    </div>
  )
}
