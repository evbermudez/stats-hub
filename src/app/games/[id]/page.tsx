import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getGameById, getQuarterScoresByGameId } from '@/data/games';
import { getGameStatsByGameId } from '@/data/gameStats';
import { getPlayers, getTeams } from '@/lib/data';

type GamePageProps = {
  params: Promise<{
    id: string;
  }>;
};

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(iso));

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params;
  const game = getGameById(id);

  if (!game) {
    notFound();
  }

  const teams = getTeams();
  const players = getPlayers();

  const teamName = (slug: string) => teams.find((team) => team.slug === slug)?.name ?? slug;
  const season =
    teams.find((team) => team.slug === game.homeTeamSlug)?.season ??
    teams.find((team) => team.slug === game.awayTeamSlug)?.season;

  const homeTeamName = teamName(game.homeTeamSlug);
  const awayTeamName = teamName(game.awayTeamSlug);
  const quarters = getQuarterScoresByGameId(game.id);
  const stats = getGameStatsByGameId(game.id);
  const homeStats = stats.find((line) => line.teamSlug === game.homeTeamSlug);
  const awayStats = stats.find((line) => line.teamSlug === game.awayTeamSlug);

  const playerName = (playerId: string) => {
    const player = players.find((p) => p.id === playerId);
    return player ? `${player.firstName} ${player.lastName}` : playerId;
  };

  const renderBox = (label: string, statLine?: (typeof stats)[number]) => (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">{label}</h3>
        <span className="text-sm text-slate-500">{teamName(statLine?.teamSlug ?? '')}</span>
      </div>
      {!statLine ? (
        <p className="text-sm text-slate-500">No box score available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="pb-2 text-left">Player</th>
                <th className="pb-2 text-right">PTS</th>
                <th className="pb-2 text-right">REB</th>
                <th className="pb-2 text-right">AST</th>
                <th className="pb-2 text-right">STL</th>
                <th className="pb-2 text-right">BLK</th>
                <th className="pb-2 text-right">MIN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {statLine.players.map((player) => (
                <tr key={player.playerId} className="hover:bg-slate-900/60">
                  <td className="py-2 pr-3 font-medium text-slate-100">
                    <Link href={`/players/${player.playerId}`} className="hover:underline">
                      {playerName(player.playerId)}
                    </Link>
                  </td>
                  <td className="py-2 text-right">{player.points}</td>
                  <td className="py-2 text-right">{player.rebounds}</td>
                  <td className="py-2 text-right">{player.assists}</td>
                  <td className="py-2 text-right">{player.steals}</td>
                  <td className="py-2 text-right">{player.blocks}</td>
                  <td className="py-2 text-right">{player.minutes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {game.leagueSlug}
          </p>
          <h1 className="text-3xl font-semibold">
            {homeTeamName} vs {awayTeamName}
          </h1>
          <div className="text-sm text-slate-400">
            <span>{formatDate(game.date)}</span>
            {season && <span className="mx-2">•</span>}
            {season && <span>Season {season}</span>}
            {game.venue && <span className="mx-2">•</span>}
            {game.venue && <span>{game.venue}</span>}
          </div>
        </header>

        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-lg font-semibold text-slate-100">{homeTeamName}</p>
              <p className="text-lg font-semibold text-slate-100">{awayTeamName}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-slate-100">
                {game.homeScore} – {game.awayScore}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Final
              </p>
            </div>
          </div>

          {quarters && (
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-800">
              <table className="w-full text-sm">
                <thead className="bg-slate-900/60 text-xs uppercase tracking-[0.2em] text-slate-500">
                  <tr>
                    <th className="px-3 py-2 text-left">Team</th>
                    <th className="px-3 py-2 text-right">Q1</th>
                    <th className="px-3 py-2 text-right">Q2</th>
                    <th className="px-3 py-2 text-right">Q3</th>
                    <th className="px-3 py-2 text-right">Q4</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-100">{homeTeamName}</td>
                    {quarters.home.map((score, idx) => (
                      <td key={idx} className="px-3 py-2 text-right">
                        {score}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-100">{awayTeamName}</td>
                    {quarters.away.map((score, idx) => (
                      <td key={idx} className="px-3 py-2 text-right">
                        {score}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {renderBox(`${homeTeamName} Box Score`, homeStats)}
          {renderBox(`${awayTeamName} Box Score`, awayStats)}
        </section>
      </div>
    </main>
  );
}
