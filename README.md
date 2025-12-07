## Stats Hub (Basketball)

A static-data basketball dashboard built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Uses pnpm and the `@/` import alias with typed JSON data.

### Tech & Structure
- Next.js (app directory, server components)
- TypeScript types in `src/types`
- Static JSON data in `src/data`
- Data helpers in `src/lib/data.ts`
- Tailwind styling (see `src/app/globals.css`)

### Data shape (JSON)
- `src/data/players.json` → `Player` (ids `p1`, `p2`, `p3` included)
- `src/data/teams.json` → `Team` (includes `davao-dragons-2025`, `manila-sharks-2025`)
- `src/data/leagues.json` → `League` (`summer-league-2025`)

### Helpful functions
Imported from `@/lib/data`:
- `getPlayers()`, `getPlayerById(id)`
- `getTeams()`, `getTeamBySlug(slug)`
- `getLeagues()`, `getLeagueBySlug(slug)`

### Routes
- `/` — dashboard listing players, teams, leagues
- `/players/[id]` — player profile (supports current sample ids `p1`, `p2`, `p3`)

### Getting started
```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

### Editing data
Update the JSON files in `src/data/` and restart dev if needed. Keep values aligned with the interfaces in `src/types/index.ts`. Add more ids to enable new player pages.***
