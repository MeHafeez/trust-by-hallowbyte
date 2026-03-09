import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ActiveCasesSection from "@/components/sections/ActiveCasesSection";
import HowToDonateSection from "@/components/sections/HowToDonateSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <ActiveCasesSection />
      <HowToDonateSection />
      <TestimonialsSection />
    </>
  );
}
