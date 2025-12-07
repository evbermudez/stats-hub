import players from '@/data/players.json';
import leagues from '@/data/leagues.json';
import teams from '@/data/teams.json';
import type { League, Player, Team } from '@/types';

const playersData = players as Player[];
const teamsData = teams as Team[];
const leaguesData = leagues as League[];

export function getPlayers(): Player[] {
  return playersData;
}

export function getPlayerById(id: string): Player | undefined {
  return playersData.find((player) => player.id === id);
}

export function getTeams(): Team[] {
  return teamsData;
}

export function getTeamBySlug(slug: string): Team | undefined {
  return teamsData.find((team) => team.slug === slug);
}

export function getLeagues(): League[] {
  return leaguesData;
}

export function getLeagueBySlug(slug: string): League | undefined {
  return leaguesData.find((league) => league.slug === slug);
}
