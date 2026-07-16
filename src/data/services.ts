export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  technologies: string[];
  businessBenefits: string[];
}

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    shortDescription: "Practical AI and intelligent automation designed around real business needs.",
    fullDescription: "We build custom AI-powered tools and workflow automations that eliminate manual processing bottlenecks. We focus on pragmatic, secure AI adoption that delivers measurable operational value rather than speculative technology hype.",
    iconName: "Brain",
    capabilities: [
      "AI solutions for business operations",
      "AI-powered workflow automation",
      "Internal AI assistants and knowledge bases",
      "Intelligent document and data processing",
      "API-based AI integrations (OpenAI, Anthropic, Gemini)",
      "Secure, private enterprise AI deployment"
    ],
    technologies: [
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "Anthropic Claude API",
      "Google Gemini API",
      "Python",
      "Node.js",
      "Vector Databases (Pinecone, pgvector)"
    ],
    businessBenefits: [
      "Reduce time spent on administrative tasks",
      "Extract structured data from unstructured documents automatically",
      "Empower employees with instant access to internal knowledge",
      "Streamline customer inquiry routing and draft responses"
    ]
  },
  {
    slug: "software-development",
    title: "Software & Application Development",
    shortDescription: "Custom applications, internal tools, and APIs built around how your business actually works.",
    fullDescription: "Generic software often forces you to change your processes. We develop bespoke web applications, robust backend services, and internal business tools designed to fit your existing operations, modernize legacy systems, and solve specific business problems.",
    iconName: "Code2",
    capabilities: [
      "Custom business software development",
      "Internal business tools and dashboards",
      "Web applications and portals",
      "RESTful API & backend service engineering",
      "Legacy system modernization",
      "Database design and optimization"
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "GraphQL"
    ],
    businessBenefits: [
      "Own your software without ongoing per-user licensing fees",
      "Tailor user interfaces to your exact operational workflows",
      "Improve data accuracy by eliminating spread-sheet dependency",
      "Extend the lifespan of legacy applications through API overlays"
    ]
  },
  {
    slug: "systems-integration",
    title: "Systems Integration",
    shortDescription: "Linnworks, Business Central, Shopify and ERP integration specialists. Connect your business systems and eliminate manual data entry.",
    fullDescription: "VEDATEK specialises in systems integration for UK e-commerce, wholesale and distribution businesses. We connect Microsoft Dynamics 365 Business Central with Linnworks, Shopify, courier APIs (Royal Mail, DPD, DHL, FedEx) and third-party logistics platforms. Our integrations replace manual order entry, stock discrepancies and invoice mismatches with reliable, automated data synchronisation. Whether you need a Linnworks to Business Central integration, a Shopify to ERP connector, or a middleware layer connecting multiple warehouse and e-commerce systems, we design and build production-grade solutions that scale with your business.",
    iconName: "Network",
    capabilities: [
      "Linnworks integration with Business Central, Shopify and ERPs",
      "Microsoft Dynamics 365 Business Central API integration",
      "Shopify to ERP and WMS integration",
      "Courier and logistics API integration (Royal Mail, DPD, DHL, FedEx)",
      "EDI and trading partner integration",
      "REST, SOAP, Webhooks and SFTP-based integrations",
      "WMS order and shipment synchronisation pipelines",
      "Real-time and batch data synchronisation",
      "Custom integration middleware and message brokering"
    ],
    technologies: [
      "Dynamics 365 Business Central",
      "Linnworks",
      "Shopify",
      "REST APIs",
      "Webhooks",
      "SFTP",
      "XML",
      "JSON",
      "Custom Integration Middleware"
    ],
    businessBenefits: [
      "Eliminate double entry of orders, stock and invoices across platforms",
      "Synchronise inventory levels across multiple channels in real time",
      "Reduce fulfilment errors caused by manual transcription",
      "Gain a single unified view of operational data across your entire business",
      "Scale order volume without adding headcount to operations"
    ]
  },
  {
    slug: "edi-automation",
    title: "EDI & Business Process Automation",
    shortDescription: "EDI integration and automation for UK wholesale, distribution and e-commerce businesses. EDIFACT, ANSI X12, AS2 and SFTP EDI specialists.",
    fullDescription: "VEDATEK provides EDI integration and business process automation for UK wholesale distributors, e-commerce businesses and manufacturers that need to trade electronically with retail customers, suppliers and logistics partners. We implement EDIFACT, ANSI X12 and proprietary EDI formats over AS2, SFTP and API connections, integrating directly with Business Central, Linnworks and other ERP and WMS platforms. Our EDI solutions automate purchase order ingestion, invoice generation, despatch advice and acknowledgement flows, removing the need for manual processing and reducing the risk of compliance errors with major retailers and supermarkets.",
    iconName: "RefreshCw",
    capabilities: [
      "EDI integration with major UK retailers and supermarkets",
      "EDIFACT and ANSI X12 message processing",
      "AS2 and SFTP EDI connectivity",
      "Automated purchase order (PO) ingestion and validation",
      "Invoice processing and financial automation",
      "Despatch advice and acknowledgement flows",
      "EDI integration with Business Central and Linnworks",
      "Batch and lot tracking with expiration validation",
      "Supplier and customer EDI onboarding",
      "MHRA GDP-compliant workflow validation"
    ],
    technologies: [
      "EDIFACT",
      "ANSI X12",
      "AS2",
      "SFTP",
      "XML",
      "JSON",
      "Business Central",
      "Linnworks",
      "Custom Validation Engines"
    ],
    businessBenefits: [
      "Comply with retail customer requirements for electronic trading",
      "Ingest purchase orders instantly and flag validation errors automatically",
      "Accelerate payment cycles through automated invoice generation",
      "Reduce staff hours dedicated to repetitive B2B ordering and fulfilment tasks",
      "Trade electronically with major supermarkets, pharmacy chains and marketplaces"
    ]
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription: "Build reliable, automated, and scalable cloud infrastructure using modern patterns.",
    fullDescription: "We design and deploy secure, automated cloud environments. By treating infrastructure as code (IaC) and building robust CI/CD pipelines, we enable your development teams to deploy changes safely, consistently, and without friction.",
    iconName: "CloudLightning",
    capabilities: [
      "Cloud architecture design & review",
      "Infrastructure as Code (IaC) implementation",
      "CI/CD pipeline automation",
      "Containerization & orchestration",
      "Cloud migrations (on-premise to cloud, cloud-to-cloud)",
      "Platform engineering and developer portals"
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "GitLab CI",
      "AWS ECS/EKS",
      "AWS Lambda / Serverless"
    ],
    businessBenefits: [
      "Reduce infrastructure costs through automatic resource scaling",
      "Deploy code updates with minimal downtime and easy rollbacks",
      "Ensure environment consistency from development to production",
      "Recover quickly from infrastructure failures with self-healing designs"
    ]
  },
  {
    slug: "reliability-observability",
    title: "Site Reliability & Observability",
    shortDescription: "Understand system health, improve uptime, and reduce operational risk.",
    fullDescription: "Stop guessing what is happening in your production systems. We set up monitoring, centralized logging and actionable alerting to give you visibility into system performance and detect issues early.",
    iconName: "Activity",
    capabilities: [
      "Monitoring & observability dashboard design",
      "Centralized logging aggregates",
      "Performance metrics & SLIs/SLOs definition",
      "Actionable alerting and incident escalation paths",
      "IoT sensor telemetry logging (e.g. cold chain temperature tracking)",
      "Real-time critical alert dispatch (Slack, SMS, email integration)",
      "Reliability engineering reviews",
      "Incident response improvements"
    ],
    technologies: [
      "Grafana",
      "Prometheus",
      "Splunk",
      "Loki",
      "AWS CloudWatch",
      "OpenTelemetry",
      "Datadog"
    ],
    businessBenefits: [
      "Identify performance bottlenecks before they cause downtime",
      "Reduce Mean Time to Resolution (MTTR) during system incidents",
      "Understand user patterns and database loads with detailed metrics",
      "Receive notifications on anomalies before the issue spreads"
    ]
  },
  {
    slug: "security-infrastructure",
    title: "Cybersecurity & Infrastructure",
    shortDescription: "Design secure cloud networks, identity systems, and secrets management.",
    fullDescription: "Protect your business operations. We design and audit cloud environments, secure network architectures, implement modern identity access controls, and manage secrets securely to protect your data and maintain compliance.",
    iconName: "ShieldCheck",
    capabilities: [
      "Cloud security audits & posture management",
      "Zero-Trust network architecture design",
      "Identity & Access Management (IAM) refinement",
      "Secrets management & encryption pipelines",
      "GxP (MHRA) computer systems validation (CSV) audits",
      "Secure warehouse network architecture & industrial endpoint protection",
      "Vulnerability assessment & remediation reviews",
      "Secure-by-design system consulting"
    ],
    technologies: [
      "AWS IAM",
      "HashiCorp Vault",
      "AWS Secrets Manager",
      "VPC / Firewalls",
      "OAuth 2.0 / OIDC",
      "SSL/TLS Encryption",
      "CloudTrail"
    ],
    businessBenefits: [
      "Protect sensitive customer and business data from unauthorized access",
      "Meet strict security requirements for complex client due diligence",
      "Minimize the impact of credentials leaks using rotated secrets",
      "Ensure compliance with cybersecurity insurance and regulatory frameworks"
    ]
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    shortDescription: "Technology strategy, architecture reviews, fractional CTO services and digital transformation for UK businesses.",
    fullDescription: "Navigate complex technology decisions with confidence. VEDATEK provides strategic technology consulting, architecture reviews, digital transformation roadmaps and fractional CTO or technical leadership engagements for growing UK businesses. Whether you need an independent review of your current systems, guidance on selecting the right ERP, WMS or integration platform, or senior engineering leadership without full-time overhead, we bring the commercial and technical perspective to help you make better decisions faster.",
    iconName: "Compass",
    capabilities: [
      "Technology strategy and digital transformation roadmaps",
      "Technical architecture reviews and system audits",
      "Fractional CTO and technical leadership advisory",
      "ERP, WMS and integration platform selection",
      "Legacy system modernisation roadmaps",
      "Vendor assessment and technology selection",
      "Integration architecture design",
      "Technology Health Check assessments"
    ],
    technologies: [
      "Enterprise Architecture",
      "Technology Audits",
      "Cost Optimisation Reviews",
      "Risk Assessments",
      "Strategic Roadmaps"
    ],
    businessBenefits: [
      "Avoid expensive technology mistakes and software mis-purchases",
      "Align IT investments directly with long-term business goals",
      "Access senior engineering leadership on a flexible part-time basis",
      "Obtain an objective, independent review of your current systems",
      "Make confident decisions on ERP, WMS and integration platform selection"
    ]
  }
];
