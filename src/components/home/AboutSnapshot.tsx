import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";

const thesis = [
  "Business problem: operational work is trapped across disconnected systems.",
  "Engineering approach: model workflows as typed states, permissions, and deterministic execution paths.",
  "Business outcome: teams move from manual coordination to governed automation.",
] as const;

export function AboutSnapshot() {
  return (
    <section className="section-space">
      <div className="container-page grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">The Thesis</p>
          <h2 className="mt-4 text-3xl md:text-4xl">
            Software should execute operations, not just store them.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-ink-500">
            SMARTED SYSTEMS exists because most enterprise software is still a
            static record system with humans doing the execution around it. We
            build AI-native business infrastructure where unstructured input is
            understood, validated, routed, and executed through deterministic
            architecture.
          </p>
          <div className="mt-7 grid gap-3">
            {thesis.map((item) => (
              <div
                key={item}
                className="rounded-xl2 border border-canvas-line bg-white/80 p-4 text-sm leading-relaxed text-ink-700 shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
          <Link href="/about" className="link-premium mt-7">
            Read our full story
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
