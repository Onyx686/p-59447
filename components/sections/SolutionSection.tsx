import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import CTAButton from "@/components/ui/CTAButton";

const steps = [
  {
    number: "01",
    title: "Choose Your Niche",
    description: "Use our proven framework to find a profitable niche that matches your skills and passion.",
  },
  {
    number: "02",
    title: "Build Your Foundation",
    description: "Set up your digital infrastructure in a single weekend — website, email, and brand.",
  },
  {
    number: "03",
    title: "Create Your Offer",
    description: "Craft an irresistible product or service using our fill-in-the-blank templates.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Deploy proven marketing strategies that bring customers to you on autopilot.",
  },
];

export default function SolutionSection() {
  return (
    <SectionWrapper id="solution">
      <div className="text-center mb-16">
        <Badge className="mb-6">The Solution</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Introducing the{" "}
          <span className="text-gradient">Digital Mastery Blueprint</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          A complete, no-fluff system that takes you from zero to a thriving
          digital business. Follow the 4-phase framework and watch everything
          fall into place.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-pink-500/50 to-transparent hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`animate-on-scroll flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 text-center md:text-left">
                <div
                  className={`${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <span className="text-6xl font-black text-gradient opacity-50">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-md inline-block">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center font-black text-xl shadow-lg shadow-brand-500/25 shrink-0">
                {step.number}
              </div>

              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16 animate-on-scroll">
        <CTAButton>Start Your Journey Today →</CTAButton>
      </div>
    </SectionWrapper>
  );
}
