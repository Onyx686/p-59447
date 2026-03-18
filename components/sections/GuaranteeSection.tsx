import SectionWrapper from "@/components/ui/SectionWrapper";

export default function GuaranteeSection() {
  return (
    <SectionWrapper dark>
      <div className="max-w-3xl mx-auto">
        <div className="animate-on-scroll relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-lg" />
          <div className="relative glass-strong rounded-2xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              30-Day <span className="text-green-400">Iron-Clad</span> Guarantee
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-6">
              We&apos;re so confident this blueprint will change your life that
              we&apos;re offering a full 30-day money-back guarantee. If you
              read the book, apply the strategies, and don&apos;t see results —
              we&apos;ll refund every penny.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
              No questions asked. No hoops to jump through. No hard feelings.
              You either get results, or you get your money back.{" "}
              <strong className="text-white">It&apos;s that simple.</strong>
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No Questions Asked
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Full Refund
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Zero Risk
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
