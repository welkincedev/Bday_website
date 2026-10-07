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
    title: "To My Rarest Find & Ultimate Comfort",
    password: "ponnam", // ✏️ CHANGE PASSWORD HERE for Boyfriend's Letter
    passwordHint: "Hint: The secret word between us", // ✏️ OPTIONAL HINT
    content: [
      `To my rarest find... my ultimate comfort... 💖`,
      `Life has a funny way of working out, and finding you was the greatest plot twist I could have ever asked for. From our NSS camp to now, among all the chaos and unfamiliarity in the world, you became the one thing that always, always makes me smile.`,
      `You are irreplaceable in every single corner of my life. You love me louder and better than I ever thought possible, and you make even the most mundane days feel like an adventure. Whether we are bonding over plates of mandi and sharing endless stories, spilling the tea, having our minute-long petty quarrels, or just sitting in silence on the hard days, you are my home.`,
      `Seeing our growth together over these years has been my favorite journey. From celebrating your graduations to seeing everything you put your heart into, you make me so unbelievably proud. I know you are going to do incredibly amazing things this year, and I want you to know that I will always be right there—your loudest cheerleader in life, no matter what.`,
      `Thank you for being the brightest light in my life. I hope this year brings you every single ounce of happiness in this world, because if anyone deserves it, it’s you. `
    ],
    signature: `Happy bday Ponnamaniiii ❤️ - With all my love, Ponnam`
  },
  {
    id: "bestie",
    author: siteConfig.bestieName,
    role: "From Your Gurl",
    date: "Special Birthday Edition",
    title: "To My Rarest Four-Leafed Clover & Soul Solace",
    password: "Kuchupuchu@2003", // ✏️ CHANGE PASSWORD HERE for Bestie's Letter
    passwordHint: "Hint: Intresting name @ birth year ", // ✏️ OPTIONAL HINT
    content: [
      `To my rarest four leafed clover.. to my soul solace.. 🍀✨`,
      `Happiest birthday to my favorite shuttumani for life.. I still remember the first day i met you in tution class you were the smart, funny and kindest soul i met that day.. From that day i knew you were the best of humans..`,
      `Well life had given me a way of finding you again on the first day of college among the unfamiliarity you were literally the one thing that made me smile.. From that day you became something irreplaceable in every small part of my life.... From the shy girl i was you picked up me shown me love like never before.. Loved me so much better than my own blood.`,
      `From laughing together soo hard that we make weird sounds, gossips, study sessions, going to competitions together, getting lost going to random cafes, loving food together, fighting inner battles, doubts, worries, happiness for all those part you were the one thing that was my one and only solace... You are the wonderful part of my horribly written life.. To you am eternally and forever grateful.. You are the one in million...`,
      `Always proud of youu and will be the loudest cheer when you are at the top of your life.. And as i always say i may not know my kid's father but you will be there aunt and emergency contact foreverrr... Lovee you a lotttttt ummmaaa (100000000 x). I hope you acheive every bit of happiness in this world..`
    ],
    signature: `With love, yours only PP 💕`
  }
];
