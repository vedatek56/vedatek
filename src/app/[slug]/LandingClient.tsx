"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Cpu, TrendingUp } from "lucide-react";
import { LandingPageContent } from "./landingData";

interface LandingClientProps {
  data: LandingPageContent;
  slug: string;
}

export default function LandingClient({ data, slug }: LandingClientProps) {
  return (
    <div className="bg-slate-950 min-h-screen py-20 sm:py-28">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-indigo/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-cyan transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-slate-400 font-semibold uppercase">{slug.replace(/-/g, " ")}</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6 mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">VEDATEK Specialists</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl">
            {data.h1}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed pt-2 max-w-2xl font-light">
            {data.problemSub}
          </p>
        </div>

        {/* Split Grid: Problems vs Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Column 1: Problems/Bottlenecks */}
          <div className="bg-slate-900/10 border border-brand-border/40 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-200">Common Bottlenecks We Resolve</h2>
            </div>
            
            <ul className="space-y-4">
              {data.problems.map((prob, idx) => (
                <li key={idx} className="flex gap-3 items-start text-xs text-slate-350 leading-relaxed font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solution Architecture */}
          <div className="bg-slate-900/10 border border-brand-border/40 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-200">{data.architectureTitle}</h2>
            </div>

            <ol className="space-y-4">
              {data.architectureItems.map((step, idx) => (
                <li key={idx} className="flex gap-3 items-start text-xs text-slate-350 leading-relaxed font-light">
                  <span className="w-5 h-5 rounded-lg bg-slate-950 border border-brand-border/40 flex items-center justify-center text-[10px] text-brand-cyan font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* Business Outcome Card */}
        <div className="bg-slate-900/20 border border-brand-border/60 rounded-3xl p-6 sm:p-8 space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-slate-200 tracking-wide uppercase">Typical Business Outcome</h2>
          </div>
          <p className="text-slate-100 text-sm leading-relaxed font-medium pl-2">
            &ldquo;{data.outcome}&rdquo;
          </p>
        </div>

        {/* Booking CTA Banner */}
        <div className="bg-slate-900/40 border border-brand-border/60 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">Let&apos;s map out your systems.</h2>
          <p className="text-slate-400 text-xs leading-relaxed max-w-md mx-auto">
            Book a free, 30-minute operational diagnostic session with a senior VEDATEK engineer to outline your integration blueprint.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider shadow-md"
            >
              Book Discovery Call (30 Mins)
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 text-slate-300 font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider"
            >
              Ask a Question
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
