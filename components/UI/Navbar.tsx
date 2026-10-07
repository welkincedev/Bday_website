"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { BookOpen, Heart, Mail, Image as ImageIcon, Volume2, VolumeX, Sparkles } from "lucide-react";

interface NavbarProps {
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export default function Navbar({ isPlayingMusic, onToggleMusic }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#0C0B0E]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-[#0C0B0E]/90 via-[#0C0B0E]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* CUTE LETTER "A" MONOGRAM LOGO */}
        <a href="#magazine" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent border border-[#D4AF37]/50 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
            <span className="font-serif-editorial text-2xl font-bold text-[#D4AF37] leading-none pt-0.5">
              A
            </span>
            <Sparkles className="w-3 h-3 text-[#D4AF37] absolute -top-1 -right-1 animate-pulse" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-serif-editorial text-lg sm:text-xl tracking-wider text-white font-medium group-hover:text-[#D4AF37] transition-colors leading-tight">
              {siteConfig.girlfriendName}&apos;s Memoir
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]/80 font-sans">
              Special Edition
            </span>
          </div>
        </a>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner text-xs uppercase tracking-widest font-medium">
          <a
            href="#magazine"
            className="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" /> Magazine
          </a>
          <a
            href="#memories"
            className="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
          >
            <ImageIcon className="w-3.5 h-3.5" /> Memories
          </a>
          <a
            href="#letters"
            className="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" /> Letters
          </a>
          <a
            href="#final-message"
            className="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> Birthday Note
          </a>
        </nav>

        {/* MUSIC TOGGLE BUTTON */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMusic}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${
              isPlayingMusic
                ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20"
                : "bg-white/10 border-white/15 text-white/80 hover:text-white hover:bg-white/20"
            }`}
            title="Toggle background music"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-black" />
                <span className="hidden sm:inline">Playing Song</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Play Music</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
