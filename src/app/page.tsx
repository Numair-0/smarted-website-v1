import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { ArchitectureDiagram } from "@/components/home/ArchitectureDiagram";
import { WhySmartedSystems } from "@/components/home/WhySmarted";
import { EngineeringPrinciples } from "@/components/home/EngineeringPrinciples";
import { Timeline } from "@/components/home/Timeline";
import { TeamSnapshot } from "@/components/home/TeamSnapshot";
import { Faq } from "@/components/home/Faq";
import { ContactCta } from "@/components/home/ContactCta";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Enterprise AI software for operational execution",
  description:
    "SMARTED SYSTEMS designs deterministic, enterprise-grade AI software and the studio engine behind an AI-native Business Operating System.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <AboutSnapshot />
      <ServicesGrid />
      <IndustriesStrip />
      <ArchitectureDiagram />
      <WhySmartedSystems />
      <EngineeringPrinciples />
      <Timeline />
      <TeamSnapshot />
      <Faq />
      <ContactCta />
    </>
  );
}
