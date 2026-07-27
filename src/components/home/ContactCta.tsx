import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { whatsappHref } from "@/lib/site-config";

export function ContactCta() {
  return (
    <section className="section-space">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 border border-white/10 bg-gradient-to-br from-ledger-950 via-ledger-900 to-execute-700 px-8 py-16 text-center text-white shadow-lifted md:px-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,211,224,0.22),transparent_28rem)]"
            />
            <div className="relative">
              <h2 className="text-3xl text-white md:text-4xl">
                Let&apos;s scope the operational bottleneck.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                Bring one concrete workflow, system, or decision path. We will
                map the business problem and show what deterministic AI
                architecture could look like.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ledger-900 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Book a consultation
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
