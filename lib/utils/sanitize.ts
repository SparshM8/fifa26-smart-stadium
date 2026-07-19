/**
 * Input sanitization utilities for StadiumOS AI.
 * Prevents XSS and HTML injection from user-provided text.
 */

/**
 * Strips all HTML tags and dangerous characters from a string.
 * Safe to use before rendering user content or setting state.
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

/**
 * Strips all HTML tags entirely, returning plain text.
 * Use when you need raw text without encoded entities.
 */
export function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

/**
 * Truncates a string to a maximum length with an ellipsis.
 */
export function truncate(input: string, maxLength: number): string {
  if (input.length <= maxLength) return input;
  return input.slice(0, maxLength).trimEnd() + "…";
}

/**
 * Returns true if the string is non-empty after trimming whitespace.
 */
export function isNonEmpty(input: string): boolean {
  return input.trim().length > 0;
}
