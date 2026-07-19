/**
 * Centralized mock data store for StadiumOS AI.
 * All widgets should import from here instead of hardcoding values inline.
 */

import type {
  Match,
  Incident,
  SecurityAlert,
  QueueItem,
  TransitLine,
  ParkingLot,
  WeatherData,
  Volunteer,
  MedicalRequest,
  Ticket,
  KPI,
} from "@/types";

// ─────────────────────────────────────────────
// Live Match
// ─────────────────────────────────────────────
export const LIVE_MATCH: Match = {
  id: "wc26-final",
  homeTeam: "Argentina",
  awayTeam: "France",
  homeFlag: "🇦🇷",
  awayFlag: "🇫🇷",
  homeScore: 2,
  awayScore: 1,
  minute: 67,
  status: "live",
  venue: "MetLife Stadium, New Jersey",
  kickoff: "2026-07-19T19:00:00Z",
};

// ─────────────────────────────────────────────
// Fan Ticket
// ─────────────────────────────────────────────
export const FAN_TICKET: Ticket = {
  id: "tkt-a1b2c3",
  matchId: "wc26-final",
  fanName: "Alex Rivera",
  seat: { block: "112", row: "F", number: "42" },
  gate: "Gate C",
  category: "premium",
  barcode: "WC26-F112-F42-ARIA",
};

// ─────────────────────────────────────────────
// Weather
// ─────────────────────────────────────────────
export const STADIUM_WEATHER: WeatherData = {
  temperature: 22,
  feelsLike: 24,
  humidity: 58,
  windSpeed: 14,
  description: "Partly Cloudy",
  icon: "cloudy",
  uvIndex: 4,
  lightningProximityKm: 12,
  roofStatus: "open",
};

// ─────────────────────────────────────────────
// Queue Status
// ─────────────────────────────────────────────
export const QUEUES: QueueItem[] = [
  {
    id: "q1",
    label: "Concessions – Block 112",
    type: "food",
    waitMinutes: 8,
    currentLoad: 72,
    location: "Level 2, North",
    status: "high",
  },
  {
    id: "q2",
    label: "Restrooms – Gate C",
    type: "restroom",
    waitMinutes: 3,
    currentLoad: 45,
    location: "Level 2, Gate C",
    status: "moderate",
  },
  {
    id: "q3",
    label: "VIP Lounge Entry",
    type: "entry",
    waitMinutes: 2,
    currentLoad: 20,
    location: "Suite Level",
    status: "low",
  },
  {
    id: "q4",
    label: "Medical Point – Block 4",
    type: "medical",
    waitMinutes: 0,
    currentLoad: 10,
    location: "Block 4 Concourse",
    status: "low",
  },
];

// ─────────────────────────────────────────────
// Transit
// ─────────────────────────────────────────────
export const TRANSIT_LINES: TransitLine[] = [
  {
    id: "tl1",
    name: "Line A – Giants Stadium",
    type: "metro",
    capacity: 88,
    nextArrival: "3 min",
    status: "normal",
  },
  {
    id: "tl2",
    name: "Line B – Penn Station",
    type: "metro",
    capacity: 95,
    nextArrival: "7 min",
    status: "delayed",
  },
  {
    id: "tl3",
    name: "VIP Shuttle",
    type: "shuttle",
    capacity: 40,
    nextArrival: "12 min",
    status: "normal",
  },
];

export const PARKING_LOTS: ParkingLot[] = [
  {
    id: "p1",
    name: "Lot A – VIP North",
    capacity: 400,
    occupied: 400,
    type: "vip",
    status: "full",
  },
  {
    id: "p2",
    name: "Lot B – General East",
    capacity: 1200,
    occupied: 1056,
    type: "general",
    status: "filling",
  },
  {
    id: "p3",
    name: "Lot C – Accessible",
    capacity: 80,
    occupied: 24,
    type: "accessible",
    status: "available",
  },
];

