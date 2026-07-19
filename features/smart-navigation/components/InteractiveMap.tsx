"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LocationMarker } from "./LocationMarker"

interface InteractiveMapProps {
  layers: { heatmap: boolean; wheelchair: boolean; emergency: boolean }
  activeRoute: string | null
}

// Coordinate mappings and route configurations for each destination
const DESTINATIONS: Record<
  string,
  {
    cx: number
    cy: number
    normalPath: string
    wheelchairPath: string
    color: string
    label: string
  }
> = {
  Food: {
    cx: 400,
    cy: 220,
    normalPath: "M 150 400 L 250 400 L 250 250 L 400 220",
    wheelchairPath: "M 150 400 L 150 280 L 280 150 L 400 220",
    color: "#F97316", // Orange
    label: "Food & Beverage",
  },
  Restrooms: {
    cx: 580,
    cy: 250,
    normalPath: "M 150 400 L 250 400 L 250 250 L 400 220 L 580 250",
    wheelchairPath: "M 150 400 L 150 280 L 280 150 L 500 150 L 580 250",
    color: "#3B82F6", // Blue
    label: "Restrooms",
  },
  Medical: {
    cx: 220,
    cy: 320,
    normalPath: "M 150 400 L 220 320",
    wheelchairPath: "M 150 400 L 150 320 L 220 320",
    color: "#EF4444", // Red
    label: "Medical Point",
  },
  Parking: {
    cx: 350,
    cy: 680,
    normalPath: "M 150 400 L 250 550 L 350 680",
    wheelchairPath: "M 150 400 L 150 550 L 350 550 L 350 680",
    color: "#10B981", // Emerald
    label: "Parking Exit",
  },
  "My Seat": {
    cx: 480,
    cy: 240,
    normalPath: "M 150 400 L 250 400 L 250 250 L 400 220 L 480 240",
    wheelchairPath: "M 150 400 L 150 280 L 280 150 L 480 170 L 480 240",
    color: "#8B5CF6", // Purple
    label: "Block 112, Row F, Seat 42",
  },
}

// Seating Stand layout parameters
const SEATING_STANDS = [
  { name: "NORTH STAND", x: 400, y: 80, rotate: 0 },
  { name: "SOUTH STAND", x: 400, y: 720, rotate: 0 },
  { name: "WEST STAND", x: 80, y: 400, rotate: -90 },
  { name: "EAST STAND", x: 720, y: 400, rotate: 90 },
]

