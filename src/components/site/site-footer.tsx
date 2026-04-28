"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/lib/site";

import { Container } from "./container";

export function SiteFooter() {
  const t = useTranslations();
  return (
    <footer className="border-t border-border/60">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </div>
          <p className="text-sm text-muted-foreground">{t("footer.desc")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {t("header.github")}
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {t("footer.linkedin")}
          </Link>
          <Link
            href={siteConfig.links.email}
            className="text-muted-foreground hover:text-foreground"
          >
            {t("footer.email")}
          </Link>
        </div>
      </Container>
    </footer>
  );
}

