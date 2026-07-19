"use client";

import { motion } from "framer-motion";
import { Globe2, Ear, Eye, Languages } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export function Accessibility() {
  const { t } = useI18n();

  return (
    <section id="accessibility" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
          {t.sections.accessTitle}
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto font-sans">
          {t.sections.accessDesc}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Languages,
            title: "Real-time Translation",
            desc: "Live PA announcements translated to 40+ languages via the fan app.",
          },
          {
            icon: Ear,
            title: "Audio Descriptions",
            desc: "AI-generated spatial audio descriptions for visually impaired fans.",
          },
          {
            icon: Eye,
            title: "Visual Routing",
            desc: "AR-based navigation avoiding stairs for wheelchair accessibility.",
          },
          {
            icon: Globe2,
            title: "Cultural Context",
            desc: "Culturally-aware dietary and prayer room routing algorithms.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-[#151515] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-zinc-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
