"use client"
import * as React from "react"
import { ChatBubble } from "./ChatBubble"
import { ThinkingAnimation } from "./ThinkingAnimation"
import { TypingAnimation } from "./TypingAnimation"
import { Sparkles } from "lucide-react"

type Message = {
  id: string
  text: string
  isAi: boolean
}

export function ChatArea({ messages, isThinking }: { messages: Message[], isThinking: boolean }) {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isThinking])

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-12 py-8 flex flex-col" ref={scrollRef}>
      
      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
          <div className="w-16 h-16 rounded-full bg-[var(--accent-cyan)]/10 flex items-center justify-center mb-6 border border-[var(--accent-cyan)]/20 shadow-[0_0_40px_rgba(0,229,255,0.2)]">
            <Sparkles className="w-8 h-8 text-[var(--accent-cyan)]" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-white mb-2">StadiumOS Copilot</h2>
          <p className="text-zinc-400 max-w-md font-sans">
            Connected to all stadium feeds, sensors, and operational intelligence. How can I assist you today?
          </p>
        </div>
      )}

      <div
        className="space-y-8 pb-4 max-w-4xl mx-auto w-full mt-auto"
        aria-live="polite"
        aria-label="Conversation messages"
        role="log"
      >
        {messages.map((msg, i) => (
          <ChatBubble 
            key={msg.id} 
            isAi={msg.isAi} 
            message={
              msg.isAi && i === messages.length - 1 ? (
                <TypingAnimation text={msg.text} />
              ) : (
                msg.text
              )
            } 
          />
        ))}
        {isThinking && <ThinkingAnimation />}
      </div>
    </div>
  )
}
