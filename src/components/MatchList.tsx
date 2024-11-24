import React from 'react';
import { X } from 'lucide-react';
import type { Match } from '../types';

interface MatchListProps {
  matches: Match[];
  onDeleteMatch: (id: string) => void;
}

export default function MatchList({ matches, onDeleteMatch }: MatchListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-warriors-yellow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-warriors-blue text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Opponent</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Result</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {matches.map((match) => {
              const result = match.scoreTeam > match.scoreOpponent ? 'W' : 
                           match.scoreTeam < match.scoreOpponent ? 'L' : 'D';
              const resultColor = result === 'W' ? 'bg-green-100 text-green-800' :
                                result === 'L' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';
              
              return (
                <tr key={match.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(match.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {match.opponent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {match.scoreTeam} - {match.scoreOpponent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${resultColor}`}>
                      {result}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      onClick={() => onDeleteMatch(match.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <X size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}