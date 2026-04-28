import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { Container } from "@/components/site/container";

export default function Home() {
  return (
    <>
      <Hero />

      <ProjectsSection />

      <ExperienceSection />

      <section id="about" className="border-t border-border/60">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              About
            </h2>
            <p className="mt-3 text-muted-foreground">
              I’m a software engineer focused on building reliable software end-to-end
              — from polished frontend experiences to scalable backend systems. I
              enjoy solving engineering problems where architecture, performance and
              usability intersect, and I’m especially interested in backend systems,
              cybersecurity, and intelligent software.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>Full-stack product development</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>Backend architecture & APIs</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>Performance optimization</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>Security research & secure engineering</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>Machine learning and intelligent systems</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>Developer experience and clean architecture</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="writing" className="border-t border-border/60">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Writing
            </h2>
            <p className="mt-3 text-muted-foreground">
              Coming soon.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
