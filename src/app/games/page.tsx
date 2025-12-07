import Link from 'next/link';

import games from '@/data/games';
import { getTeams } from '@/lib/data';

const formatDate = (isoDate: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(isoDate));

export default function GamesPage() {
  const teams = getTeams();
  const teamBySlug = new Map(teams.map((team) => [team.slug, team.name]));

  const getTeamName = (slug: string) => teamBySlug.get(slug) ?? slug;

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Games
          </p>
          <h1 className="text-3xl font-semibold">Matchups & Scores</h1>
          <p className="text-sm text-slate-400">
            Browse recent games with final scores and opponents.
          </p>
        </header>

        {games.length === 0 ? (
          <p className="text-sm text-slate-500">No games available.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {games.map((game) => {
              const homeTeamName = getTeamName(game.homeTeamSlug);
              const awayTeamName = getTeamName(game.awayTeamSlug);

              return (
                <Link
                  key={game.id}
                  href={`/games/${game.id}`}
                  className="group block rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40 transition hover:border-slate-700"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                    <span>{formatDate(game.date)}</span>
                    <span className="rounded-full bg-slate-800/60 px-2 py-1 text-[0.65rem] font-semibold">
                      {game.leagueSlug}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-100">
                        {homeTeamName}
                      </p>
                      <p className="text-slate-500">vs</p>
                      <p className="font-semibold text-slate-100">
                        {awayTeamName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-100">
                        {game.homeScore} – {game.awayScore}
                      </p>
                      {game.venue && (
                        <p className="text-xs text-slate-500">{game.venue}</p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
