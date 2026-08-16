import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${light ? "text-gold" : "text-earth"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`text-4xl leading-[1.08] md:text-6xl ${light ? "text-cream" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-6 text-base leading-relaxed ${light ? "text-cream/75" : "text-muted-foreground"}`}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
