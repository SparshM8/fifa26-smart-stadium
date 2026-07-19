"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";

export function CrowdIntelligence() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Graphic */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] bg-[#111] border border-white/5 rounded-3xl overflow-hidden p-6 flex flex-col justify-end"
        >
          <div className="absolute top-6 left-6 flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
               <TrendingUp className="w-4 h-4 text-blue-500" />
             </div>
             <span className="text-white font-medium">Predictive Flow</span>
          </div>

          {/* Fake Bar Chart */}
          <div className="flex items-end gap-2 h-48 w-full">
            {[30, 45, 25, 60, 75, 40, 85, 55, 95, 65, 50, 80].map((height, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-400/80 rounded-t-sm"
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-zinc-500">
             <span>Pre-Match</span>
             <span>Kickoff</span>
             <span>Halftime</span>
             <span>Full Time</span>
          </div>
        </motion.div>

        {/* Right: Copy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-blue-400">
            <Users className="w-4 h-4" />
            <span>Crowd Control</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Predict the bottleneck, <br className="hidden md:block" /> before the jam.
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Leveraging historical data and real-time computer vision, StadiumOS predicts crowd movement patterns with 94% accuracy, automatically adjusting digital signage to redirect flow.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-white mb-1">94%</div>
              <div className="text-sm text-zinc-500">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">&lt; 2s</div>
              <div className="text-sm text-zinc-500">Signage Response Time</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
