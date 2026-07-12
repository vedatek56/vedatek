import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VEDATEK | Technology that works for your business",
  description:
    "VEDATEK helps UK businesses connect systems, automate work and build reliable technology. Business value first, technical depth second.",
  keywords: [
    "UK technology consultancy",
    "technology that works for your business",
    "AI and automation",
    "custom software development",
    "systems integration",
    "business process automation",
    "EDI integration",
    "Business Central integration",
    "Linnworks integration",
    "cloud consulting",
    "DevOps consulting",
    "SRE consulting"
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
    title: "VEDATEK | Technology that works for your business",
    description: "Connecting systems, automating work and building reliable technology through AI, software, cloud engineering and integrations.",
    url: "https://vedatek.co.uk",
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 1200,
        alt: "VEDATEK | Technology that works for your business",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VEDATEK | Technology that works for your business",
    description: "Connecting systems, automating work and building reliable technology through AI, software, cloud engineering and integrations.",
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
          "DevOps Engineering",
          "Site Reliability Engineering (SRE)",
          "Systems Integration",
          "Microsoft Dynamics 365 Business Central",
          "Linnworks",
          "EDI Automation",
          "Custom Software Development",
          "E-Commerce Solutions",
          "AI Business Tools",
          "AWS Cloud Infrastructure"
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
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://vedatek.co.uk; font-src 'self' data:; connect-src 'self' https://api.web3forms.com;"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className="min-h-full flex flex-col bg-brand-dark text-slate-100 selection:bg-brand-indigo/35 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
