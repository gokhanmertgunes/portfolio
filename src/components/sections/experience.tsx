"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { experience } from "@/content/experience";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";

export function ExperienceSection() {
  const t = useTranslations();
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const isTr = locale === "tr";

  return (
    <section id="experience" className="border-t border-border/60">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={t("sections.experience.eyebrow")}
            title={t("sections.experience.title")}
            description={t("sections.experience.desc")}
          />

          <div className="grid gap-4">
            {experience.map((item, idx) => (
              <motion.article
                key={`${item.company}-${item.role}-${item.period}`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.min(idx * 0.04, 0.14),
                }}
                className="rounded-2xl border border-border/70 bg-card/50 p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      {item.logoSrc ? (
                        <div className="grid size-9 place-items-center overflow-hidden rounded-xl border border-border/70 bg-background/50">
                          <Image
                            src={item.logoSrc}
                            alt={`${item.company} logo`}
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                          />
                        </div>
                      ) : null}
                      <div className="text-sm font-semibold tracking-tight">
                        {item.company}
                      </div>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {isTr && item.roleTr ? item.roleTr : item.role}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right">
                    <div className="font-medium text-foreground/90">
                      {isTr && item.periodTr ? item.periodTr : item.period}
                    </div>
                    <div>{isTr && item.locationTr ? item.locationTr : item.location}</div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {(isTr && item.bulletsTr ? item.bulletsTr : item.bullets).map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

