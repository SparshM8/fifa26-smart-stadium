// ─────────────────────────────────────────────
// Core Entity Types
// ─────────────────────────────────────────────

export interface User {
  id: string;
  name: string;
  role: "admin" | "organizer" | "volunteer" | "staff" | "fan";
  avatarUrl?: string;
}

export interface StadiumData {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  temperature: number;
  status: "optimal" | "warning" | "critical";
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  homeScore: number;
  awayScore: number;
  minute: number;
  status: "live" | "upcoming" | "finished";
  venue: string;
  kickoff: string;
}

export interface Incident {
  id: string;
  type: "medical" | "security" | "logistics" | "crowd" | "system";
  title: string;
  description: string;
  location: string;
  status: "open" | "assigned" | "en-route" | "resolved";
  severity: "critical" | "high" | "medium" | "low";
  timestamp: string;
}

export interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  location: string;
  severity: "critical" | "high" | "medium";
  timestamp: string;
}

export interface QueueItem {
  id: string;
  label: string;
  type: "food" | "restroom" | "entry" | "medical";
  waitMinutes: number;
  currentLoad: number; // 0-100
  location: string;
  status: "low" | "moderate" | "high" | "critical";
}

export interface TransitLine {
  id: string;
  name: string;
  type: "metro" | "shuttle" | "bus";
  capacity: number; // 0-100
  nextArrival: string;
  status: "normal" | "delayed" | "suspended";
}

export interface ParkingLot {
  id: string;
  name: string;
  capacity: number; // total spots
  occupied: number;
  type: "vip" | "general" | "accessible";
  status: "available" | "filling" | "full";
}

export interface WeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: "clear" | "cloudy" | "rain" | "storm";
  uvIndex: number;
  lightningProximityKm: number | null;
  roofStatus: "open" | "closed" | "adjusting";
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  sector: string;
  status: "available" | "busy" | "on-break";
}

export interface MedicalRequest {
  id: string;
  teamName: string;
  status: "available" | "en-route" | "on-scene";
  location: string;
  respondingTo?: string;
}

export interface Ticket {
  id: string;
  matchId: string;
  fanName: string;
  seat: { block: string; row: string; number: string };
  gate: string;
  category: "general" | "vip" | "premium";
  barcode: string;
}

export interface AIMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

export interface KPI {
  label: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  status?: "ok" | "warning" | "critical";
}
