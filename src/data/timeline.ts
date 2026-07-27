export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  isFuture?: boolean;
}

export const timeline: TimelineMilestone[] = [
  {
    id: "founded",
    year: "2024",
    title: "SMARTED SYSTEMS Founded",
    description:
      "Founded on a single thesis: enterprise software built on manual data entry and brittle integrations is structurally broken.",
  },
  {
    id: "studio",
    year: "Studio",
    title: "Engineering-First Services",
    description:
      "Premium custom software and AI engineering engagements create revenue, field knowledge, and production-tested infrastructure.",
  },
  {
    id: "ai-expansion",
    year: "Platform",
    title: "Reusable Enterprise Components",
    description:
      "Deterministic orchestration, ledgers, workflow engines, analytics surfaces, and integration patterns become reusable platform primitives.",
  },
  {
    id: "bizos",
    year: "BizOS",
    title: "AI-Native Business Operating System",
    description:
      "The long-term destination: a unified business operating system where companies deploy governed AI Employees instead of assembling fragile point solutions.",
    isFuture: true,
  },
];
