import Link from 'next/link';

import games from '@/data/games';
import { getLeagues, getTeams } from '@/lib/data';

type StandingRow = {
  teamSlug: string;
  teamName: string;
  wins: number;
  losses: number;
  winPct: number;
};

function buildStandings(leagueSlug: string): StandingRow[] {
  const teams = getTeams().filter((team) => team.leagueSlug === leagueSlug);
  const table = new Map<string, StandingRow>();

  teams.forEach((team) => {
    table.set(team.slug, {
      teamSlug: team.slug,
      teamName: team.name,
      wins: 0,
      losses: 0,
      winPct: 0,
    });
  });

  games
    .filter((game) => game.leagueSlug === leagueSlug)
    .forEach((game) => {
      if (!table.has(game.homeTeamSlug)) {
        table.set(game.homeTeamSlug, {
          teamSlug: game.homeTeamSlug,
          teamName: game.homeTeamSlug,
          wins: 0,
          losses: 0,
          winPct: 0,
        });
      }
      if (!table.has(game.awayTeamSlug)) {
        table.set(game.awayTeamSlug, {
          teamSlug: game.awayTeamSlug,
          teamName: game.awayTeamSlug,
          wins: 0,
          losses: 0,
          winPct: 0,
        });
      }

      const home = table.get(game.homeTeamSlug)!;
      const away = table.get(game.awayTeamSlug)!;

      if (game.homeScore > game.awayScore) {
        home.wins += 1;
        away.losses += 1;
      } else {
        away.wins += 1;
        home.losses += 1;
      }
    });

  return Array.from(table.values())
    .map((row) => {
      const total = row.wins + row.losses;
      return { ...row, winPct: total ? row.wins / total : 0 };
    })
    .sort(
      (a, b) =>
        b.wins - a.wins ||
        a.losses - b.losses ||
        a.teamName.localeCompare(b.teamName),
    );
}

export default function StandingsPage() {
  const leagues = getLeagues();
  const selectedLeague =
    leagues.find((league) => league.slug === 'summer-league-2025') ??
    leagues[0];

  if (!selectedLeague) {
    return (
      <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-slate-500">No leagues available.</p>
        </div>
      </main>
    );
  }

  const standings = buildStandings(selectedLeague.slug);

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Standings
          </p>
          <h1 className="text-3xl font-semibold">League Table</h1>
          <p className="text-sm text-slate-400">
            Current standings for {selectedLeague.name} ({selectedLeague.season})
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-slate-400">
            League
            <select
              className="ml-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-100"
              defaultValue={selectedLeague.slug}
              disabled
            >
              {leagues.map((league) => (
                <option key={league.slug} value={league.slug}>
                  {league.name} ({league.season})
                </option>
              ))}
            </select>
          </label>
          <span className="text-xs text-slate-500">
            Selector is static for now; add handling when multiple leagues are active.
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg shadow-slate-900/40">
          <table className="w-full text-sm">
            <thead className="bg-slate-900/60 text-xs uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="px-3 py-3 text-left">Rank</th>
                <th className="px-3 py-3 text-left">Team</th>
                <th className="px-3 py-3 text-right">W</th>
                <th className="px-3 py-3 text-right">L</th>
                <th className="px-3 py-3 text-right">Win %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {standings.map((row, idx) => (
                <tr key={row.teamSlug} className="hover:bg-slate-900/60">
                  <td className="px-3 py-3 text-slate-300">{idx + 1}</td>
                  <td className="px-3 py-3 font-medium text-slate-100">
                    <Link href={`/teams/${row.teamSlug}`} className="hover:underline">
                      {row.teamName}
                    </Link>
                  </td>
                  <td className="px-3 py-3 text-right">{row.wins}</td>
                  <td className="px-3 py-3 text-right">{row.losses}</td>
                  <td className="px-3 py-3 text-right">{row.winPct.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
