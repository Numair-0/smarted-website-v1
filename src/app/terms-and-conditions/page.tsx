import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing use of the SMARTED SYSTEMS website and service inquiries.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  {
    title: "Website Usage",
    body: `The ${siteConfig.domain} website is provided for informational and business inquiry purposes. You agree not to misuse the site, interfere with its operation, probe or attack its systems, submit unlawful or misleading information, or use the site in a way that violates applicable law.`,
  },
  {
    title: "Services",
    body: "Website descriptions of services are general information only and do not create a binding offer, guarantee, warranty, or engagement. Any services provided by SMARTED SYSTEMS are governed by a separately executed written agreement defining scope, deliverables, timelines, responsibilities, and acceptance criteria.",
  },
  {
    title: "Intellectual Property",
    body: `The website, brand assets, copy, design, code, structure, and SMARTED SYSTEMS name are owned by ${siteConfig.name} or its licensors unless stated otherwise. You may not copy, modify, distribute, or commercially exploit website materials without written permission.`,
  },
  {
    title: "Payments",
    body: "Payments, billing milestones, taxes, currency, late fees, and invoicing terms are not handled through this website. They must be specified in the applicable proposal, statement of work, master services agreement, invoice, or other written commercial agreement.",
  },
  {
    title: "Refunds",
    body: "Refunds, credits, cancellations, or reversals for professional services are governed by the written agreement applicable to the engagement. Unless that agreement states otherwise, fees for completed work, reserved capacity, discovery, architecture, consulting, or delivered milestones may be non-refundable.",
  },
  {
    title: "Liability",
    body: "The website is provided on an as-is and as-available basis. To the maximum extent permitted by law, SMARTED SYSTEMS disclaims liability for indirect, incidental, consequential, special, punitive, or loss-of-profit damages arising from use of the website.",
  },
  {
    title: "Confidentiality",
    body: "Please do not submit confidential, sensitive, regulated, or proprietary information through the public contact form unless a confidentiality agreement or engagement agreement is already in place. Confidentiality obligations for client work must be defined in the applicable written agreement.",
  },
  {
    title: "Termination",
    body: "We may suspend or restrict access to the website if we reasonably believe a user is misusing it, attempting unauthorized access, violating these terms, or creating operational, legal, or security risk. Service engagement termination is governed by the applicable written agreement.",
  },
  {
    title: "Jurisdiction",
    body: "Unless a separate written agreement states otherwise, these website terms are intended to be governed by the laws of India, and disputes related to website use should be resolved in courts or forums with competent jurisdiction in India.",
  },
  {
    title: "Contact",
    body: `Questions about these terms can be directed to ${siteConfig.email}.`,
  },
];

export default function TermsPage() {
  const lastUpdated = "27 July 2026";

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms govern use of the SMARTED SYSTEMS website and clarify how service inquiries relate to formal commercial agreements."
      />
      <section className="section-space">
        <div className="container-page max-w-3xl space-y-8 text-ink-700">
          <p className="text-sm text-ink-400">Last updated: {lastUpdated}</p>
          <p className="leading-relaxed">
            These Terms & Conditions apply to your use of {siteConfig.domain}.
            By accessing the site, you agree to use it responsibly and in
            accordance with these terms.
          </p>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl text-ink-900">{section.title}</h2>
              <p className="mt-3 leading-relaxed">{section.body}</p>
            </section>
          ))}

          <p className="rounded-xl2 border border-canvas-line bg-canvas-tint p-6 text-sm leading-relaxed text-ink-500">
            These website terms do not replace a signed client agreement.
            Formal engagements should use project-specific legal, commercial,
            confidentiality, security, and intellectual property terms.
          </p>
        </div>
      </section>
    </>
  );
}
