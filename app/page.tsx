import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import AgitationSection from "@/components/sections/AgitationSection";
import SolutionSection from "@/components/sections/SolutionSection";
import WhatsInsideSection from "@/components/sections/WhatsInsideSection";
import AuthorSection from "@/components/sections/AuthorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BonusesSection from "@/components/sections/BonusesSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import StickyNav from "@/components/StickyNav";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <StickyNav />
      <ScrollAnimator />
      <HeroSection />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <WhatsInsideSection />
      <AuthorSection />
      <TestimonialsSection />
      <BonusesSection />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      <FinalCTASection />
    </main>
  );
}
