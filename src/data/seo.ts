export const site = {
  name: "VEDATEK",
  url: "https://vedatek.co.uk",
  ogImage: "https://vedatek.co.uk/og-image.png",
} as const;

export const pageSeo = {
  about: {
    title: "About VEDATEK | UK Technology Consultancy Specialists",
    description:
      "VEDATEK is a UK technology consultancy with 15+ years of engineering experience across systems integration, EDI, Business Central, Linnworks, cloud, DevOps, AI automation and software development.",
    canonical: "/about",
  },
  services: {
    title: "Technology Services | Systems Integration, EDI, Cloud & AI | VEDATEK",
    description:
      "VEDATEK delivers systems integration, EDI automation, Business Central and Linnworks integration, AI automation, custom software, cloud DevOps and site reliability engineering for UK businesses.",
    canonical: "/services",
  },
  solutions: {
    title: "Business Technology Solutions | E-Commerce, Wholesale & Distribution | VEDATEK",
    description:
      "Practical technology solutions for e-commerce, wholesale and distribution businesses. Connect ERP, warehouse, EDI and e-commerce platforms. Eliminate manual work. Build reliable operations.",
    canonical: "/solutions",
  },
  contact: {
    title: "Contact VEDATEK | Linnworks, EDI & Business Central Integration Consultants",
    description:
      "Discuss your systems integration, EDI automation, Business Central, Linnworks, cloud or AI automation challenge with a VEDATEK technology consultant. Free initial conversation.",
    canonical: "/contact",
  },
  privacy: {
    title: "Privacy Policy | VEDATEK Technology Consultancy",
    description: "Privacy policy for VEDATEK, a UK technology consultancy providing systems integration, EDI automation and cloud engineering services.",
    canonical: "/privacy",
  },
  terms: {
    title: "Terms of Service | VEDATEK Technology Consultancy",
    description: "Terms of service for VEDATEK, a UK technology consultancy providing systems integration, EDI automation and cloud engineering services.",
    canonical: "/terms",
  },
} as const;

export const homepageFaqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We primarily work with UK e-commerce retailers, wholesale distributors and technology teams. Our most common engagements involve connecting ERP systems like Microsoft Dynamics 365 Business Central with warehouse platforms like Linnworks, setting up EDI trading with retail customers, automating business workflows, and building cloud infrastructure on AWS.",
  },
  {
    question: "Can you help integrate Linnworks with Business Central?",
    answer:
      "Yes. Linnworks and Business Central integration is one of our most common engagements. We design and build middleware that synchronises orders, stock levels, invoices and fulfilment data between the two platforms in real time, eliminating manual data entry and ensuring both systems remain consistent.",
  },
  {
    question: "Do you provide EDI integration services?",
    answer:
      "Yes. We implement EDI solutions for wholesale and distribution businesses that need to trade electronically with retail customers such as major supermarkets, pharmacy chains and online marketplaces. We handle EDIFACT, ANSI X12, AS2 and SFTP-based EDI and integrate directly with Business Central, Linnworks and other ERP and WMS platforms.",
  },
  {
    question: "What is your engagement model?",
    answer:
      "We offer flexible engagement models depending on the scope of work. Fixed-price assessments and audits are available for businesses that want to understand their options before committing. Project-based delivery is used for defined integration, automation or software builds. Ongoing retainer arrangements work well for businesses that need continued technical support across cloud, reliability and systems work.",
  },
  {
    question: "Do you only do integrations?",
    answer:
      "No. Systems integration is one of our core strengths, but we also build custom software and internal tools, implement AI and workflow automation, design cloud infrastructure on AWS using Terraform and Kubernetes, set up monitoring and observability platforms using Grafana and Prometheus, and provide security and infrastructure consulting.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "For most projects we can begin an initial technical conversation within a week and move to scoping within two weeks. Fixed-price assessments such as a Technology Health Check or Integration Architecture Review can typically be delivered within two to three weeks of engagement.",
  },
] as const;
