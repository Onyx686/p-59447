import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const problems = [
  {
    icon: "😰",
    title: "Stuck in a 9-to-5 you hate",
    description:
      "Trading your precious time for a paycheck that barely covers the bills, while your dreams collect dust.",
  },
  {
    icon: "🤯",
    title: "Information overload",
    description:
      "Drowning in YouTube videos, courses, and conflicting advice — never knowing what actually works.",
  },
  {
    icon: "💸",
    title: "Wasted money on courses",
    description:
      "You've spent thousands on programs that promised the world but delivered nothing but theory.",
  },
  {
    icon: "😔",
    title: "Fear of starting",
    description:
      "You know you should take action, but imposter syndrome and analysis paralysis keep you frozen.",
  },
  {
    icon: "⏰",
    title: "No time, no energy",
    description:
      "Between work, family, and life — where do you even find time to build something on the side?",
  },
  {
    icon: "🔄",
    title: "Starting over and over",
    description:
      "Jumping from one shiny object to another, never gaining traction, never seeing results.",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <div className="text-center mb-16">
        <Badge className="mb-6">The Reality Check</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Sound <span className="text-gradient">Familiar?</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          If any of these hit home, you&apos;re not alone. 94% of aspiring
          entrepreneurs face the exact same struggles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem, i) => (
          <div
            key={i}
            className="animate-on-scroll glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {problem.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              {problem.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
