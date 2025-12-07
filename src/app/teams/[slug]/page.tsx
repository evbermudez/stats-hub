import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getLeagueBySlug, getPlayers, getTeamBySlug } from '@/lib/data';

type TeamPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TeamPage({ params }: TeamPageProps) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);

  if (!team) {
    notFound();
  }

  const league = getLeagueBySlug(team.leagueSlug);
  const roster = getPlayers().filter((player) => player.currentTeamSlug === team.slug);

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {league ? `${league.name} (${league.season})` : team.leagueSlug}
          </p>
          <h1 className="text-3xl font-semibold">
            {team.city ? `${team.city} ` : ''}
            {team.name}
          </h1>
          <p className="text-sm text-slate-400">Season {team.season}</p>
          {(team.primaryColor || team.secondaryColor) && (
            <div className="flex items-center gap-3 text-xs text-slate-400">
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
        </header>

        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/40">
          <h2 className="mb-3 text-lg font-semibold">Roster</h2>
          {roster.length === 0 ? (
            <p className="text-sm text-slate-500">No players listed for this team.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {roster.map((player) => (
                <li
                  key={player.id}
                  className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2"
                >
                  <Link href={`/players/${player.id}`} className="font-medium text-slate-100 hover:underline">
                    #{player.jerseyNumber} {player.firstName} {player.lastName}
                  </Link>
                  <span className="ml-2 text-xs uppercase text-slate-500">{player.position}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
