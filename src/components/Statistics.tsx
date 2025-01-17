import React from 'react';
import { Trophy, Target, Percent, Activity } from 'lucide-react';
import type { Statistics } from '../types';

interface StatisticsProps {
  stats: Statistics;
}

export default function Statistics({ stats }: StatisticsProps) {
  const statCards = [
    {
      title: 'Total Matches',
      value: stats.totalMatches,
      icon: Activity,
    },
    {
      title: 'Win Rate',
      value: `${(stats.winPercentage * 100).toFixed(1)}%`,
      icon: Percent,
    },
    {
      title: 'Average Scored',
      value: stats.averageScoreFor.toFixed(1),
      icon: Trophy,
    },
    {
      title: 'Average Conceded',
      value: stats.averageScoreAgainst.toFixed(1),
      icon: Target,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-warriors-yellow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-warriors-blue">{stat.title}</h3>
            <stat.icon className="text-warriors-blue" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                W: {stats.wins} L: {stats.losses} D: {stats.draws}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}