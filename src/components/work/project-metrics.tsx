"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "next-intl";

import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectMetrics({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const locale = useLocale();
  const metrics =
    locale === "tr" && project.metricsTr?.length ? project.metricsTr : project.metrics ?? [];
  if (!metrics.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-3 sm:grid-cols-3"
    >
      {metrics.slice(0, 3).map((m) => (
        <div
          key={m.label}
          className={cn(
            "rounded-2xl border border-border/70 bg-card/50 p-5 shadow-sm",
            "relative overflow-hidden"
          )}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
            <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_260/.12),transparent_60%)] blur-xl" />
          </div>
          <div className="relative">
            <div className="text-xs font-medium tracking-[0.14em] text-muted-foreground">
              {m.label}
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight">
              {m.value}
            </div>
            {m.note ? (
              <div className="mt-1 text-xs text-muted-foreground">{m.note}</div>
            ) : null}
          </div>
        </div>
      ))}
    </motion.section>
  );
}

