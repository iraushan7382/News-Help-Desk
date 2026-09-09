import React, { useState, useEffect } from 'react';
import { Radio, ChevronRight, ChevronLeft } from 'lucide-react';
import { BREAKING_ALERTS } from '../data/newsData';

export default function BreakingTicker({ onSelectAlert }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BREAKING_ALERTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextAlert = () => {
    setCurrentIndex((prev) => (prev + 1) % BREAKING_ALERTS.length);
  };

  const prevAlert = () => {
    setCurrentIndex((prev) => (prev - 1 + BREAKING_ALERTS.length) % BREAKING_ALERTS.length);
  };

  return (
    <div 
      className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-700 text-white font-bold tracking-wider uppercase text-[11px] shrink-0 animate-pulse">
            <Radio className="w-3 h-3" />
            <span>Breaking</span>
          </div>

          <div className="overflow-hidden whitespace-nowrap text-ellipsis">
            <span 
              className="text-slate-300 font-medium transition-opacity duration-300 hover:text-white cursor-pointer"
              onClick={() => onSelectAlert && onSelectAlert(BREAKING_ALERTS[currentIndex])}
            >
              {BREAKING_ALERTS[currentIndex]}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0 text-slate-400">
          <span className="hidden sm:inline-block text-[11px] text-slate-400 mr-2">
            {currentIndex + 1} of {BREAKING_ALERTS.length}
          </span>
          <button
            onClick={prevAlert}
            aria-label="Previous alert"
            className="p-1 hover:text-white hover:bg-slate-800 rounded transition"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={nextAlert}
            aria-label="Next alert"
            className="p-1 hover:text-white hover:bg-slate-800 rounded transition"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
