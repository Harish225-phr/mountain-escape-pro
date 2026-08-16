import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/contact";

const roomTypes = ["Deluxe Mountain Room", "Garden Lawn Suite", "Bamboo Cottage with Balcony"];

const inputClass =
  "w-full border border-border bg-card px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-forest";

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(roomTypes[0]);
  const [notes, setNotes] = useState("");

  const message = [
    "Hello Celebs Resort, I would like to enquire about a stay.",
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Check-in: ${checkIn || "-"}`,
    `Check-out: ${checkOut || "-"}`,
    `Guests: ${guests || "-"}`,
    `Room: ${roomType}`,
    notes ? `Notes: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <p className="eyebrow text-earth">Reservations</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-charcoal md:text-6xl">
              Plan Your Mountain Stay.
            </h2>
            <div className="rule-gold mt-8" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Share your dates and we will confirm availability on WhatsApp — usually within a few
              minutes.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-5 border-t border-border pt-8 text-sm">
              <a href={PHONE_TEL} className="flex items-start gap-4 text-charcoal/80 hover:text-forest">
                <FiPhone className="mt-1 text-forest" />
                <span>
                  <span className="eyebrow block text-muted-foreground">Call Us</span>
                  {PHONE_DISPLAY}
                </span>
              </a>
              <p className="flex items-start gap-4 text-charcoal/80">
                <FiMapPin className="mt-1 text-forest" />
                <span>
                  <span className="eyebrow block text-muted-foreground">Address</span>
                  {ADDRESS}
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="border border-border bg-softwhite p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)] md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow mb-2 block text-muted-foreground">Full Name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block text-muted-foreground">Phone</span>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile number"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block text-muted-foreground">Check In</span>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block text-muted-foreground">Check Out</span>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block text-muted-foreground">Guests</span>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block text-muted-foreground">Room Type</span>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className={inputClass}
                >
                  {roomTypes.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="eyebrow mb-2 block text-muted-foreground">Special Requests</span>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Travelling with a pet, celebrating an anniversary…"
                className={inputClass}
              />
            </label>

            <button type="submit" className="btn-gold mt-8 w-full">
              <FaWhatsapp /> Send Enquiry on WhatsApp
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Your details open a pre-filled WhatsApp chat with our reservations team.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
