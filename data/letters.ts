import { LetterItem } from "@/types";
import { siteConfig } from "./config";

/**
 * 💌 SPECIAL LETTERS DATA STRUCTURE
 * ----------------------------------------------------
 * Edit the letter text, passwords, and hints below.
 * Case-insensitive passwords (e.g. "love" works for "LOVE" or "Love").
 */

export const letters: LetterItem[] = [
  {
    id: "boyfriend",
    author: siteConfig.boyfriendName,
    role: "From Your Boy",
    date: "Special Birthday Edition",
    title: "To the Girl Who Holds My Heart",
    password: "love", // ✏️ CHANGE PASSWORD HERE for Boyfriend's Letter
    passwordHint: "Hint: The secret word between us 💕", // ✏️ OPTIONAL HINT
    content: [
      `Happy Birthday, Kukkrurveyy!`,
      `Every single day with you feels like a gift. From the quiet mornings to our late-night talks, you bring a warmth and joy into my life that words can barely capture.`,
      `Watching you grow, chase your dreams, and illuminate every room you walk into is my absolute favorite thing. You have this rare, effortless grace and kindness that inspires everyone around you.`,
      `Thank you for being my anchor, my best friend, and my endless source of happiness. I hope this magazine brings a smile to your face today and serves as a reminder of how deeply you are cherished.`,
      `Here is to celebrating you today, tomorrow, and every day after.`
    ],
    signature: `All my love, forever & always, ${siteConfig.boyfriendName} x`
  },
  {
    id: "bestie",
    author: siteConfig.bestieName,
    role: "From Your Gurl",
    date: "Special Birthday Edition",
    title: "To My Soul Sister & Ride or Die",
    password: "bestie", // ✏️ CHANGE PASSWORD HERE for Bestie's Letter
    passwordHint: "Hint: Who is your ride or die? 💖", // ✏️ OPTIONAL HINT
    content: [
      `Happy Birthday to my favorite person in the entire universe! 💖`,
      `Life would be so incredibly boring without you. From spontaneous late-night food runs to endless inside jokes that nobody else understands, you are the best friend anyone could ever ask for.`,
      `Thank you for always being the one I can text at 2 AM, the one who listens to all my crazy rants, and the one who always knows how to make me laugh until my stomach hurts.`,
      `I am so proud of everything you are and everything you're becoming. You deserve all the magic, love, and happiness the world has to offer today and every day.`,
      `Love you to the moon and back a million times!`
    ],
    signature: `Best friends forever, ${siteConfig.bestieName} 💕`
  }
];
