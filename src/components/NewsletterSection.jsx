import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { saveSubscribedEmail } from '../utils/helpers';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState(['Daily Briefing', 'Technology & AI']);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const topicsList = [
    'Daily Briefing',
    'Technology & AI',
    'Global Markets',
    'Health & Science',
    'Culture & Arts'
  ];

  const handleTopicToggle = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      saveSubscribedEmail(email, selectedTopics);
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section id="newsletter-section" className="py-12 bg-slate-950 text-white relative overflow-hidden">
      {/* Editorial Watermark background element */}
      <div className="absolute right-0 bottom-0 text-[160px] font-serif font-black text-slate-900/60 leading-none select-none pointer-events-none -mr-8 -mb-12">
        DAILY
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 text-red-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-red-500" />
            <span>The Morning Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white mb-4">
            Journalism Delivered to Your Inbox
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-serif max-w-xl mx-auto mb-8">
            Start your day with essential context. Curated global dispatches, investigative insights, and market analysis delivered every weekday morning at 6:00 AM EST.
          </p>

          {status === 'success' ? (
            <div className="bg-emerald-950/80 border border-emerald-700 text-emerald-100 p-6 rounded-xl max-w-md mx-auto animate-modal flex flex-col items-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-2" />
              <h3 className="font-serif font-bold text-lg text-white">
                Welcome to The Dispatch
              </h3>
              <p className="text-xs text-emerald-200 text-center mt-1">
                You're now subscribed. Check your inbox tomorrow morning for your first edition.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-semibold text-emerald-300 underline hover:text-white"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your corporate or personal email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'Joining...' : 'Subscribe Free'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {status === 'error' && (
                <p className="text-rose-400 text-xs font-medium">
                  {errorMessage}
                </p>
              )}

              {/* Topics Selection */}
              <div className="pt-2">
                <span className="text-xs text-slate-400 block mb-2 font-medium">
                  Customize your daily reading topics:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {topicsList.map((topic) => {
                    const isSelected = selectedTopics.includes(topic);
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => handleTopicToggle(topic)}
                        className={`text-xs px-3 py-1 rounded-full border transition ${
                          isSelected
                            ? 'bg-slate-800 text-red-400 border-red-800/80 font-medium'
                            : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '} {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>Zero spam. No paywall tricks. Unsubscribe anytime with 1-click.</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
