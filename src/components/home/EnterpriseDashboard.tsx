"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Activity,
  Bot,
  Boxes,
  DatabaseZap,
  GitBranch,
  HeartPulse,
  LineChart,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const kpis = [
  { label: "Executive KPI", value: "Placeholder", tone: "text-execute-600" },
  { label: "Pipeline Status", value: "Validated", tone: "text-signal-green" },
  { label: "System Health", value: "Monitored", tone: "text-semantic-500" },
] as const;

const activity = [
  "Intent classified",
  "Policy check passed",
  "Workflow queued",
  "Audit event written",
] as const;

const integrations = ["ERP", "CRM", "Ledger", "Ops", "BI"] as const;

export function EnterpriseDashboard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 18 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  return (
    <motion.div
      aria-label="Enterprise AI operating dashboard visualization"
      className="relative mx-auto w-full max-w-[640px] perspective-1000"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 bg-[radial-gradient(circle_at_20%_20%,rgba(79,211,224,0.22),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(47,111,239,0.18),transparent_30%),linear-gradient(135deg,rgba(24,26,74,0.12),transparent)] blur-2xl"
      />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-xl2 border border-white/70 bg-white/80 p-3 shadow-[0_28px_90px_rgba(12,14,31,0.16)] backdrop-blur-xl"
      >
        <div className="absolute inset-x-0 top-0 h-px animate-scan-line bg-gradient-to-r from-transparent via-semantic-400 to-transparent" />
        <div className="rounded-xl2 border border-canvas-line bg-canvas p-4">
          <div className="flex items-center justify-between border-b border-canvas-line pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                AI Operating Dashboard
              </p>
              <h2 className="mt-1 text-lg">Enterprise execution layer</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-canvas-line bg-canvas-tint px-3 py-1.5 text-xs font-medium text-ink-700">
              <Activity size={14} className="text-signal-green" aria-hidden="true" />
              Live model
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {kpis.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                className="rounded-xl2 border border-canvas-line bg-white p-3 shadow-soft"
              >
                <p className="text-[11px] text-ink-400">{item.label}</p>
                <p className={`mt-2 text-sm font-semibold ${item.tone}`}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
            <Panel title="Revenue analytics" icon={LineChart}>
              <div className="flex h-36 items-end gap-2">
                {[42, 64, 52, 78, 70, 88, 74, 92].map((height, i) => (
                  <span
                    key={height + i}
                    className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-execute-600 to-semantic-300 animate-bar-rise"
                    style={{ height: `${height}%`, animationDelay: `${i * 90}ms` }}
                  />
                ))}
              </div>
            </Panel>

            <Panel title="AI agent status" icon={Bot}>
              <div className="space-y-3">
                {["Triage", "Validation", "Execution"].map((label, i) => (
                  <div key={label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-ink-500">{label}</span>
                      <span className="font-mono text-ink-400">--</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-canvas-line">
                      <motion.div
                        initial={{ width: "18%" }}
                        animate={{ width: `${62 + i * 12}%` }}
                        transition={{ duration: 1.1, delay: 0.35 + i * 0.1 }}
                        className="h-full rounded-full bg-ledger-900"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
            <Panel title="Workflow graph" icon={GitBranch}>
              <div className="grid grid-cols-3 items-center gap-2 text-center text-[11px] text-ink-500">
                {["Input", "Rules", "Execute", "Audit", "Queue", "Notify"].map(
                  (node, i) => (
                    <motion.div
                      key={node}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.45 + i * 0.05 }}
                      className="rounded-xl2 border border-canvas-line bg-canvas-tint px-2 py-2"
                    >
                      {node}
                    </motion.div>
                  )
                )}
              </div>
            </Panel>

            <Panel title="Activity feed" icon={DatabaseZap}>
              <div className="space-y-2">
                {activity.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-2 rounded-xl2 border border-canvas-line bg-white px-3 py-2 text-xs text-ink-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-semantic-400" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </motion.div>

      <FloatingWidget className="-left-2 top-12" icon={ShieldCheck} label="Policy guardrails" />
      <FloatingWidget className="-right-2 top-28" icon={Network} label="Connected integrations" />
      <FloatingWidget className="bottom-8 left-8" icon={HeartPulse} label="System health" />
      <FloatingWidget className="bottom-20 right-5" icon={Boxes} label={integrations.join(" / ")} />
    </motion.div>
  );
}

function Panel({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl2 border border-canvas-line bg-canvas-tint/70 p-3">
      <div className="mb-3 flex items-center gap-2">
        <Icon size={15} className="text-execute-600" aria-hidden="true" />
        <h3 className="text-sm">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function FloatingWidget({
  className,
  icon: Icon,
  label,
}: {
  className: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className={`absolute hidden animate-float items-center gap-2 rounded-full border border-white/70 bg-white/85 px-3 py-2 text-xs font-medium text-ink-700 shadow-lifted backdrop-blur md:flex ${className}`}
    >
      <Icon size={14} className="text-execute-600" />
      {label}
    </motion.div>
  );
}
