import resortExterior from "../assets/resort-exterior.webp";
import { Reveal } from "./Reveal";
import { WA_AVAILABILITY } from "@/lib/contact";

export function StayWithUs() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={resortExterior}
        alt="Celeb's Resort lit up in the evening against a deep blue mountain sky"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <p className="eyebrow text-gold">Stay With Us</p>
          <h2 className="mt-5 text-4xl leading-[1.06] text-cream md:text-6xl">
            Evenings Here Feel Like Somewhere Else.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/75">
            Warm lights in the pines, cool air on the balcony and a valley that disappears into the dark.
            Reserve your dates and let the mountains do the rest.
          </p>
          <a href={WA_AVAILABILITY} target="_blank" rel="noreferrer" className="btn-gold mt-10">
            Check Availability
          </a>
        </Reveal>
      </div>
    </section>
  );
}
