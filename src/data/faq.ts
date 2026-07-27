export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "what-is-smarted-systems",
    question: "What does SMARTED SYSTEMS actually build?",
    answer:
      "SMARTED SYSTEMS is a premium AI engineering company. We design deterministic enterprise software: core ledgers, workflow automation systems, AI-driven operations layers, and executive intelligence surfaces. That work funds R&D toward an AI-native Business Operating System.",
  },
  {
    id: "how-is-ai-used",
    question: "How do you make AI systems safe for enterprise use?",
    answer:
      "Every AI-driven action passes through deterministic validation before it can touch production data. Models classify and structure intent; rules, permissions, schemas, and state machines decide what can actually execute.",
  },
  {
    id: "who-owns-the-ip",
    question: "Who owns the code after an engagement?",
    answer:
      "Clients receive full, perpetual usage rights to the custom solution built for their business. SMARTED SYSTEMS retains ownership of reusable architecture, engineering patterns, and platform infrastructure that are not client-specific.",
  },
  {
    id: "how-to-start",
    question: "How do we start a project?",
    answer:
      "Start with a consultation around one specific operational bottleneck. We map the business problem, target value, data boundaries, deterministic execution path, and delivery model before recommending a build.",
  },
  {
    id: "where-based",
    question: "Is SMARTED SYSTEMS remote?",
    answer:
      "Yes. SMARTED SYSTEMS is remote-first, written-first, and built for async collaboration across time zones while maintaining disciplined delivery rituals.",
  },
];
