import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Party Quests | Connor's Games",
  description:
    "Increasing human connection through secret party quests. Secret missions for social events — complete challenges, spark conversations, and climb the live leaderboard.",
};

export default function PartyQuestsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-500 hover:text-sky transition-colors duration-200 mb-8"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all games
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Party Quests
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            Increasing human connection through secret party quests.
          </p>

          {/* Play CTA — top of page */}
          <a
            href="https://party-quest-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-light transition-all duration-200"
          >
            Play the game
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 space-y-14">

          {/* What It Is */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              What is Party Quests?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Party Quests is a mobile-first progressive web app for social
              events. Each participant receives a set of secret missions —
              social challenges designed to spark conversation and genuine
              interaction. Missions are self-reported and tracked on a live
              leaderboard visible to everyone at the event.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              No downloads required. Open the link, enter your event code, and
              you&apos;re in.
            </p>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Works for any gathering
            </h2>
            <ul className="grid grid-cols-2 gap-3 text-slate-600">
              {[
                "House parties",
                "Birthday parties",
                "Bachelorette / bachelor events",
                "Work offsites & team events",
                "Weekend trips",
                "Any social gathering",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Participant Flow */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              For participants
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              No account needed — just show up.
            </p>
            <ol className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Join with your event code",
                  body: "Open the app, tap \"Join Event\", enter the 6-character code your organizer shared, and enter your name. That's it.",
                },
                {
                  step: "2",
                  title: "Receive your secret missions",
                  body: "You'll see your personal mission list — social challenges assigned just to you. Some missions unlock over the course of the event.",
                },
                {
                  step: "3",
                  title: "Complete missions naturally",
                  body: "Work your missions into conversation and interaction without tipping anyone off. Be creative, be subtle.",
                },
                {
                  step: "4",
                  title: "Mark completions & watch the leaderboard",
                  body: "Check off each mission when you've done it, add an optional note or photo, and watch your score update on the live leaderboard.",
                },
              ].map(({ step, title, body }) => (
                <li key={step} className="flex gap-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sky/10 text-sky font-bold flex items-center justify-center text-sm">
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-slate-600 mt-1 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Mission Categories */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Mission categories
            </h2>
            <p className="text-slate-600 mb-5">
              Missions are drawn from a library of 100+ social challenges
              across 10 categories. Organizers choose which categories to
              include.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Icebreakers",
                "Silly Dares",
                "Storytelling",
                "Food & Drink",
                "Performance",
                "Social Connector",
                "Bold Dares",
                "Deep Cut",
                "Party Classic",
                "Wildcard",
              ].map((cat) => (
                <div
                  key={cat}
                  className="px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium"
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* Organizer Flow */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              For organizers
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Set up an event in minutes. Run it from your phone.
            </p>
            <ol className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Create an account",
                  body: "Sign in with Google — no separate password needed.",
                },
                {
                  step: "2",
                  title: "Configure your event",
                  body: "Name your event, set the date and duration, add participants (or let them self-register via invite link / QR code), choose mission categories, and set how many missions each person gets.",
                },
                {
                  step: "3",
                  title: "Share codes & launch",
                  body: "Each participant gets a personal access code. Copy them all at once, share the invite link, or display a QR code. When you're ready, hit Launch.",
                },
                {
                  step: "4",
                  title: "Watch it unfold",
                  body: "Your live dashboard shows who has joined, how many missions they've completed, and a real-time activity feed. You can also pull up the leaderboard on any screen at the venue.",
                },
                {
                  step: "5",
                  title: "Post-event summary",
                  body: "After the event ends, view final standings, completion stats, and individual mission results. Clone the event to reuse your config next time.",
                },
              ].map(({ step, title, body }) => (
                <li key={step} className="flex gap-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sky/10 text-sky font-bold flex items-center justify-center text-sm">
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-slate-600 mt-1 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Leaderboard & Spectator */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Live leaderboard
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The leaderboard updates in real-time as missions are completed.
              Anyone can pull it up in full-screen spectator mode using just the
              event code — no account, no missions, just the live standings.
              Perfect for displaying on a TV or shared screen at the venue.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="pt-4 border-t border-slate-200">
            <a
              href="https://party-quest-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-light transition-all duration-200"
            >
              Play the game
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
