import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";
import {
  ADDRESS,
  MAPS_DIRECTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  RESORT_NAME,
  WA_BOOK,
  waLink,
} from "@/lib/contact";

const nav = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Rooms", "#rooms"],
  ["Experiences", "#experiences"],
  ["Dining", "#dining"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
  ["Contact", "#contact"],
];

export function Footer() {
  return (
    <footer className="bg-forest-deep py-16 text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <a href="#home" className="leading-none">
            <span className="font-display block text-2xl tracking-[0.22em] text-cream">
              CELEB&apos;S
            </span>
            <span className="eyebrow block text-[0.55rem] text-gold">Resort · Shoghi</span>
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            A peaceful mountain retreat at 5,700 feet in Shoghi, Himachal Pradesh — surrounded by
            pine forests, valleys and breathtaking Himalayan landscapes.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5 text-gold">Explore</p>
          <ul className="grid gap-3 text-sm">
            {nav.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="transition-colors hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5 text-gold">Contact</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-gold" />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <FiPhone className="text-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noreferrer"
              className="btn-gold !px-4 !py-2 !text-[0.6rem]"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-light !px-4 !py-2 !text-[0.6rem]"
            >
              <FiMapPin /> Directions
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-cream/10 px-6 pt-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-cream/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {RESORT_NAME}, Shoghi. All rights reserved.
          </p>
          <p>
            <a
              href={waLink("Hello Celebs Resort, I found your website and have a question.")}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold"
            >
              Enquire on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
