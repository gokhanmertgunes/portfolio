"use client";

import { useTranslations } from "next-intl";

import { Container } from "@/components/site/container";

export function AboutSection() {
  const t = useTranslations();

  return (
    <section id="about" className="border-t border-border/60">
      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("sections.about.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("sections.about.desc")}</p>
        </div>
      </Container>
    </section>
  );
}

