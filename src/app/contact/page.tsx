import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, Clock, Shield } from "lucide-react";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: {
    canonical: pageSeo.contact.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageSeo.contact.title,
    description: pageSeo.contact.description,
    url: `https://vedatek.co.uk${pageSeo.contact.canonical}`,
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 1200,
        alt: "VEDATEK | Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.contact.title,
    description: pageSeo.contact.description,
    images: ["https://vedatek.co.uk/og-image.png"],
  },
};

export default function ContactPage() {
  const highlights = [
    {
      title: "Direct Engineering Access",
      desc: "Skip the generic sales reps. You will speak directly with a senior developer or cloud architect who understands technical systems.",
      icon: Shield
    },
    {
      title: "1-Business-Day Response Aim",
      desc: "We aim to review every incoming challenge within one business day and provide a clear, initial assessment of how we can help.",
      icon: Clock
    },
    {
      title: "Direct Contact Email",
      desc: "For general inquiries, vendor outreach, or urgent system reviews, email hello@vedatek.co.uk directly.",
      icon: Mail
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-20 sm:py-28">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-cyan/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 text-left space-y-6 lg:py-6">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">Get in Touch</span>
            <h1 className="text-4xl font-black text-white tracking-tight leading-none">
              Let&apos;s Solve Your Technology Challenge.
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Tell us what you&apos;re trying to improve, automate, build, or connect. We&apos;ll help you understand the best way forward.
            </p>

            <div className="space-y-6 pt-6">
              {highlights.map((hl, idx) => {
                const HlIcon = hl.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-brand-border/60 text-brand-cyan shrink-0">
                      <HlIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide mb-1">{hl.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{hl.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
