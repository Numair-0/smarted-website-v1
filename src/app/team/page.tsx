import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The engineering-first team behind SMARTED SYSTEMS. Real members only; no fictional profiles.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Team", href: "/team" }]} />
      <PageHeader
        eyebrow="Team"
        title={
          team.length > 0
            ? "The people building SMARTED SYSTEMS."
            : "An intentionally small engineering-first team."
        }
        description={
          team.length > 0
            ? "Real public team profiles for the people building SMARTED SYSTEMS."
            : "We're intentionally growing a small engineering-first team."
        }
      />

      <section className="section-space">
        <div className="container-page">
          {team.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <Reveal key={member.id} delay={i * 0.06}>
                  <div className="card-surface overflow-hidden">
                    <div className="relative aspect-[4/5] w-full bg-canvas-tint">
                      {member.photoSrc && (
                        <Image
                          src={member.photoSrc}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg">{member.name}</h2>
                      <p className="mt-1 text-sm text-execute-600">
                        {member.role}
                      </p>
                      {member.bio && (
                        <p className="mt-3 text-sm leading-relaxed text-ink-500">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto max-w-2xl rounded-xl2 border border-canvas-line bg-canvas-tint p-8 text-center shadow-soft md:p-12">
              <p className="text-xl font-semibold text-ink-900">
                We&apos;re intentionally growing a small engineering-first team.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500">
                No invented employees, no decorative headshots, and no fake
                leadership bench. As public profiles are ready, they will be
                added here from the real team data source.
              </p>
              <Link href="/contact" className="btn-primary mt-7 inline-flex">
                Get in touch
              </Link>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
