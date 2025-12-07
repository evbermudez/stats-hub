export type Position = 'PG' | 'SG' | 'SF' | 'PF' | 'C';

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  jerseyNumber: number;
  position: Position;
  heightCm?: number;
  weightKg?: number;
  teamHistory: string[];
  currentTeamSlug?: string;
}

export interface Team {
  slug: string;
  name: string;
  season: string;
  city?: string;
  primaryColor?: string;
  secondaryColor?: string;
  leagueSlug: string;
}

export interface League {
  slug: string;
  name: string;
  season: string;
  startDate?: string;
  endDate?: string;
}

export interface Game {
  id: string;
  leagueSlug: string;
  date: string;
  homeTeamSlug: string;
  awayTeamSlug: string;
  homeScore: number;
  awayScore: number;
  venue?: string;
}

export interface PlayerGameStats {
  gameId: string;
  playerId: string;
  teamSlug: string;
  minutes: number;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fgMade: number;
  fgAttempted: number;
  tpMade: number;
  tpAttempted: number;
  ftMade: number;
  ftAttempted: number;
}
