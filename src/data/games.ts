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
    id: "homestake-lodge-xc-ski-2026",
    name: "Homestake Lodge XC Ski Weekend 2026",
    description:
      "A weekend-long game of silly missions. Most missions accomplished wins!",
    url: "/games/homestake-lodge-xc-ski-2026",
    tags: ["For Fun", "Humor"],
  },
  {
    id: "placeholder-2",
    name: "Placeholder Game Two",
    description:
      "A silly game that will make you laugh. Don't take it too seriously.",
    url: "https://example.com/game-2",
    tags: ["Humor", "For Fun"],
    external: true,
  },
  {
    id: "placeholder-3",
    name: "Placeholder Game Three",
    description:
      "Learn something new while you play. Education meets entertainment.",
    url: "https://example.com/game-3",
    tags: ["Educational"],
    external: true,
  },
];
