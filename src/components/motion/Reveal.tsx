"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** direction the content travels in from */
  y?: number;
}

/**
 * Scroll-triggered fade + rise. This is the single reveal primitive used
 * across the site so motion stays consistent rather than scattered.
 * Respects prefers-reduced-motion via Framer's built-in handling combined
 * with the CSS override in globals.css.
 */
export function Reveal({ children, delay = 0, className, y = 20 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
