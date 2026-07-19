"use client";

import { motion } from "framer-motion";
import { Network, ShieldAlert, Cpu, Globe, ArrowUpRight } from "lucide-react";

export function FeatureBentoGrid() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Everything you need to <br className="hidden md:block"/> run a World Cup stadium.</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">A unified platform integrating thousands of data points into simple, actionable intelligence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Large Feature 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 relative rounded-3xl bg-[#111] border border-white/5 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Network className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Logistics Neural Network</h3>
              <p className="text-zinc-400 max-w-md">Connects transport APIs, traffic cameras, and parking sensors to optimize fan arrival and departure.</p>
            </div>
          </div>
          {/* Abstract background visualization */}
          <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent blur-2xl" />
        </motion.div>

        {/* Small Feature 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-3xl bg-[#111] border border-white/5 overflow-hidden group"
        >
           <div className="absolute inset-0 bg-gradient-to-bl from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
              <ShieldAlert className="w-6 h-6 text-rose-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive Security</h3>
              <p className="text-zinc-400 text-sm">AI-driven anomaly detection identifies potential threats before they escalate.</p>
            </div>
          </div>
        </motion.div>

        {/* Small Feature 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl bg-[#111] border border-white/5 overflow-hidden group"
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Cpu className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Edge Computing</h3>
              <p className="text-zinc-400 text-sm">Process thousands of camera feeds locally for zero-latency operations.</p>
            </div>
          </div>
        </motion.div>

        {/* Large Feature 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 relative rounded-3xl bg-[#111] border border-white/5 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Globe className="w-6 h-6 text-purple-500" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Universal API</h3>
                <p className="text-zinc-400 max-w-sm">Integrates natively with ticketing platforms, digital signage, and emergency broadcasts.</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
