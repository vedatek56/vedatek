import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Linnworks Consultants UK | Linnworks Integration Specialists | VEDATEK",
  description:
    "Senior Linnworks consultants specialising in Linnworks integration with Business Central, Shopify, Amazon, eBay and courier APIs. UK-based Linnworks specialists. Book a free diagnostic.",
  alternates: {
    canonical: "https://vedatek.co.uk/linnworks-consultants",
  },
  keywords: [
    "Linnworks consultants",
    "Linnworks consultants UK",
    "Linnworks integration specialist",
    "Linnworks developer UK",
    "Linnworks Business Central integration",
    "Linnworks Shopify integration",
    "Linnworks API developer",
    "Linnworks support UK",
    "Linnworks setup consultant",
    "Linnworks WMS consultant",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Linnworks Consultants UK | VEDATEK",
    description:
      "Senior Linnworks consultants specialising in Linnworks integration with Business Central, Shopify, Amazon, eBay and courier APIs. UK-based Linnworks specialists.",
    url: "https://vedatek.co.uk/linnworks-consultants",
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Linnworks Consultants UK - VEDATEK",
      },
    ],
  },
};

const faqs = [
  {
    q: "What does a Linnworks consultant do?",
    a: "A Linnworks consultant helps businesses configure, optimise, and integrate Linnworks with other systems such as ERPs (Microsoft Dynamics 365 Business Central), e-commerce storefronts (Shopify, Amazon, eBay, WooCommerce), and courier APIs (Royal Mail, DPD, DHL). Consultants also resolve sync errors, fix inventory drift, build custom automation rules, and ensure Linnworks is correctly configured to handle high order volumes without manual intervention.",
  },
  {
    q: "Can Linnworks integrate with Microsoft Dynamics 365 Business Central?",
    a: "Yes. Linnworks can be connected to Dynamics 365 Business Central through a custom integration middleware layer. VEDATEK specialises in building this connection — mapping sales order data, stock levels, purchase orders, and financial postings between Linnworks and Business Central in real time, eliminating manual data entry and reconciliation.",
  },
  {
    q: "How do I connect Linnworks to Shopify?",
    a: "Linnworks has a native Shopify channel integration but it often requires configuration to work correctly with complex product variants, multi-location inventory, fulfilment workflows, and custom shipping rules. VEDATEK configures and extends the Linnworks Shopify channel integration and builds custom middleware where the native integration cannot handle the specific business logic required.",
  },
  {
    q: "Can VEDATEK fix Linnworks sync errors and inventory drift?",
    a: "Yes. We diagnose and fix Linnworks sync issues including stock count drift, duplicate orders, channel mapping failures, courier label errors, and API timeout problems. We also implement monitoring to prevent these issues from recurring.",
  },
  {
    q: "How long does a Linnworks integration project typically take?",
    a: "A standard Linnworks integration project (e.g. connecting Linnworks to Business Central or a custom ERP) typically takes 4 to 10 weeks depending on the complexity of the data model, the number of channels, and any custom business rules. We provide a detailed scoping document before any work begins.",
  },
  {
    q: "Do you provide ongoing Linnworks support after the integration is built?",
    a: "Yes. VEDATEK provides ongoing retainer support for Linnworks environments, including monitoring, API version updates, channel configuration changes, and feature expansions. We can also train your internal team on the integration.",
  },
  {
    q: "Which courier APIs can VEDATEK connect to Linnworks?",
    a: "We have experience integrating Linnworks with Royal Mail Click & Drop, DPD, DHL, FedEx, UPS, Evri (Hermes), Parcelforce, and other carrier APIs. We configure Linnworks shipping rules, label printing workflows, and tracking feed-back automations.",
  },
];

const services = [
  "Linnworks setup, configuration and account audit",
  "Linnworks to Dynamics 365 Business Central integration",
  "Linnworks to Shopify, Amazon, eBay and WooCommerce channel setup",
  "Linnworks courier API integration (Royal Mail, DPD, DHL, FedEx, Evri)",
  "Custom Linnworks automation rules and macro configuration",
  "Linnworks to 3PL and warehouse system integration",
  "Linnworks inventory drift diagnosis and repair",
  "Linnworks API development and custom middleware",
  "Linnworks EDI order integration with major UK retailers",
  "Ongoing Linnworks support, retainer and monitoring",
];

const outcomes = [
  "Eliminate manual order entry between Linnworks and your ERP",
  "Synchronise stock across all channels in real time — no more overselling",
  "Automate courier label generation and tracking feeds",
  "Reduce warehouse pick-and-pack errors caused by inventory inaccuracies",
  "Scale order volume without adding operations headcount",
];

