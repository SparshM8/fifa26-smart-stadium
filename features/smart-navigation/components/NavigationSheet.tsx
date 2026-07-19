"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Utensils, Droplets, HeartPulse, Car, ArrowUpRight, Compass, Navigation } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavigationSheetProps {
  onRoute: (destination: string) => void
  activeRoute: string | null
}

const ROUTE_DETAILS: Record<
  string,
  {
    destinationName: string
    totalDistance: string
    estTime: string
    instructions: { text: string; subtext: string }[]
  }
> = {
  Food: {
    destinationName: "Food & Beverage (Block 109 Kiosk)",
    totalDistance: "180m",
    estTime: "2 min walk",
    instructions: [
      { text: "Walk straight 40m", subtext: "Head East from Gate C area" },
      { text: "Turn left at Lower Tier concourse", subtext: "Walk past the Section 5 seating entrance" },
      { text: "Arrive at Concession Stand 7A", subtext: "Located directly opposite Block 109" },
    ],
  },
  Restrooms: {
    destinationName: "East Concourse Restrooms (Block 110)",
    totalDistance: "240m",
    estTime: "3 min walk",
    instructions: [
      { text: "Head East for 40m towards Sector B", subtext: "Follow the blue pedestrian pathway" },
      { text: "Turn left and walk 120m", subtext: "Pass Concession Stands 5-8" },
      { text: "Take Elevator 2 to Level 2", subtext: "Restrooms are 10m to your right" },
    ],
  },
  Medical: {
    destinationName: "West First Aid Station (Block 104)",
    totalDistance: "80m",
    estTime: "1 min walk",
    instructions: [
      { text: "Head West for 30m towards Gate D", subtext: "Follow emergency red signs" },
      { text: "Proceed past Gate B Entrance", subtext: "Medical Point is located at Bay 4" },
    ],
  },
  Parking: {
    destinationName: "Lot C Accessible Parking",
    totalDistance: "320m",
    estTime: "5 min walk",
    instructions: [
      { text: "Head South towards Gate C Exit", subtext: "Follow parking signs" },
      { text: "Pass through turnstile C-4", subtext: "Present exit barcode if required" },
      { text: "Follow green pedestrian path to Lot C", subtext: "Accessible parking is near Row 2" },
    ],
  },
  "My Seat": {
    destinationName: "Block 112, Row F, Seat 42",
    totalDistance: "210m",
    estTime: "3 min walk",
    instructions: [
      { text: "Walk East for 40m", subtext: "Head toward Section 4 entrance" },
      { text: "Go up Ramp 3 to Lower Tier Row F", subtext: "Follow indicators for Seats 30-50" },
      { text: "Find Seat 42 on your left", subtext: "Block 112, Row F is 6 rows up from concourse" },
    ],
  },
}

export function NavigationSheet({ onRoute, activeRoute }: NavigationSheetProps) {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState("")

  const categories = [
    { id: "food", icon: Utensils, label: "Food", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    { id: "restrooms", icon: Droplets, label: "Restrooms", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { id: "medical", icon: HeartPulse, label: "Medical", color: "bg-[var(--danger)]/10 text-[var(--danger)] border-[var(--danger)]/20" },
    { id: "parking", icon: Car, label: "Parking", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  ]

  const activeDetails = activeRoute ? ROUTE_DETAILS[activeRoute] : null

  // Auto-expand when a route becomes active
  React.useEffect(() => {
    if (activeRoute) {
      setIsExpanded(true)
    }
  }, [activeRoute])

  return (
    <motion.div
      className={cn(
        "absolute bottom-0 left-0 right-0 md:left-8 md:bottom-8 md:right-auto md:w-[420px]",
        "bg-black/75 backdrop-blur-2xl border-t md:border border-white/10 rounded-t-[32px] md:rounded-[32px] shadow-[0_24px_50px_rgba(0,0,0,0.8)] flex flex-col z-50 overflow-hidden"
      )}
      animate={{ height: isExpanded ? (activeRoute ? 460 : 400) : 80 }}
      transition={{ type: "spring", bounce: 0.15, duration: 0.55 }}
    >
      {/* Drag/Expand Handle */}
      <div
        className="w-full h-6 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors shrink-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="w-16 h-1 bg-white/25 rounded-full" />
      </div>

      <div className="px-6 pb-6 pt-1 flex-1 flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          {activeRoute && activeDetails ? (
            <motion.div
              key="active-route"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 flex flex-col overflow-hidden justify-between"
            >
              <div className="flex-1 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[var(--accent-cyan)] animate-pulse" />
                    <span className="text-[11px] font-bold text-[var(--accent-cyan)] uppercase tracking-[0.2em] font-mono">
                      Active Navigation
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">
                    {activeDetails.totalDistance} · {activeDetails.estTime}
                  </span>
                </div>

                <h2 className="text-xl font-heading font-extrabold text-white mb-4 leading-tight">
                  {activeDetails.destinationName}
                </h2>

                {/* Instructions List (Scrollable) */}
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {activeDetails.instructions.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-3.5 bg-white/5 border border-white/5 rounded-2xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-snug">{step.text}</div>
                        <div className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{step.subtext}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onRoute("")}
                className="w-full py-3.5 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white rounded-2xl text-sm font-bold transition-all mt-4 shrink-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                End Route Guidance
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="search-mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              {/* Search Header */}
              <div className="relative mb-5 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search gates, restrooms, sections..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[var(--accent-cyan)]/50 focus:bg-white/10 transition-all focus-visible:ring-0"
                />
              </div>

              {/* Categories */}
              <div className="grid grid-cols-4 gap-3 mb-6 shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onRoute(cat.label)}
                    className="flex flex-col items-center gap-2 group focus-visible:outline-none"
                    aria-label={`Route to nearest ${cat.label}`}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center border transition-all group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-[var(--accent-cyan)]",
                        cat.color
                      )}
                    >
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-zinc-400 font-bold tracking-wide group-hover:text-white transition-colors">
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Saved Locations / Suggestions */}
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-3">
                  Matchday Locations
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => onRoute("My Seat")}
                    className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/8 rounded-2xl transition-all border border-transparent hover:border-white/5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0 font-bold text-sm">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">My Seat</div>
                      <div className="text-xs text-zinc-400">Block 112, Row F, Seat 42</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 shrink-0" />
                  </button>

                  <button
                    onClick={() => onRoute("Food")}
                    className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/8 rounded-2xl transition-all border border-transparent hover:border-white/5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 font-bold text-sm">
                      F
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">Halftime Hotspots</div>
                      <div className="text-xs text-zinc-400">Block 109 Concessions · Short wait</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
