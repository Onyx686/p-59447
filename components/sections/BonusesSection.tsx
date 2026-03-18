import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const bonuses = [
  {
    icon: "📋",
    title: "50+ Ready-to-Use Templates",
    description:
      "Email sequences, sales pages, social media posts, proposal templates — all done for you.",
    value: "$197",
  },
  {
    icon: "🎥",
    title: "Video Walkthrough Series",
    description:
      "5 hours of over-the-shoulder video showing you exactly how to implement each chapter.",
    value: "$297",
  },
  {
    icon: "🧠",
    title: "Private Community Access",
    description:
      "Join 10,000+ like-minded entrepreneurs. Get feedback, accountability, and support.",
    value: "$97/mo",
  },
  {
    icon: "📊",
    title: "Revenue Tracker Spreadsheet",
    description:
      "The exact spreadsheet I use to track my income, expenses, and growth metrics.",
    value: "$47",
  },
  {
    icon: "🔥",
    title: "Quick-Start Checklist",
    description:
      "A one-page action plan so you know exactly what to do on Day 1, Day 7, and Day 30.",
    value: "$27",
  },
];

export default function BonusesSection() {
  return (
    <SectionWrapper id="bonuses">
      <div className="text-center mb-16">
        <Badge className="mb-6">🎁 Exclusive Bonuses</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          But Wait — You Also Get{" "}
          <span className="text-gradient">$665+ in Bonuses</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Order today and unlock these exclusive bonuses absolutely free.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {bonuses.map((bonus, i) => (
          <div
            key={i}
            className="animate-on-scroll glass rounded-2xl p-6 flex items-start gap-5 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-4xl shrink-0">{bonus.icon}</div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-white">{bonus.title}</h3>
                <span className="text-sm font-bold text-gray-500 line-through whitespace-nowrap">
                  Value: {bonus.value}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                {bonus.description}
              </p>
            </div>
            <div className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full shrink-0">
              FREE
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 animate-on-scroll">
        <div className="glass-strong rounded-xl inline-block px-8 py-4">
          <p className="text-gray-400 text-sm">Total Bonus Value</p>
          <p className="text-3xl font-black text-gradient">$665+</p>
          <p className="text-green-400 text-sm font-bold mt-1">
            Yours FREE today
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
