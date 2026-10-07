"use client";

import { siteConfig } from "@/data/config";
import { Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#D4AF37", "#FFFFFF", "#F3E5AB"],
    });
  };

  return (
    <footer id="final-message" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#050506] border-t border-white/10 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
          <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            {siteConfig.finalMessage.heading}
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-white font-light">
            With All Our Love
          </h2>
        </div>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed font-sans font-light max-w-2xl mx-auto">
          {siteConfig.finalMessage.body}
        </p>

        <div className="pt-4 space-y-3">
          <p className="font-serif-editorial text-2xl text-[#D4AF37] italic">
            {siteConfig.finalMessage.closing}
          </p>
          <p className="text-white/90 text-sm font-sans tracking-widest uppercase">
            {siteConfig.boyfriendName} &amp; {siteConfig.bestieName}
          </p>
        </div>

        {/* Celebration Button */}
        <div className="pt-6">
          <button
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D4AF37] text-black font-medium text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl hover:shadow-[#D4AF37]/30"
          >
            <Sparkles className="w-4 h-4" /> Celebrate {siteConfig.girlfriendName}!
          </button>
        </div>

        <div className="pt-16 border-t border-white/10 text-white/30 text-xs font-mono tracking-widest">
          © 2026 {siteConfig.siteTitle} • CRAFTED WITH LOVE
        </div>
      </div>
    </footer>
  );
}
