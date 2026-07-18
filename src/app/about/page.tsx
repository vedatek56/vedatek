import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Cpu } from "lucide-react";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  alternates: {
    canonical: pageSeo.about.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageSeo.about.title,
    description: pageSeo.about.description,
    url: `https://vedatek.co.uk${pageSeo.about.canonical}`,
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "VEDATEK | About VEDATEK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.about.title,
    description: pageSeo.about.description,
    images: ["https://vedatek.co.uk/og-image.png"],
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Pragmatism Over Hype",
      desc: "We don't push trendy frameworks or unnecessarily complex AI tools. We focus on technology that stabilizes your operations, reduces manual work, and drives efficiency.",
      icon: Cpu
    },
    {
      title: "Senior Engineering Standard",
      desc: "Our consultants have built production-grade software, scalable pipelines and ERP integrations. We write clean, maintainable and thoroughly documented code.",
      icon: Star
    },
    {
      title: "Security by Default",
      desc: "Whether we are connecting systems or moving database backups, we implement strong encryption, rotated secrets management and secure network architectures.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-20 sm:py-28">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-indigo/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">About VEDATEK</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Knowledge Meets Technology.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed pt-2">
            VEDATEK was created with a simple belief: <br className="hidden sm:inline" />
            <strong className="text-slate-200">Technology should solve problems, not create more complexity.</strong>
          </p>
        </div>

        {/* The Ethos */}
        <div className="space-y-8 text-slate-350 leading-relaxed text-sm">
          <p>
            We combine deep technical knowledge with a practical understanding of how businesses operate. From connecting databases and automating workflows to building custom applications, adopting AI, and stabilizing cloud networks, VEDATEK helps UK organizations turn technology into a business advantage.
          </p>

          <div className="bg-slate-900/40 border border-brand-border/60 rounded-2xl p-6 sm:p-8 space-y-4 my-8">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold block">The Meaning Behind Our Name</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-200">VEDA</h3>
                <p className="text-xs text-slate-400 mt-1 italic leading-relaxed">
                  Inspired by the Sanskrit word representing &ldquo;knowledge&rdquo; or &ldquo;wisdom&rdquo;. For us, it represents the operational expertise required to truly understand a business workflow.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-200">TEK</h3>
                <p className="text-xs text-slate-400 mt-1 italic leading-relaxed">
                  Representing &ldquo;technology&rdquo;. It is the engineering capability to transform knowledge into reliable, automated, and secure digital structures.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 border-t border-brand-border/30 pt-3 italic">
              Together, VEDATEK represents the application of knowledge through technology to solve real-world problems.
            </p>
          </div>

          <p>
            VEDATEK is a focused technology consultancy rather than a large generalist agency. The people behind the business have senior-level experience delivering complex systems integrations, cloud automation and software engineering for demanding production environments.
          </p>

          <p className="text-slate-200 font-medium text-base">
            &ldquo;Senior technology expertise delivered with a practical, focused approach.&rdquo;
          </p>
        </div>

        {/* Core Values / Values Grid */}
        <div className="pt-20 space-y-8">
          <h2 className="text-xl font-bold text-slate-200 tracking-wide uppercase border-l-2 border-brand-indigo pl-3">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/20 border border-brand-border/40 p-5 rounded-2xl flex flex-col space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-brand-border/60 flex items-center justify-center text-brand-cyan">
                    <ValIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 tracking-wide uppercase">{val.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team & Expertise Section */}
        <div className="pt-20 space-y-10">
          <h2 className="text-xl font-bold text-slate-200 tracking-wide uppercase border-l-2 border-brand-cyan pl-3">
            Our Expertise & Leadership
          </h2>

          <div className="bg-slate-900/20 border border-brand-border/40 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-start mb-8">
            {/* Avatar placeholder */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-indigo/30 to-brand-cyan/20 border border-brand-border/60 flex items-center justify-center">
                <span className="text-3xl font-black text-brand-cyan select-none">VT</span>
              </div>
              <span className="text-xs text-slate-500 font-mono tracking-wide">VEDATEK</span>
            </div>

            {/* Content */}
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-xl font-bold text-white">Built on Senior Engineering Experience</h3>
                <p className="text-xs text-brand-cyan font-mono tracking-widest uppercase mt-1">Direct, Business-First Delivery</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                VEDATEK is built on senior engineering expertise spanning more than 15 years across cloud computing, distributed systems infrastructure, software development, and systems integration.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Rather than deploying junior developers or account managers, VEDATEK is run and led by senior practitioners who have directly engineered, migrated, and maintained critical operations handling millions of daily transactions inside global financial services, scaling e-commerce platforms, and UK retail banking environments.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We approach systems with a simple philosophy: **Everything as Code**. By automating workflows, optimizing pipelines, and connecting databases cleanly, we help businesses eliminate manual data errors and stabilize their digital operations.
              </p>

              {/* Core Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Linnworks", "Dynamics 365 Business Central", "EDIFACT / AS2", "AWS / Azure / GCP", "Kubernetes", "Terraform", "SRE & Observability", "CI/CD Automation"].map((tag) => (
                  <span key={tag} className="bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Riddhi Patel Bio */}
          <div className="bg-slate-900/20 border border-brand-border/40 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar placeholder */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-indigo/30 to-brand-cyan/20 border border-brand-border/60 flex items-center justify-center">
                <span className="text-3xl font-black text-brand-cyan select-none">RP</span>
              </div>
              <span className="text-xs text-slate-500 font-mono tracking-wide">Co-Founder</span>
            </div>

            {/* Content */}
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-xl font-bold text-white">Riddhi Patel</h3>
                <p className="text-xs text-brand-cyan font-mono tracking-widest uppercase mt-1">Co-Founder &amp; Director</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Riddhi Patel co-founded VEDATEK to bridge the gap between high-level technology planning and real-world business operations. With a background focused on technical project management, client delivery, and operational scoping, she directs VEDATEK&apos;s engagement model, ensuring our integration and automation builds map directly to our clients&apos; commercial and financial objectives.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                She partners closely with B2B suppliers, wholesale distributors, and multi-channel retailers to define system scopes, map operational dependencies, and ensure the successful delivery of complex systems integration and cloud projects.
              </p>

              {/* Core focus areas */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Client Delivery", "Systems Scoping", "Operations Management", "Integration Advisory", "B2B Client Success"].map((tag) => (
                  <span key={tag} className="bg-slate-900 border border-slate-800 text-slate-350 font-mono text-xs px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Closing Contact CTA */}
        <div className="mt-20 border-t border-brand-border/40 pt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-100">Ready to discuss a business challenge?</h3>
            <p className="text-slate-400 text-xs">Let&apos;s map out a solution to your business systems challenge.</p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider"
          >
            Discuss Your Challenge
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}
