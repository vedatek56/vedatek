import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LandingClient from "./LandingClient";

// Import data object
import { landingPagesData } from "./landingData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(landingPagesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = landingPagesData[resolvedParams.slug];
  if (!data) return {};

  return {
    title: `${data.title} | VEDATEK`,
    description: data.metaDesc,
    keywords: data.keywords,
    alternates: {
      canonical: `/${resolvedParams.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${data.title} | VEDATEK`,
      description: data.metaDesc,
      url: `https://vedatek.co.uk/${resolvedParams.slug}`,
      siteName: "VEDATEK",
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "https://vedatek.co.uk/og-image.png",
          width: 1200,
          height: 630,
          alt: `${data.title} - VEDATEK`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | VEDATEK`,
      description: data.metaDesc,
      images: ["https://vedatek.co.uk/og-image.png"],
    },
  };
}

export default async function DynamicLandingPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = landingPagesData[resolvedParams.slug];
  if (!data) {
    notFound();
  }

  // Create JSON-LD Breadcrumb schema dynamically
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vedatek.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": data.title,
            "item": `https://vedatek.co.uk/${resolvedParams.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "name": data.title,
        "description": data.metaDesc,
        "provider": {
          "@type": "Organization",
          "name": "VEDATEK",
          "url": "https://vedatek.co.uk"
        },
        "areaServed": "GB"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingClient data={data} slug={resolvedParams.slug} />
    </>
  );
}
