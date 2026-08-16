import { FiSunrise, FiCoffee, FiCompass, FiCamera, FiWifi, FiSun } from "react-icons/fi";
import { Reveal, SectionHead } from "./Reveal";

const items = [
  { icon: FiSunrise, title: "Sunrise Over the Ridge", text: "Watch light spill across the valley from your balcony before the world wakes." },
  { icon: FiSun, title: "Bonfire Evenings", text: "Gather under a clear mountain sky as the temperature drops and stories begin." },
  { icon: FiCompass, title: "Pine Forest Walks", text: "Trails through deodar and pine begin right at the resort gate." },
  { icon: FiCamera, title: "Photography Spots", text: "Valley decks, bamboo pathways and turf terraces built for the frame." },
  { icon: FiCoffee, title: "Slow Mountain Mornings", text: "Chai on the porch, mist in the trees, nowhere to rush to." },
  { icon: FiWifi, title: "Work From the Hills", text: "Comfortable rooms and quiet corners for a longer, calmer stay." },
];

export function Experiences() {
  return (
    <section id="experiences" className="bg-softwhite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          center
          eyebrow="Experiences"
          title="Days Shaped by the Mountains."
          sub="Nothing scheduled, everything possible — the kind of days you remember long after the drive home."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group h-full bg-card p-9 transition-colors duration-500 hover:bg-forest">
                <item.icon className="text-2xl text-forest transition-colors group-hover:text-gold" />
                <h3 className="mt-6 text-xl text-charcoal transition-colors group-hover:text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-cream/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
