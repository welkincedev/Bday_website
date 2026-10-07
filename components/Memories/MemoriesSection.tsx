"use client";

import { useState } from "react";
import { memories } from "@/data/memories";
import { siteConfig } from "@/data/config";
import { Sparkles, MapPin, Calendar, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MemoriesSection() {
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const years = ["ALL", ...Array.from(new Set(memories.map((m) => m.year)))];

  const filteredMemories =
    selectedYear === "ALL"
      ? memories
      : memories.filter((m) => m.year === selectedYear);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="memories" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium border border-[#D4AF37]/30 px-3 py-1 rounded-full bg-[#D4AF37]/5">
            <ImageIcon className="w-3.5 h-3.5" /> Photo Journal &amp; Archive
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-white font-light tracking-wide">
            Our Shared Memory Vault
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-sans leading-relaxed">
            Moments captured outside the magazine pages. Click any Polaroid to reveal the story behind the photo.
          </p>

          {/* Year Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                  selectedYear === year
                    ? "bg-white text-black shadow-lg"
                    : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
                }`}
              >
                {year === "ALL" ? "All Years" : year}
              </button>
            ))}
          </div>
        </div>

        {/* Polaroid Memory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredMemories.map((item) => {
            const isFlipped = flippedCards[item.id];
            const hasError = imageErrors[item.id];
            const rotation = item.rotationDegrees || 0;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="perspective-1000 cursor-pointer"
                onClick={() => toggleFlip(item.id)}
              >
                <div
                  className={`relative w-full h-[420px] transition-transform duration-700 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transform: isFlipped
                      ? "rotateY(180deg)"
                      : `rotate(${rotation}deg)`,
                  }}
                >
                  {/* FRONT: Polaroid Frame */}
                  <div className="absolute inset-0 w-full h-full bg-[#FAF8F5] text-black p-4 pb-6 rounded shadow-2xl flex flex-col justify-between border border-black/10 backface-hidden group hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-shadow">
                    <div className="relative w-full h-[290px] bg-stone-200 overflow-hidden rounded-sm">
                      {!hasError ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={() =>
                            setImageErrors((prev) => ({
                              ...prev,
                              [item.id]: true,
                            }))
                          }
                        />
                      ) : (
                        /* Fallback polaroid visual */
                        <div className="w-full h-full bg-[#EAE7E1] flex flex-col items-center justify-center p-4 text-center">
                          <ImageIcon className="w-8 h-8 text-black/30 mb-2" />
                          <span className="font-serif-editorial text-lg text-black/70 italic">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-black/50 uppercase tracking-widest font-sans mt-1">
                            {item.date}
                          </span>
                        </div>
                      )}

                      {/* Polaroid Tape Accent */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-xs border border-black/5 rotate-[-2deg] shadow-xs" />
                    </div>

                    {/* Polaroid Text Area */}
                    <div className="pt-3 px-1 flex items-end justify-between font-handwriting">
                      <div>
                        <h3 className="text-xl font-bold text-stone-900 leading-tight">
                          {item.title}
                        </h3>
                        {item.location && (
                          <p className="text-xs text-stone-600 flex items-center gap-1 font-sans mt-0.5">
                            <MapPin className="w-3 h-3 text-[#D4AF37]" />{" "}
                            {item.location}
                          </p>
                        )}
                      </div>
                      <div className="text-right font-sans text-[11px] text-stone-500 uppercase tracking-wider">
                        {item.date}
                      </div>
                    </div>
                  </div>

                  {/* BACK: Hidden Note Card */}
                  <div className="absolute inset-0 w-full h-full bg-[#141416] border border-[#D4AF37]/30 text-white p-6 rounded shadow-2xl flex flex-col justify-between rotate-y-180 backface-hidden">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Story Behind The Shot
                        </span>
                        <span className="text-xs text-white/50 font-mono">
                          {item.year}
                        </span>
                      </div>

                      <h4 className="font-serif-editorial text-2xl text-white">
                        {item.title}
                      </h4>

                      <p className="text-white/80 text-sm leading-relaxed font-sans">
                        {item.caption}
                      </p>

                      {item.note && (
                        <div className="p-4 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 font-handwriting text-lg text-[#E8D08D] mt-2">
                          &quot;{item.note}&quot;
                        </div>
                      )}
                    </div>

                    <div className="text-center text-xs text-white/40 font-sans tracking-widest uppercase border-t border-white/10 pt-3">
                      Tap card to flip back
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
