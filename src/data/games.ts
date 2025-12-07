import type { Game } from '@/types';

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
];

export default games;
