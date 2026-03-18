"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const faqs = [
  {
    question: "Is this really just $27?",
    answer:
      "Yes! We priced it low on purpose. We believe everyone deserves access to this knowledge, regardless of their budget. The blueprint is normally $197, but we're running a limited-time offer. Once this promotion ends, the price goes back up.",
  },
  {
    question: "Do I need any prior experience?",
    answer:
      "Absolutely not. The blueprint is designed for complete beginners. We walk you through everything step-by-step, from choosing your niche to making your first sale. If you can send an email, you can follow this guide.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most students start seeing their first results within 2-4 weeks. Some have made their investment back within 48 hours. It depends on how much action you take, but the 90-day plan is designed to get you to $5K-$10K/month.",
  },
  {
    question: "What format does the ebook come in?",
    answer:
      "You'll get instant access to both PDF and ePub formats, so you can read on any device — laptop, tablet, phone, or e-reader. You also get the video walkthroughs and all bonus materials.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "We offer a no-questions-asked 30-day money-back guarantee. If you follow the blueprint and don't see results, simply email us and we'll refund every penny. You have absolutely nothing to lose.",
  },
  {
    question: "Is this another 'get rich quick' scheme?",
    answer:
      "No. This is a proven, step-by-step business building system. It requires work, dedication, and patience. We don't promise overnight riches — we promise a clear, actionable path to building a real, sustainable digital business.",
  },
  {
    question: "Will I get updates?",
    answer:
      "Yes! You get lifetime updates at no extra charge. Whenever we update the blueprint with new strategies or information, you'll receive the latest version automatically via email.",
  },
  {
    question: "Can I access the community immediately?",
    answer:
      "Yes! As soon as you purchase, you'll receive an invite to our private community. You can start connecting with other entrepreneurs, asking questions, and getting feedback right away.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all"
      >
        <span className="font-bold text-white text-sm md:text-base pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-brand-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-16">
        <Badge className="mb-6">FAQ</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Got <span className="text-gradient">Questions?</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Here are the most common questions we get. Can&apos;t find your
          answer? Email us at support@digitalmastery.com
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="animate-on-scroll">
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