export function InteractiveMap({ layers, activeRoute }: InteractiveMapProps) {
  const destConfig = activeRoute ? DESTINATIONS[activeRoute] : null
  const activePath = destConfig
    ? layers.wheelchair
      ? destConfig.wheelchairPath
      : destConfig.normalPath
    : ""

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#03050d] flex items-center justify-center">
      {/* Premium Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Outer Stadium Glow */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      {/* The 3D Map Canvas */}
      <motion.div
        className="relative w-[800px] h-[800px]"
        initial={{ rotateX: 60, rotateZ: -45, scale: 0.8 }}
        animate={{
          rotateX: activeRoute ? 45 : 60,
          rotateZ: activeRoute ? -25 : -45,
          scale: activeRoute ? 1.15 : 0.8,
          x: activeRoute ? "-5%" : "0%",
          y: activeRoute ? "5%" : "0%",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full absolute inset-0 pointer-events-none"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* SVG Definitions for Gradients and Fields */}
          <defs>
            <linearGradient id="cyber-pitch-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#042f2e" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="field-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
            </radialGradient>
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ──────────────────────────────────────────────────────────── */}
          {/* Stadium Architecture: Concentric Seating Tiers & Structure   */}
          {/* ──────────────────────────────────────────────────────────── */}

          {/* Outer Stadium Boundary */}
          <rect
            x="40"
            y="40"
            width="720"
            height="720"
            rx="200"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
          />
          <rect
            x="50"
            y="50"
            width="700"
            height="700"
            rx="180"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            opacity="0.15"
          />

          {/* Seating Tier Dividers */}
          {/* Outer Tier */}
          <rect
            x="80"
            y="110"
            width="640"
            height="580"
            rx="160"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2.5"
            strokeDasharray="60 15"
          />
          {/* Middle Club Suites Tier */}
          <rect
            x="130"
            y="170"
            width="540"
            height="460"
            rx="120"
            fill="none"
            stroke="var(--accent-cyan)"
            strokeWidth="1"
            opacity="0.25"
          />
          {/* Lower Tier */}
          <rect
            x="180"
            y="230"
            width="440"
            height="340"
            rx="80"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
            strokeDasharray="40 10"
          />

          {/* Sector dividers (aisles) radiating from pitch corners */}
          <path
            d="M 180 230 L 80 110 M 620 230 L 720 110 M 180 570 L 80 690 M 620 570 L 720 690"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
          <path
            d="M 400 230 L 400 50 M 400 570 L 400 750 M 180 400 L 50 400 M 620 400 L 750 400"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1.5"
          />

          {/* Seating Stand Labels */}
          {SEATING_STANDS.map((stand, i) => (
            <text
              key={i}
              x={stand.x}
              y={stand.y}
              transform={`rotate(${stand.rotate}, ${stand.x}, ${stand.y})`}
              fill="rgba(255,255,255,0.25)"
              className="text-[11px] font-heading font-extrabold tracking-[0.25em]"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {stand.name}
            </text>
          ))}

          {/* ──────────────────────────────────────────────────────────── */}
          {/* Premium Cyber Football Pitch                                 */}
          {/* ──────────────────────────────────────────────────────────── */}

          {/* Outer field glow */}
          <rect
            x="240"
            y="290"
            width="320"
            height="220"
            rx="15"
            fill="url(#field-glow)"
            className="transition-all"
          />

          {/* Grass Field Background */}
          <rect
            x="250"
            y="300"
            width="300"
            height="200"
            rx="10"
            fill="url(#cyber-pitch-grad)"
            stroke="rgba(0, 229, 255, 0.4)"
            strokeWidth="1.5"
            filter="url(#glow-filter)"
          />

          {/* Center Line */}
          <line
            x1="400"
            y1="300"
            x2="400"
            y2="500"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />

          {/* Center Circle & Center Spot */}
          <circle
            cx="400"
            cy="400"
            r="35"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          <circle cx="400" cy="400" r="2.5" fill="rgba(255,255,255,0.5)" />

          {/* Penalty Area Left (18-yard box) */}
          <rect
            x="250"
            y="335"
            width="55"
            height="130"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          {/* Penalty Arc Left (D-Box) */}
          <path
            d="M 305 380 A 25 25 0 0 1 305 420"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          {/* Goal Area Left (6-yard box) */}
          <rect
            x="250"
            y="365"
            width="18"
            height="70"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          {/* Penalty Spot Left */}
          <circle cx="286.5" cy="400" r="2" fill="rgba(255,255,255,0.4)" />

          {/* Penalty Area Right (18-yard box) */}
          <rect
            x="495"
            y="335"
            width="55"
            height="130"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          {/* Penalty Arc Right (D-Box) */}
          <path
            d="M 495 380 A 25 25 0 0 0 495 420"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          {/* Goal Area Right (6-yard box) */}
          <rect
            x="532"
            y="365"
            width="18"
            height="70"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          {/* Penalty Spot Right */}
          <circle cx="513.5" cy="400" r="2" fill="rgba(255,255,255,0.4)" />

          {/* Corner Arcs */}
          <path
            d="M 250 306 A 6 6 0 0 1 256 300"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <path
            d="M 250 494 A 6 6 0 0 0 256 500"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <path
            d="M 550 306 A 6 6 0 0 0 544 300"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <path
            d="M 550 494 A 6 6 0 0 1 544 500"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />

          {/* Goals (Goalpost outlines) */}
          <rect
            x="244"
            y="378"
            width="6"
            height="44"
            fill="none"
            stroke="rgba(0, 229, 255, 0.4)"
            strokeWidth="1"
          />
          <rect
            x="550"
            y="378"
            width="6"
            height="44"
            fill="none"
            stroke="rgba(0, 229, 255, 0.4)"
            strokeWidth="1"
          />

          {/* ──────────────────────────────────────────────────────────── */}
          {/* Stadium Gates & Outer Security Nodes                         */}
          {/* ──────────────────────────────────────────────────────────── */}
          {[
            { cx: 400, cy: 50, label: "GATE A" },
            { cx: 750, cy: 400, label: "GATE B" },
            { cx: 400, cy: 750, label: "GATE C" },
            { cx: 50, cy: 400, label: "GATE D" },
          ].map((gate, i) => (
            <g key={i} className="opacity-60">
              <circle
                cx={gate.cx}
                cy={gate.cy}
                r="10"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
              />
              <circle cx={gate.cx} cy={gate.cy} r="4" fill="var(--primary)" />
            </g>
          ))}
        </svg>

        {/* Heatmap Layer */}
        <AnimatePresence>
          {layers.heatmap && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 mix-blend-screen pointer-events-none"
              style={{ transform: "translateZ(10px)" }}
            >
              {/* Density hot spots */}
              <div className="absolute top-[22%] left-[28%] w-56 h-56 bg-[var(--danger)]/35 rounded-full blur-[55px]" />
              <div className="absolute bottom-[28%] right-[22%] w-48 h-48 bg-[var(--warning)]/30 rounded-full blur-[45px]" />
              <div className="absolute top-[48%] left-[50%] w-40 h-40 bg-[var(--warning)]/20 rounded-full blur-[35px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Route SVG Layer with Flow/Direction Animation */}
        <AnimatePresence>
          {activeRoute && (
            <motion.svg
              viewBox="0 0 800 800"
              className="w-full h-full absolute inset-0 pointer-events-none"
              style={{ transform: "translateZ(20px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Glowing Background Guide Path */}
              <path
                d={activePath}
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.15"
              />
              {/* Active Flow Line with Marching-Ants Dash Offset Animation */}
              <motion.path
                d={activePath}
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="14 10"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "linear",
                }}
                style={{ filter: "drop-shadow(0 0 8px rgba(0, 229, 255, 0.75))" }}
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Interactive SVG Target Pin Markers */}
        <AnimatePresence>
          {activeRoute && destConfig && (
            <motion.div
              initial={{ opacity: 0, scale: 0, z: 30 }}
              animate={{ opacity: 1, scale: 1, z: 30 }}
              exit={{ opacity: 0, scale: 0, z: 30 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="absolute pointer-events-none"
              style={{
                left: `${(destConfig.cx / 800) * 100}%`,
                top: `${(destConfig.cy / 800) * 100}%`,
                transform: "translate(-50%, -100%) translateZ(30px)",
                transformOrigin: "bottom center",
              }}
            >
              <svg width="40" height="50" viewBox="-20 -40 40 45" className="overflow-visible">
                {/* Target Pulsing Base Ring */}
                <circle cx="0" cy="0" r="10" fill="none" stroke={destConfig.color} strokeWidth="2">
                  <animate
                    attributeName="r"
                    values="5;18"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* 3D Pin Drop Shadow */}
                <ellipse cx="0" cy="2" rx="6" ry="2.5" fill="black" opacity="0.4" />
                {/* 3D Pin Body */}
                <path
                  d="M 0 0 C -10 -10 -15 -20 -15 -28 C -15 -38 -7 -43 0 -43 C 7 -43 15 -38 15 -28 C 15 -20 10 -10 0 0 Z"
                  fill={destConfig.color}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                  style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
                />
                {/* Inner Icon Dot */}
                <circle cx="0" cy="-28" r="5" fill="white" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Emergency Layer */}
        <AnimatePresence>
          {layers.emergency && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{ transform: "translateZ(25px)" }}
            >
              {[
                { top: "6%", left: "48%", label: "EXIT A" },
                { top: "48%", left: "92%", label: "EXIT B" },
                { top: "92%", left: "48%", label: "EXIT C" },
                { top: "48%", left: "6%", label: "EXIT D" },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-6 bg-[var(--danger)]/90 backdrop-blur-md rounded-md flex items-center justify-center text-white font-extrabold text-[9px] shadow-[0_0_15px_rgba(239,68,68,0.7)] border border-red-500/40 tracking-wider"
                  style={pos}
                >
                  {pos.label}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Current Location Marker */}
        <div style={{ transform: "translateZ(40px)" }} className="absolute inset-0 pointer-events-none">
          <LocationMarker x="18.75%" y="50%" />
        </div>
      </motion.div>
    </div>
  )
}