export default function LinnworksConsultantsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://vedatek.co.uk" },
          { "@type": "ListItem", position: 2, name: "Linnworks Consultants UK", item: "https://vedatek.co.uk/linnworks-consultants" },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "VEDATEK",
        description:
          "UK-based Linnworks consultants and integration specialists helping e-commerce and wholesale businesses connect Linnworks with Business Central, Shopify, ERPs, and courier APIs.",
        url: "https://vedatek.co.uk",
        telephone: "+44-1234-000000",
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
          addressRegion: "United Kingdom",
        },
        areaServed: "GB",
        knowsAbout: [
          "Linnworks integration",
          "Microsoft Dynamics 365 Business Central",
          "Shopify integration",
          "EDI integration",
          "Systems integration",
        ],
      },
      {
        "@type": "Service",
        name: "Linnworks Consultants UK",
        description:
          "Senior Linnworks consultants specialising in Linnworks integration with Business Central, Shopify, Amazon, eBay, and courier APIs for UK e-commerce and wholesale businesses.",
        provider: { "@type": "Organization", name: "VEDATEK", url: "https://vedatek.co.uk" },
        areaServed: "GB",
        serviceType: "Linnworks Integration Consulting",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-indigo/8 via-transparent to-transparent pointer-events-none" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-10 relative z-10">
          <Link href="/" className="hover:text-brand-cyan transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-slate-400 font-semibold uppercase">Linnworks Consultants UK</span>
        </div>

        <div className="relative z-10 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block mb-4">
            UK Linnworks Integration Specialists
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Linnworks Consultants UK
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl font-light">
            Senior Linnworks consultants helping UK e-commerce brands, wholesale distributors, and
            multi-channel retailers connect, automate, and scale their Linnworks operations — from
            initial setup to complex ERP integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan text-slate-950 font-bold py-3.5 px-7 rounded-full text-sm shadow-lg"
            >
              Book a Free Linnworks Diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-slate-700 text-slate-300 font-bold py-3.5 px-7 rounded-full text-sm hover:border-slate-500 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">

        {/* What We Do */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              What our Linnworks consultants deliver
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              VEDATEK provides specialist Linnworks consulting for UK businesses that need more than
              basic setup help. Whether you are struggling with inventory sync errors, need Linnworks
              connected to Microsoft Dynamics 365 Business Central, or require a custom middleware
              layer to handle complex fulfilment workflows — our senior engineers have delivered
              exactly this for UK e-commerce and wholesale clients.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We work with multi-channel retailers selling on Shopify, Amazon, eBay, and WooCommerce,
              with wholesale distributors managing high-volume purchase orders, and with 3PL operators
              needing clean data feeds between warehouse management systems and Linnworks.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Unlike generalist developers who read the Linnworks documentation for the first time on
              your project, our engineers have direct, hands-on experience with the Linnworks API,
              its channel integration layer, and the common failure modes that cause inventory drift
              and order processing delays in production environments.
            </p>
          </div>

          {/* Services list */}
          <div className="bg-slate-900/20 border border-brand-border/40 rounded-3xl p-6 sm:p-8">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-5 border-l-2 border-brand-cyan pl-3">
              Our Linnworks Services
            </h3>
            <ul className="space-y-3">
              {services.map((svc, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-gradient-to-r from-brand-indigo/10 via-brand-cyan/5 to-slate-900 border border-brand-border/50 rounded-3xl p-8 sm:p-12">
          <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">
            Business outcomes from our Linnworks work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-[10px] text-brand-cyan font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Linnworks + Business Central deep content */}
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Linnworks to Business Central integration
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most common Linnworks project we deliver for UK wholesale and distribution businesses
            is a production-grade integration between Linnworks and Microsoft Dynamics 365 Business
            Central. This integration automates the flow of sales orders, purchase orders, stock
            adjustments, and financial postings between the two platforms.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Without this integration, operations teams typically spend several hours each day manually
            exporting spreadsheets from Linnworks and importing them into Business Central —
            introducing human error, VAT coding mistakes, and inventory count drifts that compound
            over time. The cost is not just the staff time. It is the downstream errors: wrong
            purchase orders raised, VAT recovery issues, and stock discrepancies that affect
            fulfilment accuracy.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            We build a real-time middleware sync layer that connects both APIs, maps product SKUs and
            customer records, handles multi-currency and multi-VAT-rate scenarios, and includes error
            handling with automatic retry logic. The result is a fully automated, two-way data
            synchronisation that runs in the background without any manual input.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Linnworks API", "Business Central OData API", "Node.js Middleware", "Webhook Events", "Custom VAT Mapping", "Error Queue Management"].map((tag) => (
              <span key={tag} className="bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs px-3 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Internal links to related pages */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: "/services/systems-integration", label: "Systems Integration", desc: "Full multi-system integration services" },
            { href: "/services/edi-automation", label: "EDI Automation", desc: "Retailer EDI compliance & automation" },
            { href: "/linnworks-business-central", label: "Linnworks + Business Central", desc: "Dedicated integration guide" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-slate-900/30 border border-brand-border/40 rounded-2xl p-5 hover:border-brand-cyan/40 transition-colors space-y-1"
            >
              <span className="text-sm font-bold text-slate-200 group-hover:text-brand-cyan transition-colors">{link.label}</span>
              <p className="text-xs text-slate-500">{link.desc}</p>
            </Link>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Frequently asked questions — Linnworks consultants
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/20 border border-brand-border/40 rounded-2xl p-6"
              >
                <h3 className="text-sm font-bold text-slate-200 mb-3">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900/40 border border-brand-border/60 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">
            Free Linnworks Diagnostic
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Speak with a Linnworks consultant today
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Book a free 30-minute session with one of our senior Linnworks engineers. We will review
            your current setup, identify integration gaps, and outline a clear path forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan text-slate-950 font-bold py-3.5 px-7 rounded-full text-sm shadow-md"
            >
              Book a Free Diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-slate-700 text-slate-300 font-bold py-3.5 px-7 rounded-full text-sm hover:border-slate-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
