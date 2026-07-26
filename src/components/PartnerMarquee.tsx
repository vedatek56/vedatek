"use client";

import React from "react";
import { Cloud, Server, Database, ShoppingBag, Terminal, Box, ShieldAlert } from "lucide-react";

interface Partner {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  desc: string;
}

const partners: Partner[] = [
  { name: "AWS Cloud", icon: Cloud, color: "text-amber-500", desc: "SRE & Architecture" },
  { name: "Dynamics 365 BC", icon: Database, color: "text-blue-600", desc: "Microsoft ERP Sync" },
  { name: "Linnworks", icon: Server, color: "text-indigo-500", desc: "WMS Integration" },
  { name: "Shopify Plus", icon: ShoppingBag, color: "text-emerald-500", desc: "E-Commerce Flows" },
  { name: "Terraform", icon: Terminal, color: "text-purple-500", desc: "Infrastructure as Code" },
  { name: "Kubernetes", icon: Box, color: "text-blue-500", desc: "App Orchestration" },
  { name: "Docker Platforms", icon: ShieldAlert, color: "text-cyan-500", desc: "Container Sec" }
];

export default function PartnerMarquee() {
  // 4x duplication to guarantee seamless, continuous infinite loop on all screen sizes
  const scrollItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="w-full py-5 sm:py-8 bg-slate-900 border-y border-slate-800 overflow-hidden relative select-none">
      {/* Gradient Fades on edges - narrower on mobile for maximum visible content */}
      <div className="absolute top-0 left-0 w-6 sm:w-16 md:w-32 h-full bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-6 sm:w-16 md:w-32 h-full bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none"></div>

      <div className="flex items-center">
        {/* Infinite scrolling marquee wrapper */}
        <div className="flex gap-6 sm:gap-10 md:gap-16 animate-marquee whitespace-nowrap min-w-full will-change-transform">
          {scrollItems.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950 border border-slate-800/40 shadow-inner group-hover:border-brand-indigo/35 transition-all">
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${partner.color}`} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-100 group-hover:text-brand-indigo transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase text-slate-400">
                    {partner.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
