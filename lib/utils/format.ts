/**
 * Formatting utilities for StadiumOS AI.
 * Shared helpers for displaying numbers, times, and capacities consistently.
 */

/**
 * Formats an attendance number with locale-aware comma separators.
 * @example formatAttendance(82450) → "82,450"
 */
export function formatAttendance(value: number): string {
  return value.toLocaleString("en-US");
}

/**
 * Returns a human-readable wait time string.
 * @example formatWaitTime(0) → "No wait"
 * @example formatWaitTime(8) → "~8 min wait"
 */
export function formatWaitTime(minutes: number): string {
  if (minutes === 0) return "No wait";
  if (minutes === 1) return "~1 min wait";
  return `~${minutes} min wait`;
}

/**
 * Returns a capacity color class based on load percentage (0-100).
 */
export function getLoadColor(load: number): string {
  if (load >= 90) return "var(--danger)";
  if (load >= 70) return "var(--warning)";
  return "var(--success)";
}

/**
 * Returns a semantic status label from a numeric percentage load.
 */
export function getLoadStatus(load: number): "low" | "moderate" | "high" | "critical" {
  if (load >= 90) return "critical";
  if (load >= 70) return "high";
  if (load >= 40) return "moderate";
  return "low";
}

/**
 * Formats a parking lot occupancy as a percentage string.
 * @example formatOccupancy(400, 400) → "100%"
 */
export function formatOccupancy(occupied: number, capacity: number): string {
  if (capacity === 0) return "0%";
  return `${Math.round((occupied / capacity) * 100)}%`;
}

/**
 * Returns a short elapsed-time string (e.g. "2 min ago") from an ISO timestamp.
 */
export function timeAgo(isoString: string): string {
  const diff = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  return `${Math.floor(diff / 3600)}h ago`;
}
