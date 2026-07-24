"use client";

import { useState } from "react";
import { ShoppingBag, Database, Link2, Truck, RefreshCw, BarChart3, HelpCircle } from "lucide-react";

export default function IntegrationVisual() {
  const [activeStep, setActiveStep] = useState<string | null>("middleware");

  const steps = [
    {
      id: "ecommerce",
      title: "E-commerce & retail",
      description: "Storefronts, marketplaces and checkout events",
      details: "Customer orders, refunds and inventory updates are captured in real time. We validate the data before it moves into the core business systems.",
      icon: ShoppingBag,
      direction: "↓",
      color: "border-sky-500/35 hover:border-sky-500/70 text-sky-400 bg-sky-950/20"
    },
    {
      id: "erp",
      title: "ERP / finance",
      description: "Dynamics 365 Business Central and core records",
      details: "The central record set. We keep order, stock and finance information aligned across the systems that matter most to operations.",
      icon: Database,
      direction: "↕",
      color: "border-indigo-500/35 hover:border-indigo-500/70 text-indigo-400 bg-indigo-950/20"
    },
    {
      id: "middleware",
      title: "Integration layer",
      description: "Secure, reliable middleware and API queues",
      details: "Our integration layer translates schemas, manages retries, stores audit trails and keeps data moving reliably between systems.",
      icon: Link2,
      direction: "↕",
      color: "border-brand-teal/50 hover:border-brand-teal text-brand-cyan bg-slate-900/60 shadow-lg shadow-brand-teal/10"
    },
    {
      id: "edi",
      title: "EDI & trading partners",
      description: "EDIFACT, ANSI X12 and AS2 pipelines",
      details: "Automate purchase orders, acknowledgements and dispatch updates with suppliers and trading partners using structured, validated data flows.",
      icon: Truck,
      direction: "↕",
      color: "border-amber-500/35 hover:border-amber-500/70 text-amber-400 bg-amber-950/20"
    },
    {
      id: "warehouse",
      title: "Warehouse & fulfilment",
      description: "Linnworks, WMS and operational workflows",
      details: "Keep physical operations in sync. Stock, dispatch and courier updates flow automatically so teams can work from current information.",
      icon: RefreshCw,
      direction: "↓",
      color: "border-emerald-500/35 hover:border-emerald-500/70 text-emerald-400 bg-emerald-950/20"
    },
    {
      id: "analytics",
      title: "Reporting & visibility",
      description: "Grafana, metrics and operational reporting",
      details: "Audit logs, transmission statistics and exceptions are surfaced clearly so teams can spot issues before they slow operations down.",
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
                  <h3 className="text-sm font-bold text-slate-200 tracking-wide truncate">{step.title}</h3>
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
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block mb-1">Example: Connected Commerce &amp; Operations</span>
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Connected commerce and operations</h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            One example of how VEDATEK connects complex business systems. The same engineering approach can be adapted across platforms, industries and technology environments.
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
                      <h3 className="text-base font-bold text-slate-100">{current.title}</h3>
                      <span className="text-xs text-brand-cyan">{current.description}</span>
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
