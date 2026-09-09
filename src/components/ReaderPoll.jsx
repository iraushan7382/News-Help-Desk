import React, { useState, useEffect } from 'react';
import { BarChart3, CheckCircle, Users } from 'lucide-react';
import { getPollVotes, savePollVote } from '../utils/helpers';

export default function ReaderPoll({
  pollId = 'poll-ai-accord',
  question = 'Will multilateral treaties like the Geneva Accord effectively safeguard autonomous AI developments?',
  options = [
    { text: 'Yes, global standards and audits will establish trust', votes: 1420 },
    { text: 'No, private innovation advances faster than regulation', votes: 890 },
    { text: 'Undecided / Awaiting enforcement results', votes: 230 }
  ]
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [pollData, setPollData] = useState(options);

  useEffect(() => {
    const saved = getPollVotes();
    if (saved && saved[pollId] !== undefined) {
      setSelectedOption(saved[pollId]);
    }
  }, [pollId]);

  const totalVotes = pollData.reduce((sum, opt) => sum + opt.votes, 0) + (selectedOption !== null ? 1 : 0);

  const handleVote = (idx) => {
    if (selectedOption !== null) return; // Already voted

    setSelectedOption(idx);
    savePollVote(pollId, idx);

    setPollData((prev) =>
      prev.map((opt, i) => (i === idx ? { ...opt, votes: opt.votes + 1 } : opt))
    );
  };

  return (
    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-5 sm:p-6 my-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-red-700">
          <BarChart3 className="w-4 h-4" />
          <span>Reader Sentiment Poll</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Users className="w-3.5 h-3.5" />
          <span>{totalVotes.toLocaleString()} responses</span>
        </div>
      </div>

      {/* Question */}
      <h4 className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug mb-4">
        {question}
      </h4>

      {/* Options */}
      <div className="space-y-2.5">
        {pollData.map((opt, idx) => {
          const isVoted = selectedOption === idx;
          const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;

          if (selectedOption !== null) {
            // Results Mode
            return (
              <div
                key={opt.text}
                className={`relative overflow-hidden p-3 rounded-lg border transition-all ${
                  isVoted
                    ? 'border-red-600 bg-red-50/40 font-bold'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Progress Bar background fill */}
                <div
                  className={`absolute top-0 bottom-0 left-0 transition-all duration-700 ${
                    isVoted ? 'bg-red-200/50' : 'bg-slate-100'
                  }`}
                  style={{ width: `${percentage}%` }}
                />

                <div className="relative z-10 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    {isVoted && <CheckCircle className="w-3.5 h-3.5 text-red-700 shrink-0" />}
                    <span className="truncate text-slate-800">{opt.text}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-900 shrink-0">
                    {percentage}%
                  </span>
                </div>
              </div>
            );
          }

          // Voting Mode
          return (
            <button
              key={opt.text}
              onClick={() => handleVote(idx)}
              className="w-full text-left p-3 rounded-lg bg-white hover:bg-slate-100/80 border border-slate-200 hover:border-slate-400 text-xs font-medium text-slate-800 transition shadow-xs flex items-center justify-between group"
            >
              <span>{opt.text}</span>
              <span className="text-[11px] font-bold text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
                Vote →
              </span>
            </button>
          );
        })}
      </div>

      {selectedOption !== null && (
        <p className="text-[11px] text-slate-500 font-sans mt-3 text-center">
          Thank you for participating. Results update in real time with our global readership.
        </p>
      )}
    </div>
  );
}
