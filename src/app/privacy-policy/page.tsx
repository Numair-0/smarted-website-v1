import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SMARTED SYSTEMS collects, uses, stores, and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Information Collection",
    body: `We collect information you choose to provide when you contact ${siteConfig.name}, including name, company, email address, phone number, and project requirements. We may also receive standard technical information such as IP address, browser type, device information, referral source, and pages viewed when you access ${siteConfig.domain}.`,
  },
  {
    title: "How We Use Information",
    body: "We use information to respond to inquiries, evaluate potential engagements, operate and secure the website, improve user experience, maintain business records, and comply with applicable legal obligations. We do not sell personal information.",
  },
  {
    title: "Cookies",
    body: "The website may use essential cookies or similar technologies needed for security, performance, and basic site functionality. If analytics or marketing tools are added later, this policy should be updated to describe those tools and any available consent controls.",
  },
  {
    title: "Analytics",
    body: "We may review aggregated website usage information to understand traffic patterns and improve the site. Any analytics configuration should be privacy-conscious, limited to legitimate business purposes, and avoid collecting unnecessary personal information.",
  },
  {
    title: "Security",
    body: "We apply reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, disclosure, alteration, and loss. No method of transmission or storage is perfectly secure, but security is treated as an engineering requirement rather than an afterthought.",
  },
  {
    title: "Third Party Services",
    body: "We may use third-party infrastructure, hosting, form processing, email, analytics, or communication providers to operate the website and respond to inquiries. These providers should process information only for authorized business purposes and subject to appropriate confidentiality and security obligations.",
  },
  {
    title: "Data Storage and Retention",
    body: "We retain inquiry and business communication records only as long as reasonably necessary for the purpose for which they were collected, including responding to you, managing potential engagements, recordkeeping, dispute prevention, and legal compliance. You may request deletion where applicable law permits.",
  },
  {
    title: "India DPDP Act Considerations",
    body: "Where India&apos;s Digital Personal Data Protection Act, 2023 applies, we aim to process personal data for lawful purposes, provide clear notice, limit collection to relevant information, protect data using reasonable safeguards, and respond to applicable data principal rights requests.",
  },
  {
    title: "GDPR-Friendly Structure",
    body: "Where GDPR applies, our processing may rely on consent, legitimate interests, contractual necessity, or legal obligations depending on the context. Individuals may have rights to access, correction, deletion, restriction, objection, portability, and complaint to a supervisory authority.",
  },
  {
    title: "Contact",
    body: `Questions, privacy requests, or concerns can be sent to ${siteConfig.email}. We may need to verify your identity before acting on certain requests.`,
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "27 July 2026";

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how SMARTED SYSTEMS handles personal information collected through the website and business inquiry channels."
      />
      <section className="section-space">
        <div className="container-page max-w-3xl space-y-8 text-ink-700">
          <p className="text-sm text-ink-400">Last updated: {lastUpdated}</p>
          <p className="leading-relaxed">
            This Privacy Policy applies to {siteConfig.name} and the website{" "}
            {siteConfig.domain}. It is written to be transparent about what we
            collect, why we collect it, and how to contact us about privacy
            matters.
          </p>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl text-ink-900">{section.title}</h2>
              <p
                className="mt-3 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
            </section>
          ))}

          <p className="rounded-xl2 border border-canvas-line bg-canvas-tint p-6 text-sm leading-relaxed text-ink-500">
            This policy is intended for website and inquiry handling. Specific
            client engagements may require separate data processing,
            confidentiality, security, or regulatory terms in a written
            agreement.
          </p>
        </div>
      </section>
    </>
  );
}
