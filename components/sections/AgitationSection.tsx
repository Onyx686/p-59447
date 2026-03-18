import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AgitationSection() {
  return (
    <SectionWrapper dark>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 rounded-3xl" />
        <div className="relative max-w-4xl mx-auto text-center py-8">
          <div className="animate-on-scroll">
            <p className="text-5xl mb-8">⚠️</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">
              Here&apos;s the{" "}
              <span className="text-red-400">Uncomfortable Truth</span>
            </h2>
          </div>

          <div className="space-y-6 text-left max-w-3xl mx-auto">
            <div className="animate-on-scroll glass rounded-xl p-6 border-l-4 border-red-500/50">
              <p className="text-lg text-gray-300 leading-relaxed">
                Every day you wait, someone with <strong className="text-white">less talent</strong> and{" "}
                <strong className="text-white">less potential</strong> than you is building the life you dream about.
                Not because they&apos;re smarter — but because they had a{" "}
                <strong className="text-brand-400">clear roadmap</strong>.
              </p>
            </div>

            <div className="animate-on-scroll glass rounded-xl p-6 border-l-4 border-orange-500/50">
              <p className="text-lg text-gray-300 leading-relaxed">
                The average person spends <strong className="text-white">2.5 years</strong> trying to figure out
                what could be learned in <strong className="text-brand-400">90 days</strong> with the right guide.
                That&apos;s 2.5 years of your life you&apos;ll never get back.
              </p>
            </div>

            <div className="animate-on-scroll glass rounded-xl p-6 border-l-4 border-yellow-500/50">
              <p className="text-lg text-gray-300 leading-relaxed">
                The cost of <strong className="text-white">inaction</strong> isn&apos;t $0. It&apos;s the $5,000–$15,000/month
                you&apos;re leaving on the table every single month. In a year,
                that&apos;s <strong className="text-red-400">$60,000–$180,000</strong> in lost potential income.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll mt-12">
            <p className="text-xl text-gray-400 italic">
              &quot;The best time to start was yesterday. The second best time is{" "}
              <span className="text-white font-bold">right now</span>.&quot;
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
