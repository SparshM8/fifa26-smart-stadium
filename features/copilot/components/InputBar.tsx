"use client";
import * as React from "react";
import { Mic, Camera, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { sanitizeInput, isNonEmpty } from "@/lib/utils/sanitize";

export function InputBar({ onSubmit }: { onSubmit?: (text: string) => void }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!isNonEmpty(input)) return;
      // Sanitize before passing to parent — prevents XSS if content is ever rendered as HTML
      onSubmit?.(sanitizeInput(input));
      setInput("");
    },
    [input, onSubmit],
  );

  const hasInput = isNonEmpty(input);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-4xl mx-auto"
      role="search"
    >
      <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] focus-within:border-[var(--accent-cyan)]/50 focus-within:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all">
        <button
          type="button"
          aria-label="Attach camera image"
          className="p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:outline-none"
        >
          <Camera className="w-5 h-5" aria-hidden="true" />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Copilot anything about the stadium…"
          aria-label="Message to Copilot"
          autoComplete="off"
          maxLength={500}
          className="flex-1 bg-transparent border-none text-white px-4 py-2 focus:outline-none placeholder:text-zinc-600 font-sans"
        />

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            aria-label="Use voice input"
            className="p-3 text-zinc-400 hover:text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/10 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:outline-none"
          >
            <Mic className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="submit"
            disabled={!hasInput}
            aria-label="Send message"
            className={cn(
              "p-3 rounded-full transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
              hasInput
                ? "bg-[var(--accent-cyan)] text-black shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:scale-105"
                : "bg-white/5 text-zinc-600 cursor-not-allowed",
            )}
          >
            <Send className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="text-center mt-3 text-xs text-zinc-600 font-sans">
        Copilot can make mistakes. Always verify critical operational decisions.
      </p>
    </form>
  );
}
