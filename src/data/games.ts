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
    url: "/games/party-quests",
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
