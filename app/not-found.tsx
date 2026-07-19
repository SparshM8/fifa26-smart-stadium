import Link from "next/link";
import { Activity, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">
        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/20 border border-[var(--primary)]/30">
          <Activity className="h-7 w-7 text-[var(--primary)]" />
        </div>

        {/* 404 */}
        <div className="font-heading font-black text-[120px] leading-none bg-clip-text text-transparent bg-gradient-to-b from-white/30 to-white/5 select-none">
          404
        </div>

        <div>
          <h1 className="text-2xl font-heading font-bold text-white mb-3">
            Zone Not Found
          </h1>
          <p className="text-zinc-400 font-sans leading-relaxed">
            This section of the stadium doesn&apos;t exist in our system. You
            may have taken a wrong turn — let Copilot guide you back.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white font-bold rounded-2xl transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/dashboard"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-2xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Fan Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
