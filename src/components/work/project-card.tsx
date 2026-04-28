"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import type { Project } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground shadow-sm">
      {children}
    </span>
  );
}

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const t = useTranslations();
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const isTr = locale === "tr";
  const description = isTr && project.descriptionTr ? project.descriptionTr : project.description;
  const highlights =
    isTr && project.highlightsTr ? project.highlightsTr : project.highlights;

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.06, 0.18),
      }}
      layoutId={`project-card-${project.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm",
        "transition-colors hover:bg-card"
      )}
    >
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        aria-label={`Open case study: ${project.title}`}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_260/.18),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.8_0.22_155/.14),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-20">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-medium tracking-[0.14em] text-muted-foreground">
              {project.timeframe}
            </div>
            <motion.h3
              layoutId={`project-title-${project.slug}`}
              className={cn(
                featured ? "text-xl sm:text-2xl" : "text-lg",
                "font-semibold tracking-tight"
              )}
            >
              {project.title}
            </motion.h3>
          </div>

          <div className="flex items-center gap-1">
            {project.links?.source ? (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="relative z-20 rounded-xl"
              >
                <Link
                  href={project.links.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Source"
                >
                  <FolderGit2 className="size-4" />
                </Link>
              </Button>
            ) : null}
            {project.links?.live ? (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="relative z-20 rounded-xl"
              >
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className={cn("flex flex-wrap gap-2", featured ? "mt-6" : "mt-5")}>
          {project.tags.slice(0, 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {highlights?.length ? (
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex items-center justify-between">
          <Button
            asChild
            variant="secondary"
            className="relative z-20 h-9 rounded-xl px-4"
          >
            <Link href={`/${locale}/projects/${project.slug}`}>
              {t("projects.readCaseStudy")} <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

