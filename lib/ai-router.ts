/**
 * Smart AI response router for StadiumOS Copilot.
 * Routes user messages to contextually relevant responses based on keyword matching.
 * In production, this would call a real LLM endpoint.
 */

interface CopilotResponse {
  text: string;
}

const RESPONSE_MAP: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ["crowd", "heatmap", "density", "congestion", "gate"],
    response:
      "📍 **Crowd Analysis — Gate 4:** My camera feed analysis shows a density spike of 92% in Sector B. I recommend rerouting incoming fans to Gate 5 via the digital signage network. Shall I push a signage update? I can also dispatch 4 additional volunteers to Gate 4 immediately.",
  },
  {
    keywords: ["medical", "doctor", "ambulance", "injury", "health", "medic"],
    response:
      "🏥 **Medical Situational Awareness:** Team Alpha is currently en route to Block 112 (ETA 2 min). Team Bravo is available at Medical HQ on Level 1. Team Charlie is on-scene at Gate 4. For non-urgent assistance, the nearest first-aid station is at Block 108, North Concourse.",
  },
  {
    keywords: [
      "route",
      "navigate",
      "directions",
      "find",
      "where",
      "seat",
      "gate",
    ],
    response:
      "🗺️ **Navigation:** Your seat is at Block 112, Row F, Seat 42. From your current location near Gate C: proceed straight for 80m, take Ramp 2 up to Level 2, then follow signs for Block 110-115. Estimated walk: **4 minutes**. Want me to enable wheelchair-accessible routing?",
  },
  {
    keywords: [
      "food",
      "eat",
      "drink",
      "concession",
      "beverage",
      "queue",
      "wait",
    ],
    response:
      "🍔 **Food & Queue Intelligence:** The shortest wait right now is at **Kiosk 7A** (Block 109) with only a 2-min wait. Block 112 concessions are at 72% capacity with an 8-min wait. I recommend heading to Block 109 before the 67th-minute mark to avoid the half-time surge.",
  },
  {
    keywords: [
      "metro",
      "transport",
      "bus",
      "train",
      "parking",
      "shuttle",
      "traffic",
    ],
    response:
      "🚇 **Transit Status:** Metro Line A (Giants Stadium) arrives in **3 min** at 88% capacity — normal. Line B (Penn Station) is **delayed by 4 minutes** at 95% capacity — avoid if possible. VIP Shuttle departs in 12 min. Lot A is full; Lot B is at 88% — I suggest heading to Lot C (accessible, 30% full).",
  },
  {
    keywords: ["weather", "rain", "wind", "temperature", "roof", "lightning"],
    response:
      "⛈️ **Weather Advisory:** Current conditions at MetLife Stadium: **22°C**, partly cloudy, 14 km/h wind. ⚠️ Lightning detected **12 km away** and moving toward the stadium. I recommend roof deployment if it reaches 8 km. Roof status: currently **open**. Shall I alert the operations team?",
  },
  {
    keywords: [
      "security",
      "incident",
      "alert",
      "emergency",
      "danger",
      "threat",
    ],
    response:
      "🚨 **Security Summary:** 2 active alerts: (1) Unauthorized access attempt at Gate 4, Sector B — Security Team 3 responding. (2) Suspicious package at Level 2 Concourse — currently under investigation. All emergency exits are clear. Crowd evacuation protocol is on standby.",
  },
  {
    keywords: ["volunteer", "staff", "team", "deploy", "resources"],
    response:
      "👥 **Resource Deployment:** 124 of 150 volunteers are currently deployed. Sector B (Gates 4-6) is under-resourced at only 18 assigned — this is **below minimum threshold**. I recommend immediately redeploying 6 volunteers from Sector A (currently at 42, above optimal). Shall I execute this redeployment?",
  },
  {
    keywords: ["accessibility", "wheelchair", "disabled", "ramp", "elevator"],
    response:
      "♿ **Accessibility Routing:** All 3 accessible elevators are operational. Step-free route from Gate C to Block 112: use Elevator E-4 (near Gate C entrance), exit Level 2, follow blue floor markers to Block 112. The nearest accessible restroom is at Block 110. Wheelchair-accessible parking is in Lot C (30% full).",
  },
  {
    keywords: [
      "summarize",
      "summary",
      "overview",
      "status",
      "update",
      "incident",
    ],
    response:
      "📊 **Operational Summary (18:42):** Attendance: **82,450 fans** (99.9% capacity). Active incidents: 2 critical, 1 medium. Gate 4 congestion at 92%. Metro Line B delayed. Medical Team Alpha en route to Block 112. Weather advisory: lightning 12km out. Network load: 64.2TB (spiking). Overall status: **AMBER — monitor closely.**",
  },
];

const FALLBACK_RESPONSE =
  "I'm analyzing the latest stadium sensor data and camera feeds. Could you be more specific? You can ask me about crowd density, medical teams, navigation, food queues, transit, weather, security alerts, or resource deployment.";

/**
 * Routes a user message to a contextually relevant AI response.
 * Performs case-insensitive keyword matching across all categories.
 */
export function getAIResponse(userMessage: string): CopilotResponse {
  const lower = userMessage.toLowerCase();

  for (const entry of RESPONSE_MAP) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return { text: entry.response };
    }
  }

  return { text: FALLBACK_RESPONSE };
}
