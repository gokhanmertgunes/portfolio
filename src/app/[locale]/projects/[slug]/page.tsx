import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { getProjectBySlug, getProjectIndex, projects } from "@/content/projects";
import { ProjectArchitecture, ProjectDecisions } from "@/components/work/project-notes";
import { ProjectHero } from "@/components/work/project-hero";
import { ProjectMetrics } from "@/components/work/project-metrics";
import { ProjectPager } from "@/components/work/project-pager";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { defaultLocale, locales, type Locale } from "@/i18n/routing";

type Params = { locale: string; slug: string };

export function generateStaticParams(): Array<{ locale: Locale; slug: string }> {
  return (locales as readonly Locale[]).flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : defaultLocale;

  const t = await getTranslations({ locale: resolved });
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const isTr = resolved === "tr";
  const description =
    isTr && project.descriptionTr ? project.descriptionTr : project.description;

  return {
    title: project.title,
    description,
    openGraph: {
      title: project.title,
      description,
      type: "article",
    },
    other: {
      // Keep locale around for debugging/SEO tools
      "x-locale": resolved,
      "x-back-link": t("projects.backToProjects"),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const resolved = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : defaultLocale;
  const t = await getTranslations({ locale: resolved });

  const idx = getProjectIndex(slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;

  const isTr = resolved === "tr";
  const highlights =
    isTr && project.highlightsTr ? project.highlightsTr : project.highlights;

  return (
    <>
      <ProjectHero project={project} />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <ProjectMetrics project={project} />

            <div className="space-y-6">
              <SectionHeading
                eyebrow={t("caseStudy.overview.eyebrow")}
                title={t("caseStudy.overview.title")}
                description={t("caseStudy.overview.desc")}
              />
              <div className="space-y-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                <p className="text-pretty">
                  {t("caseStudy.overview.body")}
                </p>
              </div>
            </div>

            <ProjectDecisions project={project} />
            <ProjectArchitecture project={project} />

            {highlights?.length ? (
              <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
                <div className="text-sm font-semibold tracking-tight">
                  {t("caseStudy.highlights")}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <ProjectPager prev={prev} next={next} />
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-border/70 bg-card/50 p-6">
              <div className="text-sm font-semibold tracking-tight">
                {t("caseStudy.details.title")}
              </div>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">
                    {t("caseStudy.details.timeframe")}
                  </dt>
                  <dd className="mt-1 font-medium">{project.timeframe}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">
                    {t("caseStudy.details.stack")}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

