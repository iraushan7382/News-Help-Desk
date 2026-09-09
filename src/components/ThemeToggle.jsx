import React from 'react';
import { Sun, Moon, BookOpen } from 'lucide-react';

export default function ThemeToggle({ currentTheme, onSelectTheme }) {
  const themes = [
    { id: 'light', label: 'Newsprint', icon: Sun },
    { id: 'sepia', label: 'Sepia', icon: BookOpen },
    { id: 'dark', label: 'Midnight', icon: Moon }
  ];

  return (
    <div className="inline-flex items-center bg-slate-800/80 p-0.5 rounded-full border border-slate-700/80 shadow-xs">
      {themes.map((theme) => {
        const Icon = theme.icon;
        const isActive = currentTheme === theme.id;
        return (
          <button
            key={theme.id}
            onClick={() => onSelectTheme(theme.id)}
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold transition-all ${
              isActive
                ? 'bg-slate-100 text-slate-900 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title={`Switch to ${theme.label} theme`}
            aria-label={`Switch to ${theme.label} theme`}
          >
            <Icon className="w-3 h-3" />
            <span className="hidden sm:inline">{theme.label}</span>
          </button>
        );
      })}
    </div>
  );
}
