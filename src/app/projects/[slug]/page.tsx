import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjectIndex, projects } from "@/content/projects";
import { ProjectHero } from "@/components/work/project-hero";
import { ProjectMetrics } from "@/components/work/project-metrics";
import { ProjectGallery } from "@/components/work/project-gallery";
import { ProjectPager } from "@/components/work/project-pager";
import {
  ProjectArchitecture,
  ProjectDecisions,
} from "@/components/work/project-notes";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> | Metadata {
  // Next 16 provides params as a Promise in some setups; support both without forcing async components.
  return (async () => {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    return {
      title: project.title,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        type: "article",
      },
    } satisfies Metadata;
  })();
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const idx = getProjectIndex(slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <ProjectHero project={project} />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <ProjectMetrics project={project} />

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Overview"
                title="What I built"
                description="Clear hierarchy, premium spacing, and room for evidence—optimized for skimming and depth."
              />
              <div className="space-y-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                <p className="text-pretty">
                  This page is intentionally structured like a SaaS-grade case study:
                  clear hierarchy, readable typography, and room for proof.
                </p>
                <p className="text-pretty">
                  Add a project gallery, performance numbers, and “decisions” sections
                  to make it feel even more premium and less like a template.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Gallery"
                title="Screens & interactions"
                description="A lightweight gallery component (next step: plug real screenshots or video)."
              />
              <ProjectGallery project={project} />
            </div>

            <ProjectDecisions project={project} />

            <ProjectArchitecture project={project} />

            {project.highlights?.length ? (
              <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
                <div className="text-sm font-semibold tracking-tight">
                  Highlights
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((h) => (
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
              <div className="text-sm font-semibold tracking-tight">Details</div>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Timeframe</dt>
                  <dd className="mt-1 font-medium">{project.timeframe}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Stack</dt>
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

