"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Thermometer, User } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export function AIAssistantPreview() {
  const { t } = useI18n();

  return (
    <section id="intelligence" className="py-32 relative max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>Context-Aware AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 font-heading">
            {t.sections.copilotTitle}
          </h2>
          <p className="text-lg text-zinc-400 mb-8 font-sans">
            {t.sections.copilotDesc}
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Real-time translation for international fans",
              "Predictive crowd bottleneck alerts",
              "Automated emergency routing protocols"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
            Explore AI Capabilities <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Right: Chat UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent blur-3xl rounded-full" />
          
          <div className="relative bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/5 bg-[#151515] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">StadiumOS Assistant</h4>
                <p className="text-xs text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                </p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="bg-[#1a1a1a] rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 border border-white/5">
                  Gate C is seeing a 40% spike in traffic. What's the protocol?
                </div>
              </div>

              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl rounded-tr-sm p-4 text-sm text-emerald-50">
                  <p className="mb-3">I've analyzed the heatmaps. The surge is due to a delayed train arrival.</p>
                  <p className="mb-3 font-medium">Recommended Actions:</p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Open overflow turnstiles 4-8.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Dispatch 4 additional security staff.</li>
                  </ul>
                  <button className="bg-emerald-500 text-black px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-emerald-400 transition-colors">
                    Execute Protocol
                  </button>
                </div>
              </div>

            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/5 bg-[#151515]">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask StadiumOS..." 
                  className="w-full bg-[#111] border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
