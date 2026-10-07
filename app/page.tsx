"use client";

import { useState } from "react";
import Navbar from "@/components/UI/Navbar";
import CoverModal from "@/components/Magazine/CoverModal";
import MagazineViewer from "@/components/Magazine/MagazineViewer";
import MemoriesSection from "@/components/Memories/MemoriesSection";
import LettersSection from "@/components/Letters/LettersSection";
import MusicPlayer from "@/components/Audio/MusicPlayer";
import EasterEggModal from "@/components/Surprises/EasterEggModal";
import Footer from "@/components/UI/Footer";

export default function Home() {
  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [secretNote, setSecretNote] = useState<string | null>(null);

  const handleOpenMagazine = () => {
    setIsCoverOpen(false);
    // Start music on first explicit user interaction if desired
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white relative">
      {/* Navigation Bar */}
      <Navbar
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={handleToggleMusic}
      />

      {/* Opening Cover Modal */}
      <CoverModal
        isOpen={isCoverOpen}
        onOpenMagazine={handleOpenMagazine}
      />

      {/* Interactive 3D Magazine Reader Section */}
      <MagazineViewer onOpenSecretNote={(note) => setSecretNote(note)} />

      {/* Memories & Photo Archive Section */}
      <MemoriesSection />

      {/* Editorial Birthday Letters Section */}
      <LettersSection />

      {/* Warm Final Closing Message Section */}
      <Footer />

      {/* Floating Music Player */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={handleToggleMusic}
      />

      {/* Secret Note Easter Egg Popup */}
      <EasterEggModal
        note={secretNote}
        onClose={() => setSecretNote(null)}
      />
    </main>
  );
}
