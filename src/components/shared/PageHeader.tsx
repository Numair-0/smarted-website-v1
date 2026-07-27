import { Reveal } from "@/components/motion/Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-canvas-line bg-canvas-tint">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(79,211,224,0.18),transparent_28rem),radial-gradient(circle_at_84%_0%,rgba(47,111,239,0.12),transparent_32rem)]"
      />
      <div className="container-page relative py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
