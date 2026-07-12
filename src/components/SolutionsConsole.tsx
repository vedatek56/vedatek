"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, RefreshCw, Layers, BrainCircuit, Activity, Wrench } from "lucide-react";
import Link from "next/link";

interface ConsoleTab {
  id: string;
  problem: string;
  solution: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  ctaLink: string;
  diagram: React.ReactNode;
}

export default function SolutionsConsole() {
  const [activeTabId, setActiveTabId] = useState("disconnected-systems");

  const tabs: ConsoleTab[] = [
    {
      id: "disconnected-systems",
      problem: "Systems don't talk to each other?",
      solution: "Connect ERP, E-Commerce & Logistics Middleware",
      details: "When your Shopify sales channel, Linnworks warehouse manager, and Dynamics 365 Business Central financial systems run in silos, inventory discrepancy and delivery bottlenecks are inevitable. We connect these APIs to automate real-time synchronizations.",
      icon: Layers,
      benefits: [
        "Real-time stock level synchronization across all sales platforms",
        "Auto-sync orders, cancellations, and status updates instantly",
        "Eradicate double-entry of invoicing and finance data"
      ],
      ctaLink: "/services/systems-integration",
      diagram: (
        <svg className="w-full h-full max-w-[320px] mx-auto opacity-85" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="15" className="fill-brand-indigo/10 stroke-brand-indigo" strokeWidth="1.5" />
          <text x="100" y="104" textAnchor="middle" fontSize="10" className="fill-slate-100 font-bold">API</text>
          
          <rect x="15" y="30" width="55" height="30" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="42" y="49" textAnchor="middle" fontSize="8" className="fill-slate-300">Shopify</text>

          <rect x="130" y="30" width="55" height="30" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="157" y="49" textAnchor="middle" fontSize="8" className="fill-slate-300">Business Central</text>

          <rect x="72" y="140" width="56" height="30" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="100" y="159" textAnchor="middle" fontSize="8" className="fill-slate-300">Linnworks WMS</text>

          <path d="M42 60 L100 85" className="stroke-brand-cyan/40" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M157 60 L100 85" className="stroke-brand-cyan/40" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M100 140 L100 115" className="stroke-brand-cyan/40" strokeWidth="1.5" strokeDasharray="3 3" />

          <circle cx="42" cy="60" r="3" className="fill-brand-cyan animate-ping" />
          <circle cx="157" cy="60" r="3" className="fill-brand-indigo animate-ping" />
          <circle cx="100" cy="140" r="3" className="fill-brand-teal animate-ping" />
        </svg>
      )
    },
    {
      id: "manual-data-entry",
      problem: "Too much manual workflow entry?",
      solution: "Hands-Free B2B & Retail Order Automation",
      details: "Staff shouldn't manually process EDI files, purchase orders, or transform supplier schemas. We build background EDI pipelines that capture order payloads via secure AS2 or SFTP, validate data, and trigger fulfillment commands instantly.",
      icon: RefreshCw,
      benefits: [
        "Process massive retail purchase orders in seconds",
        "Zero manual validation slips or fulfillment errors",
        "Automatic financial transformed data pushes directly into accounting"
      ],
      ctaLink: "/services/edi-automation",
      diagram: (
        <svg className="w-full h-full max-w-[320px] mx-auto opacity-85" viewBox="0 0 200 200" fill="none">
          <rect x="20" y="85" width="45" height="30" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="42" y="104" textAnchor="middle" fontSize="8" className="fill-slate-300">Supplier EDI</text>

          <rect x="135" y="85" width="45" height="30" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="157" y="104" textAnchor="middle" fontSize="8" className="fill-slate-300">WMS Dispatch</text>

          <circle cx="100" cy="100" r="22" className="fill-brand-teal/10 stroke-brand-teal" strokeWidth="1.5" />
          <path d="M93 100 A7 7 0 0 1 107 100" className="stroke-brand-teal animate-spin origin-center" strokeWidth="1.5" style={{ transformOrigin: "100px 100px" }} />
          <text x="100" y="103" textAnchor="middle" fontSize="8" className="fill-slate-100 font-bold">EDI</text>

          <path d="M65 100 L78 100" className="stroke-brand-cyan" strokeWidth="1.5" />
          <path d="M122 100 L135 100" className="stroke-brand-cyan" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: "ai-adoption",
      problem: "Unsure where to use AI securely?",
      solution: "Pragmatic & Secure Internal AI Assistants",
      details: "Bypass generic prompts that leak sensitive client data. We construct closed, secure, and private AI integrations. We build internal knowledge bases that query documents dynamically and parse supplier PDF quotes automatically within your network sandbox.",
      icon: BrainCircuit,
      benefits: [
        "Ingest supplier invoice and pricing documents instantly",
        "Deploy private RAG tools that keep your intellectual property safe",
        "Intelligent customer ticket classifications & drafting support"
      ],
      ctaLink: "/services/ai-automation",
      diagram: (
        <svg className="w-full h-full max-w-[320px] mx-auto opacity-85" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="30" className="fill-brand-cyan/15 stroke-brand-cyan" strokeWidth="1.5" />
          <text x="100" y="103" textAnchor="middle" fontSize="9" className="fill-slate-100 font-bold">AI Agent</text>
          
          <rect x="20" y="20" width="50" height="25" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="45" y="36" textAnchor="middle" fontSize="7" className="fill-slate-400">PDF Invoices</text>

          <rect x="130" y="20" width="50" height="25" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="155" y="36" textAnchor="middle" fontSize="7" className="fill-slate-400">Knowledge</text>

          <path d="M55 45 L80 80" className="stroke-brand-cyan/40" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M145 45 L120 80" className="stroke-brand-cyan/40" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      id: "unmanaged-tech",
      problem: "Infrastructure hard to scale?",
      solution: "Modern Infrastructure as Code & Observability",
      details: "Fragile environments cause critical outages during peak times. We construct stable infrastructure using Terraform (IaC) and monitor server health in real time using Prometheus/Grafana alerts, preventing system failure before users experience it.",
      icon: Activity,
      benefits: [
        "Consistent configurations from development to live production",
        "Actionable slack alerts based on server telemetry logs",
        "Eliminate cloud cost waste through automated scaling rules"
      ],
      ctaLink: "/services/cloud-devops",
      diagram: (
        <svg className="w-full h-full max-w-[320px] mx-auto opacity-85" viewBox="0 0 200 200" fill="none">
          <rect x="15" y="80" width="50" height="40" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="40" y="101" textAnchor="middle" fontSize="8" className="fill-slate-100 font-mono font-bold">IaC</text>
          <text x="40" y="112" textAnchor="middle" fontSize="7" className="fill-slate-400">Terraform</text>

          <rect x="135" y="80" width="50" height="40" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
          <text x="160" y="101" textAnchor="middle" fontSize="8" className="fill-slate-100 font-mono font-bold">AWS</text>
          <text x="160" y="112" textAnchor="middle" fontSize="7" className="fill-slate-400">Cloud Host</text>

          <path d="M65 100 L135 100" className="stroke-brand-indigo animate-flow" strokeWidth="2" strokeDasharray="4 4" style={{ animation: "flow 4s linear infinite" }} />
          <circle cx="100" cy="100" r="10" className="fill-brand-cyan/20 stroke-brand-cyan" strokeWidth="1" />
          <text x="100" y="103" textAnchor="middle" fontSize="7" className="fill-brand-cyan font-bold">CI/CD</text>
        </svg>
      )
    },
    {
      id: "non-existent-software",
      problem: "Need custom tools built for your flow?",
      solution: "Bespoke Dashboards & Integration Middleware",
      details: "If off-the-shelf software forces you to change your operations, it's not the right tool. We engineer custom dashboard portals and background integration middleware designed specifically around your warehouse, sales, or regulatory workflows.",
      icon: Wrench,
      benefits: [
        "Lightweight, high-performance portal interfaces",
        "Own 100% of your software with no per-user monthly licensing",
        "Replace complex spreadsheet workflows with secure databases"
      ],
      ctaLink: "/services/software-development",
      diagram: (
        <svg className="w-full h-full max-w-[320px] mx-auto opacity-85" viewBox="0 0 200 200" fill="none">
          <rect x="25" y="45" width="150" height="110" rx="8" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
          <line x1="25" y1="65" x2="175" y2="65" className="stroke-slate-800" strokeWidth="1.5" />
          <circle cx="35" cy="55" r="3" className="fill-red-500" />
          <circle cx="45" cy="55" r="3" className="fill-amber-500" />
          <circle cx="55" cy="55" r="3" className="fill-green-500" />

          <rect x="40" y="80" width="120" height="15" rx="3" className="fill-brand-indigo/10 stroke-brand-indigo/30" strokeWidth="1" />
          <circle cx="50" cy="87.5" r="3" className="fill-brand-indigo" />
          <line x1="60" y1="87.5" x2="140" y2="87.5" className="stroke-slate-700" strokeWidth="1" />

          <rect x="40" y="105" width="120" height="15" rx="3" className="fill-brand-cyan/10 stroke-brand-cyan/30" strokeWidth="1" />
          <circle cx="50" cy="112.5" r="3" className="fill-brand-cyan" />
          <line x1="60" y1="112.5" x2="150" y2="112.5" className="stroke-slate-700" strokeWidth="1" />
        </svg>
      )
    }
  ];

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const ActiveIcon = activeTab.icon;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-950/20 text-left">
      
      {/* Sidebar Selector (5 Cols) */}
      <div className="lg:col-span-4 flex flex-col space-y-2">
        <p className="text-xs font-bold tracking-wider uppercase text-slate-500 px-3 mb-4">
          Select Your Challenge
        </p>
        
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isSelected = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-3.5 px-4 py-4 rounded-2xl text-left border transition-all duration-300 ${
                isSelected
                  ? "bg-slate-950 border-brand-indigo text-slate-100 shadow-inner"
                  : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-950/30"
              }`}
            >
              <TabIcon className={`w-5 h-5 shrink-0 ${isSelected ? "text-brand-cyan animate-pulse" : "text-slate-500"}`} />
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {tab.id.replace("-", " ")}
                </span>
                <span className="text-sm font-extrabold tracking-tight">
                  {tab.problem}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Panel (8 Cols) */}
      <div className="lg:col-span-8 flex flex-col justify-between bg-slate-950 border border-slate-850/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        
        {/* Dynamic content rendering with key to trigger anim transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full"
          >
            {/* Copy Content (7 Cols) */}
            <div className="md:col-span-7 flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand-indigo/10 border border-brand-indigo/20">
                  <ActiveIcon className="w-5 h-5 text-brand-indigo" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  Solution Architecture
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight leading-snug">
                {activeTab.solution}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed">
                {activeTab.details}
              </p>

              <div className="flex flex-col space-y-2 pt-2">
                {activeTab.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={activeTab.ctaLink}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-indigo transition-colors"
                >
                  Consult an Engineer
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Diagram Content (5 Cols) */}
            <div className="md:col-span-5 flex items-center justify-center p-4 rounded-xl border border-slate-900 bg-slate-950 shadow-inner">
              {activeTab.diagram}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
