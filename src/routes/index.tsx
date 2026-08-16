import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { About } from "@/components/About";
import { ViewSection } from "@/components/ViewSection";
import { Accommodation } from "@/components/Accommodation";
import { BambooFeature } from "@/components/BambooFeature";
import { FamilyPet } from "@/components/FamilyPet";
import { Experiences } from "@/components/Experiences";
import { Dining } from "@/components/Dining";
import { StayWithUs } from "@/components/StayWithUs";
import { ExploreShoghi } from "@/components/ExploreShoghi";
import { Gallery } from "@/components/Gallery";
import { GuestExperience } from "@/components/GuestExperience";
import { BookingForm } from "@/components/BookingForm";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <ViewSection />
        <Accommodation />
        <BambooFeature />
        <FamilyPet />
        <Experiences />
        <Dining />
        <StayWithUs />
        <ExploreShoghi />
        <Gallery />
        <GuestExperience />
        <BookingForm />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
