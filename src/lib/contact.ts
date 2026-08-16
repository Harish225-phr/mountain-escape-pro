export const RESORT_NAME = "Celebs Resort";
export const PHONE_DISPLAY = "+91 70183 49322";
export const PHONE_TEL = "tel:+917018349322";
export const ADDRESS = "Near Petrol Pump, Shoghi, Himachal Pradesh 171219";
export const MAPS_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Celebs+Resort+Shoghi";

export function waLink(message: string) {
  return `https://wa.me/917018349322?text=${encodeURIComponent(message)}`;
}

export const WA_BOOK = waLink(
  "Hello Celebs Resort, I would like to enquire about a booking for a mountain stay.",
);
export const WA_AVAILABILITY = waLink(
  "Hello Celebs Resort, I would like to check availability for my dates.",
);
export const WA_PET = waLink(
  "Hello Celebs Resort, I would like to ask about pet-friendly stays.",
);
export const WA_FAMILY = waLink(
  "Hello Celebs Resort, I would like to plan a family getaway.",
);
