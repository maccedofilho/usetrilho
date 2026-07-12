"use client";

import { motion, useReducedMotion } from "motion/react";

type HeadingLine = {
  text: string;
  className?: string;
};

type AnimatedHeadingProps = {
  as: "h1" | "h2";
  lines: HeadingLine[];
  className?: string;
  delay?: number;
};

const letterEase = [0.22, 1, 0.36, 1] as const;

export function AnimatedHeading({
  as,
  lines,
  className,
  delay = 0,
}: AnimatedHeadingProps) {
  const reducedMotion = useReducedMotion();
  const Heading = as;
  const letterCount = lines.reduce(
    (total, line) => total + line.text.replaceAll(" ", "").length,
    0,
  );
  const stagger = letterCount > 1 ? Math.min(0.025, 0.32 / (letterCount - 1)) : 0;
  const label = lines.map((line) => line.text).join(" ");

  return (
    <Heading className={className} aria-label={label}>
      <motion.span
        className="animated-heading-content"
        aria-hidden="true"
        initial={reducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: delay,
              staggerChildren: stagger,
            },
          },
        }}
      >
        {lines.map((line) => (
          <span className={`animated-heading-line ${line.className ?? ""}`} key={line.text}>
            {line.text.split(" ").map((word, wordIndex) => (
              <span className="animated-word" key={`${word}-${wordIndex}`}>
                {Array.from(word).map((letter, letterIndex) => (
                  <span className="animated-letter-clip" key={`${letter}-${letterIndex}`}>
                    <motion.span
                      className="animated-letter"
                      variants={{
                        hidden: { y: "108%" },
                        visible: {
                          y: "0%",
                          transition: { duration: 0.7, ease: letterEase },
                        },
                      }}
                    >
                      {letter}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Heading>
  );
}
