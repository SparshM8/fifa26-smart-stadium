import { Navbar } from "@/features/landing/components/Navbar";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { LiveMatchCard } from "@/features/landing/components/LiveMatchCard";
import { AIAssistantPreview } from "@/features/landing/components/AIAssistantPreview";
import { FeatureBentoGrid } from "@/features/landing/components/FeatureBentoGrid";
import { InteractiveStadium } from "@/features/landing/components/InteractiveStadium";
import { CrowdIntelligence } from "@/features/landing/components/CrowdIntelligence";
import { Accessibility } from "@/features/landing/components/Accessibility";
import { RoleSelector } from "@/features/landing/components/RoleSelector";
import { CTASection } from "@/features/landing/components/CTASection";
import { Footer } from "@/features/landing/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-foreground selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />

      <main>
        <HeroSection />
        <LiveMatchCard />
        <InteractiveStadium />
        <AIAssistantPreview />
        <FeatureBentoGrid />
        <CrowdIntelligence />
        <Accessibility />
        <RoleSelector />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
