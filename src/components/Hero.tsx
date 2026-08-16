import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import cottagesAerial from "../assets/cottages-aerial.png";
import { WA_BOOK } from "@/lib/contact";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[620px] w-full overflow-hidden">
      <img
        src={cottagesAerial}
        alt="Celebs Resort Shoghi wooden cottages overlooking pine-covered Himalayan valleys"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-veil absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow text-gold"
        >
          A Mountain Escape • Shoghi • Himachal Pradesh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-5xl leading-[1.02] text-cream md:text-7xl lg:text-8xl"
        >
          Escape to the Mountains.
          <span className="mt-2 block italic text-cream/80">Stay Above the Ordinary.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg"
        >
          Discover a peaceful mountain retreat at 5,700 feet, surrounded by pine forests, valleys and
          breathtaking Himalayan landscapes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={WA_BOOK} target="_blank" rel="noreferrer" className="btn-gold">
            <FaWhatsapp /> Book Your Stay
          </a>
          <a href="#about" className="btn-outline-light">
            Explore the Resort
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="eyebrow mt-12 text-cream/60"
        >
          360° Mountain &amp; Valley Views
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-px bg-cream/30">
          <div className="animate-scrollpulse h-4 w-px bg-gold" />
        </div>
      </div>
    </section>
  );
}
