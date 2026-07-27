import { industries } from "@/data/industries";
import { Reveal } from "@/components/motion/Reveal";

export function IndustriesStrip() {
  return (
    <section className="section-space">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Operating domains</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            Designed for complex industries where software must be accurate,
            observable, and accountable.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((industry, i) => (
            <Reveal key={industry.id} delay={i * 0.06}>
              <div className="card-surface h-full p-6">
                <h3 className="text-lg">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
