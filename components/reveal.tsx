"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const revealEase = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reducedMotion ? undefined : { opacity: [0, 1], y: [24, 0] }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.58, delay, ease: revealEase }}
    >
      {children}
    </motion.div>
  );
}
