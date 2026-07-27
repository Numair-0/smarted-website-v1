"use client";

import { motion } from "framer-motion";

interface KnotDrawProps {
  className?: string;
}

/**
 * The site's signature motion moment: a line-art rendition of the two
 * interlocking loops in the Smarted mark, drawing itself in on load.
 * It's a literal expression of the brand thesis — fragmented systems
 * (two separate loops) resolving into a single interlocked structure.
 * Used once, in the hero. Everywhere else, the motif appears static
 * as a quiet section divider.
 */
export function KnotDraw({ className }: KnotDrawProps) {
  const pathTransition = (delay: number) => ({
    pathLength: { duration: 1.4, delay, ease: [0.65, 0, 0.35, 1] as const },
    opacity: { duration: 0.4, delay },
  });

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d="M92 60 C48 60 24 92 24 120 C24 148 48 176 80 176 C104 176 120 160 140 140 C160 120 176 104 176 80"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        className="text-ledger-900"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={pathTransition(0)}
      />
      <motion.path
        d="M148 60 C192 60 216 92 216 120 C216 148 192 176 160 176 C136 176 120 160 100 140 C80 120 64 104 64 80"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        className="text-execute-500"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={pathTransition(0.25)}
      />
    </svg>
  );
}
