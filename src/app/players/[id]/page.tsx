import { notFound } from 'next/navigation';

import { getPlayerSeasonAverages } from '@/data/stats';
import { getPlayerById, getPlayers, getTeamBySlug } from '@/lib/data';

type PlayerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return getPlayers().map(({ id }) => ({ id }));
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { id } = await params;
  const player = getPlayerById(id);

  if (!player) {
    notFound();
  }

  const currentTeam = player.currentTeamSlug
    ? getTeamBySlug(player.currentTeamSlug)
    : undefined;
  const seasonAverages = getPlayerSeasonAverages(player.id, currentTeam?.season ?? '');

  const height = player.heightCm ? `${player.heightCm} cm` : '—';
  const weight = player.weightKg ? `${player.weightKg} kg` : '—';
  const teamLabel =
    currentTeam?.name && currentTeam?.season
      ? `${currentTeam.name} (${currentTeam.season})`
      : player.currentTeamSlug ?? 'No current team';

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Player Profile
          </p>
          <h1 className="text-3xl font-semibold">
            #{player.jerseyNumber} {player.firstName} {player.lastName}
          </h1>
          <p className="text-sm text-slate-400">Position: {player.position}</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
            <h2 className="mb-3 text-lg font-semibold">Vitals</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Position</dt>
                <dd className="font-medium text-slate-200">{player.position}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Height</dt>
                <dd className="font-medium text-slate-200">{height}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Weight</dt>
                <dd className="font-medium text-slate-200">{weight}</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
            <h2 className="mb-3 text-lg font-semibold">Current Team</h2>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm">
              <p className="font-medium text-slate-200">{teamLabel}</p>
              {currentTeam?.city && (
                <p className="text-slate-500">{currentTeam.city}</p>
              )}
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
          <h2 className="mb-3 text-lg font-semibold">Season Averages</h2>
          {seasonAverages ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  <tr>
                    <th className="py-2 text-left">Season</th>
                    <th className="py-2 text-right">GP</th>
                    <th className="py-2 text-right">PTS</th>
                    <th className="py-2 text-right">REB</th>
                    <th className="py-2 text-right">AST</th>
                    <th className="py-2 text-right">STL</th>
                    <th className="py-2 text-right">BLK</th>
                    <th className="py-2 text-right">FG%</th>
                    <th className="py-2 text-right">3P%</th>
                    <th className="py-2 text-right">FT%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 text-left font-medium text-slate-100">
                      {currentTeam?.season ?? '—'}
                    </td>
                    <td className="py-2 text-right">{seasonAverages.games}</td>
                    <td className="py-2 text-right">{seasonAverages.points}</td>
                    <td className="py-2 text-right">{seasonAverages.rebounds}</td>
                    <td className="py-2 text-right">{seasonAverages.assists}</td>
                    <td className="py-2 text-right">{seasonAverages.steals}</td>
                    <td className="py-2 text-right">{seasonAverages.blocks}</td>
                    <td className="py-2 text-right">
                      {seasonAverages.fgPct !== undefined ? `${seasonAverages.fgPct}%` : '—'}
                    </td>
                    <td className="py-2 text-right">
                      {seasonAverages.tpPct !== undefined ? `${seasonAverages.tpPct}%` : '—'}
                    </td>
                    <td className="py-2 text-right">
                      {seasonAverages.ftPct !== undefined ? `${seasonAverages.ftPct}%` : '—'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-slate-500">No season stats available.</p>
          )}
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
          <h2 className="mb-3 text-lg font-semibold">Team History</h2>
          {player.teamHistory.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {player.teamHistory.map((teamSlug) => (
                <li
                  key={teamSlug}
                  className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2"
                >
                  {teamSlug}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">No team history.</p>
          )}
        </section>
      </div>
    </main>
  );
}
