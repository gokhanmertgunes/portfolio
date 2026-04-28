"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import type { Project } from "@/content/projects";

export function ProjectPager({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  if (!prev && !next) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3 border-t border-border/60 pt-10 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Project navigation"
    >
      <div>
        {prev ? (
          <Button asChild variant="outline" className="h-11 rounded-xl px-4">
            <Link href={`/${locale}/projects/${prev.slug}`}>
              <ArrowLeft className="mr-2 size-4" />
              {prev.title}
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>

      <div>
        {next ? (
          <Button asChild variant="outline" className="h-11 rounded-xl px-4">
            <Link href={`/${locale}/projects/${next.slug}`}>
              {next.title}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    </motion.nav>
  );
}

