"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";

export function FloatingAIAssistant() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/copilot?q=${encodeURIComponent(inputValue.trim())}`);
      setInputValue("");
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-[320px] bg-[#050816]/95 backdrop-blur-xl border border-[var(--accent-cyan)]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,229,255,0.25)] overflow-hidden flex flex-col mb-4"
          >
            <div className="p-4 border-b border-white/5 bg-[var(--accent-cyan)]/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles
                  className="w-4 h-4 text-[var(--accent-cyan)]"
                  aria-hidden="true"
                />
                <span className="font-heading font-semibold text-sm text-white">
                  StadiumOS Copilot
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Close chat assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 h-[160px] flex flex-col justify-end space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-3.5 text-xs text-zinc-300 font-sans leading-relaxed">
                Hi! Ask me anything about the match, queues, weather, or
                directions, and I will open full-screen guidance.
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-white/5"
              role="search"
            >
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  aria-label="Floating chat message"
                  className="w-full bg-black/40 border border-white/10 rounded-full pl-4 pr-10 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Send to full Copilot"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[var(--accent-cyan)]/25 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/40 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI assistant popup"
        className="w-14 h-14 rounded-full bg-[var(--accent-cyan)] text-[#050816] flex items-center justify-center shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:scale-105 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
      >
        <Sparkles className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  );
}
