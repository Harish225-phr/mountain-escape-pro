import resortExterior from "../assets/resort-exterior.webp";
import cottagesAerial from "../assets/cottages-aerial.png";
import pathway from "../assets/pathway.png";
import roomFamily from "../assets/room-family.png";
import roomSuite from "../assets/room-suite.png";
import bambooHouse from "../assets/bamboo-house.png";
import lawnTerrace from "../assets/lawn-terrace.png";
import valleyView from "../assets/valley-view.png";
import diningHall from "../assets/dining-hall.png";
import cottagePorch from "../assets/cottage-porch.png";
import { Reveal, SectionHead } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          center
          eyebrow="Gallery"
          title="A Look Around Celebs Resort."
          sub="Real moments from our cottages, lawns, dining hall and the valleys that surround them."
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          <Reveal className="col-span-2 row-span-2">
            <figure className="group h-full overflow-hidden">
              <img
                src={resortExterior}
                alt="Celeb's Resort building glowing with warm lights at dusk among pine trees"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.05}>
            <figure className="group h-full overflow-hidden">
              <img
                src={cottagesAerial}
                alt="Aerial view of green-roofed cottages on a grassy hillside above the Himalayan valley"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.1}>
            <figure className="group h-full overflow-hidden">
              <img
                src={valleyView}
                alt="White bamboo fence and steps overlooking a lush green valley"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.15}>
            <figure className="group h-full overflow-hidden">
              <img
                src={roomFamily}
                alt="Cosy bedroom with plaid blanket, wooden flooring and warm wall lamps"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.2}>
            <figure className="group h-full overflow-hidden">
              <img
                src={roomSuite}
                alt="Modern resort bedroom with a glass door opening onto a green lawn"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="col-span-2 h-full" delay={0.25}>
            <figure className="group h-full overflow-hidden">
              <img
                src={diningHall}
                alt="Dining hall with rope chandeliers and large glass windows"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.3}>
            <figure className="group h-full overflow-hidden">
              <img
                src={bambooHouse}
                alt="Bamboo-walled room with balcony seating overlooking the mountains"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.35}>
            <figure className="group h-full overflow-hidden">
              <img
                src={lawnTerrace}
                alt="Narrow turf terrace with white fencing beside the glass resort facade"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.4}>
            <figure className="group h-full overflow-hidden">
              <img
                src={pathway}
                alt="Bamboo cottages with light curtains along a stone-paved pathway"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
          <Reveal className="h-full" delay={0.45}>
            <figure className="group h-full overflow-hidden">
              <img
                src={cottagePorch}
                alt="Private cottage porches with turf and seating under a clear blue sky"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
