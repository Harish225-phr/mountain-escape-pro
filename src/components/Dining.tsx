import diningHall from "../assets/dining-hall.png";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/contact";

export function Dining() {
  return (
    <section id="dining" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <div className="group overflow-hidden">
            <img
              src={diningHall}
              alt="Resort dining hall with sloped black ceiling, rope chandeliers and valley-facing glass windows"
              loading="lazy"
              decoding="async"
              className="h-[400px] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 md:h-[580px]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-gold">Dining</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-cream md:text-6xl">
              Meals with a Valley for a Window.
            </h2>
            <div className="rule-gold mt-8" />
            <p className="mt-8 text-base leading-relaxed text-cream/75">
              Our dining hall opens onto glass walls framing the hills, with sculptural rope lighting
              overhead and generous tables for long, unhurried meals. Home-style Himachali dishes sit
              alongside familiar Indian and continental favourites.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-cream/15 pt-8">
              <div>
                <p className="eyebrow text-gold">Breakfast</p>
                <p className="mt-2 text-sm text-cream/65">Fresh, warm and served with the morning mist.</p>
              </div>
              <div>
                <p className="eyebrow text-gold">Lunch &amp; Dinner</p>
                <p className="mt-2 text-sm text-cream/65">Himachali, Indian and continental plates.</p>
              </div>
              <div>
                <p className="eyebrow text-gold">Evening Tea</p>
                <p className="mt-2 text-sm text-cream/65">Chai and snacks beside the bonfire.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href={waLink("Hello Celebs Resort, I would like to know more about dining options.")}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-light mt-10"
            >
              Enquire About Dining
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
