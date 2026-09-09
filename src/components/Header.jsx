import React, { useState } from 'react';
import { 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  Calendar, 
  Globe2, 
  Flame, 
  Mail,
  ChevronRight,
  Sparkles,
  Sliders,
  Printer
} from 'lucide-react';
import { CATEGORIES, CATEGORY_COLORS } from '../data/newsData';
import { formatCurrentEditorialDate } from '../utils/helpers';
import ThemeToggle from './ThemeToggle';

export default function Header({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  bookmarksCount,
  onOpenBookmarks,
  onOpenInterests,
  userInterests = [],
  isPersonalizedMode = false,
  onTogglePersonalizedMode,
  categoryCounts = {},
  currentTheme = 'light',
  onSelectTheme
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inlineSearchOpen, setInlineSearchOpen] = useState(false);
  const currentDate = formatCurrentEditorialDate();

  const handleCategoryClick = (cat) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
  };

  const handlePrintEdition = () => {
    window.print();
  };

  return (
    <header className="w-full bg-[#ffffff] border-b border-slate-200">
      {/* 1. Top Editorial Utility Bar */}
      <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 px-4 py-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          
          {/* Left: Date & Live Desk Status */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <Calendar className="w-3.5 h-3.5 text-red-400" />
              <span className="hidden sm:inline">{currentDate}</span>
              <span className="sm:hidden">{currentDate.split(',')[1] || currentDate}</span>
            </span>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[10px]">Live Newsroom</span>
              <span className="text-slate-500">•</span>
              <span>Global Edition</span>
            </span>
          </div>

          {/* Right: Theme Toggle, Print, Personalize, Bookmarks */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* 3-Way Theme Switcher (Light/Sepia/Dark) */}
            <ThemeToggle currentTheme={currentTheme} onSelectTheme={onSelectTheme} />

            {/* Print Broadsheet PDF */}
            <button
              onClick={handlePrintEdition}
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition text-xs font-semibold"
              title="Print or export Front Page as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print Edition</span>
            </button>

            {/* Personalize Interests Quick Button */}
            <button
              onClick={onOpenInterests}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-red-800/60 to-indigo-900/60 hover:from-red-700 hover:to-indigo-800 text-slate-100 border border-slate-700 text-xs font-medium transition shadow-xs group"
              title="Change your preferred news beats"
            >
              <Sparkles className="w-3 h-3 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">My Sectors</span>
              <span className="px-1.5 py-0.2 bg-slate-800/90 text-amber-300 rounded-full text-[10px] font-bold">
                {userInterests.length > 0 ? userInterests.length : 'All'}
              </span>
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onOpenBookmarks}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition group"
              title="Saved Articles"
            >
              <Bookmark className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400" />
              <span className="hidden sm:inline">Saved</span>
              {bookmarksCount > 0 && (
                <span className="px-1.5 py-0.2 bg-red-600 text-white rounded-full text-[10px] font-bold shadow-xs">
                  {bookmarksCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Masthead Banner with Editorial Polish */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 text-center relative">
        <div className="newspaper-double-rule mb-4 hidden md:block" />

        <div className="inline-block cursor-pointer group" onClick={() => onSelectCategory('All')}>
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-red-600 to-red-600" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-100">
              The Sovereign Journal of Record
            </span>
            <span className="h-[2px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-red-600 to-red-600" />
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-slate-950 uppercase select-none font-masthead group-hover:text-red-950 transition-colors">
            Daily News Desk
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1.5 tracking-wide">
            Independent Journalism • Depth, Veracity & Global Perspective • Est. 2026
          </p>
        </div>

        <div className="newspaper-double-rule mt-4 hidden md:block" />
      </div>

      {/* 3. The SINGLE Unified Navigation & Beat Bar */}
      <div className="border-t border-b border-slate-200 sticky top-0 z-30 bg-white/98 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            
            {/* Mobile Menu & Active Category Indicator */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-slate-800 hover:text-red-700 rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="ml-2 flex items-center gap-1.5">
                <span className="font-serif font-bold text-sm text-slate-900">
                  {isPersonalizedMode ? '✨ For You' : activeCategory}
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-full font-bold">
                  {categoryCounts[activeCategory] || 0}
                </span>
              </div>
            </div>

            {/* Desktop Unified Categories Bar */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 overflow-x-auto py-1 scrollbar-none">
              
              {/* "For You" Tailored Feed Tab */}
              {userInterests.length > 0 && (
                <button
                  onClick={onTogglePersonalizedMode}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all shrink-0 border ${
                    isPersonalizedMode
                      ? 'bg-gradient-to-r from-red-600 to-indigo-600 text-white border-transparent shadow-sm'
                      : 'bg-gradient-to-r from-red-50 to-indigo-50 text-indigo-900 border-indigo-200/80 hover:border-indigo-400'
                  }`}
                  title="Filtered exclusively by your chosen sectors"
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isPersonalizedMode ? 'text-amber-300' : 'text-indigo-600'}`} />
                  <span>For You</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                    isPersonalizedMode ? 'bg-white/20 text-white' : 'bg-indigo-200/70 text-indigo-950'
                  }`}>
                    {userInterests.length}
                  </span>
                </button>
              )}

              {/* All Beats / Categories */}
              {CATEGORIES.map((cat) => {
                const isActive = !isPersonalizedMode && activeCategory === cat;
                const count = categoryCounts[cat] || 0;
                const style = CATEGORY_COLORS[cat] || CATEGORY_COLORS.All;

                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all shrink-0 border ${
                      isActive
                        ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    {/* Vibrant colored dot indicator */}
                    <span className={`w-2 h-2 rounded-full transition-transform ${
                      isActive ? 'bg-red-500 scale-125' : style.dot
                    }`} />

                    <span>{cat}</span>

                    {/* Article count pill */}
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive
                        ? 'bg-slate-800 text-slate-200'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Search & Customize Button */}
            <div className="flex items-center gap-2">
              <div className="relative">
                {inlineSearchOpen ? (
                  <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 border border-slate-300 w-48 sm:w-64 transition-all shadow-inner">
                    <Search className="w-4 h-4 text-slate-500 mr-2 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search news, topics, authors..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="bg-transparent text-xs text-slate-900 placeholder-slate-400 focus:outline-none w-full"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setInlineSearchOpen(false);
                        onSearchChange('');
                      }}
                      className="text-slate-400 hover:text-slate-700 ml-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setInlineSearchOpen(true)}
                    className="p-2 text-slate-700 hover:text-red-700 rounded-full hover:bg-slate-100 transition flex items-center gap-1.5 text-xs font-semibold"
                    aria-label="Search articles"
                  >
                    <Search className="w-4 h-4 text-slate-600" />
                    <span className="hidden lg:inline">Search</span>
                  </button>
                )}
              </div>

              {/* Personalize Button (Desktop) */}
              <button
                onClick={onOpenInterests}
                className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition"
                title="Configure interested sectors"
              >
                <Sliders className="w-3.5 h-3.5 text-slate-500" />
                <span>Filter Beats</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-modal">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search headlines, keywords, authors..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Tailored Feed in Mobile */}
            {userInterests.length > 0 && (
              <button
                onClick={() => {
                  onTogglePersonalizedMode();
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-bold transition ${
                  isPersonalizedMode
                    ? 'bg-gradient-to-r from-red-600 to-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-900 border border-indigo-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Personalized "For You" Feed</span>
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-black/20 text-white">
                  {userInterests.length} Beats
                </span>
              </button>
            )}

            <div className="flex items-center justify-between text-xs uppercase font-bold text-slate-400 tracking-wider">
              <span>All News Beats</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInterests();
                }}
                className="text-red-700 lowercase font-semibold hover:underline"
              >
                customize interests
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = !isPersonalizedMode && activeCategory === cat;
                const style = CATEGORY_COLORS[cat] || CATEGORY_COLORS.All;
                const count = categoryCounts[cat] || 0;

                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`flex items-center justify-between px-3 py-2 text-xs font-bold rounded-lg text-left transition border ${
                      isActive
                        ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-red-400' : style.dot}`} />
                      <span className="truncate">{cat}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 ml-1">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookmarks();
                  }}
                  className="flex items-center gap-1.5 text-slate-800 font-bold"
                >
                  <Bookmark className="w-4 h-4 text-red-700" />
                  <span>Saved Articles ({bookmarksCount})</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handlePrintEdition();
                  }}
                  className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-semibold"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Edition</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-slate-400">Reading Theme:</span>
                <ThemeToggle currentTheme={currentTheme} onSelectTheme={onSelectTheme} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
