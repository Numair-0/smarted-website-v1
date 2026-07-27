import { principles } from "@/data/principles";
import { Reveal } from "@/components/motion/Reveal";

export function EngineeringPrinciples() {
  return (
    <section className="section-space bg-canvas-tint">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Engineering Principles</p>
          <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">
            How we hold ourselves accountable.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-canvas-line bg-canvas-line md:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal key={principle.id} delay={i * 0.06} className="bg-white p-8">
              <h3 className="text-lg">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {principle.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
