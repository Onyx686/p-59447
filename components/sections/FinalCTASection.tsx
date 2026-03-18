import CTAButton from "@/components/ui/CTAButton";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-gray-950 to-gray-950" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-on-scroll">
          <p className="text-6xl mb-8">⚡</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Your Future Self Will{" "}
            <span className="text-gradient">Thank You</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            You&apos;re one decision away from a completely different life. 10,000+
            people have already made that decision.
          </p>
          <p className="text-gray-500 mb-10">
            Join them today for just <strong className="text-white">$27</strong> — and get $665+ in bonuses free.
          </p>

          <CTAButton size="xl">
            🚀 Yes, I Want Instant Access — $27
          </CTAButton>

          <p className="text-gray-600 text-sm mt-8">
            30-day money-back guarantee • Instant delivery • Lifetime access
          </p>
        </div>

        <div className="mt-20 pt-12 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Digital Mastery Blueprint. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
