import Link from 'next/link';

import { getLeagues, getTeams } from '@/lib/data';

export default function TeamsPage() {
  const teams = getTeams();
  const leagues = getLeagues();
  const leagueNameBySlug = new Map(leagues.map((league) => [league.slug, league.name]));

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Teams
          </p>
          <h1 className="text-3xl font-semibold">All Teams</h1>
          <p className="text-sm text-slate-400">Browse teams by season and league.</p>
        </header>

        {teams.length === 0 ? (
          <p className="text-sm text-slate-500">No teams available.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {teams.map((team) => (
              <Link
                key={team.slug}
                href={`/teams/${team.slug}`}
                className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40 transition hover:border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-100">
                      {team.city ? `${team.city} ` : ''}
                      {team.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      Season {team.season} • {leagueNameBySlug.get(team.leagueSlug) ?? team.leagueSlug}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-800/60 px-2 py-1 text-xs uppercase tracking-[0.15em] text-slate-300">
                    {team.leagueSlug}
                  </span>
                </div>
                {(team.primaryColor || team.secondaryColor) && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    {team.primaryColor && (
                      <span className="flex items-center gap-1">
                        <span
                          className="h-3 w-3 rounded-full border border-slate-800"
                          style={{ backgroundColor: team.primaryColor }}
                        />
                        Primary
                      </span>
                    )}
                    {team.secondaryColor && (
                      <span className="flex items-center gap-1">
                        <span
                          className="h-3 w-3 rounded-full border border-slate-800"
                          style={{ backgroundColor: team.secondaryColor }}
                        />
                        Secondary
                      </span>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
