// LocalStorage keys
const BOOKMARKS_KEY = 'daily_news_desk_bookmarks';
const NEWSLETTER_KEY = 'daily_news_desk_subscribers';
const USER_INTERESTS_KEY = 'daily_news_desk_interests';
const ONBOARDING_COMPLETED_KEY = 'daily_news_desk_onboarding_completed';
const READ_HISTORY_KEY = 'daily_news_desk_read_history';
const THEME_KEY = 'daily_news_desk_theme';
const POLL_VOTES_KEY = 'daily_news_desk_poll_votes';

// Bookmarks
export const getSavedBookmarks = () => {
  try {
    const saved = localStorage.getItem(BOOKMARKS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const saveBookmarks = (bookmarks) => {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  } catch (e) {
    console.error('Failed to persist bookmarks to localStorage', e);
  }
};

export const toggleArticleBookmark = (articleId) => {
  const current = getSavedBookmarks();
  let updated;
  if (current.includes(articleId)) {
    updated = current.filter(id => id !== articleId);
  } else {
    updated = [...current, articleId];
  }
  saveBookmarks(updated);
  return updated;
};

// Reading History
export const getReadHistory = () => {
  try {
    const saved = localStorage.getItem(READ_HISTORY_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const markArticleAsRead = (articleId) => {
  try {
    const history = getReadHistory();
    const filtered = history.filter(item => item.id !== articleId);
    const updated = [
      { id: articleId, readAt: new Date().toISOString() },
      ...filtered
    ].slice(0, 50); // Keep last 50 read articles
    localStorage.setItem(READ_HISTORY_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to update read history', e);
    return [];
  }
};

export const clearReadHistory = () => {
  try {
    localStorage.setItem(READ_HISTORY_KEY, JSON.stringify([]));
  } catch (e) {
    console.error('Failed to clear read history', e);
  }
};

// Themes ('light' | 'sepia' | 'dark')
export const getSavedTheme = () => {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch {
    return 'light';
  }
};

export const saveTheme = (theme) => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    console.error('Failed to persist theme', e);
  }
};

// Poll Voting
export const getPollVotes = () => {
  try {
    const saved = localStorage.getItem(POLL_VOTES_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

export const savePollVote = (pollId, optionIndex) => {
  try {
    const votes = getPollVotes();
    votes[pollId] = optionIndex;
    localStorage.setItem(POLL_VOTES_KEY, JSON.stringify(votes));
    return votes;
  } catch (e) {
    console.error('Failed to save poll vote', e);
    return {};
  }
};

// User News Sector Interests
export const getSavedInterests = () => {
  try {
    const saved = localStorage.getItem(USER_INTERESTS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const saveInterests = (interests) => {
  try {
    localStorage.setItem(USER_INTERESTS_KEY, JSON.stringify(interests));
    localStorage.setItem(ONBOARDING_COMPLETED_KEY, 'true');
  } catch (e) {
    console.error('Failed to persist user interests to localStorage', e);
  }
};

export const hasCompletedOnboarding = () => {
  try {
    return localStorage.getItem(ONBOARDING_COMPLETED_KEY) === 'true';
  } catch {
    return false;
  }
};

// Newsletter
export const getSubscribedEmails = () => {
  try {
    const subs = localStorage.getItem(NEWSLETTER_KEY);
    return subs ? JSON.parse(subs) : [];
  } catch {
    return [];
  }
};

export const saveSubscribedEmail = (email, preferences = []) => {
  try {
    const current = getSubscribedEmails();
    const exists = current.find(item => item.email.toLowerCase() === email.toLowerCase());
    if (!exists) {
      current.push({
        email,
        preferences,
        subscribedAt: new Date().toISOString()
      });
      localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(current));
    }
    return true;
  } catch (e) {
    console.error('Failed to persist subscriber to localStorage', e);
    return false;
  }
};

// Formatting helpers
export const formatCurrentEditorialDate = () => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date());
};

export const copyToClipboard = async (text) => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const success = document.execCommand('copy');
    textArea.remove();
    return success;
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    return false;
  }
};
