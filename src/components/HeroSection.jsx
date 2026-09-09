import React from 'react';
import { 
  Flame, 
  Clock, 
  Bookmark, 
  Share2, 
  ArrowRight,
  TrendingUp,
  Radio
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { CATEGORY_COLORS } from '../data/newsData';

export default function HeroSection({
  heroArticle,
  secondaryArticles = [],
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
  onShareArticle
}) {
  if (!heroArticle) return null;

  const categoryStyle = CATEGORY_COLORS[heroArticle.category] || CATEGORY_COLORS.All;
  const isHeroBookmarked = isBookmarked(heroArticle.id);

  return (
    <section className="border-b border-slate-200 bg-white py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Editorial Section Label */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 bg-red-600 rounded-sm shadow-xs" />
            <span className="font-serif font-black text-sm tracking-wider uppercase text-slate-900">
              Lead Dispatch & Breaking Coverage
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">VERIFIED DISPATCH</span>
          </div>
        </div>

        {/* Hero Grid: Main breaking article on the left/center, 2 secondary leads on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Major Breaking News Feature (Cols 1-8) */}
          <div className="lg:col-span-8 group">
            <div className={`relative overflow-hidden rounded-xl shadow-md border border-slate-200/90 bg-slate-50 mb-4 cursor-pointer ${categoryStyle.borderTop} border-t-4`}
                 onClick={() => onSelectArticle(heroArticle)}>
              
              {/* Category & Breaking Badges */}
              <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                {heroArticle.isBreaking && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-600 to-rose-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-full shadow-lg shadow-red-600/30 animate-pulse">
                    <Radio className="w-3.5 h-3.5" />
                    Breaking News
                  </span>
                )}
                <span className={`px-3 py-1 font-bold text-xs rounded-full shadow-md bg-gradient-to-r ${categoryStyle.gradientBadge}`}>
                  {heroArticle.category}
                </span>
              </div>

              {/* Bookmark quick action on image */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(heroArticle.id);
                }}
                className="absolute top-3.5 right-3.5 z-10 p-2 bg-white/95 hover:bg-white text-slate-700 hover:text-red-700 rounded-full shadow-lg backdrop-blur-xs transition"
                aria-label={isHeroBookmarked ? 'Remove bookmark' : 'Bookmark article'}
              >
                <Bookmark className={`w-4 h-4 ${isHeroBookmarked ? 'fill-red-700 text-red-700' : ''}`} />
              </button>

              <div className="aspect-[16/9] w-full overflow-hidden">
                <ImageWithFallback
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  category={heroArticle.category}
                  priority={true}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {heroArticle.imageCaption && (
                <div className="px-4 py-2 bg-slate-950/80 backdrop-blur-xs text-xs text-slate-300 italic font-serif truncate">
                  {heroArticle.imageCaption}
                </div>
              )}
            </div>

            {/* Headline and Narrative Excerpt */}
            <div>
              <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-2 font-medium">
                <span className={`w-2 h-2 rounded-full ${categoryStyle.dot}`} />
                <span className="font-semibold text-slate-700">{heroArticle.publishedAt}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {heroArticle.readTime}
                </span>
              </div>

              <h2
                onClick={() => onSelectArticle(heroArticle)}
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-slate-950 leading-[1.2] hover:text-red-700 transition cursor-pointer mb-3"
              >
                {heroArticle.title}
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-serif text-slate-600 line-clamp-3 mb-4">
                {heroArticle.excerpt}
              </p>

              {/* Author byline & interactive buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={heroArticle.author.avatar}
                    alt={heroArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80';
                    }}
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-950">
                      By {heroArticle.author.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {heroArticle.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onShareArticle(heroArticle);
                    }}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition text-xs flex items-center gap-1.5 font-semibold"
                    title="Share story"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Share</span>
                  </button>

                  <button
                    onClick={() => onSelectArticle(heroArticle)}
                    className="px-4 py-2 bg-gradient-to-r from-slate-950 to-slate-900 hover:from-red-700 hover:to-red-800 text-white rounded-lg text-xs font-bold tracking-wide flex items-center gap-2 transition shadow-sm"
                  >
                    <span>Read Full Coverage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Leads Column (Cols 9-12) */}
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-8 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-red-600" />
              <span>Editors' Developing Picks</span>
            </div>

            {secondaryArticles.slice(0, 2).map((item, idx) => {
              const itemStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.All;
              const isItemBookmarked = isBookmarked(item.id);

              return (
                <article
                  key={item.id}
                  className={`group pb-6 ${idx === 0 ? 'border-b border-slate-200' : ''}`}
                >
                  <div 
                    className={`aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-100 mb-3 cursor-pointer relative shadow-xs ${itemStyle.borderTop} border-t-3`}
                    onClick={() => onSelectArticle(item)}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      category={item.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className={`absolute top-2 left-2 px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r ${itemStyle.gradientBadge} shadow-xs`}>
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1.5 font-medium">
                    <span className={`w-1.5 h-1.5 rounded-full ${itemStyle.dot}`} />
                    <span>{item.publishedAt.split('•')[0]}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3
                    onClick={() => onSelectArticle(item)}
                    className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug group-hover:text-red-700 transition cursor-pointer mb-2"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-800 font-semibold text-[11px]">
                      By {item.author.name}
                    </span>
                    <button
                      onClick={() => onToggleBookmark(item.id)}
                      className="text-slate-400 hover:text-red-700 transition"
                      title={isItemBookmarked ? "Remove bookmark" : "Save article"}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isItemBookmarked ? 'fill-red-700 text-red-700' : ''}`} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
