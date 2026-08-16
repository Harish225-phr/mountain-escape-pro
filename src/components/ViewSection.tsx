import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import valleyView from "../assets/valley-view.png";

export function ViewSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.28]);

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[520px] overflow-hidden">
      <motion.img
        src={valleyView}
        alt="Panoramic Himalayan valley and pine ridge view from Celebs Resort Shoghi"
        loading="lazy"
        decoding="async"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl leading-[1.06] text-cream md:text-7xl"
        >
          360° Views. Endless Himalayan Moments.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/80"
        >
          Wake up to pine-covered hills, breathe the mountain air and slow down to the rhythm of nature.
        </motion.p>
      </div>
    </section>
  );
}
