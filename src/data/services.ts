export interface Service {
  id: string;
  name: string;
  summary: string;
  businessProblem: string;
  businessValue: string;
  capabilities: string[];
  typicalUseCases: string[];
  businessOutcomes: string[];
  engineeringNotes: string;
}

export const studioServices: Service[] = [
  {
    id: "ai-engineering",
    name: "AI Engineering & Deterministic Automation",
    summary:
      "Enterprise AI systems built with a strict separation between semantic understanding and deterministic execution.",
    businessProblem:
      "Teams want AI leverage, but uncontrolled model output cannot be allowed to mutate production records, financial data, or customer workflows.",
    businessValue:
      "AI becomes a controlled execution layer: faster intake, routing, validation, and decisions without sacrificing auditability or operational confidence.",
    capabilities: [
      "Finite-state orchestration for agentic workflows",
      "Retrieval-augmented context pipelines",
      "Rule-validated, auditable transaction execution",
      "Human approval checkpoints for high-risk actions",
    ],
    typicalUseCases: [
      "AI-assisted operations intake",
      "Document-to-workflow automation",
      "Agent copilots for internal teams",
      "Policy-aware task routing",
    ],
    businessOutcomes: [
      "Lower manual coordination load",
      "Faster operational cycle times",
      "Reduced execution ambiguity",
    ],
    engineeringNotes:
      "Language models classify and draft intent; deterministic services validate schemas, permissions, state transitions, and audit events before execution.",
  },
  {
    id: "core-ledger",
    name: "Core Ledger & Financial Systems",
    summary:
      "Ledger-grade transaction systems for billing, contracts, reconciliation, and relationship truth.",
    businessProblem:
      "Finance and operations teams often run on disconnected spreadsheets, billing tools, and CRM records that disagree at the exact moment leadership needs certainty.",
    businessValue:
      "A single transactional core gives executives, operators, and finance teams a consistent record of business state.",
    capabilities: [
      "Real-time multi-currency ledger architecture",
      "Double-entry transactional accounting",
      "Dynamic contract lifetime calculation",
      "Audit logs for financial and operational events",
    ],
    typicalUseCases: [
      "Custom billing and reconciliation systems",
      "Contract lifecycle engines",
      "Revenue operations control planes",
      "Internal finance workflow automation",
    ],
    businessOutcomes: [
      "Cleaner reporting foundations",
      "Fewer manual reconciliation paths",
      "Greater confidence in operational data",
    ],
    engineeringNotes:
      "We design around ACID guarantees, idempotent writes, immutable event history, and explicit domain models for every financial action.",
  },
  {
    id: "automation-hub",
    name: "Automation & Integration Hub",
    summary:
      "Workflow infrastructure that connects enterprise tools without turning business logic into brittle middleware.",
    businessProblem:
      "Critical workflows break when they depend on manual updates, fragile webhooks, and one-off integrations owned by no clear system.",
    businessValue:
      "Operations gain a reliable routing layer for tasks, approvals, exceptions, notifications, and cross-system updates.",
    capabilities: [
      "Event-driven architecture at scale",
      "Visual state-machine workflow builders",
      "Automated error recovery and self-healing logic",
      "Integration adapters for operational systems",
    ],
    typicalUseCases: [
      "Approval workflows",
      "Task queue orchestration",
      "CRM / ERP / support tool synchronization",
      "Exception management consoles",
    ],
    businessOutcomes: [
      "Less manual follow-up",
      "More predictable service delivery",
      "Clear ownership of operational state",
    ],
    engineeringNotes:
      "Workflows are modeled as explicit states and transitions, with retries, dead-letter handling, observability, and reversible administrative controls.",
  },
  {
    id: "analytics",
    name: "Analytics & Executive Intelligence",
    summary:
      "Decision systems that turn operational data into executive-level signal, anomaly detection, and natural-language analysis.",
    businessProblem:
      "Leadership dashboards often summarize stale data while the operational reality lives in logs, queues, exceptions, and fragmented tools.",
    businessValue:
      "Executives see the operating system of the business: what is moving, what is blocked, what is risky, and where intervention matters.",
    capabilities: [
      "Predictive cash flow and churn modeling",
      "Operational anomaly detection",
      "Natural-language analytics interfaces",
      "Executive KPI and workflow health surfaces",
    ],
    typicalUseCases: [
      "Executive operations dashboards",
      "Workflow health monitoring",
      "Revenue and pipeline intelligence",
      "Operational risk alerts",
    ],
    businessOutcomes: [
      "Faster leadership decisions",
      "Earlier detection of operational drift",
      "Better visibility into execution quality",
    ],
    engineeringNotes:
      "Analytics surfaces are built on typed event streams, governed metrics definitions, permission-aware queries, and traceable data lineage.",
  },
];

export const engagementModel = {
  eyebrow: "How we engage",
  title: "Studio-driven, outcome-priced",
  description:
    "We scope around a concrete operational bottleneck, define the target architecture, and price for business value rather than activity. The custom system belongs to the client while reusable infrastructure strengthens the SMARTED SYSTEMS engineering platform.",
};
