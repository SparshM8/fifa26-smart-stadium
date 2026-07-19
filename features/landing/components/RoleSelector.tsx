"use client"
import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Shield, Bot, Map, ArrowRight } from "lucide-react"

const ROLES = [
  {
    id: "fan",
    label: "Fan",
    description: "Your personalized matchday hub — ticket, navigation, queues & AI assistant.",
    href: "/dashboard",
    icon: Users,
    gradient: "from-blue-600/20 to-blue-800/5",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    cta: "Open Fan Hub",
  },
  {
    id: "organizer",
    label: "Organizer",
    description: "Mission-control operations dashboard — crowd, incidents, transport & KPIs.",
    href: "/ops",
    icon: Shield,
    gradient: "from-rose-600/20 to-rose-800/5",
    border: "border-rose-500/30",
    iconColor: "text-rose-400",
    cta: "Open Command",
  },
  {
    id: "copilot",
    label: "AI Copilot",
    description: "Full-page stadium AI for navigation queries, incident triage & real-time decisions.",
    href: "/copilot",
    icon: Bot,
    gradient: "from-cyan-600/20 to-cyan-800/5",
    border: "border-cyan-500/30",
    iconColor: "text-[var(--accent-cyan)]",
    cta: "Open Copilot",
  },
  {
    id: "map",
    label: "Smart Map",
    description: "Interactive stadium navigation with wheelchair routes, heatmap & emergency exits.",
    href: "/map",
    icon: Map,
    gradient: "from-emerald-600/20 to-emerald-800/5",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    cta: "Open Map",
  },
]

export function RoleSelector() {
  return (
    <section className="py-24 px-4" aria-labelledby="role-selector-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="role-selector-heading"
            className="font-heading text-4xl font-bold text-white mb-4"
          >
            Built for Every Role
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-sans">
            StadiumOS AI adapts to your role. Choose your experience to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ROLES.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={role.href}
                className={`group flex flex-col h-full bg-gradient-to-br ${role.gradient} border ${role.border} rounded-[24px] p-7 hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                aria-label={`${role.label} — ${role.description}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-5 ${role.iconColor}`}>
                  <role.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="font-heading text-xl font-bold text-white mb-2">{role.label}</div>
                <p className="text-zinc-400 text-sm font-sans flex-1 leading-relaxed">{role.description}</p>
                <div className={`mt-5 flex items-center gap-2 text-sm font-bold ${role.iconColor} group-hover:gap-3 transition-all`}>
                  {role.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
