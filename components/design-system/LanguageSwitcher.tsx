"use client";

import * as React from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";
import { useI18n } from "@/context/I18nContext";

/**
 * LanguageSwitcher — floating globe button that opens a language menu.
 * Supports English, Spanish, French, Arabic (RTL), and Portuguese.
 * Directly addresses the FIFA World Cup 2026 multilingual assistance requirement.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLocale = SUPPORTED_LOCALES.find((l) => l.code === locale)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={`Change language. Current: ${currentLocale.nativeName}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
      >
        <Globe className="w-4 h-4 text-zinc-400" aria-hidden="true" />
        <span className="font-bold">{currentLocale.flag}</span>
        <span className="hidden sm:inline text-zinc-300 text-xs font-mono">
          {currentLocale.code.toUpperCase()}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            aria-label="Select language"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-52 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] overflow-hidden z-[200]"
          >
            {SUPPORTED_LOCALES.map((l) => (
              <li key={l.code} role="option" aria-selected={l.code === locale}>
                <button
                  onClick={() => {
                    setLocale(l.code as SupportedLocale);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 transition-colors text-left focus-visible:outline-none focus-visible:bg-white/5"
                  dir={l.dir}
                >
                  <span className="text-lg leading-none">{l.flag}</span>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm">
                      {l.nativeName}
                    </div>
                    <div className="text-xs text-zinc-500">{l.name}</div>
                  </div>
                  {l.code === locale && (
                    <Check
                      className="w-4 h-4 text-[var(--accent-cyan)] shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
