"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function MusicPlayer({ isPlaying, onTogglePlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .then(() => setAudioError(false))
          .catch((err) => {
            console.warn("Audio play prevented or file not found:", err);
            setAudioError(true);
          });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={siteConfig.audioPath}
        loop
        preload="metadata"
        onError={() => setAudioError(true)}
      />

      {/* Floating Audio Controller */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#121214]/90 backdrop-blur-md text-white p-2.5 rounded-full border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all hover:border-[#D4AF37]/50">
        <button
          onClick={onTogglePlay}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
            isPlaying
              ? "bg-[#D4AF37] text-black shadow-lg"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-black" />
              <span>Pause Music</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Play Our Song</span>
            </>
          )}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#D4AF37]" />
          )}
        </button>

        {/* Volume Slider (desktop hover expansion) */}
        <div className="hidden sm:flex items-center pr-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 accent-[#D4AF37] bg-white/20 rounded-lg cursor-pointer"
            title="Volume"
          />
        </div>
      </div>
    </>
  );
}
