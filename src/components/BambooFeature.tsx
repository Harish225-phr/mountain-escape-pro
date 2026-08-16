import pathway from "../assets/pathway.png";
import { Reveal } from "./Reveal";
import { WA_BOOK } from "@/lib/contact";

export function BambooFeature() {
  return (
    <section className="bg-forest-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow text-gold">Bamboo Cottages</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-cream md:text-6xl">
              Private Cottages, Wrapped in Bamboo &amp; Pine.
            </h2>
            <div className="rule-gold mt-8" />
            <p className="mt-8 text-base leading-relaxed text-cream/75">
              Our bamboo cottages line a quiet stone pathway, each with its own porch, soft turf and
              seating area. Cool mountain air, birdsong at dawn and complete privacy — a stay that feels
              part of the hillside rather than built upon it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-10 space-y-4 border-l border-gold/40 pl-6 text-sm text-cream/70">
              <li>Private porch and outdoor seating for every cottage</li>
              <li>Natural bamboo craftsmanship with modern comforts</li>
              <li>Landscaped pathways and quiet green corners</li>
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <a href={WA_BOOK} target="_blank" rel="noreferrer" className="btn-gold mt-10">
              Reserve a Cottage
            </a>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="group overflow-hidden">
            <img
              src={pathway}
              alt="Stone pathway between bamboo cottages with curtains and green shrubs at Celebs Resort"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 md:h-[640px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
