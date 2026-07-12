"use client";

import Link from "next/link";
import { ArrowRight, Brain, Code2, Network, RefreshCw, CloudLightning, Activity, ShieldCheck, Compass, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroVisual from "@/components/HeroVisual";
import IntegrationVisual from "@/components/IntegrationVisual";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

// Icon mapper for service icons
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
} as const;

export default function Home() {
  const whyUs = [
    {
      title: "Business-first thinking",
      desc: "We start with the operational or process challenge, not the technology. We won't build software you don't need."
    },
    {
      title: "Senior technical expertise",
      desc: "Your projects are handled by experienced engineers, ensuring complex challenges are solved with solid engineering judgement."
    },
    {
      title: "End-to-end capability",
      desc: "From system architecture and bespoke software development to cloud migrations, automated pipelines, and cybersecurity."
    },
    {
      title: "Flexible engagement",
      desc: "Access high-calibre technical expertise on a flexible, fractional basis without the overheads of a traditional large consultancy."
    },
    {
      title: "Built for the long term",
      desc: "We design maintainable, well-documented, secure, and scalable solutions that your business can rely on for years to come."
    }
  ];

  const techEcosystem = [
    "AWS", "Microsoft Azure", "Dynamics 365 Business Central", "Linnworks", 
    "Terraform", "Kubernetes", "Docker", "Python", "Node.js", 
    "Grafana", "Prometheus", "Splunk"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-36 bg-slate-950">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Copy Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                  UK Technology Partner
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none"
              >
                Technology that <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-teal">
                  works
                </span> for your business.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed max-w-xl"
              >
                From AI and software to cloud, automation and systems integration, VEDATEK helps businesses solve complex technology challenges and build smarter ways of working.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3.5 px-7 rounded-full shadow-lg shadow-brand-indigo/15 hover:shadow-brand-indigo/25 transition-all duration-300"
                >
                  Talk to Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800/80 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold py-3.5 px-7 rounded-full transition-all duration-200"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <HeroVisual />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem / Value Section */}
      <section className="py-24 bg-slate-900/20 border-y border-brand-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-indigo font-bold block mb-2">Our Focus</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Your technology should make business easier.
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed text-base">
              Businesses often end up with disconnected systems, repetitive manual processes, unreliable integrations, and technology that becomes increasingly difficult to manage. VEDATEK helps simplify this complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Connect", desc: "Connect systems, applications, and data feeds securely.", color: "text-brand-cyan" },
              { title: "Automate", desc: "Remove repetitive manual data entry and processes.", color: "text-brand-teal" },
              { title: "Build", desc: "Create modern software solutions around your operations.", color: "text-brand-indigo" },
              { title: "Scale", desc: "Build secure, reliable architecture that grows with your business.", color: "text-brand-violet" }
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-slate-950/40 border border-brand-border/40 p-6 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-brand-border/60 flex items-center justify-center font-black text-sm text-slate-300">
                    0{idx + 1}
                  </div>
                  <h3 className={`text-lg font-bold tracking-wide ${outcome.color}`}>{outcome.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-xl text-left">
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block mb-2">Core Capabilities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Our Services
              </h2>
              <p className="text-slate-400 mt-2 leading-relaxed text-sm">
                Practical, production-grade systems design and software engineering. We address concrete bottlenecks to drive technical resilience and operational efficiency.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-brand-indigo transition-colors"
            >
              View detailed services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.slice(0, 6).map((service) => {
              const ServiceIcon = IconMap[service.iconName] || Brain;
              return (
                <motion.div
                  key={service.slug}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-brand-border/60 flex items-center justify-center text-brand-cyan">
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 tracking-tight">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{service.shortDescription}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-brand-border/30">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-brand-cyan hover:text-white uppercase transition-colors"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Integration Visual Section */}
      <section className="py-24 bg-slate-900/10 border-y border-brand-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IntegrationVisual />
        </div>
      </section>

      {/* Solutions / Business Problems Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-indigo font-bold block mb-2">Real Use Cases</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Technology solutions built around real business problems.
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed text-sm">
              We focus on solving the common issues that limit productivity and cost money. We don&apos;t build complex, unmanageable code—we engineer clean pathways for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/20 border border-brand-border/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand-indigo/40"
              >
                <div className="space-y-4 text-left">
                  <h3 className="text-base font-bold text-brand-cyan uppercase tracking-wide">{item.problem}</h3>
                  <h4 className="text-lg font-bold text-slate-200">{item.solution}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.details}</p>
                  
                  <ul className="space-y-2 pt-2 text-xs text-slate-300">
                    {item.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-border/20">
                  <Link
                    href={item.ctaLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-brand-indigo hover:text-white uppercase transition-colors"
                  >
                    Explore capability <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VEDATEK Section */}
      <section className="py-24 bg-slate-900/20 border-y border-brand-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">Differentiators</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Senior expertise. <br />
                Practical solutions.
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm max-w-md">
                We believe in providing the technical excellence of a top-tier systems engineering team without the bureaucratic bloat, account management overheads, and generic advice of a large consultancy.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:underline"
                >
                  Read our background story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* List Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {whyUs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 bg-slate-950/40 border border-brand-border/40 rounded-xl"
                >
                  <span className="text-xs font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-slate-200 tracking-wide uppercase mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Experience / Credibility Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-indigo font-bold block">Capabilities In Action</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Built on real-world engineering experience.
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              The expertise behind VEDATEK spans enterprise systems, cloud engineering, site reliability, software development, systems integration, and cybersecurity. We have engineered platforms that process high transaction volumes, migrate massive databases, and monitor mission-critical systems.
            </p>
          </div>

          {/* Technology Ecosystem display */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">Ecosystem Expertise</span>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {techEcosystem.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs px-3.5 py-1.5 rounded-md hover:border-slate-700 hover:text-slate-100 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 border-t border-brand-border/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
            Ready to solve your technology challenge?
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-md mx-auto text-sm">
            Connect with us to schedule an introductory call with a senior engineer. No sales reps, just practical solutions.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3.5 px-8 rounded-full shadow-lg"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold py-3.5 px-8 rounded-full transition-colors"
            >
              About the Company
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
