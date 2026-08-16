import { FaStar, FaRegStar } from "react-icons/fa";
import { Reveal, SectionHead } from "./Reveal";

const themes = [
  "Scenic views",
  "Friendly hospitality",
  "Peaceful environment",
  "Family-friendly atmosphere",
  "Good food",
  "Comfortable rooms",
  "Convenient Shoghi location",
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) =>
        i < Math.round(rating) ? (
          <FaStar key={i} className="text-sm" />
        ) : (
          <FaRegStar key={i} className="text-sm text-gold/40" />
        ),
      )}
    </div>
  );
}

export function GuestExperience() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHead
          center
          light
          eyebrow="Guest Experience"
          title="Loved by Mountain Travellers."
          sub="Rated 4.5 / 5 across 314+ reviews from guests who came for the views and stayed for the calm."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4 border-y border-cream/15 py-10">
            <Stars rating={4.5} />
            <p className="font-display text-5xl text-gold md:text-6xl">4.5 / 5</p>
            <p className="eyebrow text-cream/60">314+ Reviews</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {themes.map((t) => (
              <span
                key={t}
                className="border border-cream/20 px-5 py-2 text-xs tracking-[0.15em] uppercase text-cream/75 transition-colors hover:border-gold hover:text-gold"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
