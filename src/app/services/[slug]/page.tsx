import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Brain, Code2, Network, RefreshCw, CloudLightning, Activity, ShieldCheck, Compass, ArrowLeft, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
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

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | VEDATEK",
    };
  }

  const descriptionMap: Record<string, string> = {
    "systems-integration": `Linnworks integration, Business Central integration and Shopify ERP connectors for UK e-commerce and wholesale businesses. ${service.shortDescription}`,
    "edi-automation": `EDI consultant UK — EDIFACT, ANSI X12, AS2 and SFTP EDI integration with Business Central and Linnworks. ${service.shortDescription}`,
    "cloud-devops": `AWS DevOps and cloud infrastructure consultant UK. Terraform, Kubernetes, CI/CD pipelines and platform engineering. ${service.shortDescription}`,
    "reliability-observability": `SRE consultant UK — Grafana, Prometheus, Loki and OpenTelemetry observability and monitoring. ${service.shortDescription}`,
    "ai-automation": `AI automation consultant UK — custom AI workflows, document processing and intelligent automation for UK businesses. ${service.shortDescription}`,
  };

  return {
    title: `${service.title} | VEDATEK - UK Technology Consultancy`,
    description: descriptionMap[service.slug] ?? service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${service.title} | VEDATEK`,
      description: descriptionMap[service.slug] ?? service.shortDescription,
      url: `https://vedatek.co.uk/services/${service.slug}`,
      images: [
        {
          url: "https://vedatek.co.uk/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - VEDATEK`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${service.title} | VEDATEK`,
      description: descriptionMap[service.slug] ?? service.shortDescription,
      images: ["https://vedatek.co.uk/og-image.png"],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = IconMap[service.iconName] || Brain;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vedatek.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://vedatek.co.uk/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://vedatek.co.uk/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "name": service.title,
        "description": service.fullDescription,
        "provider": {
          "@type": "Organization",
          "name": "VEDATEK",
          "url": "https://vedatek.co.uk"
        },
        "areaServed": "GB",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": service.title,
          "itemListElement": service.capabilities.map((cap) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": cap
            }
          }))
        }
      }
    ]
  };

  return (
    <div className="bg-slate-950 min-h-screen py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[350px] bg-gradient-to-b from-brand-indigo/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Breadcrumbs & Back */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-8 sm:mb-12">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-300 font-semibold">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-brand-border/40 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-3 bg-slate-900 border border-brand-border/60 p-3 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-brand-border/60 flex items-center justify-center text-brand-cyan">
                <ServiceIcon className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold pr-2">VEDATEK Capability</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>
          </div>

          {/* Quick Stats sidebar */}
          <div className="lg:col-span-4 bg-slate-900/20 border border-brand-border/50 rounded-2xl p-6 flex flex-col justify-center space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Service Focus</span>
              <p className="text-sm font-medium text-slate-200 mt-1">Pragmatic Business Solutions</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">UK Resource Scope</span>
              <p className="text-sm font-medium text-slate-200 mt-1">Senior Technical Engineers Only</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Engagement Model</span>
              <p className="text-sm font-medium text-slate-200 mt-1">Flexible / Fractional Consulting</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-bold text-slate-200 tracking-wide uppercase border-l-2 border-brand-cyan pl-3">
              Key Capabilities & Integration Points
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We design and construct standard integrations and code frameworks that address specific system hurdles. Here is what our work includes:
            </p>
            
            <ul className="space-y-4">
              {service.capabilities.map((cap, cIdx) => (
                <li key={cIdx} className="bg-slate-900/30 border border-brand-border/30 rounded-xl p-4 flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-0.5 text-xs text-brand-cyan font-bold font-mono">
                    {cIdx + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-200">{cap}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes & Tech */}
          <div className="lg:col-span-5 space-y-8">
            {/* Outcomes */}
            <div className="bg-slate-900/10 border border-brand-border/40 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-brand-teal font-bold">Business Outcomes</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                {service.businessBenefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Systems & Tech */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-brand-indigo font-bold pl-1">Ecosystem & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs px-3 py-1.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Consulting Banner CTA */}
        <div className="bg-gradient-to-r from-brand-indigo/10 via-brand-cyan/5 to-slate-900 border border-brand-border/60 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">Consultation</span>
            <h3 className="text-2xl font-bold text-slate-100">Discuss a {service.title} project</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tell us about the systems, automation requirements, or scale challenges you are working to solve. Speak directly with someone who can help map the next step.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3.5 px-6 rounded-full text-sm shadow-md transition-shadow"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Your Challenge
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 font-semibold py-3.5 px-6 rounded-full text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
