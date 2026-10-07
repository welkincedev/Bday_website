import { MemoryItem } from "@/types";

/**
 * 📸 MEMORIES DATA STRUCTURE
 * ----------------------------------------------------
 * Place your extra photos in `public/images/memories/`
 * Edit the captions, dates, and secret notes below.
 */

export const memories: MemoryItem[] = [
  // 2024
  {
    id: "mem-2024-1",
    year: "2024",
    date: "June 14, 2024",
    image: "/images/memories/memory-1.jpg",
    title: "Summer Afternoon",
    caption: "Sunsets by the beach with warm ocean breeze.",
    location: "Coastal Highway",
    rotationDegrees: -2,
    note: "You were laughing so hard at my awful joke here! ❤️"
  },
  {
    id: "mem-2024-2",
    year: "2024",
    date: "August 22, 2024",
    image: "/images/memories/memory-2.jpg",
    title: "Coffee & Rain",
    caption: "Rainy cozy afternoon tucked away in our favorite cafe.",
    location: "Corner Cafe",
    rotationDegrees: 3,
    note: "Best mocha latte in town!"
  },
  {
    id: "mem-2024-3",
    year: "2024",
    date: "December 31, 2024",
    image: "/images/memories/memory-3.jpg",
    title: "New Year's Eve",
    caption: "Counting down to midnight with fireworks and sparkles.",
    location: "Downtown Plaza",
    rotationDegrees: -1,
    note: "Ring in the new year with my favorite human."
  },

  // 2025
  {
    id: "mem-2025-1",
    year: "2025",
    date: "March 10, 2025",
    image: "/images/memories/memory-4.jpg",
    title: "Weekend Getaway",
    caption: "Mountain trail hiking with crisp morning air.",
    location: "Pine Ridge Trail",
    rotationDegrees: 2,
    note: "We almost lost the map, but it turned into an adventure!"
  },
  {
    id: "mem-2025-2",
    year: "2025",
    date: "July 18, 2025",
    image: "/images/memories/memory-5.jpg",
    title: "Concert Night",
    caption: "Singing along at the top of our lungs.",
    location: "Starlight Arena",
    rotationDegrees: -3,
    note: "Your favorite song came on and your eyes lit up!"
  },
  {
    id: "mem-2025-3",
    year: "2025",
    date: "October 05, 2025",
    image: "/images/memories/memory-6.jpg",
    title: "Autumn Picnic",
    caption: "Golden leaves and warm cider in the park.",
    location: "Botanical Gardens",
    rotationDegrees: 1,
    note: "Best picnic afternoon ever."
  }
];
