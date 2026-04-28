"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectNotes({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly { title: string; detail: string }[];
}) {
  const reduceMotion = useReducedMotion();
  if (!items.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
          {eyebrow.toUpperCase()}
        </div>
        <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-4">
        {items.slice(0, 6).map((it) => (
          <div
            key={it.title}
            className={cn(
              "rounded-2xl border border-border/70 bg-card/50 p-6 shadow-sm",
              "relative overflow-hidden"
            )}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
              <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_260/.12),transparent_60%)] blur-xl" />
            </div>
            <div className="relative">
              <div className="text-sm font-semibold tracking-tight">{it.title}</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {it.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function ProjectDecisions({ project }: { project: Project }) {
  return (
    <ProjectNotes
      eyebrow="Decisions"
      title="Decisions & trade-offs"
      items={project.decisions ?? []}
    />
  );
}

export function ProjectArchitecture({ project }: { project: Project }) {
  return (
    <ProjectNotes
      eyebrow="Architecture"
      title="System design"
      items={project.architecture ?? []}
    />
  );
}

