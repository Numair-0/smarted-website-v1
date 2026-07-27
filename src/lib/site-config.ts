/**
 * Single source of truth for verified company facts.
 * Nothing in this file is fabricated. Placeholder social URLs are isolated
 * in src/lib/social.ts so they can be updated once official profiles exist.
 */
export const siteConfig = {
  name: "SMARTED SYSTEMS",
  navbarName: "SMARTED",
  legalName: "SMARTED SYSTEMS",
  founded: 2024,
  domain: "smartedsystems.in",
  url: "https://smartedsystems.in",
  email: "smartedsystemss@gmail.com",
  phone: {
    number: "+918882264517",
    display: "+91 88822 64517",
  },
  office: "India / Remote-first delivery studio",
  businessHours: "Monday to Friday, 10:00 AM - 6:00 PM IST",
  responseTime: "Typical response within 1 business day",
  whatsapp: {
    number: "+918882264517",
    display: "+91 88822 64517",
    prefilledMessage:
      "Hello SMARTED SYSTEMS, I would like to discuss my project.",
  },
  tagline: "Deterministic AI Engineering for the Enterprise",
  description:
    "SMARTED SYSTEMS is a premium AI engineering company building deterministic, enterprise-grade AI software and the R&D foundation for an AI-native Business Operating System.",
} as const;

export const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number.replace(
  /\+/g,
  ""
)}?text=${encodeURIComponent(siteConfig.whatsapp.prefilledMessage)}`;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
  ],
  resources: [
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ],
  engineering: [
    { href: "/services", label: "AI Engineering" },
    { href: "/services#engagement-model", label: "Engagement Model" },
    { href: "/industries", label: "Operating Domains" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
} as const;
