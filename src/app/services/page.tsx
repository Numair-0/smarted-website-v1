import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Code2, Target, Workflow } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { studioServices, engagementModel } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise AI engineering, deterministic automation, core ledgers, integration hubs, and executive intelligence systems from SMARTED SYSTEMS.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services - SMARTED SYSTEMS",
    description:
      "Deterministic AI engineering and enterprise software systems for serious operational workflows.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: studioServices.map((s, i) => ({
    "@type": "Service",
    position: i + 1,
    name: s.name,
    description: s.summary,
    provider: {
      "@type": "Organization",
      name: "SMARTED SYSTEMS",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <PageHeader
        eyebrow="Services"
        title="Enterprise AI engineering, priced around business outcomes."
        description="We do not sell generic AI features. We design deterministic software systems for specific operational problems, then build them with the rigor expected from core business infrastructure."
      />

      <section className="section-space">
        <div className="container-page space-y-10">
          {studioServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.06}>
              <article className="card-surface overflow-hidden">
                <div className="grid gap-px bg-canvas-line lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="bg-white p-8 md:p-10">
                    <span className="font-mono text-xs text-execute-600">
                      0{i + 1}
                    </span>
                    <h2 className="mt-3 text-2xl md:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-4 leading-relaxed text-ink-500">
                      {service.summary}
                    </p>
                    <div className="mt-7 rounded-xl2 border border-canvas-line bg-canvas-tint p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                        <Target size={16} className="text-execute-600" />
                        Business problem
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-600">
                        {service.businessProblem}
                      </p>
                    </div>
                    <div className="mt-4 rounded-xl2 border border-canvas-line bg-white p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                        <Workflow size={16} className="text-signal-green" />
                        Business value
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-600">
                        {service.businessValue}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-px bg-canvas-line md:grid-cols-2">
                    <ServiceList title="Capabilities" items={service.capabilities} />
                    <ServiceList title="Typical use cases" items={service.typicalUseCases} />
                    <ServiceList title="Business outcomes" items={service.businessOutcomes} />
                    <div className="bg-white p-7">
                      <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                        <Code2 size={16} className="text-execute-600" />
                        Engineering notes
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-ink-500">
                        {service.engineeringNotes}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="engagement-model" className="section-space bg-canvas-tint">
        <div className="container-page max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">{engagementModel.eyebrow}</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              {engagementModel.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              {engagementModel.description}
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Discuss your project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-7">
      <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
            <CheckCircle2
              size={15}
              className="mt-0.5 shrink-0 text-signal-green"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
