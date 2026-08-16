import roomFamily from "../assets/room-family.png";
import roomSuite from "../assets/room-suite.png";
import bambooHouse from "../assets/bamboo-house.png";
import { AccommodationCard } from "./AccommodationCard";
import { SectionHead } from "./Reveal";

export function Accommodation() {
  return (
    <section id="rooms" className="bg-softwhite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          center
          eyebrow="Accommodation"
          title="Rooms Designed Around the View."
          sub="Comfortable, warmly lit spaces with wooden interiors, private balconies and uninterrupted mountain scenery."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AccommodationCard
            image={roomFamily}
            alt="Cosy wooden family room with plaid bedding and warm wall lamps at Celebs Resort"
            name="Deluxe Mountain Room"
            description="A warm, wood-floored retreat with soft lighting, plush bedding and framed mountain art — ideal for couples seeking quiet comfort."
          />
          <AccommodationCard
            image={roomSuite}
            alt="Bright resort bedroom with glass door opening onto a green lawn"
            name="Garden Lawn Suite"
            description="Step straight from your bed onto the resort lawn. Floor-to-ceiling glass, natural light and green open space at your doorstep."
            delay={0.1}
          />
          <AccommodationCard
            image={bambooHouse}
            alt="Bamboo-walled cottage room with private balcony overlooking the mountains"
            name="Bamboo Cottage with Balcony"
            description="Bamboo-clad walls, crisp linens and a private balcony with a small table for morning chai above the valley."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
