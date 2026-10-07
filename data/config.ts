import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  girlfriendName: "Aachu",      // ✏️ CHANGE THIS to your girlfriend's name
  boyfriendName: "Welku",       // ✏️ CHANGE THIS to your name
  bestieName: "PPkuttan",       // ✏️ CHANGE THIS to her best friend's name
  siteTitle: "Aachunte day",
  subTitle: "A curated collection of moments, laughs, and memories",
  
  // 🎵 MUSIC CONFIGURATION
  // Options: 'spotify' | 'youtube' | 'mp3'
  musicType: "spotify",
  
  // 🟢 SPOTIFY PLAYLIST OR TRACK EMBED LINK:
  // To get your Spotify embed link:
  // 1. Open your Spotify playlist/track on desktop or mobile app.
  // 2. Click "..." -> "Share" -> "Embed playlist" (or copy link).
  // 3. Paste the URL below (e.g. "https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" or "https://open.spotify.com/embed/track/YOUR_TRACK_ID")
  spotifyEmbedUrl: "https://open.spotify.com/playlist/1jcx3wCRRTtXmZhSFTtBzV?si=FuS4kDEnTw-9fPbxoG_hOQ&utm_source=whatsapp&pi=vnXPGu7dSVyfx",
  
  // 🔴 YOUTUBE PLAYLIST OR VIDEO EMBED LINK (Optional):
  // e.g. "https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID" or "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  youtubeEmbedUrl: "https://www.youtube.com/embed/videoseries?list=PL4fGSI1pEUA7vU15y-9H-Wk75T4p3i4z5",
  
  // 📁 LOCAL MP3 FALLBACK AUDIO PATH:
  audioPath: "/audio/rathinamo.mp3",
  songTitle: "Our Favorite Playlist",
  artistName: "Special Edition",
  
  finalMessage: {
    heading: "Happy Birthday, My Love",
    body: "This digital magazine was created with endless love by the two people who adore you most. Every page holds a story, every photo holds a memory, and every line was written with you in mind. May this new chapter bring you as much magic and warmth as you give to the world every single day.",
    closing: "Forever & Always💖,"
  }
};