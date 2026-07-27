export interface Industry {
  id: string;
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    id: "enterprise-operations",
    name: "Enterprise Operations",
    description:
      "Operating teams coordinating finance, sales, service, procurement, and internal workflows across disconnected tools.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Process-heavy environments where planning, inventory, quality, procurement, and maintenance depend on reliable operational state.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Administrative and billing workflows that require privacy-aware design, role-based access, and strong audit trails.",
  },
  {
    id: "financial-services",
    name: "Financial Services",
    description:
      "Ledger-grade systems for transaction workflows, compliance evidence, internal controls, and executive reporting.",
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    description:
      "Multi-party operations where orders, documents, exceptions, and fulfillment events need deterministic coordination.",
  },
  {
    id: "government-public-sector",
    name: "Government & Public Sector",
    description:
      "Policy-bound services and administrative workflows where transparency, procurement discipline, and traceability matter.",
  },
  {
    id: "education",
    name: "Education",
    description:
      "Institutional operations spanning admissions, student services, finance, communications, and compliance reporting.",
  },
  {
    id: "retail",
    name: "Retail",
    description:
      "Inventory, merchandising, customer operations, and back-office workflows that need real-time operational visibility.",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description:
      "Deal, property, tenant, document, and finance workflows that benefit from structured automation and clear ownership of state.",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description:
      "Service operations where staffing, guest workflows, procurement, finance, and issue resolution must move together.",
  },
  {
    id: "logistics",
    name: "Logistics",
    description:
      "Routing, carrier, asset, exception, and document workflows built for high-volume operational coordination.",
  },
];
