"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { supabase } from "@/lib/supabase";

const included = [
  "248-page Digital Mastery Blueprint (PDF + ePub)",
  "50+ Done-For-You Templates ($197 value)",
  "Video Walkthrough Series ($297 value)",
  "Private Community Access ($97/mo value)",
  "Revenue Tracker Spreadsheet ($47 value)",
  "Quick-Start Checklist ($27 value)",
  "Lifetime Updates — Free Forever",
  "30-Day Money-Back Guarantee",
];

export default function PricingSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: insertError } = await supabase.from("leads").insert({
        email,
        name,
        source: "pricing_section",
      });

      if (insertError && insertError.code !== "23505") {
        throw insertError;
      }

      const { error: orderError } = await supabase.from("orders").insert({
        email,
        name,
        amount: 27,
        currency: "USD",
        product: "Digital Mastery Blueprint",
        status: "pending",
      });

      if (orderError) throw orderError;

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="pricing" dark>
      <div className="text-center mb-12">
        <Badge className="mb-6">Limited Time Offer</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Get Everything for Just{" "}
          <span className="text-gradient">$27</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          That&apos;s less than the price of a dinner out — for a blueprint
          that could change your entire financial future.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-pink-500 rounded-3xl blur-lg opacity-25" />
          <div className="relative glass-strong rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-gray-500 line-through">$197</span>
                <span className="text-5xl font-black text-white">$27</span>
              </div>
              <p className="text-green-400 text-sm font-bold">You save $170 (86% off)</p>
              <p className="text-gray-500 text-xs mt-1">One-time payment • No subscriptions</p>
            </div>

            <div className="space-y-3 mb-8">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  You&apos;re In!
                </h3>
                <p className="text-gray-400">
                  Check your email for download instructions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your best email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-500 to-pink-500 hover:from-brand-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/25 disabled:opacity-50 disabled:hover:scale-100 text-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "🚀 Get Instant Access — $27"
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure Checkout
                  </span>
                  <span>•</span>
                  <span>Instant Delivery</span>
                  <span>•</span>
                  <span>30-Day Guarantee</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
