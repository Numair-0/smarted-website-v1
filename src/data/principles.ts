export interface Principle {
  id: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    id: "readability",
    title: "Optimize for readability and deletion",
    description:
      "Code is read far more often than it is written. We build components that are explicit, self-documenting, and safe to remove or replace without sprawling side effects.",
  },
  {
    id: "stateless",
    title: "Stateless services, deterministic state",
    description:
      "Services operate statelessly wherever possible, relying on robust transactions, explicit state machines, and domain-owned data models to manage business state.",
  },
  {
    id: "observability",
    title: "Instrument everything",
    description:
      "Nothing ships without structured logging, metrics, and traceability. A system without observability is a black box waiting to fail.",
  },
  {
    id: "zero-flaw",
    title: "Architectural correctness before speed",
    description:
      "Real engineering speed is a byproduct of correctness. Financial, security, and execution-critical paths require rigorous validation as standard.",
  },
];

export const deterministicArchitecture = {
  eyebrow: "How our AI systems execute safely",
  title:
    "Semantic Ingestion -> Finite State Orchestrator -> Deterministic Execution",
  description:
    "We reject the idea of letting raw language models act directly on enterprise systems. Every AI-driven action passes through a strict, three-stage pipeline before it can touch production data.",
  stages: [
    {
      id: "ingestion",
      title: "Semantic Ingestion",
      description:
        "Unstructured input such as email, voice, documents, and API payloads is parsed into a strongly typed execution intent.",
    },
    {
      id: "fso",
      title: "Finite State Orchestrator",
      description:
        "The intent is validated against rule matrices, security permissions, workflow state, and operational schemas before anything executes.",
    },
    {
      id: "ledger",
      title: "Deterministic Ledger Execution",
      description:
        "Only validated transactions reach production systems, with ACID discipline where needed and a complete audit trail.",
    },
  ],
};
