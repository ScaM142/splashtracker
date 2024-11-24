import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import MatchForm from './components/MatchForm';
import MatchList from './components/MatchList';
import Statistics from './components/Statistics';
import type { Match, Statistics as StatsType } from './types';

function calculateStatistics(matches: Match[]): StatsType {
  const totalMatches = matches.length;
  const wins = matches.filter(m => m.scoreTeam > m.scoreOpponent).length;
  const losses = matches.filter(m => m.scoreTeam < m.scoreOpponent).length;
  const draws = matches.filter(m => m.scoreTeam === m.scoreOpponent).length;
  
  const totalScoreFor = matches.reduce((sum, match) => sum + match.scoreTeam, 0);
  const totalScoreAgainst = matches.reduce((sum, match) => sum + match.scoreOpponent, 0);

  return {
    totalMatches,
    wins,
    losses,
    draws,
    winPercentage: totalMatches > 0 ? wins / totalMatches : 0,
    averageScoreFor: totalMatches > 0 ? totalScoreFor / totalMatches : 0,
    averageScoreAgainst: totalMatches > 0 ? totalScoreAgainst / totalMatches : 0,
  };
}

function App() {
  const [matches, setMatches] = useState<Match[]>(() => {
    const saved = localStorage.getItem('matches');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('matches', JSON.stringify(matches));
  }, [matches]);

  const handleAddMatch = (match: Match) => {
    setMatches(prev => [...prev, match].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };

  const handleDeleteMatch = (id: string) => {
    setMatches(prev => prev.filter(match => match.id !== id));
  };

  const stats = calculateStatistics(matches);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-warriors-blue py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 text-center">
            <Trophy className="text-warriors-yellow" size={32} />
            <h1 className="text-3xl font-bold text-white">Splash Brothers</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Statistics stats={stats} />
        <MatchForm onAddMatch={handleAddMatch} />
        
        {matches.length > 0 ? (
          <MatchList matches={matches} onDeleteMatch={handleDeleteMatch} />
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500">No matches recorded yet. Add your first match above!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;