import Link from "next/link";

import { siteConfig } from "@/lib/site";

import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </div>
          <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.links.email}
            className="text-muted-foreground hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}

