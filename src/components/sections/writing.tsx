"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { Container } from "@/components/site/container";
import { writingPosts } from "@/content/writing";
import { Button } from "@/components/ui/button";

export function WritingSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isTr = locale === "tr";

  return (
    <section id="writing" className="border-t border-border/60">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("sections.writing.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("sections.writing.desc")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {writingPosts.map((post) => (
              <article
                key={post.href}
                className="rounded-2xl border border-border/70 bg-card/50 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-balance text-base font-semibold tracking-tight">
                      {post.title}
                    </h3>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {post.readingTime} · Medium
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm" className="rounded-xl">
                    <Link href={post.href} target="_blank" rel="noreferrer">
                      Read <ArrowUpRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {isTr ? post.excerpt.tr : post.excerpt.en}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

