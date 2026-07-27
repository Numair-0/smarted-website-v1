"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="section-space">
      <div className="container-page max-w-3xl">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Common questions.</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-canvas-line border-t border-canvas-line">
          {faqItems.map((item, i) => {
            const open = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : item.id)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-ink-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      size={18}
                      className={cn(
                        "shrink-0 text-ink-400 transition-transform duration-300",
                        open && "rotate-180 text-execute-600"
                      )}
                    />
                  </button>
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      open
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-ink-500">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
