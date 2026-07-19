"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/design-system/Card";
import {
  CloudRain,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
} from "lucide-react";
import { STADIUM_WEATHER } from "@/lib/mock-data";

/**
 * WeatherWidget — displays current stadium weather conditions.
 * Pure display component wrapped in React.memo for performance.
 */
export const WeatherWidget = React.memo(function WeatherWidget() {
  const w = STADIUM_WEATHER;

  return (
    <Card
      className="bg-gradient-to-br from-blue-900/20 to-transparent"
      aria-label="Stadium weather conditions"
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CloudRain className="w-5 h-5 text-blue-400" aria-hidden="true" />
              <span className="font-heading font-bold text-white text-2xl">
                {w.temperature}°C
              </span>
            </div>
            <div className="text-sm text-blue-200">
              {w.description} · MetLife Stadium
            </div>
          </div>
          <div className="text-right text-sm text-blue-300 space-y-1">
            <div className="flex items-center gap-1.5 justify-end">
              <Wind className="w-4 h-4" aria-hidden="true" />
              <span>{w.windSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <Droplets className="w-4 h-4" aria-hidden="true" />
              <span>{w.humidity}% humidity</span>
            </div>
            <div className="text-xs text-blue-400">Roof: {w.roofStatus}</div>
          </div>
        </div>

        {w.lightningProximityKm !== null && (
          <div
            className="flex items-center gap-2 mt-3 px-3 py-2 bg-[var(--warning)]/10 border border-[var(--warning)]/20 rounded-xl"
            role="alert"
            aria-live="polite"
          >
            <CloudLightning
              className="w-4 h-4 text-[var(--warning)] shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs text-[var(--warning)] font-medium">
              Lightning {w.lightningProximityKm} km away — monitoring
            </span>
          </div>
        )}

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
            <Thermometer
              className="w-3.5 h-3.5 text-zinc-400 mx-auto mb-1"
              aria-hidden="true"
            />
            <div className="text-xs text-zinc-400">Feels like</div>
            <div className="text-sm font-bold text-white">{w.feelsLike}°C</div>
          </div>
          <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
            <div className="text-xs text-zinc-400 mb-1">UV Index</div>
            <div className="text-sm font-bold text-white">
              {w.uvIndex}{" "}
              <span className="text-zinc-500 font-normal text-xs">
                Moderate
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
