import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { AboutSection } from "@/components/sections/about";
import { WritingSection } from "@/components/sections/writing";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <WritingSection />
    </>
  );
}

