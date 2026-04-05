"use client";

import { useState } from "react";
import { games, type GameTag } from "@/data/games";
import TagFilter from "./TagFilter";
import GameCard from "./GameCard";

export default function GameGrid() {
  const [activeTag, setActiveTag] = useState<GameTag | null>(null);

  const allTags: GameTag[] = Array.from(
    new Set(games.flatMap((g) => g.tags))
  );

  const filteredGames = activeTag
    ? games.filter((g) => g.tags.includes(activeTag))
    : games;

  return (
    <>
      <TagFilter
        tags={allTags}
        activeTag={activeTag}
        onTagChange={setActiveTag}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <p className="text-center text-slate-500 py-12">
          No games match this filter.
        </p>
      )}
    </>
  );
}
