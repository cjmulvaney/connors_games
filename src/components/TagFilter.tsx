"use client";

import type { GameTag } from "@/data/games";

interface TagFilterProps {
  tags: GameTag[];
  activeTag: GameTag | null;
  onTagChange: (tag: GameTag | null) => void;
}

export default function TagFilter({
  tags,
  activeTag,
  onTagChange,
}: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <button
        onClick={() => onTagChange(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
          activeTag === null
            ? "bg-sky text-white"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(activeTag === tag ? null : tag)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTag === tag
              ? "bg-sky text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
