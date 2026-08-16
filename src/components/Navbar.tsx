import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_TEL, WA_BOOK } from "@/lib/contact";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Rooms", "#rooms"],
  ["Experiences", "#experiences"],
  ["Dining", "#dining"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-charcoal/90 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10"
      >
        <a href="#home" className="leading-none">
          <span className="font-display block text-xl tracking-[0.22em] text-cream">CELEB&apos;S</span>
          <span className="eyebrow block text-[0.55rem] text-gold">Resort · Shoghi</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-[0.72rem] tracking-[0.18em] uppercase text-cream/80 transition-colors hover:text-gold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href={WA_BOOK} target="_blank" rel="noreferrer" className="btn-gold">
            Book Your Stay
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-cream lg:hidden"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden bg-charcoal/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm tracking-[0.18em] uppercase text-cream/85"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-2 px-6 pb-6">
              <a href={PHONE_TEL} className="btn-outline-light !px-2 !text-[0.6rem]">
                <FiPhone /> Call
              </a>
              <a
                href={WA_BOOK}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-light !px-2 !text-[0.6rem]"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a href={WA_BOOK} target="_blank" rel="noreferrer" className="btn-gold !px-2 !text-[0.6rem]">
                Book
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
