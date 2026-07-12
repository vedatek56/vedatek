"use client";

import { Cloud, Database, Cpu, Code2, Network } from "lucide-react";

export default function HeroVisual() {
  // Define positions for nodes in SVG coordinate space (800x500)
  const nodes = [
    { id: "cloud", x: 400, y: 80, label: "Cloud Platforms", icon: Cloud, color: "text-brand-cyan", glow: "rgba(6, 182, 212, 0.15)" },
    { id: "database", x: 180, y: 220, label: "ERP / Data Storage", icon: Database, color: "text-slate-400", glow: "rgba(148, 163, 184, 0.1)" },
    { id: "ai", x: 620, y: 220, label: "AI Engines", icon: Cpu, color: "text-brand-violet", glow: "rgba(139, 92, 246, 0.15)" },
    { id: "api", x: 290, y: 380, label: "API Integrations", icon: Network, color: "text-brand-teal", glow: "rgba(13, 148, 136, 0.15)" },
    { id: "code", x: 510, y: 380, label: "Custom Software", icon: Code2, color: "text-brand-indigo", glow: "rgba(99, 102, 241, 0.15)" },
  ];

  // Connections between nodes. We will animate dash offsets to show flows.
  const connections = [
    { from: "cloud", to: "database", path: "M 400 80 Q 290 150 180 220" },
    { from: "cloud", to: "ai", path: "M 400 80 Q 510 150 620 220" },
    { from: "database", to: "api", path: "M 180 220 Q 235 300 290 380" },
    { from: "ai", to: "code", path: "M 620 220 Q 565 300 510 380" },
    { from: "api", to: "code", path: "M 290 380 L 510 380" },
    { from: "database", to: "code", path: "M 180 220 C 300 260, 390 340, 510 380" },
    { from: "api", to: "ai", path: "M 290 380 C 400 340, 510 300, 620 220" }
  ];

  return (
    <div className="w-full relative h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden bg-slate-950/20 rounded-2xl border border-brand-border/20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Absolute Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Connectivity SVG */}
      <svg className="w-full h-full max-w-[800px] max-h-[500px] absolute z-10" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Draw Connection Lines */}
        {connections.map((conn, idx) => (
          <g key={idx}>
            {/* Base line */}
            <path
              d={conn.path}
              className="stroke-slate-800/80"
              strokeWidth="2"
              fill="none"
            />
            {/* Animated Flow line */}
            <path
              d={conn.path}
              className="stroke-brand-cyan/40"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 20"
              style={{
                animation: `flow 6s linear infinite ${idx * 0.75}s`
              }}
            />
          </g>
        ))}

        {/* Draw Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <g key={node.id} className="cursor-pointer group">
              {/* Outer Pulsing Aura */}
              <circle
                cx={node.x}
                cy={node.y}
                r="40"
                fill="none"
                stroke={node.color === "text-brand-cyan" ? "rgba(6, 182, 212, 0.2)" : node.color === "text-brand-violet" ? "rgba(139, 92, 246, 0.2)" : "rgba(99, 102, 241, 0.2)"}
                strokeWidth="1"
                className="animate-pulse"
              />

              {/* Node Glass Background */}
              <circle
                cx={node.x}
                cy={node.y}
                r="30"
                fill="#0b0f19"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
                className="transition-all duration-300 group-hover:stroke-brand-cyan/50 group-hover:fill-slate-900"
              />

              {/* React Icon container using foreignObject */}
              <foreignObject
                x={node.x - 12}
                y={node.y - 12}
                width="24"
                height="24"
              >
                <div className={`w-full h-full flex items-center justify-center ${node.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
              </foreignObject>

              {/* Node label */}
              <text
                x={node.x}
                y={node.y + 48}
                textAnchor="middle"
                className="fill-slate-400 font-sans text-xs tracking-wider font-semibold pointer-events-none group-hover:fill-slate-200 transition-colors duration-200"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
