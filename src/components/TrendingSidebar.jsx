import React from 'react';
import { Flame, TrendingUp, BookOpen, ArrowUpRight, ArrowDownRight, Sparkles } from 'lucide-react';
import { MARKET_DATA, EDITORIAL_OPINIONS, CATEGORY_COLORS } from '../data/newsData';
import ReaderPoll from './ReaderPoll';

export default function TrendingSidebar({
  trendingArticles = [],
  onSelectArticle
}) {
  return (
    <aside className="space-y-8">
      {/* 1. Trending Articles (Numbered 01 to 05) with Rich Color Accents */}
      <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
            </div>
            <h3 className="font-serif font-black text-base text-slate-950 uppercase tracking-wider">
              Most Read & Trending
            </h3>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-100">
            Top 5
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {trendingArticles.slice(0, 5).map((article, idx) => {
            const rank = (idx + 1).toString().padStart(2, '0');
            const categoryStyle = CATEGORY_COLORS[article.category] || CATEGORY_COLORS.All;

            return (
              <div 
                key={article.id} 
                className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5 group cursor-pointer"
                onClick={() => onSelectArticle(article)}
              >
                {/* Vibrant Numbered Rank */}
                <span className="font-serif font-black text-2xl text-slate-300 group-hover:text-red-700 transition-colors shrink-0 w-8">
                  {rank}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold mb-1">
                    <span className={`px-2 py-0.2 rounded-full font-bold ${categoryStyle.badge}`}>
                      {article.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{article.readTime}</span>
                  </div>

                  <h4 className="font-serif font-bold text-sm text-slate-900 group-hover:text-red-700 leading-snug transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Community Reader Sentiment Poll in Sidebar */}
      <ReaderPoll
        pollId="sidebar-global-ai-treaty"
        question="Desk Pulse: Do you support mandatory public audits for advanced autonomous AI models?"
        options={[
          { text: 'Yes, full international oversight', votes: 2150 },
          { text: 'No, voluntary self-regulation suffices', votes: 540 },
          { text: 'Uncertain of enforcement viability', votes: 310 }
        ]}
      />

      {/* 3. Market Briefing Ticker Widget with Rich Green & Red Tones */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-6 rounded-xl shadow-lg border border-slate-800">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-slate-100">
              Markets Snapshot
            </h4>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE FEED
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {MARKET_DATA.map((item) => (
            <div key={item.ticker} className="bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-lg border border-slate-700/60 transition">
              <div className="text-[11px] font-semibold text-slate-300 truncate">
                {item.ticker}
              </div>
              <div className="text-sm font-black font-mono text-white mt-0.5">
                {item.value}
              </div>
              <div className={`text-[11px] font-bold flex items-center gap-0.5 mt-0.5 ${
                item.isPositive ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {item.isPositive ? (
                  <ArrowUpRight className="w-3.5 h-3.5" />
                ) : (
                  <ArrowDownRight className="w-3.5 h-3.5" />
                )}
                <span>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Opinion & Commentary Column */}
      <div className="bg-gradient-to-b from-amber-50/40 via-white to-white p-5 sm:p-6 rounded-xl border border-amber-200/60 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-200/60">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <h4 className="font-serif font-black text-sm uppercase tracking-wider text-slate-900">
              Voices & Commentary
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
            Editorial
          </span>
        </div>

        <div className="space-y-4">
          {EDITORIAL_OPINIONS.map((opinion) => (
            <div key={opinion.id} className="pb-3.5 border-b border-slate-100 last:border-b-0 last:pb-0 group">
              <h5 className="font-serif font-bold text-sm text-slate-900 group-hover:text-red-700 transition cursor-pointer leading-snug mb-1.5">
                "{opinion.title}"
              </h5>
              <div className="text-xs font-bold text-slate-800">
                {opinion.author}
              </div>
              <div className="text-[11px] text-slate-500 line-clamp-1">
                {opinion.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
