import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import BreakingTicker from './components/BreakingTicker';
import HeroSection from './components/HeroSection';
import ArticleCard from './components/ArticleCard';
import TrendingSidebar from './components/TrendingSidebar';
import NewsletterSection from './components/NewsletterSection';
import ArticleDetailModal from './components/ArticleDetailModal';
import BookmarksDrawer from './components/BookmarksDrawer';
import ShareModal from './components/ShareModal';
import InterestModal from './components/InterestModal';
import Footer from './components/Footer';

import { NEWS_ARTICLES, CATEGORIES, CATEGORY_COLORS } from './data/newsData';
import { 
  getSavedBookmarks, 
  toggleArticleBookmark, 
  saveBookmarks,
  getSavedInterests,
  saveInterests,
  hasCompletedOnboarding,
  getSavedTheme,
  saveTheme,
  getReadHistory,
  markArticleAsRead,
  clearReadHistory
} from './utils/helpers';
import { Search, X, RefreshCw, Sparkles, Sliders, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [shareArticle, setShareArticle] = useState(null);
  const [bookmarksDrawerOpen, setBookmarksDrawerOpen] = useState(false);
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [userInterests, setUserInterests] = useState([]);
  const [isPersonalizedMode, setIsPersonalizedMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [viewLayout, setViewLayout] = useState('grid'); // 'grid' | 'list'
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentTheme, setCurrentTheme] = useState(() => getSavedTheme());
  const [readHistory, setReadHistory] = useState(() => getReadHistory());

  // Apply theme class to <body> whenever currentTheme changes
  useEffect(() => {
    document.body.className = `theme-${currentTheme}`;
    saveTheme(currentTheme);
  }, [currentTheme]);

  // Initialize bookmarks and sector interest onboarding on mount
  useEffect(() => {
    setBookmarkedIds(getSavedBookmarks());
    const savedInterests = getSavedInterests();
    setUserInterests(savedInterests);

    // If user has not completed onboarding yet, prompt with sector interest modal
    if (!hasCompletedOnboarding()) {
      const timer = setTimeout(() => {
        setInterestModalOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle article selection and record reading history
  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    if (article) {
      const updated = markArticleAsRead(article.id);
      setReadHistory(updated);
    }
  };

  const handleClearReadHistory = () => {
    clearReadHistory();
    setReadHistory([]);
  };

  // Handle saving new sector interests
  const handleSaveInterests = (selectedInterests) => {
    saveInterests(selectedInterests);
    setUserInterests(selectedInterests);
    setIsPersonalizedMode(true);
    setActiveCategory('All');
  };

  // Handle category change with smooth loading feedback
  const handleSelectCategory = (cat) => {
    setIsPersonalizedMode(false);
    if (cat === activeCategory) return;
    setIsLoading(true);
    setActiveCategory(cat);
    setVisibleCount(8);
    setTimeout(() => {
      setIsLoading(false);
    }, 180);
  };

  const handleTogglePersonalizedMode = () => {
    setIsPersonalizedMode((prev) => !prev);
    setActiveCategory('All');
    setVisibleCount(8);
  };

  // Toggle bookmark for an article
  const handleToggleBookmark = (articleId) => {
    const updated = toggleArticleBookmark(articleId);
    setBookmarkedIds(updated);
  };

  const handleClearAllBookmarks = () => {
    saveBookmarks([]);
    setBookmarkedIds([]);
  };

  // Calculate article counts per category
  const categoryCounts = useMemo(() => {
    const counts = { All: NEWS_ARTICLES.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = NEWS_ARTICLES.filter((a) => a.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter articles based on active category, personalized mode, and search query
  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const articleCat = (article.category || '').toLowerCase();
      const matchesPersonalization =
        !isPersonalizedMode ||
        userInterests.length === 0 ||
        userInterests.some((int) => (int || '').toLowerCase() === articleCat);

      const matchesCategory =
        isPersonalizedMode ||
        activeCategory === 'All' ||
        articleCat === activeCategory.toLowerCase();

      const query = (searchQuery || '').trim().toLowerCase();
      const matchesSearch =
        !query ||
        (article.title || '').toLowerCase().includes(query) ||
        (article.excerpt || '').toLowerCase().includes(query) ||
        (article.author?.name || '').toLowerCase().includes(query) ||
        (article.tags || []).some((t) => (t || '').toLowerCase().includes(query));

      return matchesPersonalization && matchesCategory && matchesSearch;
    });
  }, [activeCategory, isPersonalizedMode, userInterests, searchQuery]);

  // Lead Breaking hero article and secondary stories
  const heroArticle = useMemo(() => {
    if (activeCategory === 'All' && !isPersonalizedMode) {
      return NEWS_ARTICLES.find((a) => a.isFeaturedHero) || NEWS_ARTICLES[0];
    }
    return filteredArticles[0] || null;
  }, [activeCategory, isPersonalizedMode, filteredArticles]);

  const secondaryArticles = useMemo(() => {
    if (activeCategory === 'All' && !isPersonalizedMode) {
      return NEWS_ARTICLES.filter((a) => a.id !== heroArticle?.id && a.isEditorPick).slice(0, 2);
    }
    return filteredArticles.filter((a) => a.id !== heroArticle?.id).slice(0, 2);
  }, [activeCategory, isPersonalizedMode, heroArticle, filteredArticles]);

  // Latest Grid articles (excluding the hero if on All view, or full list)
  const gridArticles = useMemo(() => {
    if (activeCategory === 'All' && !isPersonalizedMode && !searchQuery.trim()) {
      return filteredArticles.filter((a) => a.id !== heroArticle?.id);
    }
    return filteredArticles;
  }, [activeCategory, isPersonalizedMode, searchQuery, filteredArticles, heroArticle]);

  // Trending articles for sidebar
  const trendingArticles = useMemo(() => {
    return [...NEWS_ARTICLES].filter((a) => a.isTrending).sort((a, b) => (a.trendingRank || 99) - (b.trendingRank || 99));
  }, []);

  // Bookmarked articles list
  const bookmarkedArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((a) => bookmarkedIds.includes(a.id));
  }, [bookmarkedIds]);

  const readArticleIds = useMemo(() => {
    return readHistory.map((h) => h.id);
  }, [readHistory]);

  const readHistoryArticles = useMemo(() => {
    return readHistory.map((h) => NEWS_ARTICLES.find((a) => a.id === h.id)).filter(Boolean);
  }, [readHistory]);

  const isBookmarked = (id) => bookmarkedIds.includes(id);

  // Handle clicking breaking alert
  const handleSelectAlert = (alertText) => {
    const match = NEWS_ARTICLES.find(
      (a) => a.isBreaking || alertText.toLowerCase().includes(a.category.toLowerCase())
    );
    if (match) handleSelectArticle(match);
  };

  return (
    <div className="min-h-screen transition-colors duration-200 flex flex-col selection:bg-red-800 selection:text-white">
      {/* 1. Live Breaking Alert Banner */}
      <BreakingTicker onSelectAlert={handleSelectAlert} />

      {/* 2. Unified Header & Navigation Bar */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        bookmarksCount={bookmarkedIds.length}
        onOpenBookmarks={() => setBookmarksDrawerOpen(true)}
        onOpenInterests={() => setInterestModalOpen(true)}
        userInterests={userInterests}
        isPersonalizedMode={isPersonalizedMode}
        onTogglePersonalizedMode={handleTogglePersonalizedMode}
        categoryCounts={categoryCounts}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 3. Tailored "For You" Feed Banner */}
        {isPersonalizedMode && (
          <section className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 text-white py-3 px-4 border-b border-indigo-900/60 shadow-inner">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="flex items-center gap-1.5 font-bold text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Personalized For You:</span>
                </span>
                <span className="text-slate-300">Showing reporting tailored to your favorite beats:</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {userInterests.map((interest) => {
                    const style = CATEGORY_COLORS[interest] || CATEGORY_COLORS.All;
                    return (
                      <span
                        key={interest}
                        className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${style.badge}`}
                      >
                        {interest}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setInterestModalOpen(true)}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline flex items-center gap-1"
                >
                  <Sliders className="w-3 h-3" />
                  <span>Edit Sectors</span>
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={() => setIsPersonalizedMode(false)}
                  className="text-xs font-semibold text-slate-300 hover:text-white"
                >
                  View All News
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 4. Active Search / Beat Filter Notification Bar */}
        {(activeCategory !== 'All' || searchQuery.trim()) && !isPersonalizedMode && (
          <section className="bg-slate-100 border-b border-slate-200 py-3 px-4">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Active filter:</span>
                {activeCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white font-bold shadow-xs">
                    <span>Beat: {activeCategory}</span>
                    <button
                      onClick={() => handleSelectCategory('All')}
                      className="hover:text-red-300 p-0.5"
                      title="Clear category filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-200 font-bold">
                    <span>Search: "{searchQuery}"</span>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="hover:text-red-950 p-0.5"
                      title="Clear search"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="text-slate-600 hover:text-red-700 font-semibold underline flex items-center gap-1 transition"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset all filters</span>
              </button>
            </div>
          </section>
        )}

        {/* 5. Breaking News Hero Section (Displayed on All view without search) */}
        {!searchQuery.trim() && activeCategory === 'All' && !isPersonalizedMode && heroArticle && (
          <HeroSection
            heroArticle={heroArticle}
            secondaryArticles={secondaryArticles}
            onSelectArticle={handleSelectArticle}
            isBookmarked={isBookmarked}
            onToggleBookmark={handleToggleBookmark}
            onShareArticle={setShareArticle}
          />
        )}

        {/* 6. Main Content Layout: Latest News Grid + Popular/Trending Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left/Center News Grid (Cols 1-8) */}
            <div className="lg:col-span-8">
              
              {/* Grid Header Controls */}
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-red-600 rounded-sm shadow-xs" />
                  <h2 className="font-serif font-black text-lg md:text-xl uppercase tracking-wider text-slate-900">
                    {isPersonalizedMode
                      ? 'Tailored For You'
                      : activeCategory === 'All'
                      ? 'Latest Reporting'
                      : `${activeCategory} Desk`}
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="hidden sm:inline font-medium">Layout:</span>
                  <button
                    onClick={() => setViewLayout('grid')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                      viewLayout === 'grid'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewLayout('list')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                      viewLayout === 'list'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Editorial List
                  </button>
                </div>
              </div>

              {/* Loading State Skeleton */}
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="bg-white rounded-xl p-4 border border-slate-200 animate-pulse space-y-3">
                      <div className="aspect-[16/10] bg-slate-200 rounded-lg" />
                      <div className="h-4 bg-slate-200 rounded w-3/4" />
                      <div className="h-3 bg-slate-200 rounded w-full" />
                      <div className="h-3 bg-slate-200 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : gridArticles.length === 0 ? (
                /* Empty Filter State */
                <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center my-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto flex items-center justify-center mb-4 text-slate-400">
                    <Search className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-slate-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto mb-6 font-serif">
                    We couldn't find any news articles matching your current search query or filter in this category.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setActiveCategory('All');
                        setSearchQuery('');
                        setIsPersonalizedMode(false);
                      }}
                      className="px-5 py-2.5 bg-slate-900 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition shadow-sm"
                    >
                      Reset All Filters
                    </button>
                    <button
                      onClick={() => setInterestModalOpen(true)}
                      className="px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold rounded-lg border border-indigo-200 transition"
                    >
                      Change News Sectors
                    </button>
                  </div>
                </div>
              ) : (
                /* Article Grid / List View */
                <>
                  <div
                    className={
                      viewLayout === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 gap-6'
                        : 'space-y-4'
                    }
                  >
                    {gridArticles.slice(0, visibleCount).map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        onSelectArticle={handleSelectArticle}
                        isBookmarked={isBookmarked}
                        onToggleBookmark={handleToggleBookmark}
                        onShareArticle={setShareArticle}
                        isRead={readArticleIds.includes(article.id)}
                        layout={viewLayout === 'list' ? 'horizontal' : 'vertical'}
                      />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {gridArticles.length > visibleCount && (
                    <div className="text-center mt-10">
                      <button
                        onClick={() => setVisibleCount((prev) => prev + 6)}
                        className="px-6 py-2.5 bg-white border-2 border-slate-300 hover:border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-lg transition shadow-xs hover:shadow-sm inline-flex items-center gap-2"
                      >
                        <span>Load Additional Stories ({gridArticles.length - visibleCount} remaining)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Right Trending, Polls & Opinion Sidebar (Cols 9-12) */}
            <div className="lg:col-span-4">
              <TrendingSidebar
                trendingArticles={trendingArticles}
                onSelectArticle={handleSelectArticle}
              />
            </div>

          </div>
        </div>

        {/* 7. Newsletter Subscription Section */}
        <NewsletterSection />
      </main>

      {/* 8. Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* 9. Article Detail Modal / Reader with TTS Narration & Polls */}
      {selectedArticle && (
        <ArticleDetailModal
          article={selectedArticle}
          allArticles={NEWS_ARTICLES}
          onClose={() => setSelectedArticle(null)}
          isBookmarked={isBookmarked}
          onToggleBookmark={handleToggleBookmark}
          onSelectArticle={handleSelectArticle}
        />
      )}

      {/* 10. Bookmarks & Reading History Drawer */}
      <BookmarksDrawer
        isOpen={bookmarksDrawerOpen}
        onClose={() => setBookmarksDrawerOpen(false)}
        bookmarkedArticles={bookmarkedArticles}
        readHistoryArticles={readHistoryArticles}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={handleToggleBookmark}
        onClearAllBookmarks={handleClearAllBookmarks}
        onClearReadHistory={handleClearReadHistory}
      />

      {/* 11. Quick Share Modal */}
      {shareArticle && (
        <ShareModal
          article={shareArticle}
          isOpen={Boolean(shareArticle)}
          onClose={() => setShareArticle(null)}
        />
      )}

      {/* 12. First-Visit Sector Interest Onboarding Modal */}
      <InterestModal
        isOpen={interestModalOpen}
        onClose={() => setInterestModalOpen(false)}
        initialInterests={userInterests}
        onSaveInterests={handleSaveInterests}
      />
    </div>
  );
}
