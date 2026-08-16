import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { ADDRESS, MAPS_DIRECTIONS, PHONE_DISPLAY, PHONE_TEL, WA_BOOK } from "@/lib/contact";

export function Location() {
  return (
    <section id="location" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-earth">Location</p>
          <h2 className="text-4xl leading-[1.08] text-charcoal md:text-6xl">
            Find Us in the Hills.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Near Petrol Pump, Shoghi, Himachal Pradesh 171219 — minutes from the railway station
            and a short drive from Shimla.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-6 border border-border bg-card p-8 md:p-10">
              <div>
                <p className="eyebrow text-muted-foreground">Celebs Resort</p>
                <p className="mt-3 text-lg leading-relaxed text-charcoal">{ADDRESS}</p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="eyebrow mb-2 text-muted-foreground">Phone</p>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-3 text-lg text-charcoal hover:text-forest"
                >
                  <FiPhone className="text-forest" /> {PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border pt-6">
                <a href={PHONE_TEL} className="btn-outline-dark !px-5 !py-3">
                  <FiPhone /> Call
                </a>
                <a
                  href={WA_BOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-dark !px-5 !py-3"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid !px-5 !py-3"
                >
                  <FiMapPin /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full min-h-[400px] overflow-hidden border border-border shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)]">
              <iframe
                title="Celebs Resort location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6365865679154!2d77.11980601084684!3d31.036373270788776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057f095392b7c3%3A0x84c36291f15846cb!2sCelebs%20Resort!5e0!3m2!1sen!2sin!4v1786882297099!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
