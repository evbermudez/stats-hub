import Link from 'next/link';

import { getPlayers, getTeams } from '@/lib/data';

export default function PlayersPage() {
  const players = getPlayers();
  const teams = getTeams();
  const teamNameBySlug = new Map(teams.map((team) => [team.slug, `${team.name} (${team.season})`]));

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Players
          </p>
          <h1 className="text-3xl font-semibold">All Players</h1>
          <p className="text-sm text-slate-400">
            Browse the roster and open profiles for detailed stats.
          </p>
        </header>

        {players.length === 0 ? (
          <p className="text-sm text-slate-500">No players available.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {players.map((player) => (
              <Link
                key={player.id}
                href={`/players/${player.id}`}
                className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40 transition hover:border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-100">
                      #{player.jerseyNumber} {player.firstName} {player.lastName}
                    </p>
                    <p className="text-sm text-slate-500">Position: {player.position}</p>
                  </div>
                  <span className="rounded-full bg-slate-800/60 px-2 py-1 text-xs uppercase tracking-[0.15em] text-slate-300">
                    {player.position}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {teamNameBySlug.get(player.currentTeamSlug ?? '') ??
                    player.currentTeamSlug ??
                    'No current team'}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
