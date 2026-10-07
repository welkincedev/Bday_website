export interface MagazinePage {
  id: number;
  image: string;
  alt: string;
  title?: string;
  caption?: string;
  hiddenNote?: string; // Optional interactive Easter egg note on this page
}

export interface MemoryItem {
  image: string;
  title?: string;
  location?: string;
  rotationDegrees?: number; // e.g. -2, 3, -1 for realistic polaroid tilt
  note?: string; // Optional secret note revealed on tap/click
}

export interface LetterItem {
  id: 'boyfriend' | 'bestie';
  author: string;
  role: string; // e.g. "From your love" or "From your best friend"
  date: string;
  title: string;
  content: string[];
  signature: string;
  password?: string; // Optional secret password to unlock this letter
  passwordHint?: string; // Optional hint for the password
  avatar?: string;
}

export interface SiteConfig {
  girlfriendName: string;
  boyfriendName: string;
  bestieName: string;
  siteTitle: string;
  subTitle: string;
  musicType: 'spotify' | 'youtube' | 'mp3';
  spotifyEmbedUrl?: string;
  youtubeEmbedUrl?: string;
  audioPath: string;
  songTitle: string;
  artistName: string;
  finalMessage: {
    heading: string;
    body: string;
    closing: string;
  };
}
