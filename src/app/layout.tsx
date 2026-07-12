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
  },
  twitter: {
    card: "summary_large_image",
    title: "VEDATEK | UK Technology Consultancy",
    description: "Solving real business operational challenges through custom software, AI integrations, cloud engineering, and systems automation.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-slate-100 selection:bg-brand-indigo/35 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
