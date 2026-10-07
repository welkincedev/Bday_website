import { MagazinePage } from "@/types";

/**
 * 📖 MAGAZINE PAGES DATA STRUCTURE
 * ----------------------------------------------------
 * Place your Canva exported WebP/PNG images into `public/images/magazine/`
 *
 * File Naming Recommendation:
 * - cover.webp
 * - page-01.webp
 * - page-02.webp
 * - page-03.webp
 * ...
 */

export const magazinePages: MagazinePage[] = [
  {
    id: 1,
    image: "/images/magazine/cover.webp",
    alt: "Magazine Cover",
    title: "Cover Issue",
    hiddenNote: "Welcome to your special birthday issue! ✨"
  },
  {
    id: 2,
    image: "/images/magazine/page-01.webp",
    alt: "Page 1 - Introduction",
    title: "Chapter 1: The Beginning",
    caption: "A look back at where it all started."
  },
  {
    id: 3,
    image: "/images/magazine/page-02.webp",
    alt: "Page 2 - Special Moments",
    title: "Chapter 2: Sweet Escape",
    caption: "Unforgettable journeys together."
  },
  {
    id: 4,
    image: "/images/magazine/page-03.webp",
    alt: "Page 3 - Bestie Chronicles",
    title: "Chapter 3: Partner in Crime",
    caption: "Laughter and secrets shared.",
    hiddenNote: "Best friends forever! 💖"
  },
  {
    id: 5,
    image: "/images/magazine/page-04.webp",
    alt: "Page 4 - The Little Things",
    title: "Chapter 4: Everyday Magic",
    caption: "It's the small moments that mean the most."
  },
  {
    id: 6,
    image: "/images/magazine/page-05.webp",
    alt: "Page 5 - Looking Ahead",
    title: "Chapter 5: Future Dreams",
    caption: "Here is to many more chapters ahead."
  }
];
