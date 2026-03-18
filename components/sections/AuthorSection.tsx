import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const stats = [
  { value: "$2.4M+", label: "Revenue Generated" },
  { value: "10K+", label: "Students Helped" },
  { value: "8", label: "Years Experience" },
  { value: "4.9/5", label: "Average Rating" },
];

export default function AuthorSection() {
  return (
    <SectionWrapper id="author">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <div className="glass rounded-2xl p-1">
            <div className="bg-gradient-to-br from-brand-600/20 to-pink-600/20 rounded-xl p-12 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-500 to-pink-500 mx-auto flex items-center justify-center text-5xl shadow-2xl shadow-brand-500/25">
                👤
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-black text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll">
          <Badge className="mb-6">Meet The Author</Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Hi, I&apos;m <span className="text-gradient">Alex Morgan</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              8 years ago, I was exactly where you are now — stuck in a dead-end
              job, drowning in information, and terrified of taking the leap.
            </p>
            <p>
              I spent <strong className="text-white">$47,000</strong> on courses,
              coaches, and programs before I finally cracked the code. I built
              my first digital business to $10K/month in just 4 months.
            </p>
            <p>
              Since then, I&apos;ve generated over{" "}
              <strong className="text-white">$2.4 million</strong> in online
              revenue and helped more than 10,000 students do the same.
            </p>
            <p>
              I wrote this blueprint so you don&apos;t have to waste the time
              and money I did. Everything I know —{" "}
              <strong className="text-brand-400">
                distilled into one powerful book
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
