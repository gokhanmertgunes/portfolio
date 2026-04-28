"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { LayoutGroup, MotionConfig, motion, useReducedMotion } from "framer-motion";

export function AppMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <LayoutGroup id="app">
        <motion.div
          key={pathname}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease }}
        >
          {children}
        </motion.div>
      </LayoutGroup>
    </MotionConfig>
  );
}

