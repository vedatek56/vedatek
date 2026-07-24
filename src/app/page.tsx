"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  Network,
  RefreshCw,
  CloudLightning,
  Activity,
  ShieldCheck,
  Compass,
  ChevronRight,
  Users,
  ShoppingBag,
  Truck,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroVisual from "@/components/HeroVisual";
import IntegrationVisual from "@/components/IntegrationVisual";
import PartnerMarquee from "@/components/PartnerMarquee";
import SolutionsConsole from "@/components/SolutionsConsole";
import { services } from "@/data/services";
import { homepageFaqs } from "@/data/seo";

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

const outcomeAreas = [
  {
    title: "Connect",
    desc: "Connect applications, systems and data.",
    color: "text-brand-cyan"
  },
  {
    title: "Automate",
    desc: "Reduce repetitive manual work and improve business processes.",
    color: "text-brand-teal"
  },
  {
    title: "Build",
    desc: "Create software, tools and digital solutions around real business needs.",
    color: "text-brand-indigo"
  },
  {
    title: "Scale",
    desc: "Build secure, reliable technology that can grow with the organisation.",
    color: "text-brand-violet"
  }
];

const whoWeHelp = [
  {
    title: "E-COMMERCE & RETAIL",
    desc: "Connect commerce, ERP, warehouse, fulfilment and customer systems.",
    icon: ShoppingBag
  },
  {
    title: "WHOLESALE & DISTRIBUTION",
    desc: "Automate orders, EDI, inventory and operational workflows.",
    icon: Truck
  },
  {
    title: "GROWING BUSINESSES",
    desc: "Replace manual processes and disconnected tools with scalable technology.",
    icon: Building2
  },
  {
    title: "TECHNOLOGY TEAMS",
    desc: "Add senior expertise across cloud, reliability, automation, integration and infrastructure.",
    icon: Users
  }
];

