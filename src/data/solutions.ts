export interface SolutionItem {
  id: string;
  problem: string;
  solution: string;
  details: string;
  benefits: string[];
  ctaLink: string;
}

export const solutions: SolutionItem[] = [
  {
    id: "manual-data-entry",
    problem: "Too much manual data entry?",
    solution: "Automate repetitive workflows and move data between systems automatically.",
    details: "Your team shouldn't spend their day copying orders, typing out invoices, or syncing inventory levels by hand. We build background automation pipelines that capture, validate, and transfer transactional data instantly between your e-commerce channels, ERP, and logistics platforms.",
    benefits: [
      "Process B2B and retail orders in seconds, not hours",
      "Eliminate human typos and costly transmission errors",
      "Free up operational teams to focus on customer-facing work"
    ],
    ctaLink: "/services/edi-automation"
  },
  {
    id: "disconnected-systems",
    problem: "Your systems don't talk to each other?",
    solution: "Build reliable integrations that connect applications and business processes.",
    details: "When your CRM, e-commerce, warehouse management (Linnworks), and financial systems (Dynamics 365 Business Central) run in silos, inventory lag and delayed shipments are inevitable. We create robust APIs, webhooks, and secure integration layers to enable real-time communication between your existing software.",
    benefits: [
      "Ensure real-time stock level updates across all sales platforms",
      "Connect disparate databases securely using modern API standards",
      "Avoid buying expensive, rigid pre-built software connectors that don't fit your needs"
    ],
    ctaLink: "/services/systems-integration"
  },
  {
    id: "ai-adoption",
    problem: "Want to use AI but don't know where to start?",
    solution: "Identify practical AI opportunities and build solutions that deliver measurable value.",
    details: "AI is only useful if it solves a real bottleneck. We cut through the hype to design practical, secure business applications. From intelligent data processing and document classification to private internal AI assistants trained on your internal documentation.",
    benefits: [
      "Extract key information from supplier PDFs and invoices automatically",
      "Deploy custom AI assistants within your secure network to safeguard intellectual property",
      "Automate email triage and draft responses for review"
    ],
    ctaLink: "/services/ai-automation"
  },
  {
    id: "unmanaged-tech",
    problem: "Technology becoming difficult to manage?",
    solution: "Improve cloud architecture, automation, security, and observability.",
    details: "As businesses grow, their cloud systems often become messy, expensive, and fragile. We rebuild infrastructure using Infrastructure as Code (Terraform), audit your cloud security posture, and set up centralized Grafana/Prometheus dashboards to monitor performance and prevent outages.",
    benefits: [
      "Establish complete visibility over system health and performance",
      "Isolate and secure API secrets and customer databases",
      "Optimize cloud resources to reduce monthly AWS billing"
    ],
    ctaLink: "/services/cloud-devops"
  },
  {
    id: "non-existent-software",
    problem: "Need software that doesn't exist?",
    solution: "Build custom tools around the way your business actually operates.",
    details: "If off-the-shelf software requires you to compromise your core workflows, custom software is the answer. We design and build lightweight, high-performance web applications, internal dashboards, and database tools tailored to your exact business operations.",
    benefits: [
      "Eliminate spreadsheet sprawl and messy macro workarounds",
      "Create proprietary tools that give your business a competitive advantage",
      "Retain full ownership of your code with no per-user monthly SaaS fees"
    ],
    ctaLink: "/services/software-development"
  }
];
