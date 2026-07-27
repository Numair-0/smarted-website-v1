import Link from "next/link";
import { studioServices } from "@/data/services";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="section-space bg-canvas-tint">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">What we build</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            AI engineering, ledgers, automation, and intelligence systems
            sharing one deterministic core.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {studioServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <div className="card-surface h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-execute-600">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-canvas-line bg-canvas-tint px-3 py-1 text-[11px] font-medium text-ink-500">
                    Enterprise system
                  </span>
                </div>
                <h3 className="mt-4 text-xl">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {service.summary}
                </p>
                <div className="mt-5 border-t border-canvas-line pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    Business value
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {service.businessValue}
                  </p>
                </div>
                <ul className="mt-5 space-y-2">
                  {service.businessOutcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-signal-green"
                        aria-hidden="true"
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link href="/services" className="link-premium mt-10">
            View all services
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
