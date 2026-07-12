"use client";

import Link from "next/link";
import { ShoppingBag, Truck, LineChart, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsClient() {
  const customerProfiles = [
    {
      id: "retail-ecommerce",
      title: "E-Commerce & Retail Brands",
      icon: ShoppingBag,
      sub: "Inventory syncing, multi-channel orders, and order automation",
      desc: "E-commerce companies often get bottlenecked by manual processes between storefronts and shipping hubs. We connect storefronts directly to your warehouse manager, ensuring live stock levels are maintained and orders are fulfilled automatically.",
      challenges: [
        "Inaccurate stock counts leading to overselling or stockouts",
        "Staff copying order data from Shopify/Amazon by hand",
        "Split shipment issues or delayed courier tags"
      ],
      remedy: "We build direct integrations between e-commerce (Shopify, Amazon) and platforms like Linnworks and Business Central, keeping orders, inventory, and shipment tracking in sync automatically.",
      ctaLink: "/services/systems-integration"
    },
    {
      id: "distribution-wholesale",
      title: "Wholesale & Distribution Hubs",
      icon: Truck,
      sub: "EDI integrations, automated ordering, and ERP flows",
      desc: "Suppliers and retail giants require strict B2B document formats. We build automated EDI order pipelines and ERP syncs that handle purchasing and invoicing automatically, reducing operational overhead.",
      challenges: [
        "Complicated EDI compliance requirements with major retail buyers",
        "Supplier purchase orders processed manually, creating dispatch delays",
        "Lag between warehouse inventory levels and ERP general ledgers"
      ],
      remedy: "We develop customized EDI pipelines (EDIFACT, XML, JSON) linked directly to Microsoft Dynamics 365 Business Central to automate procurement and sales orders.",
      ctaLink: "/services/edi-automation"
    },
    {
      id: "scaling-scaleups",
      title: "Growing Businesses & Scaleups",
      icon: LineChart,
      sub: "Cloud architecture, database scaling, and DevOps pipelines",
      desc: "As transaction volumes rise, your systems must remain stable. We clean up legacy cloud setups, establish automated deploy pipelines, and implement dashboards to monitor application performance.",
      challenges: [
        "Frequent system downtime or slow-loading interfaces",
        "Manual cloud resource setup that is hard to audit or replicate",
        "Lack of security audits or unprotected API credentials"
      ],
      remedy: "We implement Infrastructure as Code using Terraform on AWS, configure Prometheus/Grafana monitoring, and automate CI/CD deployments for optimal stability.",
      ctaLink: "/services/cloud-devops"
    },
    {
      id: "ai-adopters",
      title: "Businesses Wanting to Adopt AI",
      icon: Cpu,
      sub: "Practical AI pipelines, document parsing, and database extraction",
      desc: "We help businesses leverage large language models practically. From extracting structured fields out of raw supplier invoices to building secure internal knowledge bases trained on your private guidelines.",
      challenges: [
        "Wasting time reading and copy-pasting details from supplier PDF invoices",
        "Employees spending hours searching through internal PDFs for answers",
        "Concerns over data security and privacy when uploading data to public models"
      ],
      remedy: "We engineer private, API-based AI systems using LangChain, pgvector, and cloud pipelines to parse, vectorize, and search data securely.",
      ctaLink: "/services/ai-automation"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-20 sm:py-28">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-indigo/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-indigo font-bold block">Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Built Around Real Business Challenges
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We don&apos;t build technology for technology&apos;s sake. We start with the operational problems that limit UK businesses: unreliable data, disconnected software, manual overhead, and unstable cloud environments, then construct solutions that make operations smoother.
          </p>
        </div>

        {/* Profile Blocks */}
        <div className="space-y-12">
          {customerProfiles.map((profile) => {
            const ProfileIcon = profile.icon;
            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/10 border border-brand-border/40 rounded-3xl p-6 sm:p-10 hover:border-brand-teal/40 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Info Column */}
                  <div className="lg:col-span-6 space-y-5 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-brand-border/60 flex items-center justify-center text-brand-cyan">
                        <ProfileIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-100">{profile.title}</h2>
                        <p className="text-xs text-brand-cyan font-medium">{profile.sub}</p>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {profile.desc}
                    </p>

                    <div className="bg-slate-950/40 border border-brand-border/20 rounded-xl p-5 space-y-2">
                      <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Our Approach</span>
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {profile.remedy}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={profile.ctaLink}
                        className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-brand-cyan hover:text-white font-semibold py-2.5 px-5 rounded-full text-xs tracking-wider uppercase border border-slate-855 transition-all"
                      >
                        Explore Service Details
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Challenges Column */}
                  <div className="lg:col-span-6 bg-slate-950/30 rounded-2xl border border-brand-border/30 p-6 space-y-4 text-left">
                    <span className="text-xs uppercase tracking-widest text-red-400 font-bold">Common Bottlenecks We Resolve</span>
                    <ul className="space-y-3.5">
                      {profile.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex gap-3 items-start text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0 animate-pulse"></span>
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Consultation CTA */}
        <div className="mt-20 bg-slate-900/40 border border-brand-border/60 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-slate-100">Don&apos;t see your specific challenge here?</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
            Operational bottlenecks can be unique. We can have an introductory conversation with an experienced engineer to map your current architecture and identify gaps.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3.5 px-6 rounded-full text-sm shadow-md"
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
