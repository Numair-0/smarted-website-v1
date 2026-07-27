import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industries where the SMARTED SYSTEMS engineering philosophy is designed to operate: enterprise operations, manufacturing, healthcare, finance, supply chain, government, education, retail, real estate, hospitality, and logistics.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />
      <PageHeader
        eyebrow="Industries"
        title="Built for complex operations, regulated workflows, and real business stakes."
        description="These industries represent where our engineering philosophy is designed to operate: deterministic workflows, governed AI, strong observability, and enterprise-grade auditability."
      />

      <section className="section-space">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.id} delay={i * 0.04}>
              <div className="card-surface h-full p-7">
                <span className="font-mono text-xs text-execute-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-lg">{industry.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space bg-ledger-950 text-white">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="eyebrow text-semantic-400">Transparency note</p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl">
              Designed verticals are not deployment claims.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              This list reflects industries where the SMARTED SYSTEMS
              engineering philosophy is designed to operate, not a claim of
              existing deployments in every sector listed. As verifiable work
              becomes publishable, this page can be updated with permissioned
              case studies and implementation details.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
