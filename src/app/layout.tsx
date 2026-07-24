import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "VEDATEK | Linnworks, Business Central & EDI Integration Specialists",
  description:
    "VEDATEK is a UK technology consultancy specialising in Linnworks integration, Business Central integration, EDI automation, AI, custom software and cloud DevOps. Helping e-commerce and wholesale businesses connect systems and eliminate manual work.",
  keywords: [
    "Linnworks integration UK",
    "Linnworks consultant UK",
    "Business Central integration UK",
    "EDI integration UK",
    "EDI consultant UK",
    "systems integration consultant UK",
    "UK technology consultancy",
    "AI automation UK",
    "custom software development UK",
    "EDI automation UK",
    "Business Central Linnworks integration",
    "Shopify Business Central integration",
    "cloud DevOps consultant UK",
    "SRE consultant UK",
    "Terraform consultant UK"
  ],
  metadataBase: new URL("https://vedatek.co.uk"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "VEDATEK | Linnworks, Business Central & EDI Integration Specialists",
    description: "UK technology consultancy specialising in Linnworks integration, Business Central, EDI automation, AI, cloud DevOps and custom software for e-commerce and wholesale businesses.",
    url: "https://vedatek.co.uk",
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "VEDATEK | UK Technology Consultancy — Linnworks, Business Central & EDI Integration",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VEDATEK | Linnworks, Business Central & EDI Integration Specialists",
    description: "UK technology consultancy specialising in Linnworks integration, Business Central, EDI automation, AI, cloud DevOps and custom software.",
    images: ["https://vedatek.co.uk/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vedatek.co.uk/#organization",
        "name": "VEDATEK",
        "url": "https://vedatek.co.uk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vedatek.co.uk/og-image.png"
        },
        "description": "VEDATEK is a modern UK technology consultancy helping businesses connect systems, automate work and build reliable technology through custom software, AI, cloud automation and systems integration.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@vedatek.co.uk",
          "contactType": "customer support"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vedatek.co.uk/#service",
        "name": "VEDATEK Technology Consultancy",
        "image": "https://vedatek.co.uk/og-image.png",
        "url": "https://vedatek.co.uk",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB"
        },
        "knowsAbout": [
          "Linnworks Integration",
          "Business Central Integration",
          "EDI Integration UK",
          "EDI Automation",
          "Systems Integration Consultant UK",
          "DevOps Engineering",
          "Site Reliability Engineering (SRE)",
          "Microsoft Dynamics 365 Business Central",
          "Shopify Integration",
          "AI Business Automation",
          "AWS Cloud Infrastructure",
          "Terraform Infrastructure as Code",
          "Custom Software Development UK"
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://snap.licdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://vedatek.co.uk https://www.google-analytics.com https://px.ads.linkedin.com https://snap.licdn.com; font-src 'self' data:; connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://px.ads.linkedin.com https://snap.licdn.com;"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://snap.licdn.com" />
      </head>
      <body className="min-h-full flex flex-col bg-brand-dark text-slate-100 selection:bg-brand-indigo/35 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8JP7NQGCBC"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8JP7NQGCBC');
          `}
        </Script>
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight-init" strategy="lazyOnload">
          {`
            _linkedin_partner_id = "547254352";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script
          id="linkedin-insight-tag"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="lazyOnload"
        />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
