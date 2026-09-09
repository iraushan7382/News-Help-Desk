import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Bookmark, 
  Share2, 
  Clock, 
  Calendar, 
  Printer, 
  Check, 
  ChevronRight, 
  ArrowLeft, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import AudioPlayer from './AudioPlayer';
import ReaderPoll from './ReaderPoll';
import { CATEGORY_COLORS } from '../data/newsData';
import { copyToClipboard } from '../utils/helpers';

export default function ArticleDetailModal({
  article,
  allArticles = [],
  onClose,
  isBookmarked,
  onToggleBookmark,
  onSelectArticle
}) {
  const [fontSize, setFontSize] = useState('base'); // 'sm' | 'base' | 'lg' | 'xl'
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentScrollRef = useRef(null);

  useEffect(() => {
    // Reset scroll to top and reset progress whenever article changes
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0;
    }
    setScrollProgress(0);
  }, [article?.id]);

  useEffect(() => {
    // Prevent body background scrolling while modal is active
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!article) return null;

  const categoryStyle = CATEGORY_COLORS[article.category] || CATEGORY_COLORS.All;
  const bookmarked = isBookmarked(article.id);

  // Find related articles in the same category (or fallback to top recent)
  const relatedArticles = allArticles
    .filter((item) => item.id !== article.id && (item.category === article.category || item.isEditorPick))
    .slice(0, 3);

  const handleShare = async () => {
    const url = window.location.href;
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const total = scrollHeight - clientHeight;
    if (total > 0) {
      setScrollProgress((scrollTop / total) * 100);
    }
  };

  const fontSizeClasses = {
    sm: 'text-sm sm:text-base leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-relaxed',
    xl: 'text-xl sm:text-2xl leading-relaxed',
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex justify-center p-0 sm:p-4 md:p-6"
      onClick={onClose}
    >
      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div 
        className="relative bg-white w-full max-w-4xl min-h-screen sm:min-h-0 sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto animate-modal border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <button 
              onClick={onClose}
              className="flex items-center gap-1 hover:text-red-700 transition font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Dispatch</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${categoryStyle.badge}`}>
              {article.category}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font size adjuster */}
            <div className="hidden sm:flex items-center gap-1 border border-slate-200 rounded-lg p-0.5 text-xs text-slate-600">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'sm' ? 'bg-slate-200 font-bold text-slate-900' : 'hover:bg-slate-100'}`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'base' ? 'bg-slate-200 font-bold text-slate-900' : 'hover:bg-slate-100'}`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'lg' ? 'bg-slate-200 font-bold text-slate-900' : 'hover:bg-slate-100'}`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-2 rounded-full border transition ${
                bookmarked
                  ? 'bg-red-50 border-red-200 text-red-700'
                  : 'border-slate-200 text-slate-600 hover:text-red-700 hover:border-slate-300'
              }`}
              title={bookmarked ? "Remove bookmark" : "Save article"}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-red-700' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:text-red-700 hover:border-slate-300 transition relative"
              title="Copy share link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              {copied && (
                <span className="absolute right-0 top-11 bg-slate-900 text-white text-[11px] font-sans font-medium px-2.5 py-1 rounded shadow-lg whitespace-nowrap animate-modal">
                  Copied to Clipboard!
                </span>
              )}
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="hidden sm:block p-2 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 transition"
              title="Print article"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition"
              aria-label="Close article view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Article Content */}
        <div 
          ref={contentScrollRef}
          onScroll={handleScroll}
          className="p-4 sm:p-8 md:p-12 overflow-y-auto max-h-[85vh]"
        >
          {/* Category & Date Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
            <span className="flex items-center gap-1 text-slate-700 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
            {article.isBreaking && (
              <>
                <span>•</span>
                <span className="text-red-700 font-extrabold uppercase tracking-wider">
                  Breaking Dispatch
                </span>
              </>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-950 leading-[1.2] mb-4">
            {article.title}
          </h1>

          {/* Subtitle / Deck */}
          {article.subtitle && (
            <p className="text-lg sm:text-xl font-serif text-slate-600 leading-relaxed mb-6 font-medium italic border-b border-slate-100 pb-6">
              {article.subtitle}
            </p>
          )}

          {/* Author Box */}
          <div className="flex items-center justify-between py-4 border-t border-b border-slate-200 my-6 bg-slate-50/60 px-4 rounded-xl">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80';
                }}
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {article.author.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {article.author.role} • {article.author.beat}
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-400 rounded-lg transition flex items-center gap-1.5 shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Audio Player (Text to Speech Narration) */}
          <AudioPlayer
            title={article.title}
            content={article.content}
            authorName={article.author.name}
          />

          {/* Lead Image with caption */}
          <figure className="my-8">
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/80">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                category={article.category}
                priority={true}
                className="w-full h-full object-cover"
              />
            </div>
            {article.imageCaption && (
              <figcaption className="text-xs text-slate-500 font-serif italic mt-2.5 px-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block"></span>
                <span>{article.imageCaption}</span>
              </figcaption>
            )}
          </figure>

          {/* Key Editorial Takeaway Box */}
          <div className="my-6 p-4 sm:p-5 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-slate-900 mb-2">
              <Sparkles className="w-4 h-4 text-red-700" />
              <span>Desk Summary & Key Takeaways</span>
            </div>
            <p className="text-sm sm:text-base font-serif text-slate-800 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Article Body HTML Content */}
          <div 
            className={`font-serif text-slate-800 prose prose-slate max-w-none ${fontSizeClasses[fontSize]}`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Interactive Reader Poll */}
          <ReaderPoll
            pollId={`poll-${article.id}`}
            question={`Reader Pulse: What is your perspective on this ${article.category} development?`}
            options={[
              { text: 'A significant positive advancement for the field', votes: 840 },
              { text: 'More independent oversight and safeguards are needed', votes: 620 },
              { text: 'Too early to determine long-term global impact', votes: 190 }
            ]}
          />

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="pt-8 mt-8 border-t border-slate-200">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                Related Topics & Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-full transition cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Bar at bottom */}
          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h5 className="font-serif font-bold text-sm text-slate-900">
                Found this reporting valuable?
              </h5>
              <p className="text-xs text-slate-500">
                Share this story with colleagues or bookmark for offline reading.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3 py-1.5 bg-white border border-slate-300 text-slate-800 hover:text-red-700 text-xs font-semibold rounded-lg shadow-xs transition flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Copy Share Link'}</span>
              </button>
              <button
                onClick={() => onToggleBookmark(article.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
                  bookmarked
                    ? 'bg-red-700 text-white'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{bookmarked ? 'Saved to Bookmarks' : 'Save Story'}</span>
              </button>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-black text-xl text-slate-950">
                  Related Coverage in {article.category}
                </h3>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  From the Archives
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="group cursor-pointer"
                    onClick={() => onSelectArticle(rel)}
                  >
                    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-100 mb-2.5">
                      <ImageWithFallback
                        src={rel.image}
                        alt={rel.title}
                        category={rel.category}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-[11px] text-slate-500 mb-1">
                      {rel.publishedAt.split('•')[0]}
                    </div>
                    <h4 className="font-serif font-bold text-sm text-slate-900 group-hover:text-red-700 transition leading-snug line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
