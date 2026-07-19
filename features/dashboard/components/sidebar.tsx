"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Activity,
  LayoutDashboard,
  Map,
  Bot,
  Shield,
  Settings,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const routes = [
  {
    label: "Fan Hub",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-400",
    description: "Your matchday experience",
  },
  {
    label: "Command",
    icon: Shield,
    href: "/ops",
    color: "text-rose-400",
    description: "Operations control room",
  },
  {
    label: "Copilot",
    icon: Bot,
    href: "/copilot",
    color: "text-[var(--accent-cyan)]",
    description: "AI stadium assistant",
  },
  {
    label: "Navigate",
    icon: Map,
    href: "/map",
    color: "text-emerald-400",
    description: "Smart stadium map",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-zinc-400",
    description: "Preferences & account",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#03050f] text-white border-r border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 px-5 py-5 border-b border-white/5">
        <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--primary)] shadow-[0_0_12px_rgba(37,99,235,0.5)]">
          <Activity className="w-4 h-4 text-white" />
        </div>
        <span className="font-heading text-base font-bold tracking-tight">
          Stadium<span className="text-[var(--primary)]">OS</span> <span className="text-zinc-500 font-normal text-xs">AI</span>
        </span>
      </Link>

      {/* Live Status */}
      <div className="px-3 pt-4 pb-2">
        <div className="flex items-center gap-2 px-3 py-2 bg-[var(--danger)]/10 border border-[var(--danger)]/20 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-[var(--danger)] animate-pulse shrink-0" />
          <div>
            <div className="text-[10px] font-bold text-[var(--danger)] uppercase tracking-wider">Live Match</div>
            <div className="text-[11px] text-zinc-300 font-mono">ARG 2 – 1 FRA · 67'</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-3 py-2 flex-1 overflow-y-auto">
        <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider px-3 mb-2">Navigation</div>
        <div className="space-y-0.5">
          {routes.map((route) => {
            const isActive = pathname === route.href || pathname.startsWith(route.href + "/");
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group relative flex items-center gap-3 p-3 rounded-xl transition-all",
                  isActive
                    ? "bg-white/8 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 bg-white/5 rounded-xl border border-white/8"
                    transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
                  />
                )}
                <route.icon className={cn("relative h-4 w-4 shrink-0 transition-colors", isActive ? route.color : "text-zinc-500 group-hover:text-zinc-300")} />
                <div className="relative flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{route.label}</div>
                  <div className="text-[10px] text-zinc-600 truncate">{route.description}</div>
                </div>
                {isActive && (
                  <ChevronRight className="relative w-3.5 h-3.5 text-zinc-500 shrink-0" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* User Footer */}
      <div className="px-3 py-3 border-t border-white/5">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-cyan)] flex items-center justify-center text-xs font-bold text-white shrink-0">
            AR
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">Alex Rivera</div>
            <div className="text-[10px] text-zinc-500 truncate">Premium Fan · Block 112</div>
          </div>
        </div>
      </div>
    </div>
  );
}
