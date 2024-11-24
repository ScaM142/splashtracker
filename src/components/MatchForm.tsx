import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import type { Match } from '../types';

interface MatchFormProps {
  onAddMatch: (match: Match) => void;
}

export default function MatchForm({ onAddMatch }: MatchFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    opponent: '',
    date: '',
    scoreTeam: 0,
    scoreOpponent: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMatch: Match = {
      ...formData,
      id: Date.now().toString(),
    };
    onAddMatch(newMatch);
    setIsOpen(false);
    setFormData({
      opponent: '',
      date: '',
      scoreTeam: 0,
      scoreOpponent: 0,
    });
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-warriors-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
      >
        <PlusCircle size={20} />
        Add New Match
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-md border-t-4 border-warriors-yellow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Opponent</label>
              <input
                type="text"
                required
                value={formData.opponent}
                onChange={(e) => setFormData({ ...formData, opponent: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-warriors-blue focus:ring-warriors-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-warriors-blue focus:ring-warriors-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team Score</label>
              <input
                type="number"
                required
                min="0"
                value={formData.scoreTeam}
                onChange={(e) => setFormData({ ...formData, scoreTeam: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-warriors-blue focus:ring-warriors-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Opponent Score</label>
              <input
                type="number"
                required
                min="0"
                value={formData.scoreOpponent}
                onChange={(e) => setFormData({ ...formData, scoreOpponent: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-warriors-blue focus:ring-warriors-blue"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-warriors-blue rounded-md hover:bg-blue-800"
            >
              Add Match
            </button>
          </div>
        </form>
      )}
    </div>
  );
}