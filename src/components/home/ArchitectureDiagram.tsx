import { deterministicArchitecture } from "@/data/principles";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight } from "lucide-react";

export function ArchitectureDiagram() {
  const { eyebrow, title, description, stages } = deterministicArchitecture;

  return (
    <section className="section-space bg-ledger-950 text-white">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow text-semantic-400">{eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            {description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          {stages.map((stage, i) => (
            <div key={stage.id} className="contents">
              <Reveal delay={i * 0.12} className="h-full">
                <div className="h-full rounded-xl2 border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <span className="font-mono text-xs text-semantic-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg text-white">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
              {i < stages.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden items-center justify-center md:flex"
                >
                  <ArrowRight className="text-white/30" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
