"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "@/content/projects";
import { Lightbox } from "@/components/ui/lightbox";
import { cn } from "@/lib/utils";

export function ProjectGallery({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const items = project.gallery ?? [];
  if (!items.length) return null;

  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const active = items[activeIndex] ?? null;

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {items.slice(0, 4).map((it, idx) => (
            <button
              key={it.title}
              type="button"
              onClick={() => {
                setActiveIndex(idx);
                setOpen(true);
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 shadow-sm",
                "text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              )}
            >
              <div className="aspect-[16/10] w-full">
                <div className="grid h-full w-full place-items-center">
                  <div className="text-center px-6">
                    <div className="text-sm font-semibold tracking-tight">
                      {it.title}
                    </div>
                    {it.description ? (
                      <div className="mt-1 text-xs text-muted-foreground">
                        {it.description}
                      </div>
                    ) : null}
                    <div className="mt-4 inline-flex items-center rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      Click to preview
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <div className="absolute -top-12 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_260/.16),transparent_60%)] blur-2xl" />
              </div>
            </button>
          ))}
        </div>
      </motion.section>

      <Lightbox
        open={open}
        onOpenChange={setOpen}
        item={
          active
            ? {
                src: active.src,
                alt: active.alt,
                title: active.title,
                description: active.description,
              }
            : null
        }
      />
    </>
  );
}

