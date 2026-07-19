"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Activity, LayoutDashboard, Map, Bot, Shield, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { href: "/dashboard", label: "Fan Hub", icon: LayoutDashboard },
  { href: "/ops",       label: "Command",  icon: Shield },
  { href: "/copilot",   label: "Copilot",  icon: Bot },
  { href: "/map",       label: "Navigate", icon: Map },
]

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      <header className={cn("sticky top-0 z-50 w-full bg-[#050816]/80 backdrop-blur-xl border-b border-white/5", className)}>
        <div className="container mx-auto flex h-16 items-center px-4 md:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--primary)] shadow-[0_0_12px_rgba(37,99,235,0.5)]">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              Stadium<span className="text-[var(--primary)]">OS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="ml-10 hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                    />
                  )}
                  <link.icon className="relative w-4 h-4" />
                  <span className="relative">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="ml-auto flex items-center gap-3">
            {/* Live Indicator */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-[var(--danger)]/10 border border-[var(--danger)]/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[var(--danger)] animate-pulse" />
              <span className="text-xs font-bold text-[var(--danger)] font-mono">LIVE</span>
            </div>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-cyan)] flex items-center justify-center text-sm font-bold text-white shadow-lg cursor-pointer">
              AR
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
                Home
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
