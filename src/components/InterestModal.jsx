import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Globe, 
  TrendingUp, 
  Cpu, 
  Landmark, 
  Activity, 
  Trophy, 
  Film,
  ArrowRight
} from 'lucide-react';
import { SECTOR_CARDS } from '../data/newsData';

const iconMap = {
  Globe,
  TrendingUp,
  Cpu,
  Landmark,
  Activity,
  Trophy,
  Film
};

export default function InterestModal({
  isOpen,
  onClose,
  initialInterests = [],
  onSaveInterests
}) {
  const [selected, setSelected] = useState(() => {
    return initialInterests.length > 0 ? initialInterests : ['Technology', 'Business', 'World'];
  });

  // Keep state in sync whenever modal opens with updated user interests
  useEffect(() => {
    if (isOpen) {
      if (initialInterests && initialInterests.length > 0) {
        setSelected(initialInterests);
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, initialInterests, onClose]);

  if (!isOpen) return null;

  const toggleSector = (sectorId) => {
    if (selected.includes(sectorId)) {
      if (selected.length > 1) {
        setSelected(selected.filter(id => id !== sectorId));
      }
    } else {
      setSelected([...selected, sectorId]);
    }
  };

  const selectAll = () => {
    setSelected(SECTOR_CARDS.map(s => s.id));
  };

  const handleSave = () => {
    onSaveInterests(selected.length > 0 ? selected : ['Technology', 'Business', 'World']);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-modal"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Color Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-indigo-600 to-amber-500 rounded-t-2xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
          aria-label="Skip personalization"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Content */}
        <div className="text-center max-w-lg mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customized News Experience</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-950 tracking-tight leading-snug mb-2">
            Which news sectors are you most interested in?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Select the beats you follow closest. We’ll tailor your homepage and highlight developing stories from your favorite sectors.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">
            Selected: <strong className="text-slate-900 font-bold">{selected.length} of {SECTOR_CARDS.length}</strong>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={selectAll}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition"
            >
              Select All
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setSelected(['Technology', 'Business'])}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              Tech & Markets
            </button>
          </div>
        </div>

        {/* Sectors Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-1">
          {SECTOR_CARDS.map((sector) => {
            const isSelected = selected.includes(sector.id);
            const Icon = iconMap[sector.iconName] || Globe;

            return (
              <div
                key={sector.id}
                onClick={() => toggleSector(sector.id)}
                className={`group p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 relative ${
                  isSelected
                    ? `border-slate-900 bg-slate-50/80 shadow-sm`
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/40'
                }`}
              >
                {/* Sector Icon with Gradient */}
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${sector.color} text-white flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-4 h-4 stroke-[2.2]" />
                </div>

                <div className="flex-1 min-w-0 pr-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-sm text-slate-900">
                      {sector.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                    {sector.tagline}
                  </p>
                </div>

                {/* Checkbox indicator */}
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors absolute top-3.5 right-3.5 ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'border-slate-300 bg-white group-hover:border-slate-400'
                }`}>
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition order-2 sm:order-1"
          >
            Skip for now, show all news
          </button>

          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 order-1 sm:order-2"
          >
            <span>Personalize My Feed ({selected.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
