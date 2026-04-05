import GameGrid from "@/components/GameGrid";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Games
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            A collection of games I&apos;ve built &mdash; some for fun, some
            funny, some educational. Click any card to play.
          </p>
        </div>
      </section>

      {/* Games grid */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <GameGrid />
        </div>
      </section>
    </>
  );
}
