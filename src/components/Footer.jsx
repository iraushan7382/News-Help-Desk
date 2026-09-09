import React from 'react';
import { 
  Globe, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  ArrowUp, 
  Shield, 
  Award,
  BookOpen
} from 'lucide-react';
import { CATEGORIES } from '../data/newsData';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Masthead row in footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-slate-800 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white uppercase font-masthead">
              Daily News Desk
            </div>
            <p className="text-xs text-slate-400 font-serif italic mt-1">
              Independent, accurate, and uncompromising global journalism since 2026.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#newsletter-section"
              className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white text-xs font-semibold rounded-md transition shadow-md"
            >
              Get The Morning Dispatch
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-md border border-slate-800 transition flex items-center gap-1.5 text-xs"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Directory columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800 text-xs">
          
          {/* News Beats */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-200 uppercase tracking-wider">
              News Beats
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.filter(c => c !== 'All').map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial & Columns */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-200 uppercase tracking-wider">
              Opinion & Analysis
            </h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer transition">Editorial Board</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Guest Essayists</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Global Economy Letters</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Deep Technology Reviews</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Cultural Dispatches</span></li>
            </ul>
          </div>

          {/* Ethics & Standards */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-200 uppercase tracking-wider">
              Standards & Ethics
            </h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer transition">Editorial Integrity Charter</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Fact-Checking Protocol</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Corrections & Clarifications</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Anonymous Source Guidelines</span></li>
              <li><span className="hover:text-white cursor-pointer transition">AI Policy in Reporting</span></li>
            </ul>
          </div>

          {/* Company & Inquiries */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-200 uppercase tracking-wider">
              The Newsroom
            </h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer transition">About Daily News Desk</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Masthead & Staff Directory</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Press Inquiries & Media Kit</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Confidential Whistleblower Tips</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Syndication & Licensing</span></li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2 text-white font-bold text-xs mb-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Verified Independent</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Adhering to the International Code of Journalistic Ethics with zero corporate sponsor editorial control.
              </p>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <span className="p-2 bg-slate-900 hover:text-white hover:bg-slate-800 rounded-full cursor-pointer transition">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="p-2 bg-slate-900 hover:text-white hover:bg-slate-800 rounded-full cursor-pointer transition">
                <Linkedin className="w-4 h-4" />
              </span>
              <span className="p-2 bg-slate-900 hover:text-white hover:bg-slate-800 rounded-full cursor-pointer transition">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="p-2 bg-slate-900 hover:text-white hover:bg-slate-800 rounded-full cursor-pointer transition">
                <Instagram className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Daily News Desk Publishing Group LLC. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Preferences</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Accessibility Statement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
