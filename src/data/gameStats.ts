type PlayerStatLine = {
  playerId: string;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  minutes: number;
  fgMade?: number;
  fgAttempted?: number;
  tpMade?: number;
  tpAttempted?: number;
  ftMade?: number;
  ftAttempted?: number;
};

export type TeamGameStats = {
  gameId: string;
  teamSlug: string;
  players: PlayerStatLine[];
};

const gameStats: TeamGameStats[] = [
  {
    gameId: 'g1',
    teamSlug: 'davao-dragons-2025',
    players: [
      { playerId: 'p1', points: 19, rebounds: 4, assists: 9, steals: 2, blocks: 0, minutes: 34 },
      { playerId: 'p7', points: 17, rebounds: 5, assists: 3, steals: 1, blocks: 0, minutes: 31 },
      { playerId: 'p3', points: 14, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 30 },
      { playerId: 'p8', points: 18, rebounds: 7, assists: 2, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p9', points: 24, rebounds: 12, assists: 1, steals: 0, blocks: 2, minutes: 33 },
    ],
  },
  {
    gameId: 'g1',
    teamSlug: 'manila-sharks-2025',
    players: [
      { playerId: 'p10', points: 16, rebounds: 3, assists: 7, steals: 1, blocks: 0, minutes: 35 },
      { playerId: 'p2', points: 21, rebounds: 6, assists: 4, steals: 1, blocks: 0, minutes: 34 },
      { playerId: 'p11', points: 15, rebounds: 8, assists: 3, steals: 2, blocks: 1, minutes: 32 },
      { playerId: 'p12', points: 14, rebounds: 10, assists: 2, steals: 1, blocks: 1, minutes: 31 },
      { playerId: 'p5', points: 20, rebounds: 11, assists: 1, steals: 0, blocks: 2, minutes: 33 },
    ],
  },
  {
    gameId: 'g2',
    teamSlug: 'manila-sharks-2025',
    players: [
      { playerId: 'p10', points: 18, rebounds: 3, assists: 8, steals: 1, blocks: 0, minutes: 34 },
      { playerId: 'p2', points: 24, rebounds: 6, assists: 4, steals: 1, blocks: 0, minutes: 35 },
      { playerId: 'p11', points: 14, rebounds: 7, assists: 3, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p12', points: 16, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p5', points: 16, rebounds: 10, assists: 1, steals: 0, blocks: 2, minutes: 33 },
    ],
  },
  {
    gameId: 'g2',
    teamSlug: 'davao-dragons-2025',
    players: [
      { playerId: 'p1', points: 17, rebounds: 5, assists: 11, steals: 2, blocks: 0, minutes: 35 },
      { playerId: 'p7', points: 19, rebounds: 4, assists: 3, steals: 2, blocks: 0, minutes: 33 },
      { playerId: 'p3', points: 16, rebounds: 8, assists: 2, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p8', points: 21, rebounds: 7, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p9', points: 21, rebounds: 13, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
  {
    gameId: 'g3',
    teamSlug: 'davao-dragons-2025',
    players: [
      { playerId: 'p1', points: 22, rebounds: 5, assists: 12, steals: 2, blocks: 0, minutes: 35 },
      { playerId: 'p7', points: 18, rebounds: 5, assists: 3, steals: 1, blocks: 0, minutes: 33 },
      { playerId: 'p3', points: 17, rebounds: 10, assists: 2, steals: 1, blocks: 2, minutes: 34 },
      { playerId: 'p8', points: 21, rebounds: 8, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p9', points: 23, rebounds: 12, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
  {
    gameId: 'g3',
    teamSlug: 'manila-sharks-2025',
    players: [
      { playerId: 'p10', points: 15, rebounds: 4, assists: 7, steals: 1, blocks: 0, minutes: 33 },
      { playerId: 'p2', points: 23, rebounds: 6, assists: 4, steals: 1, blocks: 0, minutes: 35 },
      { playerId: 'p11', points: 19, rebounds: 8, assists: 3, steals: 1, blocks: 1, minutes: 34 },
      { playerId: 'p12', points: 20, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p5', points: 20, rebounds: 11, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
  {
    gameId: 'g4',
    teamSlug: 'cebu-sailors-2025',
    players: [
      { playerId: 'p4', points: 12, rebounds: 6, assists: 4, steals: 1, blocks: 0, minutes: 30 },
      { playerId: 'p13', points: 18, rebounds: 5, assists: 7, steals: 2, blocks: 0, minutes: 33 },
      { playerId: 'p14', points: 15, rebounds: 4, assists: 3, steals: 1, blocks: 0, minutes: 31 },
      { playerId: 'p15', points: 22, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 34 },
      { playerId: 'p16', points: 22, rebounds: 12, assists: 1, steals: 0, blocks: 2, minutes: 32 },
    ],
  },
  {
    gameId: 'g4',
    teamSlug: 'quezon-kings-2025',
    players: [
      { playerId: 'p6', points: 11, rebounds: 3, assists: 8, steals: 2, blocks: 0, minutes: 34 },
      { playerId: 'p17', points: 19, rebounds: 4, assists: 3, steals: 1, blocks: 0, minutes: 32 },
      { playerId: 'p18', points: 16, rebounds: 7, assists: 2, steals: 1, blocks: 1, minutes: 31 },
      { playerId: 'p19', points: 18, rebounds: 10, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p20', points: 20, rebounds: 13, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
  {
    gameId: 'g5',
    teamSlug: 'manila-sharks-2025',
    players: [
      { playerId: 'p10', points: 20, rebounds: 3, assists: 9, steals: 1, blocks: 0, minutes: 35 },
      { playerId: 'p2', points: 22, rebounds: 5, assists: 4, steals: 1, blocks: 0, minutes: 35 },
      { playerId: 'p11', points: 16, rebounds: 7, assists: 3, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p12', points: 18, rebounds: 10, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p5', points: 19, rebounds: 11, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
  {
    gameId: 'g5',
    teamSlug: 'cebu-sailors-2025',
    players: [
      { playerId: 'p4', points: 13, rebounds: 6, assists: 5, steals: 1, blocks: 0, minutes: 31 },
      { playerId: 'p13', points: 19, rebounds: 4, assists: 8, steals: 2, blocks: 0, minutes: 34 },
      { playerId: 'p14', points: 15, rebounds: 5, assists: 3, steals: 1, blocks: 0, minutes: 33 },
      { playerId: 'p15', points: 21, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 34 },
      { playerId: 'p16', points: 22, rebounds: 12, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
  {
    gameId: 'g6',
    teamSlug: 'quezon-kings-2025',
    players: [
      { playerId: 'p6', points: 13, rebounds: 3, assists: 7, steals: 1, blocks: 0, minutes: 33 },
      { playerId: 'p17', points: 18, rebounds: 5, assists: 2, steals: 2, blocks: 0, minutes: 31 },
      { playerId: 'p18', points: 15, rebounds: 8, assists: 3, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p19', points: 17, rebounds: 11, assists: 2, steals: 1, blocks: 1, minutes: 34 },
      { playerId: 'p20', points: 19, rebounds: 10, assists: 1, steals: 0, blocks: 2, minutes: 33 },
    ],
  },
  {
    gameId: 'g6',
    teamSlug: 'davao-dragons-2025',
    players: [
      { playerId: 'p1', points: 18, rebounds: 4, assists: 10, steals: 2, blocks: 0, minutes: 34 },
      { playerId: 'p7', points: 16, rebounds: 4, assists: 3, steals: 1, blocks: 0, minutes: 31 },
      { playerId: 'p3', points: 15, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p8', points: 20, rebounds: 8, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p9', points: 27, rebounds: 14, assists: 1, steals: 0, blocks: 3, minutes: 35 },
    ],
  },
  {
    gameId: 'g7',
    teamSlug: 'cebu-sailors-2025',
    players: [
      { playerId: 'p4', points: 14, rebounds: 7, assists: 5, steals: 1, blocks: 0, minutes: 31 },
      { playerId: 'p13', points: 17, rebounds: 4, assists: 8, steals: 2, blocks: 0, minutes: 34 },
      { playerId: 'p14', points: 16, rebounds: 5, assists: 3, steals: 1, blocks: 0, minutes: 32 },
      { playerId: 'p15', points: 23, rebounds: 8, assists: 2, steals: 1, blocks: 1, minutes: 34 },
      { playerId: 'p16', points: 29, rebounds: 13, assists: 1, steals: 0, blocks: 3, minutes: 35 },
    ],
  },
  {
    gameId: 'g7',
    teamSlug: 'davao-dragons-2025',
    players: [
      { playerId: 'p1', points: 19, rebounds: 5, assists: 11, steals: 2, blocks: 0, minutes: 35 },
      { playerId: 'p7', points: 18, rebounds: 5, assists: 3, steals: 1, blocks: 0, minutes: 32 },
      { playerId: 'p3', points: 16, rebounds: 10, assists: 2, steals: 1, blocks: 2, minutes: 33 },
      { playerId: 'p8', points: 22, rebounds: 7, assists: 2, steals: 1, blocks: 1, minutes: 34 },
      { playerId: 'p9', points: 27, rebounds: 14, assists: 1, steals: 0, blocks: 2, minutes: 35 },
    ],
  },
  {
    gameId: 'g8',
    teamSlug: 'quezon-kings-2025',
    players: [
      { playerId: 'p6', points: 15, rebounds: 3, assists: 7, steals: 2, blocks: 0, minutes: 34 },
      { playerId: 'p17', points: 20, rebounds: 4, assists: 3, steals: 2, blocks: 0, minutes: 33 },
      { playerId: 'p18', points: 17, rebounds: 7, assists: 2, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p19', points: 18, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p20', points: 21, rebounds: 11, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
  {
    gameId: 'g8',
    teamSlug: 'manila-sharks-2025',
    players: [
      { playerId: 'p10', points: 17, rebounds: 3, assists: 8, steals: 1, blocks: 0, minutes: 34 },
      { playerId: 'p2', points: 22, rebounds: 6, assists: 4, steals: 1, blocks: 0, minutes: 35 },
      { playerId: 'p11', points: 16, rebounds: 7, assists: 3, steals: 1, blocks: 1, minutes: 32 },
      { playerId: 'p12', points: 18, rebounds: 9, assists: 2, steals: 1, blocks: 1, minutes: 33 },
      { playerId: 'p5', points: 20, rebounds: 12, assists: 1, steals: 0, blocks: 2, minutes: 34 },
    ],
  },
];

export function getGameStatsByGameId(gameId: string): TeamGameStats[] {
  return gameStats.filter((stat) => stat.gameId === gameId);
}

export default gameStats;
