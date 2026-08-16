import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { PHONE_TEL, WA_BOOK } from "@/lib/contact";

export function FloatingContactButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 transition-opacity duration-500 lg:flex ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href={WA_BOOK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream shadow-lg transition-transform hover:scale-110 hover:bg-forest-deep"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href={PHONE_TEL}
          aria-label="Call the resort"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-charcoal shadow-lg transition-transform hover:scale-110"
        >
          <FiPhone size={20} />
        </a>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-softwhite/95 backdrop-blur-md transition-transform duration-500 lg:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={PHONE_TEL}
          className="flex flex-col items-center gap-1 py-3 text-xs tracking-[0.15em] uppercase text-charcoal transition-colors hover:text-forest"
        >
          <FiPhone size={18} /> Call
        </a>
        <a
          href={WA_BOOK}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border bg-forest py-3 text-xs tracking-[0.15em] uppercase text-cream"
        >
          <FaWhatsapp size={18} /> WhatsApp
        </a>
        <a
          href={WA_BOOK}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs tracking-[0.15em] uppercase text-charcoal transition-colors hover:text-forest"
        >
          <FaWhatsapp size={18} /> Book Now
        </a>
      </div>
    </>
  );
}
