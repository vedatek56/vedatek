import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.services.title,
  description: pageSeo.services.description,
  alternates: {
    canonical: pageSeo.services.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageSeo.services.title,
    description: pageSeo.services.description,
    url: `https://vedatek.co.uk${pageSeo.services.canonical}`,
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 1200,
        alt: "VEDATEK | Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.services.title,
    description: pageSeo.services.description,
    images: ["https://vedatek.co.uk/og-image.png"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
