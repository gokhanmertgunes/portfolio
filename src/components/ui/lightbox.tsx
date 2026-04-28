"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type LightboxItem = {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
};

export function Lightbox({
  open,
  onOpenChange,
  item,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: LightboxItem | null;
}) {
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 8, scale: reduceMotion ? 1 : 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative w-full max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xl",
              "ring-1 ring-foreground/5"
            )}
          >
            <div className="absolute right-3 top-3 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                onClick={() => onOpenChange(false)}
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="grid gap-0 md:grid-cols-[1fr_360px]">
              <div className="relative aspect-[16/10] w-full bg-muted">
                {item?.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt ?? item.title ?? "Project image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 70vw"
                    priority
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <div className="text-center">
                      <div className="text-sm font-semibold tracking-tight">
                        No image yet
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        Add a screenshot to this gallery item.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-7">
                <div className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
                  PREVIEW
                </div>
                <div className="mt-3 text-lg font-semibold tracking-tight">
                  {item?.title ?? "Untitled"}
                </div>
                {item?.description ? (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                ) : null}

                <div className="mt-6 rounded-xl border border-border/70 bg-background/60 p-4 text-xs text-muted-foreground">
                  Tip: Place screenshots under `public/projects/...` and reference them
                  in `src/content/projects.ts`.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

