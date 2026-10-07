"use client";

import { useState } from "react";
import { letters } from "@/data/letters";
import { siteConfig } from "@/data/config";
import { Heart, Sparkles, UserCheck, Feather } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LettersSection() {
  const [activeTab, setActiveTab] = useState<"boyfriend" | "bestie">("boyfriend");

  const activeLetter = letters.find((l) => l.id === activeTab) || letters[0];

  return (
    <section id="letters" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#070708] border-t border-white/10 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium border border-[#D4AF37]/30 px-3 py-1 rounded-full bg-[#D4AF37]/5">
            <Feather className="w-3.5 h-3.5" /> Editorial Letters
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-white font-light tracking-wide">
            Words Written From The Heart
          </h2>
          <p className="text-white/60 text-sm font-sans">
            Special birthday messages dedicated to {siteConfig.girlfriendName}
          </p>

          {/* Letter Switcher Tabs */}
          <div className="flex justify-center gap-4 pt-6">
            <button
              onClick={() => setActiveTab("boyfriend")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                activeTab === "boyfriend"
                  ? "bg-white text-black shadow-xl"
                  : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${activeTab === "boyfriend" ? "text-red-500 fill-red-500" : ""}`} />
              From {siteConfig.boyfriendName}
            </button>

            <button
              onClick={() => setActiveTab("bestie")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                activeTab === "bestie"
                  ? "bg-white text-black shadow-xl"
                  : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${activeTab === "bestie" ? "text-[#D4AF37]" : ""}`} />
              From {siteConfig.bestieName}
            </button>
          </div>
        </div>

        {/* Letter Presentation Paper Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLetter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FAF8F5] text-stone-900 rounded-xl p-8 sm:p-12 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-black/10 relative overflow-hidden"
          >
            {/* Editorial Watermark / Stamp */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-10 pointer-events-none font-serif-editorial text-6xl uppercase tracking-widest">
              MEMOIR
            </div>

            {/* Author Header */}
            <div className="border-b border-stone-200 pb-6 mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold font-sans block mb-1">
                  {activeLetter.role}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-4xl text-stone-900 font-normal">
                  {activeLetter.title}
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-sans block">
                  {activeLetter.date}
                </span>
                <span className="text-sm font-serif-editorial text-stone-700 italic">
                  By {activeLetter.author}
                </span>
              </div>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed font-sans font-light">
              {activeLetter.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-serif-editorial first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37]" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature Area */}
            <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col items-end">
              <p className="font-handwriting text-2xl sm:text-3xl text-stone-900 font-bold">
                {activeLetter.signature}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
