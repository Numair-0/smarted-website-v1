import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { principles } from "@/data/principles";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why SMARTED SYSTEMS exists, its mission, engineering philosophy, and long-term vision for an AI-native Business Operating System.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Determinism over demos",
    description:
      "A beautiful prototype is not enough. Production AI software needs predictable state, permissions, validation, observability, and rollback paths.",
  },
  {
    title: "Business value before novelty",
    description:
      "We adopt AI where it improves execution quality, cycle time, decision speed, or operational clarity, not because a feature can be described as AI-powered.",
  },
  {
    title: "Small team, high standards",
    description:
      "We prefer a focused engineering team with strong written thinking, clear ownership, and deep accountability over a bloated delivery model.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <PageHeader
        eyebrow="About SMARTED SYSTEMS"
        title="We are building the engineering foundation for AI-native business operations."
        description="SMARTED SYSTEMS exists to move companies beyond static dashboards, brittle integrations, and manual coordination toward deterministic AI systems that understand, validate, and execute work."
      />

      <section className="section-space">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full p-8">
              <p className="eyebrow">Mission</p>
              <h2 className="mt-4 text-2xl">
                Build intelligent business systems that execute with precision.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Our mission is to help organizations automate core operations,
                reduce manual coordination, and run on software that is
                observable, governed, and engineered for real business stakes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-surface h-full p-8">
              <p className="eyebrow">Vision</p>
              <h2 className="mt-4 text-2xl">
                A future Business Operating System for AI-native companies.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                The long-term vision is BizOS: a unified operating layer where
                companies deploy governed AI Employees and deterministic
                workflows instead of stitching together disconnected point
                solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-canvas-tint">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Studio to Platform to BizOS</p>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              The company model is deliberate: services create the proof,
              platform primitives create the leverage.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Studio",
                copy: "Custom enterprise engagements solve specific operational problems and expose real infrastructure requirements.",
              },
              {
                title: "Platform",
                copy: "Reusable ledgers, orchestrators, integrations, analytics surfaces, and security patterns compound delivery quality.",
              },
              {
                title: "BizOS",
                copy: "The long-term platform vision turns proven primitives into an AI-native operating system for business execution.",
              },
            ].map((stage, i) => (
              <Reveal key={stage.title} delay={i * 0.08}>
                <div className="card-surface h-full p-7">
                  <span className="font-mono text-xs text-execute-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-xl">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {stage.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Engineering Philosophy</p>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Structural correctness is the product strategy.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              We optimize for systems that are readable, testable, observable,
              secure, and safe to evolve. AI changes the interface; engineering
              discipline determines whether the system deserves enterprise
              trust.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-canvas-line bg-canvas-line md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06} className="bg-white p-8">
                <h3 className="text-base">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {p.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ledger-950 text-white">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-semantic-400">Timeline</p>
            <h2 className="mt-4 max-w-2xl text-3xl text-white md:text-4xl">
              A focused path from engineering studio to AI-native operating
              system.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="h-full rounded-xl2 border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="font-mono text-xs text-semantic-400">
                    {item.year}
                  </p>
                  <h3 className="mt-3 text-lg text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Values</p>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              How SMARTED SYSTEMS chooses what to build and how to build it.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="card-surface h-full p-7">
                  <h3 className="text-lg">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
