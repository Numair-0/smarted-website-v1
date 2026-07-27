"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-canvas-line/80 bg-white/82 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-white/40 backdrop-blur-sm"
      )}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label="SMARTED home"
        >
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
            {siteConfig.navbarName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-execute-600 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  active && "text-ink-900 after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-canvas-line bg-white/80 text-ink-900 shadow-soft md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-canvas-line bg-white/95 px-6 pb-6 pt-2 shadow-lifted backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-xl2 px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-canvas-tint",
                      active && "bg-canvas-tint text-ink-900"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
