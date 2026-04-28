import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      aria-label="Home"
    >
      <span className="relative grid size-6 place-items-center rounded-lg bg-foreground text-background shadow-sm ring-1 ring-foreground/10">
        <span className="text-[11px] font-bold">GM</span>
      </span>
      <span className="hidden sm:block">{`Gökhan Mert`}</span>
      <span className="hidden text-muted-foreground sm:block">/</span>
      <span className="hidden text-muted-foreground sm:block">portfolio</span>
    </Link>
  );
}

