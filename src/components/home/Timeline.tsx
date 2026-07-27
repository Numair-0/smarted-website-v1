"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "@/data/timeline";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function Timeline() {
  const [activeId, setActiveId] = useState(timeline[0]?.id);

  return (
    <section className="section-space">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Our Trajectory</p>
          <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">
            From studio to platform.
          </h2>
        </Reveal>

        <div className="mt-14">
          <ol className="relative flex flex-col gap-2 border-l border-canvas-line pl-8 md:flex-row md:gap-0 md:border-l-0 md:border-t md:pl-0 md:pt-8">
            {timeline.map((milestone) => {
              const active = milestone.id === activeId;
              return (
                <li key={milestone.id} className="relative flex-1 md:px-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[calc(2rem+1px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-ink-400 md:-left-0 md:-top-[calc(2rem+5px)]",
                      active && "bg-execute-500",
                      milestone.isFuture && "bg-semantic-400"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setActiveId(milestone.id)}
                    aria-expanded={active}
                    className="w-full py-2 text-left"
                  >
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-400">
                      {milestone.year}
                    </span>
                    <p
                      className={cn(
                        "mt-1 text-sm font-medium text-ink-500 transition-colors",
                        active && "text-ink-900"
                      )}
                    >
                      {milestone.title}
                    </p>
                  </button>
                </li>
              );
            })}
          </ol>

          <AnimatePresence mode="wait">
            {timeline
              .filter((m) => m.id === activeId)
              .map((milestone) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 max-w-2xl rounded-xl2 border border-canvas-line bg-canvas-tint p-8"
                >
                  <p className="text-lg leading-relaxed text-ink-700">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
