import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { EnterpriseDashboard } from "@/components/home/EnterpriseDashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-canvas-line bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,248,252,0.82))]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_35%_0%,rgba(47,111,239,0.16),transparent_32rem)]"
      />
      <div className="container-page relative grid items-center gap-14 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-32">
        <div>
          <Reveal>
            <p className="eyebrow">Est. 2024 - AI Engineering Company</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Enterprise AI software for operational execution.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-500">
              SMARTED SYSTEMS builds deterministic AI systems, workflow
              automation, ledgers, and executive intelligence layers for
              serious business operations. Each engagement compounds into the
              engineering foundation for an AI-native Business Operating
              System.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore our services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {[
                "Business problem",
                "Deterministic architecture",
                "Auditable outcomes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl2 border border-canvas-line bg-white/70 p-3 text-xs font-medium text-ink-600 shadow-soft backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} y={28}>
          <EnterpriseDashboard />
        </Reveal>
      </div>
    </section>
  );
}
