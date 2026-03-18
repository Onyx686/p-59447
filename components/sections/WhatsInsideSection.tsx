import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const chapters = [
  {
    chapter: 1,
    title: "The Mindset Shift",
    description: "Rewire your brain for entrepreneurial success",
    pages: "22 pages",
  },
  {
    chapter: 2,
    title: "Finding Your Golden Niche",
    description: "The 5-filter system to pick a profitable market",
    pages: "28 pages",
  },
  {
    chapter: 3,
    title: "Your Digital HQ",
    description: "Set up your entire online presence in one weekend",
    pages: "18 pages",
  },
  {
    chapter: 4,
    title: "Offer Creation Mastery",
    description: "Build products people can't stop buying",
    pages: "32 pages",
  },
  {
    chapter: 5,
    title: "The Traffic Blueprint",
    description: "Free & paid strategies to flood your funnel",
    pages: "26 pages",
  },
  {
    chapter: 6,
    title: "Email Alchemy",
    description: "Turn subscribers into raving fans and buyers",
    pages: "20 pages",
  },
  {
    chapter: 7,
    title: "Sales Psychology",
    description: "Ethical persuasion that converts like crazy",
    pages: "24 pages",
  },
  {
    chapter: 8,
    title: "Automation Systems",
    description: "Put your business on autopilot while you sleep",
    pages: "18 pages",
  },
  {
    chapter: 9,
    title: "Scale to 6 Figures",
    description: "Advanced strategies for explosive growth",
    pages: "22 pages",
  },
  {
    chapter: 10,
    title: "The Launch Playbook",
    description: "Day-by-day plan for your first $10K month",
    pages: "16 pages",
  },
  {
    chapter: 11,
    title: "Advanced Funnels",
    description: "Multi-step funnels that maximize customer value",
    pages: "20 pages",
  },
  {
    chapter: 12,
    title: "Your 90-Day Action Plan",
    description: "Exact steps, week by week, to reach your goals",
    pages: "22 pages",
  },
];

export default function WhatsInsideSection() {
  return (
    <SectionWrapper id="whats-inside" dark>
      <div className="text-center mb-16">
        <Badge className="mb-6">What&apos;s Inside</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          248 Pages of{" "}
          <span className="text-gradient">Pure Value</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Every chapter is designed to give you actionable knowledge you can
          implement immediately. No fluff. No filler.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((ch, i) => (
          <div
            key={i}
            className="animate-on-scroll glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group cursor-default"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500/20 to-pink-500/20 flex items-center justify-center text-sm font-bold text-brand-400 shrink-0 group-hover:from-brand-500/30 group-hover:to-pink-500/30 transition-all">
                {ch.chapter}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm mb-1">
                  {ch.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {ch.description}
                </p>
                <p className="text-brand-400/60 text-xs mt-2">{ch.pages}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
