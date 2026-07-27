import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/social";

const socialIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
  twitter: Twitter,
  youtube: Youtube,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-canvas-line bg-ledger-950 text-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={30}
              height={30}
              className="h-7 w-7"
            />
            <span className="font-display text-base font-semibold text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.id];
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-semantic-400/60 hover:text-white"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Resources" links={footerLinks.resources} />
        <FooterColumn title="Engineering" links={footerLinks.engineering} />
      </div>

      <div className="border-t border-white/10">
        <div className="container-page grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3 text-sm text-white/60">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={16} aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.number}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={16} aria-hidden="true" />
              {siteConfig.phone.display}
            </a>
          </div>
          <div className="flex flex-col gap-4 text-xs text-white/45 md:items-end">
            <ul className="flex flex-wrap gap-5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              Copyright {new Date().getFullYear()} {siteConfig.name}.  All rights reserved.
            </p>
            <p>Backed by SHIVANSH GLOBAL SERVICES</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-semantic-400">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
