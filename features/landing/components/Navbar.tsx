"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { LanguageSwitcher } from "@/components/design-system/LanguageSwitcher";
import { useI18n } from "@/context/I18nContext";

/**
 * Navbar — landing page top navigation.
 * Includes the LanguageSwitcher for multilingual FIFA World Cup 2026 support.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { label: t.nav.platform, href: "#platform" },
    { label: t.nav.intelligence, href: "#intelligence" },
    { label: t.nav.accessibility, href: "#accessibility" },
    { label: t.nav.deploy, href: "#deploy" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="StadiumOS AI — Home">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Activity className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">StadiumOS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Switcher — FIFA WC 2026 multilingual requirement */}
          <LanguageSwitcher />

          <Link
            href="/dashboard"
            className="hidden md:block h-10 px-6 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {t.nav.getDemo}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
