import React, { useState } from 'react';
import { X, Copy, Check, Twitter, Linkedin, Facebook, Send } from 'lucide-react';
import { copyToClipboard } from '../utils/helpers';

export default function ShareModal({ article, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!isOpen || !article) return null;

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out "${article.title}" on Daily News Desk`;

  const handleCopy = async () => {
    const success = await copyToClipboard(pageUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
      color: 'bg-black text-white hover:bg-slate-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      color: 'bg-[#0077b5] text-white hover:opacity-90'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      color: 'bg-[#1877f2] text-white hover:opacity-90'
    },
    {
      name: 'WhatsApp',
      icon: Send,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`,
      color: 'bg-[#25d366] text-white hover:opacity-90'
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-modal"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <h3 className="font-serif font-bold text-lg text-slate-900">
            Share This Story
          </h3>
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-xs text-slate-500 font-medium mb-1">Headline</p>
          <h4 className="font-serif font-bold text-sm text-slate-800 line-clamp-2">
            {article.title}
          </h4>
        </div>

        {/* Copy Link Input */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-slate-600 mb-1.5 block">
            Article Link
          </label>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              readOnly 
              value={pageUrl} 
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 truncate focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Social Sharing buttons */}
        <div className="grid grid-cols-2 gap-2">
          {shareLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition ${item.color}`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
