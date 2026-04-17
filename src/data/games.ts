export type GameTag = "For Fun" | "Humor" | "Educational";

export interface Game {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: GameTag[];
  imageUrl?: string;
  external?: boolean;
}

export const games: Game[] = [
  {
    id: "party-quests",
    name: "Party Quests",
    description:
      "Secret missions for social events. Complete challenges, spark conversations, and climb the live leaderboard.",
    url: "https://party-quest-six.vercel.app/",
    tags: ["For Fun", "Humor"],
    imageUrl: "/images/Party Quest.png",
    external: true,
  },
  {
    id: "how-llms-work",
    name: "How LLMs Work",
    description:
      "An interactive game that teaches you how large language models think, learn, and generate text.",
    url: "https://how-ll-ms-work-game.vercel.app/",
    tags: ["Educational"],
    imageUrl: "/images/How LLMs Work.png",
    external: true,
  },
  {
    id: "special-birthday-calculator",
    name: "Special Birthday Calculator",
    description:
      "Discover what makes your birthday truly special with this whimsical calculator.",
    url: "https://special-birthday-calculatorr.vercel.app/",
    tags: ["For Fun", "Humor"],
    imageUrl: "/images/Special Birthday Calculator.png",
    external: true,
  },
  {
    id: "securifi-mfa",
    name: "SecuriFi Authentication Experience",
    description:
      "Learn multi-factor authentication concepts through an engaging security-themed game.",
    url: "https://securi-fi-authentication-experience.vercel.app/",
    tags: ["Educational"],
    imageUrl: "/images/SecuriFi.png",
    external: true,
  },
];
