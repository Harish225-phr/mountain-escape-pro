import { FiCheck } from "react-icons/fi";
import cottagePorch from "../assets/cottage-porch.png";
import { Reveal } from "./Reveal";
import { WA_BOOK } from "@/lib/contact";

const highlights = [
  "Mountain surroundings",
  "Peaceful environment",
  "Family-friendly stay",
  "Pet-friendly property",
  "Easy access to Shoghi",
  "Comfortable rooms and cottages",
];

export function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="group relative overflow-hidden">
            <img
              src={cottagePorch}
              alt="Bamboo-clad cottage verandas with stone pathway at Celebs Resort Shoghi"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 md:h-[600px]"
            />
            <div className="absolute bottom-0 left-0 bg-forest px-8 py-6">
              <p className="eyebrow text-gold">Est. in the Himalayas</p>
              <p className="font-display mt-1 text-2xl text-cream">5,700 ft above the noise</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-earth">About Celebs Resort</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-charcoal md:text-6xl">
              Where the Mountains Become Your Backyard.
            </h2>
            <div className="rule-gold mt-8" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Celebs Resort is a peaceful mountain retreat located in Shoghi, Himachal Pradesh, offering
              guests a relaxing escape surrounded by pine forests, hills and panoramic valley views.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At approximately 5,700 feet above sea level, the resort combines comfortable accommodation
              with the peaceful atmosphere of the Himalayas.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.06}>
                <li className="flex items-center gap-3 text-sm text-charcoal/80">
                  <FiCheck className="text-forest" /> {h}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a href={WA_BOOK} target="_blank" rel="noreferrer" className="btn-outline-dark mt-10">
              Discover Our Story
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
