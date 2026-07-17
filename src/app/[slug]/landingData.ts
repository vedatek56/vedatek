export interface LandingPageContent {
  title: string;
  metaDesc: string;
  h1: string;
  problemSub: string;
  problems: string[];
  architectureTitle: string;
  architectureItems: string[];
  outcome: string;
  keywords: string[];
}

export const landingPagesData: Record<string, LandingPageContent> = {
  "business-central-integration-uk": {
    title: "Microsoft Dynamics 365 Business Central Integration Specialist UK",
    metaDesc: "Connect Microsoft Dynamics 365 Business Central to storefronts, Linnworks, WMS and shipping carriers. UK systems integration consultants.",
    h1: "Is your ERP out of sync with your storefronts?",
    problemSub: "Sync ledger mismatches, inventory drifts, and manual order corrections between Shopify/Linnworks and Dynamics 365 Business Central.",
    problems: [
      "Staff spending hours manually reconciling Shopify, Amazon, or Linnworks sales with Business Central ledgers.",
      "Inventory counts drifting across platforms, leading to stock discrepancies and overselling.",
      "Varying tax codes (UK VAT, European VAT, US sales tax) mapping incorrectly to general ledgers."
    ],
    architectureTitle: "Business Central Real-Time Order Flow Architecture",
    architectureItems: [
      "Storefront captures multi-channel orders and triggers transactional metadata.",
      "VEDATEK integration broker automatically maps order lines, customer records, and shipping tags.",
      "Real-time update pushed to Business Central general ledgers with precise tax classification."
    ],
    outcome: "Eliminated manual daily reconciliations completely, reduced stock mismatch incidents to zero, and accelerated invoicing workflows.",
    keywords: ["Business Central integration UK", "Business Central Shopify integration", "Dynamics 365 BC integration"]
  },
  "linnworks-consultant": {
    title: "Linnworks Consultant & Integration Specialist UK",
    metaDesc: "Struggling with Linnworks sync errors or multi-channel inventory drift? Get senior engineering consulting for Linnworks API integrations.",
    h1: "Get Linnworks working with your systems.",
    problemSub: "Senior technical support and custom API connections to optimize your Linnworks multi-channel inventory, courier tagging, and WMS.",
    problems: [
      "Storefront integrations drifting out of sync, causing delays in stock updates and duplicate order tags.",
      "Courier rules failing to route orders to the correct fulfillment partners.",
      "Custom warehouse management system (WMS) cannot connect cleanly to Linnworks' API."
    ],
    architectureTitle: "Custom Linnworks API Sync Broker",
    architectureItems: [
      "Consolidates order data from custom databases or legacy ERP networks.",
      "Maps product SKU tables, barcode variants, and bundle rules.",
      "Pushes structured inventory data directly via Linnworks API with error checks."
    ],
    outcome: "100% automated stock synchronization, instant shipping courier tagging, and zero manual intervention.",
    keywords: ["Linnworks consultant UK", "Linnworks developer UK", "Linnworks integration specialist"]
  },
  "linnworks-business-central": {
    title: "Linnworks Dynamics 365 Business Central Integration | VEDATEK",
    metaDesc: "Connect Linnworks multi-channel inventory directly with Dynamics 365 Business Central. Automate ordering, bookkeeping and stock sync.",
    h1: "Connect Linnworks to Business Central.",
    problemSub: "Stop manual order transfer. We build automated, direct sync connections between Linnworks and Business Central.",
    problems: [
      "Writing manual batch files or spreadsheet uploads to update inventory balances.",
      "Tax rules (VAT vs Zero Rated) applying incorrectly during imports.",
      "Purchase orders not syncing automatically with Linnworks purchase ledger."
    ],
    architectureTitle: "Direct Linnworks to Business Central ERP Sync",
    architectureItems: [
      "Automatically matches stock levels between Business Central and Linnworks.",
      "Imports sales ledger transactions into Business Central automatically.",
      "Updates purchase order updates directly in Linnworks inventory rosters."
    ],
    outcome: "Complete automated stock matching, elimination of data entry, and synchronized purchase cycles.",
    keywords: ["Linnworks Business Central integration", "Business Central Linnworks connector"]
  },
  "edi-integration": {
    title: "EDI Integration & Retailer Compliance Specialist UK",
    metaDesc: "Onboard major retailers (Tesco, NHS, Boots, Amazon) with automated EDIFACT/ANSI X12 AS2 integrations. UK EDI consultants.",
    h1: "Retailer EDI compliance doesn't have to be manual.",
    problemSub: "Automate purchase orders, invoices, and dispatch documents directly inside Business Central or Linnworks.",
    problems: [
      "New retail buyers demanding strict EDI specifications (EDIFACT, AS2, SFTP) that you can't process.",
      "Staff spending hours manually copying purchase order codes, causing dispatch delays.",
      "Threat of compliance penalty chargebacks from retail buyers due to minor document mistakes."
    ],
    architectureTitle: "VEDATEK Secure EDIFACT Order Translation Hub",
    architectureItems: [
      "Securely receives buyer purchase orders via AS2 protocol or SFTP.",
      "Translates raw EDIFACT/ANSI X12 segments into structured XML/JSON payloads.",
      "Automatically maps purchase order data into your ERP for fulfillment."
    ],
    outcome: "Reduced wholesale order processing from days to minutes. 100% compliant documentation, avoiding buyer penalty chargebacks.",
    keywords: ["EDI integration UK", "EDI consultant UK", "AS2 EDI integration", "EDIFACT integration UK"]
  },
  "api-development": {
    title: "Custom API Development & Software Integration UK",
    metaDesc: "Senior developers building secure, documented, and resilient API endpoints, webhooks and custom software integrations for UK firms.",
    h1: "Custom API development built for reliability.",
    problemSub: "Connect legacy software, databases, or third-party web services with robust, secure, and documented APIs.",
    problems: [
      "Disconnected legacy software locking down critical business data.",
      "Third-party system APIs updating silently and crashing your current connections.",
      "Lack of clean developer documentation for your current internal API integrations."
    ],
    architectureTitle: "Custom Managed Integration Broker Architecture",
    architectureItems: [
      "Builds secure, lightweight Node.js/Go middleware API connectors.",
      "Configures rate-limiting protection, token authorization, and retry queues.",
      "Publishes clean developer OpenAPI specs and SRE logging integrations."
    ],
    outcome: "Secure, reliable backend API connections that scale smoothly under load without maintenance overhead.",
    keywords: ["custom API development UK", "software integration developer", "API connection specialist"]
  },
  "aws-consultant-uk": {
    title: "AWS DevOps & Cloud Infrastructure Consultant UK",
    metaDesc: "Optimize AWS cloud hosting, set up Terraform Infrastructure as Code, configure Kubernetes, and reduce hosting costs. UK SRE consultants.",
    h1: "Get control of your AWS infrastructure.",
    problemSub: "Professional AWS DevOps engineering, cloud scaling architectures, and cost optimization audits for UK businesses.",
    problems: [
      "Rising monthly AWS bills with no clear picture of what is driving costs.",
      "Application slowdowns during high-transaction retail traffic times.",
      "Cloud resources configured manually in the console, making disaster recovery impossible."
    ],
    architectureTitle: "Terraform Infrastructure as Code Design",
    architectureItems: [
      "Audits and sweeps AWS accounts to delete unused servers and optimize tiers.",
      "Converts cloud configurations into reusable, trackable Terraform scripts.",
      "Configures secure network zones, VPN gateways, and auto-scaling rules."
    ],
    outcome: "Reduced AWS hosting costs by 20–40%, established disaster recovery scripts, and increased server stability.",
    keywords: ["AWS consultant UK", "AWS DevOps engineer UK", "AWS cost optimization UK"]
  },
  "splunk-consultant": {
    title: "Splunk Consultant & Log Monitoring Specialist UK",
    metaDesc: "Enterprise logging and dashboard setup. Connect Splunk log aggregation, search clusters, and configure alerts.",
    h1: "Settle your Splunk logging architecture.",
    problemSub: "Configure high-volume logging setups, search indexing, and real-time security alerts.",
    problems: [
      "Unmanageable logs making it impossible to identify application errors.",
      "Incorrect indexing structures leading to high data storage bills.",
      "Lack of real-time security monitoring or alerting rules."
    ],
    architectureTitle: "Structured Splunk Log Aggregator",
    architectureItems: [
      "Installs Splunk forwarders to stream server logs securely.",
      "Optimizes indexing rules to filter garbage logs and reduce licensing fees.",
      "Builds diagnostic dashboards and email alerts for critical SRE issues."
    ],
    outcome: "Reduced log indexing overhead, established search queries, and instant visibility into platform health.",
    keywords: ["Splunk consultant UK", "Splunk log analysis", "Splunk dashboard developer"]
  },
  "grafana-consultant": {
    title: "Grafana & Prometheus Observability Consultant UK",
    metaDesc: "SRE monitoring dashboards. Grafana dashboards, Prometheus database tuning, Loki logging and OpenTelemetry.",
    h1: "Observe your systems in real time.",
    problemSub: "SRE dashboards for server performance, application speed, and error tracking.",
    problems: [
      "Discovering system downtime from customers rather than internal alerts.",
      "Developers spending hours looking through raw log files to debug issues.",
      "Lack of metrics tracking application load, CPU usage, and database speeds."
    ],
    architectureTitle: "OpenTelemetry + Prometheus + Grafana Observability Stack",
    architectureItems: [
      "Instruments application endpoints using OpenTelemetry collectors.",
      "Configures Prometheus to query metric counts and store histories.",
      "Builds Grafana dashboard interfaces displaying system load, CPU, and error count."
    ],
    outcome: "Discovered platform errors before customers noticed. Diagnostic speeds accelerated by over 80%.",
    keywords: ["Grafana consultant UK", "Prometheus dashboard monitoring", "SRE metrics consultant"]
  },
  "terraform-consultant": {
    title: "Terraform Infrastructure as Code Consultant UK",
    metaDesc: "Convert AWS/Azure infrastructure into code. Build reusable Terraform modules, remote state management, and CI/CD pipelines.",
    h1: "Manage your cloud as code.",
    problemSub: "Eliminate manual cloud configuration errors with reusable Terraform scripts.",
    problems: [
      "Cloud setups configured manually by different developers, leaving no trace of changes.",
      "Inability to replicate staging environments to match production setups.",
      "Risk of manual deletion errors in the AWS/Azure consoles."
    ],
    architectureTitle: "Terraform Infrastructure Modules",
    architectureItems: [
      "Drafts modular Terraform code to package network, database, and CPU configurations.",
      "Configures remote state locking to enable secure multi-developer changes.",
      "Integrates Terraform runs into automated GitHub Actions pipelines."
    ],
    outcome: "Spawning new staging environments in under 5 minutes. Clean version control for all cloud configurations.",
    keywords: ["Terraform consultant UK", "Infrastructure as Code developer", "Terraform modules engineer"]
  },
  "devops-consultant": {
    title: "DevOps Consulting & Platform Engineering UK",
    metaDesc: "Automate build, test and deployment pipelines. GitHub Actions, Kubernetes configurations, and cloud automation.",
    h1: "Shorten your release cycles.",
    problemSub: "DevOps consulting to optimize deployments, set up Kubernetes, and build automated pipelines.",
    problems: [
      "Developers wasting hours manually compiling and deploying files.",
      "Deployments crashing due to human configuration errors.",
      "Slow, manual regression testing cycles blocking feature releases."
    ],
    architectureTitle: "GitOps Continuous Deployment (CI/CD) Pipeline",
    architectureItems: [
      "Configures GitHub Actions to automatically run unit tests and check coding styles.",
      "Containerizes applications into Docker instances for environment match.",
      "Builds deployment pipelines to deploy updates directly to servers without downtime."
    ],
    outcome: "Deployment lead times reduced from days to minutes. Zero-downtime rolling updates.",
    keywords: ["DevOps consultant UK", "DevOps pipeline engineer", "platform engineer consultant"]
  },
  "site-reliability-engineering": {
    title: "Site Reliability Engineering (SRE) Consultant UK",
    metaDesc: "Design resilient, highly-available systems. SLO/SLA management, disaster recovery drills, incident response configurations.",
    h1: "Build systems that don't fail.",
    problemSub: "SRE consulting to establish Service Level Objectives (SLOs) and incident management strategies.",
    problems: [
      "Unplanned server outages causing immediate sales losses.",
      "Lack of incident response strategies, leaving developers confused during outages.",
      "Overloaded databases causing slow API response times under load."
    ],
    architectureTitle: "VEDATEK SRE Resiliency Framework",
    architectureItems: [
      "Defines key Service Level Indicators (SLIs) and Service Level Objectives (SLOs).",
      "Configures database read-replicas, failover rules, and backup pipelines.",
      "Builds incident alerts and automated response schedules."
    ],
    outcome: "Achieved 99.9% application uptime, established error budgets, and streamlined incident recovery.",
    keywords: ["Site Reliability Engineering consultant", "SRE consultant UK", "system reliability engineer"]
  }
};
