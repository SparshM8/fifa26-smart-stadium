# 🏟️ StadiumOS AI — FIFA World Cup 2026

> **GenAI-powered stadium intelligence for the greatest sporting event on earth.**

StadiumOS AI is a production-ready, full-stack web application that brings the power of Generative AI to FIFA World Cup 2026 stadium operations. From 82,000-fan crowd management to real-time AI navigation, it transforms every aspect of the matchday experience for **fans, organizers, security personnel, and volunteers**.

---

## 🚀 Live Features

| Feature | Route | Description |
|---|---|---|
| **Landing Page** | `/` | Premium marketing page with hero, live match card, AI preview, bento grid, crowd intelligence, and accessibility highlights |
| **Fan Hub Dashboard** | `/dashboard` | Personalized matchday companion — ticket, seat info, queues, transit, weather, AI suggestions |
| **Command Center** | `/ops` | NASA Mission Control–style operations dashboard for organizers — heatmap, incident feed, security alerts, KPIs, live charts |
| **Copilot AI** | `/copilot` | Full-page ChatGPT-style AI assistant with conversation history, location context, voice/camera input, thinking animations |
| **Smart Navigation** | `/map` | Apple Maps–inspired interactive 3D stadium map with dynamic routing, crowd heatmap, wheelchair routes, emergency exits |

---

## 🧠 AI Capabilities

- **Crowd Intelligence** — Real-time density analysis and predictive congestion modeling
- **AI Tactical Recommendations** — Copilot suggests deploying volunteers, rerouting signage, and dispatching medical teams
- **Contextual Navigation** — Location-aware routing that adapts to crowd density and accessibility needs
- **Multilingual Ready** — Architecture supports multi-language AI responses for international fans
- **Incident Triage** — AI classifies and prioritizes incidents from security feeds, IoT sensors, and staff reports

---

## 🏗️ Architecture

```
stadiumos-ai/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing Page
│   ├── dashboard/          # Fan Hub
│   ├── ops/                # Command Center
│   ├── copilot/            # AI Copilot
│   └── map/                # Smart Navigation
├── features/               # Feature modules (domain-driven)
│   ├── landing/            # Landing page components
│   ├── fan-dashboard/      # Fan Hub widgets
│   ├── ops-dashboard/      # Operations widgets
│   ├── copilot/            # AI chat components
│   └── smart-navigation/   # Map components
├── components/design-system/ # Shared, reusable UI library
├── lib/
│   ├── utils.ts            # Utilities
│   └── mock-data.ts        # Centralized mock data store
└── types/index.ts          # Comprehensive TypeScript interfaces
```

---

## 🎨 Design System

Built with a proprietary **Premium Design System** featuring:

| Token | Value |
|---|---|
| Background | `#050816` |
| Primary Blue | `#2563EB` |
| Accent Cyan | `#00E5FF` |
| Success | `#22C55E` |
| Danger | `#EF4444` |
| Warning | `#F59E0B` |
| Border Radius | `24px` |

**Typography**: Sora (headings) · Inter (body) · JetBrains Mono (data/code)

**Effects**: Glassmorphism · Animated gradients · Framer Motion micro-animations · 3D SVG transforms

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |
| Type Safety | TypeScript |
| Font Loading | Next.js `next/font/google` |

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/stadiumos-ai.git
cd stadiumos-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📡 Routes Overview

```
/            →  Landing Page (public)
/dashboard   →  Fan Hub (requires authentication in production)
/ops         →  Command Center (organizers/security)
/copilot     →  AI Copilot (all users)
/map         →  Smart Navigation (all users)
```

---

## 🌍 FIFA World Cup 2026 Context

StadiumOS AI is designed for the **FIFA World Cup 2026**, co-hosted across **16 cities** in **USA, Canada, and Mexico**, featuring:
- **104 matches** across 16 venues
- Up to **94,000 fans** per match
- Massive multilingual, multi-timezone operational complexity

Our platform addresses all key challenge pillars:
- ✅ **Navigation** — Smart Map with accessibility routing
- ✅ **Crowd Management** — Real-time heatmaps and AI predictions
- ✅ **Accessibility** — Wheelchair routes, visual contrast, screen-reader ready
- ✅ **Transportation** — Metro, shuttle, and parking management
- ✅ **Sustainability** — Resource optimization (in Operations Dashboard)
- ✅ **Multilingual Assistance** — Via AI Copilot
- ✅ **Operational Intelligence** — Mission Control + AI Recommendations
- ✅ **Real-time Decision Support** — Copilot tactical command interface

---

## 📁 Repository Rules

- ✅ Public repository
- ✅ Single branch (`main`)
- ✅ Repository size < 10 MB
- ✅ No sensitive credentials committed

---

## 📄 License

MIT License — Built for FIFA World Cup 2026 GenAI Challenge.
