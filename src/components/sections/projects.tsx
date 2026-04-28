"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/work/project-card";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";

export function ProjectsSection() {
  const t = useTranslations();
  const reduceMotion = useReducedMotion();

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="border-t border-border/60">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={t("sections.projects.eyebrow")}
            title={t("sections.projects.title")}
            description={t("sections.projects.desc")}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: {},
              visible: {
                transition: reduceMotion ? {} : { staggerChildren: 0.06 },
              },
            }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {featured ? (
              <div className="md:col-span-2">
                <ProjectCard project={featured} index={0} featured />
              </div>
            ) : null}
            {rest.map((p, idx) => (
              <ProjectCard key={p.slug} project={p} index={idx + 1} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