// ─────────────────────────────────────────────
// Incidents
// ─────────────────────────────────────────────
export const INCIDENTS: Incident[] = [
  {
    id: "inc1",
    type: "medical",
    title: "Heat Exhaustion",
    description: "Fan in Sector 4 requesting medical assistance.",
    location: "Block 112, Row G",
    status: "en-route",
    severity: "high",
    timestamp: "18:38:05",
  },
  {
    id: "inc2",
    type: "logistics",
    title: "Concession Stock Low",
    description:
      "Block 112 reporting critically low inventory on water bottles.",
    location: "Level 2, Block 112",
    status: "assigned",
    severity: "medium",
    timestamp: "18:42:10",
  },
  {
    id: "inc3",
    type: "system",
    title: "Camera Node Offline",
    description: "Camera node #402 at Gate 2 lost connection.",
    location: "Gate 2, External",
    status: "open",
    severity: "medium",
    timestamp: "18:15:22",
  },
  {
    id: "inc4",
    type: "crowd",
    title: "Gate 1 Queue Cleared",
    description: "Queue at Gate 1 returned to normal crowd levels.",
    location: "Gate 1",
    status: "resolved",
    severity: "low",
    timestamp: "18:02:44",
  },
];

// ─────────────────────────────────────────────
// Security Alerts
// ─────────────────────────────────────────────
export const SECURITY_ALERTS: SecurityAlert[] = [
  {
    id: "sa1",
    title: "Unauthorized Access Attempt",
    description:
      "Facial recognition flagged unknown individual tailgating through Gate 4.",
    location: "Gate 4, Sector B",
    severity: "critical",
    timestamp: "00:12 ago",
  },
  {
    id: "sa2",
    title: "Suspicious Package Reported",
    description:
      "Unattended bag reported near Restroom Block 112. Security team investigating.",
    location: "Level 2 Concourse",
    severity: "high",
    timestamp: "04:33 ago",
  },
];

// ─────────────────────────────────────────────
// Volunteers & Medical Teams
// ─────────────────────────────────────────────
export const VOLUNTEERS: Volunteer[] = [
  {
    id: "v1",
    name: "Sector A (Gates 1-3)",
    role: "Crowd Management",
    sector: "A",
    status: "busy",
  },
  {
    id: "v2",
    name: "Sector B (Gates 4-6)",
    role: "Crowd Management",
    sector: "B",
    status: "available",
  },
  {
    id: "v3",
    name: "Concessions Level 2",
    role: "Logistics Support",
    sector: "L2",
    status: "busy",
  },
];

export const MEDICAL_TEAMS: MedicalRequest[] = [
  {
    id: "m1",
    teamName: "Team Alpha",
    status: "en-route",
    location: "Block 112",
    respondingTo: "inc1",
  },
  {
    id: "m2",
    teamName: "Team Bravo",
    status: "available",
    location: "Medical HQ",
  },
  {
    id: "m3",
    teamName: "Team Charlie",
    status: "on-scene",
    location: "Gate 4",
    respondingTo: "sa1",
  },
];

// ─────────────────────────────────────────────
// Ops KPIs
// ─────────────────────────────────────────────
export const OPS_KPIS: KPI[] = [
  {
    label: "Live Attendance",
    value: 82450,
    unit: "fans",
    trend: "up",
    trendValue: "+12/min",
    status: "ok",
  },
  {
    label: "Network Load",
    value: "64.2 TB",
    trend: "up",
    trendValue: "Spiking",
    status: "warning",
  },
  {
    label: "Critical Incidents",
    value: 2,
    trend: "down",
    trendValue: "Resolved 1",
    status: "critical",
  },
  {
    label: "Active Volunteers",
    value: "124/150",
    trend: "neutral",
    trendValue: "Deployed",
    status: "ok",
  },
];

// ─────────────────────────────────────────────
// Copilot conversation starters
// ─────────────────────────────────────────────
export const SUGGESTED_PROMPTS = [
  "Show me the crowd heatmap",
  "Where is the nearest medical team?",
  "Route VIPs from Gate A to Suite 4",
  "Summarize all active incidents",
  "What's the metro load right now?",
  "Which food stands have the shortest queue?",
];

export const COPILOT_HISTORY = [
  "Analyze Gate 4 crowd density",
  "Where is the nearest medical team?",
  "Forecast halftime concession load",
  "Reroute parking lot A to B",
];
