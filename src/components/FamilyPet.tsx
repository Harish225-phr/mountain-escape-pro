import lawnTerrace from "../assets/lawn-terrace.png";
import { Reveal } from "./Reveal";
import { WA_FAMILY, WA_PET } from "@/lib/contact";

export function FamilyPet() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="group overflow-hidden">
            <img
              src={lawnTerrace}
              alt="Green turf terrace with white bamboo fencing beside the glass-walled resort building"
              loading="lazy"
              decoding="async"
              className="h-[400px] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 md:h-[560px]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-earth">Families &amp; Pets</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-charcoal md:text-6xl">
              A Resort for Everyone You Love.
            </h2>
            <div className="rule-gold mt-8" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Open lawns, safe walkways and quiet green terraces make Celebs Resort a natural choice for
              family holidays — with plenty of space for children to run and elders to sit in the sun.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="h-full border border-border bg-card p-7">
                <h3 className="text-xl text-charcoal">Family Getaways</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Spacious rooms, lawn games, bonfire evenings and dining that suits every age.
                </p>
                <a
                  href={WA_FAMILY}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-[0.68rem] tracking-[0.2em] uppercase text-forest underline-offset-4 hover:underline"
                >
                  Plan a Family Stay
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full border border-border bg-card p-7">
                <h3 className="text-xl text-charcoal">Pet Friendly</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Bring your companion along — open green spaces and pet-welcoming cottages await.
                </p>
                <a
                  href={WA_PET}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-[0.68rem] tracking-[0.2em] uppercase text-forest underline-offset-4 hover:underline"
                >
                  Ask About Pets
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
