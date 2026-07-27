import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const fullTrail = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullTrail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${siteConfig.url}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="container-page pt-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
          {fullTrail.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
              {i === fullTrail.length - 1 ? (
                <span aria-current="page" className="text-ink-700">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-ink-700">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
