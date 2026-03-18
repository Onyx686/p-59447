"use client";

import { useEffect, useState } from "react";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass-strong shadow-2xl shadow-brand-500/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-sm md:text-base font-bold text-gradient">
          Digital Mastery Blueprint
        </span>
        <a
          href="#pricing"
          className="bg-gradient-to-r from-brand-500 to-pink-500 hover:from-brand-400 hover:to-pink-400 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
        >
          Get Instant Access →
        </a>
      </div>
    </div>
  );
}
