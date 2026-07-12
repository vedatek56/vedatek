import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.solutions.title,
  description: pageSeo.solutions.description,
  alternates: {
    canonical: pageSeo.solutions.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageSeo.solutions.title,
    description: pageSeo.solutions.description,
    url: `https://vedatek.co.uk${pageSeo.solutions.canonical}`,
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 1200,
        alt: "VEDATEK | Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.solutions.title,
    description: pageSeo.solutions.description,
    images: ["https://vedatek.co.uk/og-image.png"],
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
