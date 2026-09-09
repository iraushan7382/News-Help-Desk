import React, { useState } from 'react';
import { X, Bookmark, Trash2, History, CheckCheck, Clock } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function BookmarksDrawer({
  isOpen,
  onClose,
  bookmarkedArticles = [],
  readHistoryArticles = [],
  onSelectArticle,
  onRemoveBookmark,
  onClearAllBookmarks,
  onClearReadHistory
}) {
  const [activeTab, setActiveTab] = useState('saved'); // 'saved' | 'history'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-modal border-l border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header with Tabs */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-[#fbfbf9]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif font-black text-lg text-slate-950">
              Personal News Archive
            </h3>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-200 transition"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-200/80 rounded-lg text-xs font-bold">
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md transition ${
                activeTab === 'saved'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-red-700" />
              <span>Saved ({bookmarkedArticles.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md transition ${
                activeTab === 'history'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <History className="w-3.5 h-3.5 text-indigo-700" />
              <span>History ({readHistoryArticles.length})</span>
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeTab === 'saved' ? (
            bookmarkedArticles.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <Bookmark className="w-8 h-8 text-slate-400 stroke-1" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-700 mb-1">
                  No Saved Articles
                </h4>
                <p className="text-xs text-slate-500 max-w-xs">
                  Click the bookmark icon on any headline or story card to save articles for quick reading anytime.
                </p>
              </div>
            ) : (
              bookmarkedArticles.map((article) => (
                <div
                  key={article.id}
                  className="group p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-xs transition bg-white flex gap-3 items-start"
                >
                  <div 
                    className="w-20 h-16 rounded overflow-hidden bg-slate-100 shrink-0 cursor-pointer"
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                  >
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      category={article.category}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-400 mb-0.5">
                      <span className="text-red-700 font-bold">{article.category}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h4
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="font-serif font-bold text-xs sm:text-sm text-slate-900 group-hover:text-red-700 transition line-clamp-2 cursor-pointer leading-snug mb-1.5"
                    >
                      {article.title}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>By {article.author.name}</span>
                      <button
                        onClick={() => onRemoveBookmark(article.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded transition"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          ) : (
            /* Reading History Tab */
            readHistoryArticles.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <History className="w-8 h-8 text-slate-400 stroke-1" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-700 mb-1">
                  No Reading History Yet
                </h4>
                <p className="text-xs text-slate-500 max-w-xs">
                  Articles you open and explore will be recorded here so you can retrace your reading sessions.
                </p>
              </div>
            ) : (
              readHistoryArticles.map((article) => (
                <div
                  key={article.id}
                  className="group p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition bg-white flex gap-3 items-start"
                >
                  <div 
                    className="w-18 h-14 rounded overflow-hidden bg-slate-100 shrink-0 cursor-pointer"
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                  >
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      category={article.category}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-bold mb-0.5">
                      <CheckCheck className="w-3.5 h-3.5" />
                      <span>Read Story</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-normal">{article.readTime}</span>
                    </div>

                    <h4
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="font-serif font-bold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-700 transition line-clamp-2 cursor-pointer leading-snug"
                    >
                      {article.title}
                    </h4>
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 bg-[#fbfbf9] flex items-center justify-between">
          {activeTab === 'saved' && bookmarkedArticles.length > 0 && (
            <button
              onClick={onClearAllBookmarks}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
            >
              Clear All Saved
            </button>
          )}

          {activeTab === 'history' && readHistoryArticles.length > 0 && (
            <button
              onClick={onClearReadHistory}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
            >
              Clear Reading History
            </button>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