const techEcosystem = [
  "AWS",
  "Microsoft Dynamics 365 Business Central",
  "Linnworks",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Python",
  "Node.js",
  "Grafana",
  "Prometheus",
  "Splunk",
  "AWS CloudWatch"
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homepageFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const practiceExample = {
  title: "Connecting ERP, warehouse and EDI workflows",
  phases: [
    {
      label: "Challenge",
      text: "Disconnected business systems can create repetitive manual work, inconsistent data and limited visibility across operations."
    },
    {
      label: "Approach",
      text: "Design an integration layer that connects ERP, warehouse and trading-partner systems, automates data movement, validates information and provides clear operational visibility."
    },
    {
      label: "Outcome",
      text: "Fewer manual touchpoints, more consistent data flows and a technology foundation that is easier to operate and extend."
    }
  ],
  technologies: [
    "Microsoft Dynamics 365 Business Central",
    "Linnworks",
    "EDI",
    "APIs",
    "SFTP",
    "XML",
    "JSON",
    "Cloud services"
  ]
};

export default function Home() {
  const whyUs = [
    {
      title: "Business-first thinking",
      desc: "We start with the operational challenge, then shape the technology around it."
    },
    {
      title: "Senior technical expertise",
      desc: "Your project is handled by experienced engineers who make pragmatic decisions."
    },
    {
      title: "Broad capability",
      desc: "AI, software, integration, cloud, reliability and security under one roof."
    },
    {
      title: "Flexible engagement",
      desc: "Access high-calibre expertise without unnecessary overhead."
    },
    {
      title: "Built to last",
      desc: "We design maintainable, secure and scalable solutions your team can rely on."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-slate-950 pb-16 pt-12 sm:pb-20 sm:pt-20 md:pb-24 md:pt-28 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col space-y-6 text-left lg:col-span-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold tracking-wider text-brand-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                  UK Technology Consultancy
                </span>
              </div>

              <h1 className="text-4xl font-black leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technology that works for your business.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-400">
                We connect systems, automate manual work and build reliable technology from AI and software to cloud and integrations.
              </p>

              <p className="max-w-xl text-sm leading-relaxed text-slate-500">
                Practical technology solutions built around real business problems.
              </p>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-brand-indigo/15 transition-all duration-300 hover:from-brand-indigo/90 hover:to-brand-cyan/90 hover:shadow-brand-indigo/25"
                >
                  Discuss Your Challenge
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-7 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/80"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div>
                <HeroVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-900/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-indigo">
              Platforms and systems
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-100 sm:text-3xl">
              Tools and platforms we work with
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              We work across the systems many growing businesses already use, including cloud, ERP, warehouse and e-commerce platforms.
            </p>
          </div>
          <PartnerMarquee />
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-900/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-2 block text-2xl font-extrabold tracking-tight text-slate-100 sm:text-3xl">
              Your technology should make business easier.
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              Disconnected systems, repetitive manual work and difficult-to-manage technology can slow a business down. VEDATEK simplifies the complexity by connecting systems, automating processes and building technology that works around your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomeAreas.map((outcome, idx) => (
              <div
                key={outcome.title}
                className="flex flex-col justify-between rounded-2xl border border-brand-border/40 bg-slate-950/40 p-6"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border/60 bg-slate-900 text-sm font-black text-slate-300">
                    0{idx + 1}
                  </div>
                  <h3 className={`text-lg font-bold tracking-wide ${outcome.color}`}>{outcome.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl text-left">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Who we help
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Teams that need technology to connect, automate, scale or simply work better.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We work with organisations that need practical improvements across business operations and technology delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whoWeHelp.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card flex flex-col justify-between rounded-2xl p-6"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-border/60 bg-slate-950 text-brand-cyan">
                      <ItemIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-100">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-900/10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-4xl text-left">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Example Solution Architecture
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Connected commerce and operations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              One example of how we connect complex business systems. The same engineering approach can be applied across platforms, industries and technology environments.
            </p>
          </div>
          <IntegrationVisual />
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl text-left">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-cyan">
                Core capabilities
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Practical, production-grade systems design and software engineering focused on real business outcomes.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-cyan transition-colors hover:text-brand-indigo md:mt-0"
            >
              View detailed services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.slice(0, 6).map((service) => {
              const ServiceIcon = IconMap[service.iconName] || Brain;
              return (
                <motion.div
                  key={service.slug}
                  variants={itemVariants}
                  className="glass-card flex flex-col justify-between rounded-2xl p-6"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-border/60 bg-slate-950 text-brand-cyan">
                      <ServiceIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-100">{service.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">{service.shortDescription}</p>
                  </div>
                  <div className="mt-6 border-t border-brand-border/30 pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      aria-label={`Explore ${service.title} services`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-cyan transition-colors hover:text-white"
                    >
                      Explore {service.title} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-indigo">
              Real Use Cases
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Technology solutions built around real business problems.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We focus on the issues that slow work down and create risk. The examples below show how the same engineering approach can be adapted to different businesses.
            </p>
          </div>

          <SolutionsConsole />
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-900/10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl text-center">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-indigo">
              Experience in Practice
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              A practical example of connected operations.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              This is an anonymised capability example, not a customer case study. It shows how the same engineering approach can be adapted across businesses and environments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:col-span-8">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-cyan">
                Example Challenge
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-100">
                {practiceExample.title}
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {practiceExample.phases.map((phase) => (
                  <div
                    key={phase.label}
                    className="rounded-xl border border-brand-border/40 bg-slate-950/40 p-4"
                  >
                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-indigo">
                      {phase.label}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {phase.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-border/40 bg-slate-950/40 p-6 sm:p-8 lg:col-span-4">
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-brand-cyan">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {practiceExample.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="cursor-default rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 font-mono text-[11px] text-slate-300 transition-colors hover:border-slate-700 hover:text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                The result is fewer manual touchpoints, more consistent data flows and a technology foundation that is easier to operate and extend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-900/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-4 text-left lg:col-span-5">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-cyan">
                Why organisations work with us
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
                Senior expertise. Practical solutions.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-slate-400">
                We combine the technical depth of a strong engineering team with a commercial, business-first approach.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:underline">
                  Read our background story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-7">
              {whyUs.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-brand-border/40 bg-slate-950/40 p-5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-cyan/20 bg-brand-cyan/10 text-xs font-bold text-brand-cyan">
                    {idx + 1}
                  </span>
                  <div className="text-left">
                    <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-slate-200">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="mx-auto max-w-3xl space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-indigo">
              Engineering background
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Built on real-world engineering experience.
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              The expertise behind VEDATEK spans more than 15 years across enterprise technology, cloud engineering, site reliability, observability, software development, systems integration, automation, security and infrastructure. Our experience includes engineering platforms that process high transaction volumes, supporting large-scale data migrations and monitoring business-critical systems.
            </p>
          </div>

          <div className="space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-slate-500">
              Capability areas
            </span>
            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
              {[
                "Enterprise Technology",
                "Cloud Engineering",
                "Software & Integration",
                "Reliability & Observability",
                "Automation",
                "Security & Infrastructure"
              ].map((area) => (
                <span
                  key={area}
                  className="cursor-default rounded-md border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-slate-100"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-slate-500">
              Technology names
            </span>
            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
              {techEcosystem.map((tech) => {
                const techLinks: Record<string, string> = {
                  "Linnworks": "/linnworks-consultants",
                  "Microsoft Dynamics 365 Business Central": "/business-central-integration-uk",
                };
                const href = techLinks[tech];
                if (href) {
                  return (
                    <Link
                      key={tech}
                      href={href}
                      className="rounded-md border border-slate-700 bg-slate-900 px-3.5 py-1.5 font-mono text-xs text-brand-cyan transition-colors hover:border-brand-cyan/50 hover:bg-slate-800"
                    >
                      {tech}
                    </Link>
                  );
                }
                return (
                  <span
                    key={tech}
                    className="cursor-default rounded-md border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-slate-100"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border/30 bg-slate-900/10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-indigo">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Quick answers about how we work.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A few common questions from people comparing options for systems, software and automation work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {homepageFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-brand-border/40 bg-slate-950/40 p-6 text-left"
              >
                <h3 className="text-base font-bold text-slate-100">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-border/30 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
            Let&apos;s solve your technology challenge.
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
            Tell us what you&apos;re trying to improve, automate, build or connect. You&apos;ll speak directly with someone who understands the technology.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan px-8 py-3.5 font-bold text-slate-950 shadow-lg transition-all duration-300 hover:from-brand-indigo/90 hover:to-brand-cyan/90"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center rounded-full border border-slate-800 bg-slate-900 px-8 py-3.5 font-semibold text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-800"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
