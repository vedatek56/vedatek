"use client";

import Link from "next/link";
import { Brain, Code2, Network, RefreshCw, CloudLightning, Activity, ShieldCheck, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Code2,
  Network,
  RefreshCw,
  CloudLightning,
  Activity,
  ShieldCheck,
  Compass
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 min-h-screen py-20 sm:py-28">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-cyan/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">Capabilities</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Services & Expertise
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            VEDATEK provides senior-level engineering capabilities across the entire technology stack. We deliver practical solutions to help connect systems, automate operations, build custom software, and stabilize cloud infrastructure.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-16">
          {services.map((service, idx) => {
            const ServiceIcon = IconMap[service.iconName] || Brain;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-900/10 border border-brand-border/40 rounded-3xl p-6 sm:p-10 transition-all duration-300 hover:border-brand-indigo/35`}
              >
                {/* Left Col: Info & Description */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-brand-border/60 flex items-center justify-center text-brand-cyan">
                      <ServiceIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Service Area 0{idx + 1}</span>
                      <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-widest text-slate-300 font-bold">Key Capabilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                      {service.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-brand-cyan hover:text-white font-semibold py-2.5 px-5 rounded-full text-xs tracking-wider uppercase border border-slate-800 transition-all"
                    >
                      Detailed Service Page
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Col: Technologies & Benefits */}
                <div className="lg:col-span-6 bg-slate-950/40 rounded-2xl border border-brand-border/30 p-6 space-y-6 text-left">
                  {/* Business Benefits */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Business Outcomes</h4>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {service.businessBenefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies tags */}
                  <div className="space-y-3 pt-2 border-t border-brand-border/20">
                    <h4 className="text-xs uppercase tracking-widest text-brand-indigo font-bold">Systems & Tech</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-900/60 border border-slate-800/80 text-slate-400 font-mono text-xs px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 bg-gradient-to-r from-brand-indigo/10 to-brand-cyan/10 border border-brand-border/60 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-slate-100">Need help with a specific systems challenge?</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Our capabilities are highly adaptable. If you are dealing with a unique systems bottleneck, custom platform or niche EDI requirement, we can help map out a path.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3 px-6 rounded-full text-sm shadow-md"
            >
              Discuss Your Challenge
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
