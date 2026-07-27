import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with SMARTED SYSTEMS or reach out directly by email, phone, or WhatsApp.",
  alternates: { canonical: "/contact" },
};

const process = [
  "Operational bottleneck review",
  "Data, workflow, and risk boundary mapping",
  "Deterministic architecture recommendation",
] as const;

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <PageHeader
        eyebrow="Contact"
        title="Tell us where your operation is stuck."
        description="The more specific the bottleneck, the faster we can identify whether a deterministic AI system is the right solution."
      />

      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-5">
              <ContactCard
                href={whatsappHref}
                external
                icon={MessageCircle}
                title="WhatsApp CTA"
                value={siteConfig.whatsapp.display}
              />
              <ContactCard
                href={`mailto:${siteConfig.email}`}
                icon={Mail}
                title="Email"
                value={siteConfig.email}
              />
              <ContactCard
                href={`tel:${siteConfig.phone.number}`}
                icon={Phone}
                title="Phone"
                value={siteConfig.phone.display}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <InfoCard icon={Clock} title="Response time" value={siteConfig.responseTime} />
                <InfoCard icon={MapPin} title="Office" value={siteConfig.office} />
              </div>
              <InfoCard
                icon={Workflow}
                title="Business hours"
                value={siteConfig.businessHours}
              />
              <div className="rounded-xl2 border border-canvas-line bg-canvas-tint p-6">
                <h2 className="text-lg">Consultation process</h2>
                <ol className="mt-4 space-y-3">
                  {process.map((item, i) => (
                    <li key={item} className="flex gap-3 text-sm text-ink-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ledger-900 font-mono text-[11px] text-white">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface p-8 md:p-10">
              <div className="mb-8">
                <p className="eyebrow">Professional contact form</p>
                <h2 className="mt-4 text-2xl">Scope the first conversation.</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  Share the business problem, systems involved, and what a
                  successful operational outcome would look like.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  href,
  external,
  icon: Icon,
  title,
  value,
}: {
  href: string;
  external?: boolean;
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="card-surface flex items-center gap-4 p-5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-execute-500/10 text-execute-600">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span>
        <span className="block font-medium text-ink-900">{title}</span>
        <span className="block break-all text-sm text-ink-500">{value}</span>
      </span>
    </a>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl2 border border-canvas-line bg-white p-5 shadow-soft">
      <Icon size={18} className="text-execute-600" aria-hidden="true" />
      <p className="mt-3 text-sm font-medium text-ink-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink-500">{value}</p>
    </div>
  );
}
