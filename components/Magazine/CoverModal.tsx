"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { magazinePages } from "@/data/magazine";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CoverModalProps {
  isOpen: boolean;
  onOpenMagazine: () => void;
}

export default function CoverModal({ isOpen, onOpenMagazine }: CoverModalProps) {
  const [imageError, setImageError] = useState(false);
  const coverPage = magazinePages[0] || {
    image: "/images/magazine/cover.webp",
    alt: "Magazine Cover",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070708] px-4 py-8 overflow-y-auto"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-radial from-amber-900/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative max-w-4xl w-full flex flex-col items-center justify-center text-center z-10 py-6">
            {/* Header / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 space-y-2"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium border border-[#D4AF37]/30 px-3 py-1 rounded-full bg-[#D4AF37]/5">
                <Sparkles className="w-3 h-3" /> Birthday Special Edition
              </span>
              <h1 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl tracking-wide text-white font-light">
                {siteConfig.girlfriendName}&apos;s Birthday Memoir
              </h1>
              <p className="text-white/60 text-xs sm:text-sm tracking-widest uppercase font-sans">
                Curated by {siteConfig.boyfriendName} &amp; {siteConfig.bestieName}
              </p>
            </motion.div>

            {/* Magazine Cover Card Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative group cursor-pointer my-4"
              onClick={onOpenMagazine}
            >
              {/* Soft Drop Shadow & Realism Container */}
              <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.02]">
                {!imageError ? (
                  <Image
                    src={coverPage.image}
                    alt={coverPage.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 340px, 400px"
                    className="object-cover transition-all duration-700 group-hover:brightness-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Elegant Fallback Cover standard layout if WebP image is not placed yet */
                  <div className="w-full h-full bg-[#FAF8F5] text-[#1A1A1A] p-8 flex flex-col justify-between text-left font-serif-editorial">
                    <div className="border-b border-black/20 pb-4">
                      <p className="text-xs uppercase tracking-widest font-sans text-black/60">
                        {siteConfig.siteTitle} • ISSUE 01
                      </p>
                      <h2 className="text-4xl font-normal tracking-wide text-black mt-2">
                        {siteConfig.girlfriendName}
                      </h2>
                    </div>

                    <div className="my-auto space-y-3">
                      <p className="text-2xl italic font-light text-black/80">
                        &quot;A collection of stories, smiles, and unforgettable memories.&quot;
                      </p>
                    </div>

                    <div className="border-t border-black/20 pt-4 flex justify-between items-end text-xs font-sans text-black/60">
                      <span>SPECIAL EDITION</span>
                      <span>2026</span>
                    </div>
                  </div>
                )}

                {/* Subtle Magazine Spine Shadow */}
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />

                {/* Light Reflection Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex flex-col items-center gap-3"
            >
              <button
                onClick={onOpenMagazine}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-sm tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/20 active:scale-95"
              >
                <span>Open Magazine</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-white/40 text-xs tracking-wider">
                Click cover or button to flip through pages
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
