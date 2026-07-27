import { Reveal } from "@/components/motion/Reveal";

const differentiators = [
  {
    title: "No uncontrolled AI execution",
    description:
      "Models classify intent. Deterministic systems validate permissions, rules, schemas, and state transitions before production systems change.",
  },
  {
    title: "Studio work compounds into BizOS",
    description:
      "Every engagement is a real business solution first and a platform learning loop second, strengthening reusable infrastructure without pretending the platform is already finished.",
  },
  {
    title: "Trust through process, not logos",
    description:
      "We do not use fake clients, testimonials, awards, or statistics. We show engineering process, quality standards, and transparent scope instead.",
  },
];

export function WhySmartedSystems() {
  return (
    <section className="section-space">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Why SMARTED SYSTEMS</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            Enterprise trust comes from deterministic architecture, not AI
            theater.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full border-l border-canvas-line bg-white/60 p-6 shadow-soft">
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
