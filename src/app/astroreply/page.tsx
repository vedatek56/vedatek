import type { Metadata } from "next";
import AstroNavbar from "@/components/astroreply/AstroNavbar";
import AstroHero from "@/components/astroreply/AstroHero";
import AstroDualEngine from "@/components/astroreply/AstroDualEngine";
import AstroLanguages from "@/components/astroreply/AstroLanguages";
import AstroPricing from "@/components/astroreply/AstroPricing";
import AstroFaq from "@/components/astroreply/AstroFaq";
import AstroFooter from "@/components/astroreply/AstroFooter";

export const metadata: Metadata = {
  title: "AstroReply | Your Personal AI Astrologer (Vedic & Western)",
  description:
    "Grounded astrological guidance powered by your unique birth chart, high-precision astronomical ephemeris, and personalized conversational memory. Dual Vedic Jyotish and Western Tropical engines.",
  keywords: [
    "AI Astrologer",
    "Vedic Horoscope",
    "Janma Rashi",
    "Kundali AI",
    "Vimshottari Dasha",
    "Nakshatra calculator",
    "Western Natal Chart AI",
    "Ashta Kuta Synastry",
    "Shani Sade Sati",
    "AstroReply",
    "VedaTek"
  ],
  metadataBase: new URL("https://astroreply.vedatek.co.uk"),
  alternates: {
    canonical: "https://astroreply.vedatek.co.uk",
  },
  openGraph: {
    title: "AstroReply | Your Personal AI Astrologer",
    description:
      "Grounded astrological guidance powered by your unique birth chart, high-precision astronomical ephemeris, and personalized conversational memory.",
    url: "https://astroreply.vedatek.co.uk",
    siteName: "AstroReply",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://vedatek.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "AstroReply - Your Personal AI Astrologer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroReply | Your Personal AI Astrologer",
    description:
      "Grounded astrological guidance powered by your unique birth chart, high-precision astronomical ephemeris, and personalized conversational memory.",
    images: ["https://vedatek.co.uk/og-image.png"],
  },
};

export default function AstroReplyPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AstroReply",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "LifestyleApplication",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "GBP"
    },
    "description": "Grounded astrological guidance powered by your unique birth chart, high-precision astronomical ephemeris, and personalized conversational memory.",
    "publisher": {
      "@type": "Organization",
      "name": "VedaTek",
      "url": "https://vedatek.co.uk"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate are the astronomical calculations in AstroReply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AstroReply utilizes the Swiss Ephemeris system alongside NASA JPL planetary ephemeris tables to compute planetary longitudes, house cusps, Nakshatra Padas, and Vimshottari Dashas down to 0.001 degrees of arc precision."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between the Vedic and Western astrology engines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Vedic engine uses the Sidereal Zodiac (Lahiri Ayanamsha) aligned with fixed constellations, 27 Nakshatras, and Vimshottari timing. The Western engine uses the Tropical Zodiac aligned with the equinoxes, focusing on Placidus houses and aspect matrices."
        }
      },
      {
        "@type": "Question",
        "name": "How does AstroReply's Continuous Conversational Memory work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AstroReply maintains a private, encrypted context graph tied securely to your account, remembering career developments, relationship history, and past consultations without ever selling data or training public models."
        }
      }
    ]
  };

  return (
    <div className="astro-theme astro-radial-bg min-h-screen text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AstroNavbar />
      
      <div className="flex-grow">
        <AstroHero />
        <AstroDualEngine />
        <AstroLanguages />
        <AstroPricing />
        <AstroFaq />
      </div>

      <AstroFooter />
    </div>
  );
}
