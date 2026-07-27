import Link from "next/link";
import { team } from "@/data/team";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";

export function TeamSnapshot() {
  return (
    <section className="section-space bg-canvas-tint">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">
            {team.length > 0
              ? "The people building SMARTED SYSTEMS."
              : "A small, deliberate engineering team."}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-500">
            {team.length > 0
              ? "Meet the real founders and engineers behind SMARTED SYSTEMS."
              : "We're intentionally growing a small engineering-first team. Reach out directly and you will speak with the people closest to the engineering work."}
          </p>
          <Link href="/team" className="link-premium mt-6">
            {team.length > 0 ? "Meet the team" : "Visit the team page"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
