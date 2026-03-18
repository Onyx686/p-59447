import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer → Agency Owner",
    quote:
      "I went from struggling freelancer to running a $15K/month design agency in 3 months. This blueprint changed everything.",
    rating: 5,
    result: "$15K/mo",
  },
  {
    name: "Marcus Johnson",
    role: "Ex-Teacher",
    quote:
      "I was so skeptical, but I followed the plan step by step. Quit my teaching job 4 months later. Best $27 I've ever spent.",
    rating: 5,
    result: "$8K/mo",
  },
  {
    name: "Emily Rodriguez",
    role: "Stay-at-Home Mom",
    quote:
      "Working around my kids' schedule, I built a $5K/month business using the exact templates in this book. Mind-blown.",
    rating: 5,
    result: "$5K/mo",
  },
  {
    name: "David Park",
    role: "College Student",
    quote:
      "Started at 19 with zero experience. Now I'm making more than my professors. The chapter on automation alone is worth 100x the price.",
    rating: 5,
    result: "$12K/mo",
  },
  {
    name: "Lisa Thompson",
    role: "Corporate Burnout → Entrepreneur",
    quote:
      "After 15 years in corporate, I needed an escape plan. This was it. Replaced my salary in 60 days flat.",
    rating: 5,
    result: "$10K/mo",
  },
  {
    name: "James Wright",
    role: "Side Hustler",
    quote:
      "I've bought every course out there. This $27 ebook gave me more actionable value than $5000 programs. Not even close.",
    rating: 5,
    result: "$7K/mo",
  },
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" dark>
      <div className="text-center mb-16">
        <Badge className="mb-6">Social Proof</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Real People.{" "}
          <span className="text-gradient">Real Results.</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Don&apos;t take our word for it. Here&apos;s what our community of
          10,000+ readers has to say.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="animate-on-scroll glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <svg
                  key={j}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed text-sm flex-1 mb-4">
              &quot;{t.quote}&quot;
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
              <div className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                {t.result}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
