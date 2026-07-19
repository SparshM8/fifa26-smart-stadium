"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function LiveMatchCard() {
  return (
    <section className="py-24 relative z-20 flex justify-center -mt-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
        
        <div className="relative w-full max-w-4xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Header / Live Indicator */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <span className="text-xs font-bold text-rose-500 tracking-widest uppercase">Live Match</span>
          </div>
          
          <div className="absolute top-6 right-6 text-xs text-zinc-500 font-mono">
            78&apos; (2nd Half)
          </div>

          {/* Team 1 */}
          <div className="flex-1 flex flex-col items-center mt-6 md:mt-0">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-tr from-sky-400 to-white flex items-center justify-center p-[2px] shadow-[0_0_30px_rgba(56,189,248,0.2)]">
              <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center border-4 border-[#0a0a0a]">
                <span className="text-2xl font-bold text-white">ARG</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Argentina</h3>
            <p className="text-sm text-zinc-400">Estadio Azteca</p>
          </div>

          {/* Score */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-6">
              <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">2</span>
              <span className="text-zinc-700 text-3xl font-light">-</span>
              <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">1</span>
            </div>
            
            <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span className="text-xs text-zinc-300">Crowd Density: <span className="text-emerald-500 font-medium">Optimal</span> (82.4k)</span>
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-tr from-blue-600 to-red-500 flex items-center justify-center p-[2px] shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center border-4 border-[#0a0a0a]">
                <span className="text-2xl font-bold text-white">FRA</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">France</h3>
            <p className="text-sm text-zinc-400">Away</p>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
