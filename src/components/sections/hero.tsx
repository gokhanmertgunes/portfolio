"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "../site/container";

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_260/.25),transparent_60%)] blur-2xl" />
      <div className="absolute -top-16 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.8_0.22_155/.18),transparent_55%)] blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0/.9))] dark:bg-[linear-gradient(to_bottom,transparent,oklch(0.145_0_0/.9))]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_65%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,oklch(0.145_0_0/.08),transparent)] dark:bg-[linear-gradient(to_right,transparent,oklch(1_0_0/.08),transparent)]" />
      </div>
    </div>
  );
}

function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_top,black,transparent_65%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.145_0_0/.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.145_0_0/.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-70 dark:bg-[linear-gradient(to_right,oklch(1_0_0/.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/.06)_1px,transparent_1px)]" />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
      <span className="size-1.5 rounded-full bg-foreground/60" />
      {children}
    </span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const linkedInAvatar =
    "https://media.licdn.com/dms/image/v2/D4D03AQGFAL11VCQzkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666783473191?e=1778716800&v=beta&t=LIW3Yo5DSaWx88yYQ1cSfW7xWtnc1dAvIUTr4rukT8Q";

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
  } as const;

  return (
    <section className="relative overflow-hidden">
      <Glow />
      <GridBackdrop />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            custom={0.05}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_260/.25),transparent_60%)] blur-xl"
              />
              <div className="relative rounded-full border border-border/70 bg-card/50 p-1 shadow-sm">
                <Image
                  src={linkedInAvatar}
                  alt={`${siteConfig.name} profile photo`}
                  width={96}
                  height={96}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
            <Pill>Open to selective freelance and full-time opportunities</Pill>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.12}
            className={cn(
              "mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
              "leading-[1.02]"
            )}
          >
            Engineering{" "}
            <span className="relative mx-1.5 inline-block">
              <span className="absolute inset-x-0 -bottom-1 h-3 rounded-full bg-foreground/10 blur-[2px]" />
              <span className="relative">scalable products</span>
            </span>
            through clean architecture, modern interfaces, and{" "}
            <span className="relative mx-1.5 inline-block">
              <span className="absolute inset-x-0 -bottom-1 h-3 rounded-full bg-foreground/10 blur-[2px]" />
              <span className="relative">secure systems</span>
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.18}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            I build full-stack applications that combine thoughtful user experiences
            with strong backend engineering. Focused on performance, architecture,
            and product-driven problem solving, with growing depth in security and
            intelligent systems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.24}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild className="h-11 rounded-xl px-6">
              <Link href={siteConfig.links.email}>Let’s Talk</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-xl px-6">
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.32}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="rounded-full border border-border/70 bg-background/60 px-3 py-1">
              Full-stack product engineering
            </span>
            <span className="rounded-full border border-border/70 bg-background/60 px-3 py-1">
              Backend-first architecture
            </span>
            <span className="rounded-full border border-border/70 bg-background/60 px-3 py-1">
              Security mindset
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

