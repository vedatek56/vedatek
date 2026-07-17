import type { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book a Discovery Call | VEDATEK",
  description:
    "Schedule a free 30-minute operational systems and integration diagnostic call with a senior engineer at VEDATEK.",
  alternates: {
    canonical: "/book",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Book a Discovery Call | VEDATEK",
    description: "Schedule a free 30-minute operational systems and integration diagnostic call with a senior engineer at VEDATEK.",
    url: "https://vedatek.co.uk/book",
    siteName: "VEDATEK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "VEDATEK | Book a Discovery Call",
      }
    ]
  }
};

export default function BookPage() {
  return <BookClient />;
}
