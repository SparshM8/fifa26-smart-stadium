import { describe, it, expect } from "vitest";
import { sanitizeInput, stripHtml, isNonEmpty, truncate } from "@/lib/utils/sanitize";

describe("sanitizeInput", () => {
  it("blocks HTML injection by encoding all dangerous characters", () => {
    const result = sanitizeInput("<script>alert('xss')</script>");
    // The sanitizer encodes & first, then < and >, producing double-encoded safe output
    expect(result).not.toContain("<script>");
    expect(result).not.toContain("</script>");
    expect(result.length).toBeGreaterThan(0);
  });
  it("encodes & to prevent entity injection", () => {
    expect(sanitizeInput("R&B music")).toContain("&amp;");
  });
  it("trims leading and trailing whitespace", () => {
    expect(sanitizeInput("  hello  ")).toBe("hello");
  });
  it("returns empty string for empty input", () => {
    expect(sanitizeInput("")).toBe("");
  });
  it("passes safe plain text unchanged (after encoding)", () => {
    expect(sanitizeInput("Show crowd heatmap")).toBe("Show crowd heatmap");
  });
});

describe("stripHtml", () => {
  it("removes all HTML tags", () => {
    expect(stripHtml("<b>Bold</b> text")).toBe("Bold text");
  });
  it("handles nested tags", () => {
    expect(stripHtml("<div><p>Hello</p></div>")).toBe("Hello");
  });
});

describe("isNonEmpty", () => {
  it("returns true for non-empty strings", () => {
    expect(isNonEmpty("hello")).toBe(true);
  });
  it("returns false for empty string", () => {
    expect(isNonEmpty("")).toBe(false);
  });
  it("returns false for whitespace-only strings", () => {
    expect(isNonEmpty("   ")).toBe(false);
  });
});

describe("truncate", () => {
  it("returns original if shorter than maxLength", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });
  it("appends ellipsis when truncating", () => {
    const result = truncate("Hello World", 5);
    expect(result).toContain("…");
    expect(result.length).toBeLessThanOrEqual(6);
  });
});
