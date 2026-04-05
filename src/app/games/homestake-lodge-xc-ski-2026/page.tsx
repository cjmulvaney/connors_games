import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Homestake Lodge XC Ski Weekend 2026 | Connor's Games",
  description:
    "A weekend-long game of silly missions. Most missions accomplished wins!",
};

export default function HomestakeLodgePage() {
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
            Weekend Missions
          </h1>
          <p className="text-lg text-slate-500">
            February 27 &ndash; March 1, 2026
          </p>
        </div>
      </section>

      {/* Rules content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 space-y-12">
          {/* The Idea */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Idea
            </h2>
            <p className="text-slate-600">
              Everyone has secret missions to complete throughout the weekend.
              Your missions are personal &mdash; nobody else knows what they
              are. Complete as many as you can before Sunday morning.
            </p>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <ol className="space-y-3 text-slate-600 list-decimal list-inside">
              <li>
                Use your personal access code to log into the app before Friday
                night.
              </li>
              <li>
                You start with <strong>2 missions</strong> on Friday. More
                unlock Saturday morning and evening.
              </li>
              <li>Complete missions however you can. Be creative, be subtle.</li>
              <li>
                Check off completed missions in the app and jot a quick note
                about how you did it.
              </li>
              <li>
                Sunday morning: everyone reveals their missions and shares their
                stories.
              </li>
            </ol>
          </div>

          {/* The Rules */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Rules
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky shrink-0" />
                Keep your missions secret until the Sunday reveal &mdash; no
                peeking at each other&apos;s phones.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky shrink-0" />
                Missions must be completed naturally. No blurting out &ldquo;this is
                my mission&rdquo; to get someone to help.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky shrink-0" />
                If you suspect someone is working a mission, feel free to make
                it harder for them.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky shrink-0" />
                Honor system &mdash; be honest at the Sunday reveal.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky shrink-0" />
                The game runs in the background. Don&apos;t let it overshadow
                the weekend.
              </li>
            </ul>
          </div>

          {/* Mission Schedule */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Mission Schedule
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-slate-600">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 pr-6 font-semibold text-slate-900">
                      When
                    </th>
                    <th className="py-3 pr-6 font-semibold text-slate-900">
                      Time
                    </th>
                    <th className="py-3 font-semibold text-slate-900">
                      Missions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-6">Friday Night</td>
                    <td className="py-3 pr-6">~9:00 PM</td>
                    <td className="py-3">2</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-6">Saturday Morning</td>
                    <td className="py-3 pr-6">8:00 AM</td>
                    <td className="py-3">1</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6">Saturday Evening</td>
                    <td className="py-3 pr-6">5:00 PM</td>
                    <td className="py-3">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sunday Reveal */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Sunday Morning Reveal
            </h2>
            <p className="text-slate-600">
              Before we pack up, everyone shares what their missions were, which
              ones they completed, and how they pulled them off. Best stories win
              bragging rights.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-slate-200">
            <a
              href="https://homestake-lodge-mission26.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-light transition-all duration-200"
            >
              Play game here
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
