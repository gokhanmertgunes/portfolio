"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
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

export function ProjectHero({ project }: { project: Project }) {
  const t = useTranslations();
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const description =
    locale === "tr" && project.descriptionTr ? project.descriptionTr : project.description;

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_260/.22),transparent_60%)] blur-2xl" />
        <div className="absolute -top-20 left-1/2 h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.8_0.22_155/.14),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.145_0_0/.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.145_0_0/.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-70 dark:bg-[linear-gradient(to_right,oklch(1_0_0/.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/.06)_1px,transparent_1px)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0/.9))] dark:bg-[linear-gradient(to_bottom,transparent,oklch(0.145_0_0/.9))]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:py-16 lg:px-8">
        <motion.div
          layoutId={`project-card-${project.slug}`}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-xs font-medium tracking-[0.14em] text-muted-foreground">
              {project.timeframe}
            </div>
            <span className="h-3 w-px bg-border" aria-hidden />
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <motion.h1
            layoutId={`project-title-${project.slug}`}
            className={cn(
              "mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
              "leading-[1.05]"
            )}
          >
            {project.title}
          </motion.h1>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="h-11 rounded-xl px-6">
              <Link href={`/${locale}/#projects`}>{t("projects.backToProjects")}</Link>
            </Button>
            <div className="flex items-center gap-2">
              {project.links?.live ? (
                <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                  <Link href={project.links.live} target="_blank" rel="noreferrer">
                    {t("projects.live")} <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
              ) : null}
              {project.links?.source ? (
                <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                  <Link href={project.links.source} target="_blank" rel="noreferrer">
                    {t("projects.source")} <FolderGit2 className="ml-2 size-4" />
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

