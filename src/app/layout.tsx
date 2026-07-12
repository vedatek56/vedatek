import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEDATEK | UK Technology Consultancy - AI, Software, Cloud & Integrations",
  description:
    "VEDATEK helps UK businesses solve real operational challenges. Senior technology expertise in AI, software development, cloud infrastructure, and systems integrations.",
  keywords: [
    "UK technology consultancy",
    "AI solutions for businesses",
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
    title: "VEDATEK | UK Technology Consultancy",
    description: "Solving real business operational challenges through custom software, AI integrations, cloud engineering, and systems automation.",
    url: "https://vedatek.co.uk",
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 1200,
        alt: "VEDATEK | UK Technology Consultancy",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VEDATEK | UK Technology Consultancy",
    description: "Solving real business operational challenges through custom software, AI integrations, cloud engineering, and systems automation.",
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
        "description": "VEDATEK is a modern UK technology consultancy helping businesses solve operational challenges through custom software, AI, cloud automation, and systems integration.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://vedatek.co.uk; font-src 'self' data:; connect-src 'self';"
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
