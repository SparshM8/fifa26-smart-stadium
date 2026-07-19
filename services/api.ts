/**
 * StadiumOS AI — Domain Service Layer
 *
 * Provides typed async functions for fetching stadium data.
 * In production these would call real REST/WebSocket endpoints.
 * In development they resolve from the centralized mock-data store.
 */

import type { StadiumData, Incident, QueueItem, TransitLine, ParkingLot, WeatherData, Match } from "@/types";
import {
  INCIDENTS, QUEUES, TRANSIT_LINES, PARKING_LOTS,
  STADIUM_WEATHER, LIVE_MATCH,
} from "@/lib/mock-data";

/** Simulates network latency for realistic UI testing */
const delay = (ms = 300) => new Promise<void>((r) => setTimeout(r, ms));

// ─────────────────────────────────────────────
// Stadium
// ─────────────────────────────────────────────

/**
 * Fetches top-level stadium metadata by ID.
 */
export async function fetchStadiumData(stadiumId: string): Promise<StadiumData> {
  await delay(400);
  return {
    id: stadiumId,
    name: "MetLife Stadium",
    capacity: 82500,
    currentOccupancy: 82450,
    temperature: 22,
    status: "optimal",
  };
}

// ─────────────────────────────────────────────
// Match
// ─────────────────────────────────────────────

/**
 * Fetches the currently live or most recent match.
 */
export async function fetchLiveMatch(): Promise<Match> {
  await delay(200);
  return LIVE_MATCH;
}

// ─────────────────────────────────────────────
// Incidents
// ─────────────────────────────────────────────

/**
 * Fetches all active incidents, optionally filtered by severity or type.
 */
export async function fetchIncidents(filter?: {
  severity?: Incident["severity"];
  type?: Incident["type"];
}): Promise<Incident[]> {
  await delay(300);
  let result = [...INCIDENTS];
  if (filter?.severity) result = result.filter((i) => i.severity === filter.severity);
  if (filter?.type) result = result.filter((i) => i.type === filter.type);
  return result;
}

// ─────────────────────────────────────────────
// Queues
// ─────────────────────────────────────────────

/**
 * Fetches real-time queue wait times for all service points.
 */
export async function fetchQueues(): Promise<QueueItem[]> {
  await delay(200);
  return QUEUES;
}

// ─────────────────────────────────────────────
// Transit
// ─────────────────────────────────────────────

/**
 * Fetches transit line statuses.
 */
export async function fetchTransitLines(): Promise<TransitLine[]> {
  await delay(250);
  return TRANSIT_LINES;
}

/**
 * Fetches parking lot occupancy levels.
 */
export async function fetchParkingLots(): Promise<ParkingLot[]> {
  await delay(200);
  return PARKING_LOTS;
}

// ─────────────────────────────────────────────
// Weather
// ─────────────────────────────────────────────

/**
 * Fetches current weather conditions at the stadium.
 */
export async function fetchWeather(): Promise<WeatherData> {
  await delay(150);
  return STADIUM_WEATHER;
}
