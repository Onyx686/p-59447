import CTAButton from "@/components/ui/CTAButton";
import Badge from "@/components/ui/Badge";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-gray-950 to-gray-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
        <Badge className="mb-8 animate-fade-in-up">🔥 Over 10,000+ Copies Sold</Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          The Ultimate{" "}
          <span className="text-gradient">Digital Mastery</span>
          <br />
          Blueprint
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          The step-by-step system that transforms complete beginners into
          thriving digital entrepreneurs — in just 90 days.
        </p>

        <p className="text-sm text-gray-500 mb-10">
          No experience needed. No technical skills required. Just follow the blueprint.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <CTAButton size="xl">
            🚀 Get Instant Access — $27
          </CTAButton>
          <CTAButton href="#whats-inside" variant="secondary" size="lg">
            See What&apos;s Inside ↓
          </CTAButton>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Instant Download
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            30-Day Guarantee
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Lifetime Access
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="glass rounded-2xl p-1 max-w-lg mx-auto animate-float">
            <div className="bg-gradient-to-br from-brand-600/20 to-pink-600/20 rounded-xl p-8 md:p-12 text-center">
              <div className="text-6xl mb-4">📘</div>
              <p className="text-xl font-bold text-white">Digital Mastery Blueprint</p>
              <p className="text-sm text-gray-400 mt-2">248 Pages • 12 Chapters • 50+ Templates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
