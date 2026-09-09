import React from 'react';
import { CATEGORIES, CATEGORY_COLORS } from '../data/newsData';
import { Layers } from 'lucide-react';

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  categoryCounts = {},
  totalCount = 0
}) {
  return (
    <section className="py-4 border-b border-slate-200 bg-white/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-500">
            <Layers className="w-3.5 h-3.5 text-red-700" />
            <span>Filter News By Beat</span>
          </div>

          <span className="text-xs text-slate-500">
            Showing <strong className="text-slate-900 font-semibold">{totalCount}</strong> articles
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-1 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count = categoryCounts[category] || 0;
            const style = CATEGORY_COLORS[category] || CATEGORY_COLORS.All;

            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 border ${
                  isActive
                    ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {/* Category color dot indicator */}
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-red-500' : style.dot
                  }`}
                />
                
                <span>{category}</span>
                
                {/* Count badge */}
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive
                      ? 'bg-slate-800 text-slate-200'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
