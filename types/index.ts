export interface MagazinePage {
  id: number;
  image: string;
  alt: string;
  title?: string;
  caption?: string;
  hiddenNote?: string; // Optional interactive Easter egg note on this page
}

export interface MemoryItem {
  id: string;
  year: string;
  date?: string;
  image: string;
  title: string;
  caption: string;
  location?: string;
  rotationDegrees?: number; // e.g. -2, 3, -1 for realistic polaroid tilt
  note?: string; // Secret note revealed on tap/click
}

export interface LetterItem {
  id: 'boyfriend' | 'bestie';
  author: string;
  role: string; // e.g. "From your love" or "From your best friend"
  date: string;
  title: string;
  content: string[];
  signature: string;
  avatar?: string;
}

export interface SiteConfig {
  girlfriendName: string;
  boyfriendName: string;
  bestieName: string;
  siteTitle: string;
  subTitle: string;
  musicType: 'spotify' | 'youtube' | 'mp3';
  spotifyEmbedUrl?: string; // e.g. "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
  youtubeEmbedUrl?: string; // e.g. "https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID" or "https://www.youtube.com/embed/VIDEO_ID"
  audioPath: string;
  songTitle: string;
  artistName: string;
  finalMessage: {
    heading: string;
    body: string;
    closing: string;
  };
}
