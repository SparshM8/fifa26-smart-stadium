"use client";
import * as React from "react";
import Link from "next/link";
import { CopilotSidebar } from "@/features/copilot/components/CopilotSidebar";
import { ChatArea } from "@/features/copilot/components/ChatArea";
import { InputBar } from "@/features/copilot/components/InputBar";
import { SuggestedPrompts } from "@/features/copilot/components/SuggestedPrompts";
import { getAIResponse } from "@/lib/ai-router";
import { Activity, Menu, LayoutDashboard } from "lucide-react";

export default function CopilotPage() {
  const [messages, setMessages] = React.useState<
    { id: string; text: string; isAi: boolean }[]
  >([]);
  const [isThinking, setIsThinking] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleInput = React.useCallback((text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, isAi: false },
    ]);
    setIsThinking(true);

    // Use smart keyword router for contextual responses
    const thinkTime = 1200 + Math.random() * 1000;
    setTimeout(() => {
      setIsThinking(false);
      const { text: aiText } = getAIResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: aiText,
          isAi: true,
        },
      ]);
    }, thinkTime);
  }, []);

  // Parse incoming query parameters safely on the client
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const query = params.get("q");
      if (query) {
        setTimeout(() => {
          handleInput(decodeURIComponent(query));
        }, 0);
        // Clean query param from browser bar to prevent duplicate runs on reload
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }
    }
  }, [handleInput]);

  return (
    <div className="h-screen w-full flex bg-[#02040a] overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-black/50 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
        >
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-sm font-medium">Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-[var(--accent-cyan)]" />
          <span className="font-heading font-bold text-white">Copilot</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/80 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-50 h-full transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <CopilotSidebar />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full pt-14 md:pt-0 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#02040a] to-[#02040a] pointer-events-none" />

        <ChatArea messages={messages} isThinking={isThinking} />

        <div className="p-4 md:p-8 shrink-0 relative z-10 w-full max-w-4xl mx-auto">
          {messages.length === 0 && <SuggestedPrompts onSelect={handleInput} />}
          <InputBar onSubmit={handleInput} />
        </div>
      </div>
    </div>
  );
}
