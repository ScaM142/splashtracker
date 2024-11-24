export interface Match {
  id: string;
  date: string;
  opponent: string;
  scoreTeam: number;
  scoreOpponent: number;
}

export interface Statistics {
  totalMatches: number;
  wins: number;
  losses: number;
  draws: number;
  winPercentage: number;
  averageScoreFor: number;
  averageScoreAgainst: number;
}