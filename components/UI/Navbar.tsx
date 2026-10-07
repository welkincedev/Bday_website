"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { BookOpen, Heart, Mail, Image as ImageIcon, Volume2, VolumeX } from "lucide-react";

interface NavbarProps {
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export default function Navbar({ isPlayingMusic, onToggleMusic }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Editorial Logo / Title */}
        <a href="#magazine" className="flex items-center gap-3 group">
          <span className="font-serif-editorial text-xl sm:text-2xl tracking-wider uppercase text-white font-medium group-hover:text-[#D4AF37] transition-colors">
            {siteConfig.siteTitle}
          </span>
          <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded border border-white/20 text-white/70">
            For {siteConfig.girlfriendName}
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-white/70 font-medium">
          <a
            href="#magazine"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" /> Magazine
          </a>
          <a
            href="#memories"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <ImageIcon className="w-3.5 h-3.5" /> Memories
          </a>
          <a
            href="#letters"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Letters
          </a>
          <a
            href="#final-message"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" /> Birthday Note
          </a>
        </nav>

        {/* Music Quick Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMusic}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all border ${
              isPlayingMusic
                ? "bg-[#D4AF37]/20 border-[#D4AF37]/50 text-[#D4AF37]"
                : "bg-white/5 border-white/15 text-white/70 hover:text-white hover:border-white/30"
            }`}
            title="Toggle background music"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
                <span className="hidden sm:inline">Playing Our Song</span>
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
