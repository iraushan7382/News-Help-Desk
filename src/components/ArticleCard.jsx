import React from 'react';
import { Clock, Bookmark, Share2, ArrowUpRight, CheckCheck } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { CATEGORY_COLORS } from '../data/newsData';

export default function ArticleCard({
  article,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
  onShareArticle,
  isRead = false,
  layout = 'vertical' // 'vertical' | 'horizontal'
}) {
  const categoryStyle = CATEGORY_COLORS[article.category] || CATEGORY_COLORS.All;
  const bookmarked = isBookmarked(article.id);

  if (layout === 'horizontal') {
    return (
      <article className={`group bg-white p-4 rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start ${categoryStyle.borderTop} border-t-4`}>
        <div 
          className="w-full sm:w-48 sm:h-36 aspect-video sm:aspect-auto rounded-lg overflow-hidden shrink-0 bg-slate-100 cursor-pointer relative shadow-xs"
          onClick={() => onSelectArticle(article)}
        >
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            category={article.category}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`absolute top-2 left-2 px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r ${categoryStyle.gradientBadge} shadow-sm`}>
            {article.category}
          </span>
          {isRead && (
            <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-950/80 text-emerald-300 backdrop-blur-xs flex items-center gap-1">
              <CheckCheck className="w-3 h-3" />
              <span>Read</span>
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
          <div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1.5 font-medium">
              <span className={`w-1.5 h-1.5 rounded-full ${categoryStyle.dot}`} />
              <span>{article.publishedAt.split('•')[0]}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {article.readTime}
              </span>
              {isRead && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                  Read
                </span>
              )}
            </div>

            <h3 
              onClick={() => onSelectArticle(article)}
              className="font-serif font-bold text-base sm:text-lg text-slate-950 group-hover:text-red-700 leading-snug cursor-pointer transition line-clamp-2 mb-2"
            >
              {article.title}
            </h3>

            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-sans mb-3">
              {article.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-5 h-5 rounded-full object-cover ring-1 ring-slate-200"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&q=80';
                }}
              />
              <span className="text-slate-800 font-semibold text-[11px]">
                {article.author.name}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onShareArticle(article)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition"
                title="Share article"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onToggleBookmark(article.id)}
                className="p-1.5 text-slate-400 hover:text-red-700 hover:bg-slate-100 rounded transition"
                title={bookmarked ? "Remove from bookmarks" : "Save article"}
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-red-700 text-red-700' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default Vertical Card with colorful border and styling
  return (
    <article className={`group bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden ${categoryStyle.borderTop} border-t-4`}>
      {/* Image Thumbnail */}
      <div 
        className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative cursor-pointer"
        onClick={() => onSelectArticle(article)}
      >
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          category={article.category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Vibrant Gradient Badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-gradient-to-r ${categoryStyle.gradientBadge} shadow-md backdrop-blur-xs tracking-wide`}>
            {article.category}
          </span>
          {isRead && (
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-900/80 text-emerald-300 backdrop-blur-xs flex items-center gap-1 shadow-md">
              <CheckCheck className="w-3 h-3 text-emerald-400" />
              <span>Read</span>
            </span>
          )}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(article.id);
          }}
          className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 hover:bg-white text-slate-700 hover:text-red-700 rounded-full shadow-md backdrop-blur-xs transition"
          aria-label={bookmarked ? "Remove bookmark" : "Save article"}
        >
          <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-red-700 text-red-700' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2 font-medium">
            <span className={`w-1.5 h-1.5 rounded-full ${categoryStyle.dot}`} />
            <span>{article.publishedAt.split('•')[0]}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {article.readTime}
            </span>
            {isRead && (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                Read
              </span>
            )}
          </div>

          <h3 
            onClick={() => onSelectArticle(article)}
            className="font-serif font-bold text-lg sm:text-xl text-slate-950 group-hover:text-red-700 leading-snug cursor-pointer transition mb-2.5 line-clamp-2"
          >
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-sans line-clamp-3 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>

        {/* Footer info: Author and actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&q=80';
              }}
            />
            <span className="text-xs font-semibold text-slate-800 line-clamp-1">
              {article.author.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onShareArticle(article)}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition"
              title="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectArticle(article)}
              className="text-xs font-bold text-slate-900 group-hover:text-red-700 flex items-center gap-0.5"
            >
              <span>Read</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
