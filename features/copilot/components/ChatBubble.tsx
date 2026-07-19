"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, User } from "lucide-react";

export interface ChatBubbleProps {
  message: React.ReactNode;
  isAi?: boolean;
  className?: string;
}

export function ChatBubble({
  message,
  isAi = false,
  className,
}: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex w-full gap-4",
        isAi ? "justify-start" : "justify-end",
        className,
      )}
    >
      {isAi && (
        <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center shrink-0 border border-[var(--accent-cyan)]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] mt-1">
          <Sparkles className="w-5 h-5 text-[var(--accent-cyan)]" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[80%] md:max-w-[70%] rounded-2xl p-5 text-sm md:text-base leading-relaxed font-sans shadow-lg",
          isAi
            ? "bg-white/5 border border-white/10 text-white rounded-tl-sm backdrop-blur-md"
            : "bg-[var(--primary)] text-white rounded-tr-sm shadow-[0_4px_20px_rgba(37,99,235,0.3)]",
        )}
      >
        {message}
      </div>

      {!isAi && (
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 mt-1">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}
