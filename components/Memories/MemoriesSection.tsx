"use client";

import { useState } from "react";
import { memories } from "@/data/memories";
import { Sparkles, MapPin, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MemoriesSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
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
            Moments captured outside the magazine pages. Click any Polaroid to view details or secret notes.
          </p>
        </div>

        {/* Polaroid Memory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {memories.map((item, index) => {
            const isFlipped = flippedCards[index];
            const hasError = imageErrors[index];
            const rotation = item.rotationDegrees || 0;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="perspective-1000 cursor-pointer"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-[400px] transition-transform duration-700 transform-style-3d ${
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
                    <div className="relative w-full h-[300px] bg-stone-200 overflow-hidden rounded-sm">
                      {!hasError ? (
                        <Image
                          src={item.image}
                          alt={item.title || "Memory photo"}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={() =>
                            setImageErrors((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                        />
                      ) : (
                        /* Fallback polaroid visual */
                        <div className="w-full h-full bg-[#EAE7E1] flex flex-col items-center justify-center p-4 text-center">
                          <ImageIcon className="w-8 h-8 text-black/30 mb-2" />
                          <span className="font-serif-editorial text-lg text-black/70 italic">
                            {item.title || "Special Memory"}
                          </span>
                        </div>
                      )}

                      {/* Polaroid Tape Accent */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-xs border border-black/5 rotate-[-2deg] shadow-xs" />
                    </div>

                    {/* Polaroid Text Area */}
                    <div className="pt-3 px-1 flex items-end justify-between font-handwriting">
                      <div>
                        {item.title && (
                          <h3 className="text-xl font-bold text-stone-900 leading-tight">
                            {item.title}
                          </h3>
                        )}
                        {item.location && (
                          <p className="text-xs text-stone-600 flex items-center gap-1 font-sans mt-0.5">
                            <MapPin className="w-3 h-3 text-[#D4AF37]" />{" "}
                            {item.location}
                          </p>
                        )}
                      </div>

                      {item.note && (
                        <div className="text-xs font-sans text-[#D4AF37] uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Flip note
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BACK: Hidden Note Card */}
                  <div className="absolute inset-0 w-full h-full bg-[#141416] border border-[#D4AF37]/30 text-white p-6 rounded shadow-2xl flex flex-col justify-between rotate-y-180 backface-hidden">
                    <div className="space-y-4 my-auto text-center">
                      <div className="w-10 h-10 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                      </div>

                      {item.title && (
                        <h4 className="font-serif-editorial text-2xl text-white">
                          {item.title}
                        </h4>
                      )}

                      {item.note ? (
                        <div className="p-4 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 font-handwriting text-xl text-[#E8D08D]">
                          &quot;{item.note}&quot;
                        </div>
                      ) : (
                        <p className="text-white/60 text-sm font-sans italic">
                          A cherished memory trapped in time.
                        </p>
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
