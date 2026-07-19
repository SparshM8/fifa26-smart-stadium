import * as React from "react";
import { DashboardLayout } from "@/features/dashboard/components/dashboard-layout";
import { TicketCard } from "@/features/fan-dashboard/components/TicketCard";
import { SeatInformation } from "@/features/fan-dashboard/components/SeatInformation";
import { QueueStatus } from "@/features/fan-dashboard/components/QueueStatus";
import { TransitStatus } from "@/features/fan-dashboard/components/TransitStatus";
import { WeatherWidget } from "@/features/fan-dashboard/components/WeatherWidget";
import { AISuggestions } from "@/features/fan-dashboard/components/AISuggestions";
import { LiveStadiumMap } from "@/features/fan-dashboard/components/LiveStadiumMap";
import { FloatingAIAssistant } from "@/features/fan-dashboard/components/FloatingAIAssistant";

export const metadata = {
  title: "Fan Hub | StadiumOS AI",
  description:
    "Your personal matchday dashboard — live scores, navigation, queues, and AI assistance.",
};

export default function FanDashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <AISuggestions />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TicketCard />
            <SeatInformation />
          </div>

          <div className="flex-1">
            <LiveStadiumMap />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <WeatherWidget />
          <QueueStatus />
          <TransitStatus />
        </div>
      </div>

      <FloatingAIAssistant />
    </DashboardLayout>
  );
}
