import Link from "next/link";
import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">StadiumOS</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="#" className="hover:text-white transition-colors">API</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
      
      <div className="mt-8 text-center md:text-left text-xs text-zinc-600 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 StadiumOS Technologies. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for the FIFA World Cup 2026</p>
      </div>
    </footer>
  );
}
