import { describe, it, expect } from "vitest";
import { getAIResponse } from "@/lib/ai-router";

describe("getAIResponse", () => {
  it("returns crowd-related response for 'crowd' keyword", () => {
    const res = getAIResponse("show me the crowd density");
    expect(res.text).toContain("Crowd Analysis");
  });

  it("returns medical response for 'medical' keyword", () => {
    const res = getAIResponse("where is the nearest medical team");
    expect(res.text).toContain("Medical");
  });

  it("returns food/queue response for 'food' keyword", () => {
    const res = getAIResponse("which food stands are open?");
    expect(res.text).toContain("Food");
  });

  it("returns transit response for 'metro' keyword", () => {
    const res = getAIResponse("what is the metro status?");
    expect(res.text).toContain("Transit");
  });

  it("returns weather response for 'lightning' keyword", () => {
    const res = getAIResponse("is there lightning near the stadium?");
    expect(res.text).toContain("Weather");
  });

  it("returns navigation response for 'seat' keyword", () => {
    const res = getAIResponse("how do I find my seat?");
    expect(res.text).toContain("Navigation");
  });

  it("returns fallback for unrecognized queries", () => {
    const res = getAIResponse("xyzzy frob");
    expect(res.text.length).toBeGreaterThan(0);
  });

  it("returns a non-empty string for every response", () => {
    const inputs = ["crowd", "medical", "food", "metro", "weather", "gate", "security", "volunteer", "wheelchair", "summarize"];
    inputs.forEach((input) => {
      const { text } = getAIResponse(input);
      expect(text.length).toBeGreaterThan(10);
    });
  });
});
