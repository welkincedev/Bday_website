"use client";

import { useState } from "react";
import { letters } from "@/data/letters";
import { siteConfig } from "@/data/config";
import { Heart, Sparkles, Feather, Lock, KeyRound, Unlock, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function LettersSection() {
  const [activeTab, setActiveTab] = useState<"boyfriend" | "bestie">("boyfriend");
  const [unlockedLetters, setUnlockedLetters] = useState<Record<string, boolean>>({});
  const [inputPassword, setInputPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const activeLetter = letters.find((l) => l.id === activeTab) || letters[0];

  const isUnlocked =
    !activeLetter.password || unlockedLetters[activeLetter.id];

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeLetter.password) return;

    if (
      inputPassword.trim().toLowerCase() ===
      activeLetter.password.trim().toLowerCase()
    ) {
      setUnlockedLetters((prev) => ({ ...prev, [activeLetter.id]: true }));
      setErrorMsg(false);
      setInputPassword("");
      setShowHint(false);

      // Trigger confetti celebration on unlock
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#FFFFFF", "#E8E6E3"],
      });
    } else {
      setErrorMsg(true);
      setTimeout(() => setErrorMsg(false), 2500);
    }
  };

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
              onClick={() => {
                setActiveTab("boyfriend");
                setInputPassword("");
                setErrorMsg(false);
                setShowHint(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                activeTab === "boyfriend"
                  ? "bg-white text-black shadow-xl"
                  : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${activeTab === "boyfriend" ? "text-red-500 fill-red-500" : ""}`} />
              From {siteConfig.boyfriendName}
              {letters.find((l) => l.id === "boyfriend")?.password &&
                !unlockedLetters["boyfriend"] && (
                  <Lock className="w-3 h-3 text-[#D4AF37]" />
                )}
            </button>

            <button
              onClick={() => {
                setActiveTab("bestie");
                setInputPassword("");
                setErrorMsg(false);
                setShowHint(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                activeTab === "bestie"
                  ? "bg-white text-black shadow-xl"
                  : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${activeTab === "bestie" ? "text-[#D4AF37]" : ""}`} />
              From {siteConfig.bestieName}
              {letters.find((l) => l.id === "bestie")?.password &&
                !unlockedLetters["bestie"] && (
                  <Lock className="w-3 h-3 text-[#D4AF37]" />
                )}
            </button>
          </div>
        </div>

        {/* Letter Presentation Container */}
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            /* LOCKED STATE CARD */
            <motion.div
              key={`locked-${activeLetter.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-[#121214] border border-[#D4AF37]/30 text-white rounded-2xl p-8 sm:p-14 text-center max-w-lg mx-auto shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2 font-sans">
                Passcode Protected Letter
              </span>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-light text-white mb-2">
                Unlock {activeLetter.author}&apos;s Letter
              </h3>

              <p className="text-white/60 text-xs sm:text-sm font-sans mb-8 leading-relaxed">
                Enter the secret passcode to unlock this special birthday letter.
              </p>

              {/* Password Input Form */}
              <form onSubmit={handleUnlock} className="space-y-4">
                <div className="relative">
                  <input
                    type="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    placeholder="Enter secret passcode..."
                    className={`w-full px-5 py-3.5 rounded-full bg-white/5 border text-center text-white text-sm tracking-wider font-sans focus:outline-none transition-all ${
                      errorMsg
                        ? "border-red-500 bg-red-950/20 text-red-200 animate-shake"
                        : "border-white/20 focus:border-[#D4AF37] focus:bg-white/10"
                    }`}
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-400 text-xs font-sans tracking-wide">
                    Incorrect passcode. Try again!
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D4AF37] text-black font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-[#D4AF37]/20"
                >
                  <Unlock className="w-4 h-4" /> Unlock Letter
                </button>
              </form>

              {/* Hint Toggle */}
              {activeLetter.passwordHint && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs text-white/50 hover:text-[#D4AF37] font-sans flex items-center justify-center gap-1.5 mx-auto transition-colors"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    {showHint ? "Hide Hint" : "Need a hint?"}
                  </button>

                  {showHint && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-[#E8D08D] font-handwriting text-base mt-2 bg-[#D4AF37]/10 p-2.5 rounded-lg border border-[#D4AF37]/20"
                    >
                      {activeLetter.passwordHint}
                    </motion.p>
                  )}
                </div>
              )}
            </motion.div>
          ) : (
            /* UNLOCKED LETTER CARD */
            <motion.div
              key={`unlocked-${activeLetter.id}`}
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
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "first-letter:text-5xl first-letter:font-serif-editorial first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37]"
                        : ""
                    }
                  >
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
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
