import HeroSection from "@/components/sections/HeroSection";
import EidInitiativeSection from "@/components/sections/EidInitiativeSection";
import MissionSection from "@/components/sections/MissionSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ActiveCasesSection from "@/components/sections/ActiveCasesSection";
import HowToDonateSection from "@/components/sections/HowToDonateSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhatsAppGroupSection from "@/components/sections/WhatsAppGroupSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EidInitiativeSection />
      <MissionSection />
      <ImpactSection />
      <ActiveCasesSection />
      <HowToDonateSection />
      <WhatsAppGroupSection />
      <TestimonialsSection />
    </>
  );
}
