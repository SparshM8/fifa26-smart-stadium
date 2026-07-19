import { describe, it, expect } from "vitest";
import {
  formatAttendance,
  formatWaitTime,
  getLoadColor,
  getLoadStatus,
  formatOccupancy,
} from "@/lib/utils/format";

describe("formatAttendance", () => {
  it("formats large numbers with comma separators", () => {
    expect(formatAttendance(82450)).toBe("82,450");
  });
  it("handles zero", () => {
    expect(formatAttendance(0)).toBe("0");
  });
});

describe("formatWaitTime", () => {
  it("returns 'No wait' for 0 minutes", () => {
    expect(formatWaitTime(0)).toBe("No wait");
  });
  it("returns singular for 1 minute", () => {
    expect(formatWaitTime(1)).toBe("~1 min wait");
  });
  it("returns plural for >1 minute", () => {
    expect(formatWaitTime(8)).toBe("~8 min wait");
  });
});

describe("getLoadColor", () => {
  it("returns danger color for critical load (>=90)", () => {
    expect(getLoadColor(92)).toBe("var(--danger)");
    expect(getLoadColor(90)).toBe("var(--danger)");
  });
  it("returns warning color for high load (70-89)", () => {
    expect(getLoadColor(72)).toBe("var(--warning)");
  });
  it("returns success color for normal load (<70)", () => {
    expect(getLoadColor(45)).toBe("var(--success)");
    expect(getLoadColor(0)).toBe("var(--success)");
  });
});

describe("getLoadStatus", () => {
  it("returns 'critical' for load >= 90", () => {
    expect(getLoadStatus(95)).toBe("critical");
  });
  it("returns 'high' for load 70-89", () => {
    expect(getLoadStatus(75)).toBe("high");
  });
  it("returns 'moderate' for load 40-69", () => {
    expect(getLoadStatus(55)).toBe("moderate");
  });
  it("returns 'low' for load < 40", () => {
    expect(getLoadStatus(20)).toBe("low");
  });
});

describe("formatOccupancy", () => {
  it("handles 100% capacity", () => {
    expect(formatOccupancy(400, 400)).toBe("100%");
  });
  it("rounds to nearest integer", () => {
    expect(formatOccupancy(1056, 1200)).toBe("88%");
  });
  it("handles zero capacity gracefully", () => {
    expect(formatOccupancy(0, 0)).toBe("0%");
  });
});
