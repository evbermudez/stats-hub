import Link from 'next/link';

import { getLeagues, getPlayers, getTeams } from '@/lib/data';

export default function HomePage() {
  const players = getPlayers();
  const teams = getTeams();
  const leagues = getLeagues();

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Stats Hub
          </p>
          <h1 className="text-3xl font-semibold">Basketball Dashboard</h1>
          <p className="text-sm text-slate-400">
            Quick snapshot of players, teams, and leagues from your static data.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
            <h2 className="mb-3 text-lg font-semibold">Players</h2>
            <ul className="space-y-2 text-sm">
              {players.map((player) => (
                <li key={player.id}>
                  <Link
                    href={`/players/${player.id}`}
                    className="block rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 hover:underline"
                  >
                    <span className="font-medium text-slate-200">
                      #{player.jerseyNumber} {player.firstName} {player.lastName}
                    </span>
                    <span className="ml-2 text-xs uppercase text-slate-500">
                      {player.position}
                    </span>
                  </Link>
                </li>
              ))}
              {players.length === 0 && (
                <li className="text-slate-500">No players available.</li>
              )}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
            <h2 className="mb-3 text-lg font-semibold">Teams</h2>
            <ul className="space-y-2 text-sm">
              {teams.map((team) => (
                <li
                  key={team.slug}
                  className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2"
                >
                  <span className="font-medium text-slate-200">
                    {team.city ? `${team.city} ` : ''}
                    {team.name} ({team.season})
                  </span>
                </li>
              ))}
              {teams.length === 0 && <li className="text-slate-500">No teams available.</li>}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
            <h2 className="mb-3 text-lg font-semibold">Leagues</h2>
            <ul className="space-y-2 text-sm">
              {leagues.map((league) => (
                <li
                  key={league.slug}
                  className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2"
                >
                  <span className="font-medium text-slate-200">
                    {league.name} ({league.season})
                  </span>
                </li>
              ))}
              {leagues.length === 0 && (
                <li className="text-slate-500">No leagues available.</li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
