"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { Play, Pause, Volume2, VolumeX, Music, X } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function MusicPlayer({ isPlaying, onTogglePlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [hasActivated, setHasActivated] = useState(false);

  const musicType = siteConfig.musicType || "spotify";

  useEffect(() => {
    if (isPlaying) {
      setHasActivated(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (musicType === "mp3" && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Autoplay blocked or waiting for user interaction:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, musicType]);

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

  // Helper to safely format ANY Spotify URL into a valid embed URL
  const formatSpotifyEmbedUrl = (rawUrl?: string): string => {
    let url = rawUrl || "https://open.spotify.com/embed/playlist/1jcx3wCRRTtXmZhSFTtBzV";

    // Ensure it uses /embed/ route
    if (url.includes("open.spotify.com/") && !url.includes("open.spotify.com/embed/")) {
      url = url.replace("open.spotify.com/", "open.spotify.com/embed/");
    }

    // Ensure autoplay=1 parameter is present
    if (!url.includes("autoplay=1")) {
      url += url.includes("?") ? "&autoplay=1" : "?autoplay=1";
    }

    return url;
  };

  // 🟢 SPOTIFY PLAYER WIDGET WITH BACKGROUND CONTINUOUS PLAYBACK
  if (musicType === "spotify") {
    const embedUrl = formatSpotifyEmbedUrl(siteConfig.spotifyEmbedUrl);

    return (
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Persistent Spotify Iframe Container */}
        {hasActivated && (
          <div
            className={`transition-all duration-300 transform ${
              isPlaying
                ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                : "opacity-0 scale-95 pointer-events-none translate-y-4 h-0 overflow-hidden"
            }`}
          >
            <div className="w-[300px] sm:w-[350px] bg-[#121214] border border-[#1DB954]/50 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 mb-2">
                <span className="text-xs uppercase tracking-widest text-[#1DB954] font-semibold flex items-center gap-1.5 font-sans">
                  <Music className="w-3.5 h-3.5" /> Spotify Playlist (Playing)
                </span>
                <button
                  onClick={onTogglePlay}
                  className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10"
                  title="Minimize Player"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <iframe
                src={embedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="eager"
                className="rounded-xl"
              />
            </div>
          </div>
        )}

        {/* Floating Toggle Button */}
        <button
          onClick={onTogglePlay}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all border shadow-[0_10px_30px_rgba(0,0,0,0.7)] ${
            isPlaying
              ? "bg-[#1DB954] border-[#1DB954] text-black shadow-emerald-950/40"
              : "bg-[#121214]/95 border-white/15 text-white hover:border-[#1DB954]/50"
          }`}
        >
          <Music className={`w-3.5 h-3.5 ${isPlaying ? "animate-pulse text-black" : "text-[#1DB954]"}`} />
          <span>
            {isPlaying
              ? "Minimize Player"
              : hasActivated
              ? "Show Spotify Playlist"
              : "Play Our Spotify Playlist"}
          </span>
        </button>
      </div>
    );
  }

  // 🔴 YOUTUBE PLAYER WIDGET
  if (musicType === "youtube") {
    const youtubeUrl = siteConfig.youtubeEmbedUrl || "https://www.youtube.com/embed/videoseries?list=PL4fGSI1pEUA7vU15y-9H-Wk75T4p3i4z5";

    return (
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {hasActivated && (
          <div
            className={`transition-all duration-300 transform ${
              isPlaying
                ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                : "opacity-0 scale-95 pointer-events-none translate-y-4 h-0 overflow-hidden"
            }`}
          >
            <div className="w-[320px] sm:w-[380px] bg-[#121214] border border-red-500/40 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 mb-2">
                <span className="text-xs uppercase tracking-widest text-red-500 font-semibold flex items-center gap-1.5 font-sans">
                  <Music className="w-3.5 h-3.5" /> YouTube Playlist
                </span>
                <button
                  onClick={onTogglePlay}
                  className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src={`${youtubeUrl}&autoplay=1`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onTogglePlay}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all border shadow-lg ${
            isPlaying
              ? "bg-red-600 border-red-500 text-white"
              : "bg-[#121214]/95 border-white/15 text-white hover:border-red-500/50"
          }`}
        >
          <Music className={`w-3.5 h-3.5 ${isPlaying ? "animate-pulse" : "text-red-500"}`} />
          <span>{isPlaying ? "Minimize Player" : "Show YouTube Player"}</span>
        </button>
      </div>
    );
  }

  // 🎵 LOCAL MP3 PLAYER
  return (
    <>
      <audio
        ref={audioRef}
        src={siteConfig.audioPath}
        loop
        preload="metadata"
      />

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
