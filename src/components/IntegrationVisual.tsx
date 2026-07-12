"use client";

import { useState } from "react";
import { ShoppingBag, Database, Link2, Truck, RefreshCw, BarChart3, HelpCircle } from "lucide-react";

export default function IntegrationVisual() {
  const [activeStep, setActiveStep] = useState<string | null>("middleware");

  const steps = [
    {
      id: "ecommerce",
      title: "E-Commerce & Retail",
      description: "Shopify, Amazon, eBay, Magento",
      details: "Customer orders, checkout events, and refunds are captured in real-time. Orders are queue-validated to prevent incorrect pricing or inventory deficits before syncing to the backend.",
      icon: ShoppingBag,
      direction: "↓",
      color: "border-sky-500/35 hover:border-sky-500/70 text-sky-400 bg-sky-950/20"
    },
    {
      id: "erp",
      title: "ERP Central Ledger",
      description: "Dynamics 365 Business Central",
      details: "The central core. VEDATEK ensures customer information, inventory revisions, purchase ledgers, and financial records match across systems instantly, avoiding manual ledger uploads.",
      icon: Database,
      direction: "↕",
      color: "border-indigo-500/35 hover:border-indigo-500/70 text-indigo-400 bg-indigo-950/20"
    },
    {
      id: "middleware",
      title: "VEDATEK Integration Layer",
      description: "Secure, reliable microservices & API queues",
      details: "Our custom middleware engine translates schemas, throttles API requests to avoid rate limits, stores transmission audits for error recovery, and handles secure webhook retries.",
      icon: Link2,
      direction: "↕",
      color: "border-brand-teal/50 hover:border-brand-teal text-brand-cyan bg-slate-900/60 shadow-lg shadow-brand-teal/10"
    },
    {
      id: "edi",
      title: "EDI & Supplier Network",
      description: "EDIFACT, ANSI X12, AS2 pipelines",
      details: "Automate purchase orders directly to suppliers and ingest dispatch timelines. We handle schema transformations, document validation rules, and direct SFTP/AS2 transfers.",
      icon: Truck,
      direction: "↕",
      color: "border-amber-500/35 hover:border-amber-500/70 text-amber-400 bg-amber-950/20"
    },
    {
      id: "warehouse",
      title: "Warehouse & Inventory",
      description: "Linnworks, WMS, Fulfilment hubs",
      details: "Keep physical operations in sync. Dispatch notifications, stock counts, shipping tags, and courier bookings flow automatically to avoid split shipments or late dispatch penalties.",
      icon: RefreshCw,
      direction: "↓",
      color: "border-emerald-500/35 hover:border-emerald-500/70 text-emerald-400 bg-emerald-950/20"
    },
    {
      id: "analytics",
      title: "Reporting & Observability",
      description: "Grafana, Power BI, Business Reports",
      details: "Audit logs, transmission statistics, transactional volumes, and errors are aggregated. Get alerts on shipping delays or integration dropouts before they disrupt operations.",
      icon: BarChart3,
      direction: "",
      color: "border-violet-500/35 hover:border-violet-500/70 text-violet-400 bg-violet-950/20"
    }
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/10 rounded-2xl border border-brand-border/40 p-6 sm:p-10 relative overflow-hidden">
      {/* Visual Canvas (Vertical Flow) */}
      <div className="lg:col-span-6 flex flex-col items-center relative py-6">
        
        {/* Continuous Flow background line */}
        <div className="absolute top-10 bottom-10 w-0.5 bg-slate-800/80 pointer-events-none z-0"></div>

        <div className="w-full flex flex-col gap-6 items-center relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full max-w-sm rounded-xl border p-4 cursor-pointer transition-all duration-300 flex items-center gap-4 ${step.color} ${
                  isSelected ? "ring-2 ring-brand-cyan/60 scale-[1.02]" : "scale-100"
                }`}
              >
                <div className="p-2.5 rounded-lg bg-slate-950/60 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <h4 className="text-sm font-bold text-slate-200 tracking-wide truncate">{step.title}</h4>
                  <p className="text-xs text-slate-400 truncate">{step.description}</p>
                </div>
                {step.direction && (
                  <span className="text-sm font-semibold opacity-70 ml-auto shrink-0 select-none bg-slate-950/40 w-6 h-6 rounded-full flex items-center justify-center">
                    {step.direction}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Explanatory Panel */}
      <div className="lg:col-span-6 flex flex-col space-y-6 justify-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block mb-1">Architecture Example</span>
          <h3 className="text-2xl font-bold text-slate-100 tracking-tight">Simplifying Integration Complexity</h3>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Many businesses struggle with isolated software solutions that don&apos;t share data. This model demonstrates how VEDATEK builds custom middleware logic to unify all systems under a secure, transactional flow.
          </p>
        </div>

        {/* Selected Layer Card */}
        <div className="bg-slate-900/50 border border-brand-border/60 rounded-2xl p-6 relative overflow-hidden min-h-[220px] flex flex-col justify-between transition-all duration-300">
          {activeStep ? (
            (() => {
              const current = steps.find(s => s.id === activeStep)!;
              const StepIcon = current.icon;
              return (
                <div className="flex flex-col h-full gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-950/50 text-brand-cyan">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{current.title}</h4>
                      <span className="text-xs text-brand-cyan/85">{current.description}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {current.details}
                  </p>
                  <p className="text-xs text-slate-500 mt-auto flex items-center gap-1 italic">
                    <HelpCircle className="w-3.5 h-3.5" /> Hover or click another layer to inspect integrations.
                  </p>
                </div>
              );
            })()
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full text-slate-500 py-12">
              <HelpCircle className="w-8 h-8 text-slate-600 mb-2" />
              <p className="text-sm">Click an integration block to see how we synchronize the data flow.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
