import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart3, Database, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Proven Outcomes | VEDATEK",
  description:
    "Real outcomes delivered by VEDATEK: Systems integration, EDI automation, cloud DevOps and SRE for UK retail, wholesale and scaling tech brands.",
  alternates: {
    canonical: "/case-studies",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Case Studies & Proven Outcomes | VEDATEK",
    description: "Real outcomes delivered by VEDATEK: Systems integration, EDI automation, cloud DevOps and SRE for UK retail, wholesale and scaling tech brands.",
    url: "https://vedatek.co.uk/case-studies",
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "VEDATEK | Case Studies",
      }
    ]
  }
};

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Automated Multi-Channel Sync for UK Fashion Retailer",
      client: "UK Fashion & Lifestyle Brand",
      sector: "E-Commerce / Multi-Channel Retail",
      icon: Database,
      accent: "text-brand-cyan",
      challenge: "Staff spent 15+ hours per week manually copy-pasting order details and stock counts between Shopify storefronts and Linnworks. High transaction volumes led to sync lag, duplicate shipping labels, and frequent stockouts on fast-selling products.",
      solution: "We engineered a direct, lightweight sync connector that automatically updates inventory levels and matches customer records in real time. We built automated validation handlers to capture and log invalid address details before tags are passed to carriers.",
      outcome: "100% automated order flow, zero manual record corrections, and complete elimination of stock overselling. Saved £1,200/month in manual data entry overhead.",
      tech: ["Shopify Plus", "Linnworks API", "DPD / Royal Mail APIs", "TypeScript", "Node.js"]
    },
    {
      title: "EDI and ERP Order Flow for Medical Distributor",
      client: "Wholesale Pharmaceutical Supplier",
      sector: "Distribution / Wholesale B2B",
      icon: BarChart3,
      accent: "text-brand-teal",
      challenge: "Major retail pharmacy groups and the NHS mandated strict EDI compliance for B2B ordering. Processing raw EDIFACT files manually caused order backlogs, delayed supplier shipments, and threatened strict SLA compliance penalties.",
      solution: "We designed an end-to-end B2B order pipeline connecting incoming AS2/SFTP EDI streams directly to Microsoft Dynamics 365 Business Central. The pipeline handles data translations (purchase orders, invoices, dispatch advices) automatically.",
      outcome: "Zero manual order keying. Wholesale order processing lead times reduced from 1 week to less than 1 day. Achieved 100% compliance with buyer SLAs, avoiding potential penalty fees.",
      tech: ["Dynamics 365 Business Central", "EDIFACT / ANSI X12", "AS2 Protocols", "Secure SFTP", "JSON Map"]
    },
    {
      title: "Cloud Infrastructure & SRE Dashboard Setup for SaaS Platform",
      client: "SaaS Scaleup (High-Transaction)",
      sector: "Software-as-a-Service",
      icon: Cloud,
      accent: "text-brand-indigo",
      challenge: "Uncontrolled AWS hosting bills rising to £18,000/month, frequent application response spikes, and zero visibility into database query bottlenecks.",
      solution: "We refactored their cloud environment into Infrastructure as Code (IaC) using Terraform, migrated servers to auto-scaling Kubernetes nodes, and implemented Prometheus, Grafana, and Loki SRE monitoring dashboards.",
      outcome: "Reduced monthly AWS hosting costs by 35% (saving £4,200/month) and eliminated latency spikes. Built continuous logs monitoring to identify database slow points before users experience lags.",
      tech: ["AWS Cloud", "Terraform IaC", "Kubernetes", "Prometheus & Grafana", "Loki Log Aggregator"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-20 sm:py-28">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-indigo/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">Case Studies</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Real Systems, Proven Outcomes.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed pt-2">
            Explore how we help UK companies eliminate manual data bottlenecks, build reliable B2B order pipelines, and stabilize cloud infrastructure.
          </p>
        </div>

        {/* Case Cards */}
        <div className="space-y-12">
          {cases.map((item, idx) => {
            const CaseIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/10 border border-brand-border/40 rounded-3xl p-6 sm:p-10 hover:border-slate-800 transition-colors duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Visual / Sector Info */}
                <div className="lg:col-span-4 space-y-4 text-left">
                  <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-brand-border/60 flex items-center justify-center ${item.accent}`}>
                    <CaseIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 block">CLIENT PROFILE</span>
                    <h3 className="text-slate-200 font-bold text-lg mt-0.5">{item.client}</h3>
                    <span className="text-xs text-brand-cyan font-mono">{item.sector}</span>
                  </div>

                  <div className="pt-4 border-t border-brand-border/20">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 block mb-2">TECHNOLOGY STACK</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span key={t} className="bg-slate-950 text-slate-400 border border-slate-900 font-mono text-[10px] px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenges and Outcomes */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {item.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-red-400 font-bold block">The Bottleneck</span>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">{item.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cyan font-bold block">Our Approach</span>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">{item.solution}</p>
                    </div>
                  </div>

                  <div className="bg-slate-950/60 border border-brand-border/30 rounded-2xl p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-brand-teal font-bold block">Business Outcome</span>
                      <p className="text-slate-200 text-xs leading-relaxed font-medium">{item.outcome}</p>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-slate-900/40 border border-brand-border/60 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-slate-100">Plan your project today.</h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-md mx-auto">
            Book an introductory diagnostic session with an experienced engineer to map out your systems and draft your custom integration strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider shadow-md"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 text-slate-300 font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
