"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="deploy" className="py-32 relative max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[3rem] overflow-hidden bg-[#111] border border-white/10 p-12 md:p-20 text-center"
      >
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/30 to-blue-500/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready for kickoff.
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
            Join the elite venues already using StadiumOS to power the next generation of live sports entertainment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Schedule Deployment
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="h-14 px-8 rounded-full bg-[#151515] text-white font-medium border border-white/10 hover:bg-white/5 transition-colors">
              Talk to Engineering
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
