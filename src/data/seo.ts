export const site = {
  name: "VEDATEK",
  url: "https://vedatek.co.uk",
  ogImage: "https://vedatek.co.uk/og-image.png",
} as const;

export const pageSeo = {
  about: {
    title: "About VEDATEK | UK Technology Consultancy",
    description:
      "Learn how VEDATEK combines business understanding with practical technology expertise across software, integrations, AI, cloud, reliability and security.",
    canonical: "/about",
  },
  services: {
    title: "Services | VEDATEK Technology Consultancy",
    description:
      "Explore VEDATEK services for AI and automation, software development, systems integration, EDI, cloud DevOps, observability and cybersecurity.",
    canonical: "/services",
  },
  solutions: {
    title: "Solutions | VEDATEK",
    description:
      "See how VEDATEK helps businesses connect systems, automate work and solve operational technology challenges with practical solutions.",
    canonical: "/solutions",
  },
  contact: {
    title: "Contact VEDATEK | Discuss Your Challenge",
    description:
      "Contact VEDATEK to discuss a systems, software, automation, cloud or security challenge with a technology consultant.",
    canonical: "/contact",
  },
  privacy: {
    title: "Privacy Policy | VEDATEK",
    description: "Read the VEDATEK privacy policy.",
    canonical: "/privacy",
  },
  terms: {
    title: "Terms of Service | VEDATEK",
    description: "Read the VEDATEK terms of service.",
    canonical: "/terms",
  },
} as const;

export const homepageFaqs = [
  {
    question: "What kind of businesses do you help?",
    answer:
      "We work with e-commerce, wholesale, growing businesses and technology teams that need systems to connect, automate or work better.",
  },
  {
    question: "Do you only do integrations?",
    answer:
      "No. Integrations are one part of what we do. We also build software, automation, cloud, reliability and security solutions.",
  },
  {
    question: "Can you help with Business Central or Linnworks?",
    answer:
      "Yes. Those platforms are part of the wider systems landscape we often connect and improve.",
  },
  {
    question: "How do we start?",
    answer:
      "Share the challenge and we will help map the most practical next step, whether that is integration, automation, software or infrastructure work.",
  },
] as const;
