"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Accessibility, Flame } from "lucide-react";

export interface MapControlsProps {
  layers: {
    heatmap: boolean;
    wheelchair: boolean;
    emergency: boolean;
  };
  setLayers: React.Dispatch<
    React.SetStateAction<{
      heatmap: boolean;
      wheelchair: boolean;
      emergency: boolean;
    }>
  >;
}

export function MapControls({ layers, setLayers }: MapControlsProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div className="absolute top-16 right-4 md:right-8 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col gap-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl"
          >
            <button
              onClick={() => toggleLayer("heatmap")}
              className={`p-3 rounded-xl flex items-center justify-center transition-colors ${layers.heatmap ? "bg-[var(--danger)] text-white" : "hover:bg-white/10 text-zinc-400"}`}
              title="Crowd Heatmap"
            >
              <Layers className="w-5 h-5" />
            </button>
            <button
              onClick={() => toggleLayer("wheelchair")}
              className={`p-3 rounded-xl flex items-center justify-center transition-colors ${layers.wheelchair ? "bg-[var(--primary)] text-white" : "hover:bg-white/10 text-zinc-400"}`}
              title="Wheelchair Accessible Routes"
            >
              <Accessibility className="w-5 h-5" />
            </button>
            <button
              onClick={() => toggleLayer("emergency")}
              className={`p-3 rounded-xl flex items-center justify-center transition-colors ${layers.emergency ? "bg-[var(--warning)] text-white" : "hover:bg-white/10 text-zinc-400"}`}
              title="Emergency Exits"
            >
              <Flame className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white shadow-xl hover:bg-white/10 transition-colors"
      >
        <Layers className="w-5 h-5" />
      </button>
    </div>
  );
}
