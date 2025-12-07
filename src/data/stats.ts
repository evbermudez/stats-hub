import games from '@/data/games';
import gameStats from '@/data/gameStats';
import leagues from '@/data/leagues.json';

type StatField = 'points' | 'rebounds' | 'assists' | 'steals' | 'blocks' | 'minutes';

export type SeasonAverages = {
  games: number;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  fgPct?: number;
  tpPct?: number;
  ftPct?: number;
};

export function getPlayerSeasonAverages(
  playerId: string,
  seasonId: string,
): SeasonAverages | undefined {
  const seasonLeagueSlugs = new Set(
    (leagues as League[])
      .filter((league) => league.season === seasonId)
      .map((league) => league.slug),
  );

  const seasonGameIds = new Set(
    games.filter((game) => seasonLeagueSlugs.has(game.leagueSlug)).map((game) => game.id),
  );

  let totals: Record<StatField, number> = {
    points: 0,
    rebounds: 0,
    assists: 0,
    steals: 0,
    blocks: 0,
    minutes: 0,
  };
  let fgMade = 0;
  let fgAtt = 0;
  let tpMade = 0;
  let tpAtt = 0;
  let ftMade = 0;
  let ftAtt = 0;
  let gamesPlayed = 0;

  gameStats.forEach((teamLine) => {
    if (!seasonGameIds.has(teamLine.gameId)) return;
    teamLine.players.forEach((stat) => {
      if (stat.playerId !== playerId) return;
      gamesPlayed += 1;
      totals.points += stat.points;
      totals.rebounds += stat.rebounds;
      totals.assists += stat.assists;
      totals.steals += stat.steals;
      totals.blocks += stat.blocks;
      totals.minutes += stat.minutes;

      if (stat.fgMade !== undefined) fgMade += stat.fgMade;
      if (stat.fgAttempted !== undefined) fgAtt += stat.fgAttempted;
      if (stat.tpMade !== undefined) tpMade += stat.tpMade;
      if (stat.tpAttempted !== undefined) tpAtt += stat.tpAttempted;
      if (stat.ftMade !== undefined) ftMade += stat.ftMade;
      if (stat.ftAttempted !== undefined) ftAtt += stat.ftAttempted;
    });
  });

  if (gamesPlayed === 0) return undefined;

  const avg = (value: number) => Number((value / gamesPlayed).toFixed(1));
  const pct = (made: number, att: number) =>
    att > 0 ? Number(((made / att) * 100).toFixed(1)) : undefined;

  return {
    games: gamesPlayed,
    points: avg(totals.points),
    rebounds: avg(totals.rebounds),
    assists: avg(totals.assists),
    steals: avg(totals.steals),
    blocks: avg(totals.blocks),
    fgPct: pct(fgMade, fgAtt),
    tpPct: pct(tpMade, tpAtt),
    ftPct: pct(ftMade, ftAtt),
  };
}
