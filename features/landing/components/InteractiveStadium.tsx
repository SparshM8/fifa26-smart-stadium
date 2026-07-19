"use client";

import { motion } from "framer-motion";

export function InteractiveStadium() {
  return (
    <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center bg-[#03050c]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/10 via-[#03050c] to-[#03050c] pointer-events-none" />
      
      <div className="text-center z-10 mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
          A living, breathing venue.
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
          See the entire stadium at a glance. Detect crowd density shifts, temperature anomalies, and security events in real-time.
        </p>
      </div>

      {/* Abstract 3D Seating & Pitch Layout Mockup */}
      <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] mx-auto perspective-[1200px]">
        <motion.div 
          initial={{ rotateX: 60, scale: 0.85, opacity: 0 }}
          whileInView={{ rotateX: 45, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative w-full h-full transform-style-3d flex items-center justify-center"
        >
          {/* Main 3D Stadium Vector Seating Blueprint */}
          <svg viewBox="0 0 800 600" className="w-[85%] h-[85%] text-white/5 relative z-0">
            <defs>
              <linearGradient id="blueprint-pitch-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.01" />
              </linearGradient>
            </defs>

            {/* Stadium Outer Rings */}
            <rect x="60" y="60" width="680" height="480" rx="140" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2.5" />
            <rect x="100" y="100" width="600" height="400" rx="110" fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.1" strokeDasharray="12 6" />
            <rect x="140" y="140" width="520" height="320" rx="80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
            <rect x="180" y="180" width="440" height="240" rx="50" fill="none" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.15" />

            {/* Seating stands dividers */}
            <path d="M 180 180 L 100 100 M 620 180 L 700 100 M 180 420 L 100 500 M 620 420 L 700 500" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
            <line x1="400" y1="60" x2="400" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
            <line x1="400" y1="420" x2="400" y2="540" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
            
            {/* The Football Pitch */}
            <rect x="260" y="220" width="280" height="160" rx="8" fill="url(#blueprint-pitch-grad)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1.5" />
            <line x1="400" y1="220" x2="400" y2="380" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
            <circle cx="400" cy="300" r="30" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
            <rect x="260" y="270" width="30" height="60" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
            <rect x="510" y="270" width="30" height="60" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
          </svg>

          {/* Holographic scanning grid line */}
          <motion.div 
            animate={{ top: ["15%", "85%", "15%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[15%] right-[15%] h-[1.5px] bg-cyan-500/40 shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10 pointer-events-none"
            style={{ transform: "translateZ(10px)" }}
          />

          {/* Interactive Live Data Nodes */}
          {[
            { top: "22%", left: "28%", color: "bg-rose-500", label: "Sector B Thermal Alert" },
            { top: "72%", left: "68%", color: "bg-blue-500", label: "Gate C High Occupancy" },
            { top: "45%", left: "76%", color: "bg-emerald-500", label: "Gate B Access Nominal" },
            { top: "58%", left: "22%", color: "bg-amber-500", label: "Turnstile Loop Slowdown" }
          ].map((node, i) => (
             <div key={i} className="absolute group z-20 cursor-pointer" style={{ top: node.top, left: node.left, transform: "translateZ(20px)" }}>
                <span className="relative flex h-5 w-5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${node.color} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-5 w-5 border border-white/20 shadow-lg ${node.color}`}></span>
                </span>
                
                {/* Floating tooltip label */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg text-[9px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none shadow-xl">
                  {node.label}
                </div>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
