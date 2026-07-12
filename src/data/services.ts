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
    shortDescription: "Connect ERP, e-commerce, EDI, APIs, and business platforms to eliminate data silos.",
    fullDescription: "Keep your business synchronized. We connect disconnected systems to ensure seamless data flows between e-commerce stores, ERP systems, warehouse platforms, and suppliers, replacing manual data entry with reliable, automated synchronization.",
    iconName: "Network",
    capabilities: [
      "Connecting disconnected business systems",
      "API integrations (REST, SOAP, Webhooks)",
      "ERP integrations (Microsoft Dynamics 365 Business Central)",
      "E-commerce & warehouse integrations (Linnworks, Shopify)",
      "Logistics & courier integrations (Royal Mail, DPD, DHL, FedEx APIs)",
      "WMS order and shipment synchronization pipelines",
      "Real-time data synchronization pipelines",
      "Middleware and integration architecture"
    ],
    technologies: [
      "Dynamics 365 Business Central",
      "Linnworks",
      "REST APIs",
      "Webhooks",
      "SFTP",
      "XML",
      "JSON",
      "CSV",
      "Custom Integration Middleware"
    ],
    businessBenefits: [
      "Eliminate double entry of orders, stock, and invoices",
      "Synchronize inventory levels across multiple channels in real time",
      "Reduce fulfillment errors caused by manual transcription",
      "Gain a single unified view of operational data across platforms"
    ]
  },
  {
    slug: "edi-automation",
    title: "EDI & Business Process Automation",
    shortDescription: "Automate order processing, invoicing, and fulfillment flows with suppliers and customers.",
    fullDescription: "Make B2B transactions seamless. We implement automated electronic data interchange (EDI) and business workflows to automatically ingest orders, validate data, dispatch fulfillment commands, and transmit invoices without human intervention.",
    iconName: "RefreshCw",
    capabilities: [
      "Automated B2B order processing",
      "Purchase order (PO) workflows",
      "Invoice processing and financial automation",
      "Dispatch and fulfillment integrations",
      "Batch / lot tracking and expiration validation workflows",
      "Supplier and customer EDI onboarding",
      "Data transformation and schema validation",
      "MHRA Good Distribution Practice (GDP) compliant workflow validation"
    ],
    technologies: [
      "EDIFACT",
      "ANSI X12",
      "XML",
      "JSON",
      "CSV",
      "SFTP",
      "AS2",
      "Custom Validation Engines",
      "Linnworks",
      "Business Central"
    ],
    businessBenefits: [
      "Comply with retail customer requirements for EDI transactions",
      "Ingest purchase orders instantly and flag validation errors",
      "Accelerate payment cycles through automated invoicing",
      "Reduce staff hours dedicated to repetitive B2B ordering tasks"
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
    fullDescription: "Stop guessing what is happening in your production systems. We set up comprehensive monitoring, centralized logging, and actionable alerting to give you complete visibility into system performance and detect issues before they impact customers.",
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
      "Receive notifications on anomalies before customers report them"
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
      "Meet strict security requirements for enterprise client bids",
      "Minimize the impact of credentials leaks using rotated secrets",
      "Ensure compliance with cybersecurity insurance and regulatory frameworks"
    ]
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    shortDescription: "Technology strategy, architecture reviews, and fractional technology expertise.",
    fullDescription: "Navigate complex technology decisions with confidence. We provide strategic consulting, architecture reviews, digital transformation roadmaps, and fractional CTO/technical leadership to guide your growth without full-time overhead.",
    iconName: "Compass",
    capabilities: [
      "Technology strategy & digital transformation maps",
      "Technical architecture reviews & system audits",
      "Fractional CTO & technical leadership advisory",
      "Legacy system modernization roadmaps",
      "Vendor assessment & technology selection advice",
      "Complex technical problem solving"
    ],
    technologies: [
      "Enterprise Architecture",
      "Technology Audits",
      "Cost Optimization Reviews",
      "Risk Assessments",
      "Strategic Roadmaps"
    ],
    businessBenefits: [
      "Avoid expensive technology mistakes and software mis-purchases",
      "Align IT investments directly with long-term business goals",
      "Access senior engineering leadership on a flexible part-time basis",
      "Obtain an objective, independent review of your current systems"
    ]
  }
];
