import { MemoryItem } from "@/types";

/**
 * 📸 MEMORIES DATA STRUCTURE
 * ----------------------------------------------------
 * Place your extra photos in `public/images/memories/`
 * Add photos with just image path, optional title, location, tilt, and secret note!
 */

export const memories: MemoryItem[] = [
  {
    image: "/images/memories/memory-1.jpg",
    title: "Autumn Afternoon",
    location: "Kochi Metro",
    rotationDegrees: -2,
    note: "You were laughing so hard at our awful joke here! ❤️"
  },
  {
    image: "/images/memories/memory-2.jpeg",
    title: "Coffee & Rain",
    location: "Corner Cafe",
    rotationDegrees: 3,
    note: "Best mocha latte in town!"
  },
  {
    image: "/images/memories/memory-3.jpg",
    title: "New Year's Eve",
    location: "Downtown Plaza",
    rotationDegrees: -1,
    note: "Ring in the new year with my favorite human."
  },
  {
    image: "/images/memories/memory-4.jpg",
    title: "Weekend Getaway",
    location: "Pine Ridge Trail",
    rotationDegrees: 2,
    note: "We almost lost the map, but it turned into an adventure!"
  },
  {
    image: "/images/memories/memory-5.jpg",
    title: "Concert Night",
    location: "Starlight Arena",
    rotationDegrees: -3,
    note: "Your favorite song came on and your eyes lit up!"
  },
  {
    image: "/images/memories/memory-6.jpg",
    title: "Autumn Picnic",
    location: "Botanical Gardens",
    rotationDegrees: 1,
    note: "Best picnic afternoon ever."
  }
];
