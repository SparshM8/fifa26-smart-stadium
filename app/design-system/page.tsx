"use client"
import * as React from "react"
import { Navbar } from "@/components/design-system/Navbar"
import { Sidebar } from "@/components/design-system/Sidebar"
import { SectionTitle } from "@/components/design-system/SectionTitle"
import { Button } from "@/components/design-system/Button"
import { MetricCard } from "@/components/design-system/MetricCard"
import { Badge } from "@/components/design-system/Badge"
import { AIPanel } from "@/components/design-system/AIPanel"
import { EmptyState } from "@/components/design-system/EmptyState"
import { LoadingState } from "@/components/design-system/LoadingState"
import { Activity, Users } from "lucide-react"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 overflow-y-auto p-8 relative">
          
          <SectionTitle 
            title="Design System Components" 
            subtitle="Premium glassmorphism UI kit with 24px radiuses and Apple spacing."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
             <MetricCard 
               title="Total Attendance" 
               value="82,450" 
               trend="up" 
               trendValue="+2.4%" 
               icon={<Users className="w-4 h-4" />} 
             />
             <MetricCard 
               title="Network Status" 
               value="Optimal" 
               trend="neutral" 
               trendValue="Stable" 
               icon={<Activity className="w-4 h-4" />} 
             />
          </div>

          <div className="space-y-8 mb-12">
            <h3 className="text-xl font-heading font-semibold text-white">Buttons & Badges</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="default">Primary Action</Button>
              <Button variant="glass">Glass Button</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="cyan">Accent Cyan</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">AI Panel</h3>
              <AIPanel />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">Empty State</h3>
                <EmptyState />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">Loading State</h3>
                <LoadingState />
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
