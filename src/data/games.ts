import type { Game } from '@/types';

export type GameQuarterScores = {
  gameId: string;
  homeTeamSlug: string;
  awayTeamSlug: string;
  home: number[];
  away: number[];
};

const games: Game[] = [
  {
    id: 'g1',
    leagueSlug: 'summer-league-2025',
    date: '2025-06-05',
    homeTeamSlug: 'davao-dragons-2025',
    awayTeamSlug: 'manila-sharks-2025',
    homeScore: 92,
    awayScore: 86,
    venue: 'Davao Arena',
  },
  {
    id: 'g2',
    leagueSlug: 'summer-league-2025',
    date: '2025-06-12',
    homeTeamSlug: 'manila-sharks-2025',
    awayTeamSlug: 'davao-dragons-2025',
    homeScore: 88,
    awayScore: 94,
    venue: 'Manila Dome',
  },
  {
    id: 'g3',
    leagueSlug: 'summer-league-2025',
    date: '2025-07-01',
    homeTeamSlug: 'davao-dragons-2025',
    awayTeamSlug: 'manila-sharks-2025',
    homeScore: 101,
    awayScore: 97,
    venue: 'Mindanao Coliseum',
  },
  {
    id: 'g4',
    leagueSlug: 'summer-league-2025',
    date: '2025-06-18',
    homeTeamSlug: 'cebu-sailors-2025',
    awayTeamSlug: 'quezon-kings-2025',
    homeScore: 89,
    awayScore: 84,
    venue: 'Cebu City Arena',
  },
  {
    id: 'g5',
    leagueSlug: 'summer-league-2025',
    date: '2025-06-25',
    homeTeamSlug: 'manila-sharks-2025',
    awayTeamSlug: 'cebu-sailors-2025',
    homeScore: 95,
    awayScore: 90,
    venue: 'Manila Dome',
  },
  {
    id: 'g6',
    leagueSlug: 'summer-league-2025',
    date: '2025-07-02',
    homeTeamSlug: 'quezon-kings-2025',
    awayTeamSlug: 'davao-dragons-2025',
    homeScore: 82,
    awayScore: 96,
    venue: 'Quezon City Pavilion',
  },
  {
    id: 'g7',
    leagueSlug: 'summer-league-2025',
    date: '2025-07-10',
    homeTeamSlug: 'cebu-sailors-2025',
    awayTeamSlug: 'davao-dragons-2025',
    homeScore: 99,
    awayScore: 102,
    venue: 'Cebu City Arena',
  },
  {
    id: 'g8',
    leagueSlug: 'summer-league-2025',
    date: '2025-07-18',
    homeTeamSlug: 'quezon-kings-2025',
    awayTeamSlug: 'manila-sharks-2025',
    homeScore: 91,
    awayScore: 93,
    venue: 'Quezon City Pavilion',
  },
];

export const gameQuarterScores: GameQuarterScores[] = [
  {
    gameId: 'g1',
    homeTeamSlug: 'davao-dragons-2025',
    awayTeamSlug: 'manila-sharks-2025',
    home: [24, 22, 26, 20],
    away: [20, 21, 19, 26],
  },
  {
    gameId: 'g2',
    homeTeamSlug: 'manila-sharks-2025',
    awayTeamSlug: 'davao-dragons-2025',
    home: [22, 20, 23, 23],
    away: [24, 21, 20, 29],
  },
  {
    gameId: 'g3',
    homeTeamSlug: 'davao-dragons-2025',
    awayTeamSlug: 'manila-sharks-2025',
    home: [26, 24, 25, 26],
    away: [24, 25, 22, 26],
  },
  {
    gameId: 'g4',
    homeTeamSlug: 'cebu-sailors-2025',
    awayTeamSlug: 'quezon-kings-2025',
    home: [21, 24, 20, 24],
    away: [20, 20, 21, 23],
  },
  {
    gameId: 'g5',
    homeTeamSlug: 'manila-sharks-2025',
    awayTeamSlug: 'cebu-sailors-2025',
    home: [23, 26, 20, 26],
    away: [21, 22, 23, 24],
  },
  {
    gameId: 'g6',
    homeTeamSlug: 'quezon-kings-2025',
    awayTeamSlug: 'davao-dragons-2025',
    home: [19, 21, 18, 24],
    away: [24, 23, 22, 27],
  },
  {
    gameId: 'g7',
    homeTeamSlug: 'cebu-sailors-2025',
    awayTeamSlug: 'davao-dragons-2025',
    home: [24, 21, 27, 27],
    away: [26, 25, 22, 29],
  },
  {
    gameId: 'g8',
    homeTeamSlug: 'quezon-kings-2025',
    awayTeamSlug: 'manila-sharks-2025',
    home: [22, 22, 24, 23],
    away: [21, 26, 21, 25],
  },
];

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id);
}

export function getQuarterScoresByGameId(
  id: string,
): GameQuarterScores | undefined {
  return gameQuarterScores.find((item) => item.gameId === id);
}

export default games;
