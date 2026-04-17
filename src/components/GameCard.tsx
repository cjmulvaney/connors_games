import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const cardContent = (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image area */}
      <div className="relative">
        {game.imageUrl ? (
          <Image
            src={game.imageUrl}
            alt={game.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto block"
          />
        ) : (
          <div className="h-48 bg-gradient-to-br from-sky/15 to-forest/15 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky transition-colors duration-200">
          {game.name}
        </h3>

        <p className="text-slate-600 text-sm mb-4">{game.description}</p>

        <span className="inline-flex items-center text-sm font-medium text-sky group-hover:text-sky-light transition-colors duration-200">
          {game.external ? "Play Game" : "View Game"}
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );

  if (game.external) {
    return (
      <a
        href={game.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={game.url} className="group block">
      {cardContent}
    </Link>
  );
}
