# Daily News Desk 📰

A modern, responsive, and editorial-grade news publication website built with React, Tailwind CSS, and Lucide icons. Designed with the visual gravitas of leading global publications such as *The New York Times*, *The Financial Times*, and *The Guardian*.

![Daily News Desk](public/favicon.svg)

---

## ✨ Features

- **Classic Editorial Typography & Visual Hierarchy**:
  - Distinctive masthead with classic serif headline styling (*Cinzel*, *Newsreader*, *Lora*) paired with crisp modern body sans-serif (*Plus Jakarta Sans*).
  - Subtle newspaper rules, paper-toned backgrounds (`#fafaf8`), and high-contrast accessible color palette.

- **Breaking News Hero & Live Ticker**:
  - Live animated breaking-news ticker at top with pause-on-hover and alert navigation.
  - Prominent lead breaking news article with high-impact photography, pulsating badge, full byline, reading time, and direct reader access.
  - Secondary editorial side-leads matching classic front-page newsprint layout.

- **Category Filtering & Beat Navigation**:
  - Category filters for **All**, **World**, **Politics**, **Business**, **Technology**, **Sports**, **Entertainment**, and **Health**.
  - Dynamic article count badges for each category.
  - Active visual indicators and category-specific accents.
  - Empty states with one-click "Reset All Filters" action.

- **Interactive Article Detail Reader**:
  - Full-screen distraction-free editorial reader modal with reading progress indicator bar.
  - Reader comfort controls: Font size adjustments (`A-`, `A`, `A+`), Bookmark, Share, and Print actions.
  - Formatted multi-paragraph story body with editorial blockquotes and key takeaway summary box.
  - Contextual "Related Articles" section recommending stories in the same beat.

- **Popular & Trending Sidebar**:
  - Numbered **01 to 05** trending stories ranked by editorial engagement.
  - Real-time **Markets Snapshot** with indices (S&P 500, NASDAQ, FTSE, Nikkei, 10-Yr Yield).
  - **Voices & Commentary** column featuring guest essayists and opinion pieces.

- **Local Bookmarks & Saved Stories**:
  - 1-click bookmarking on any article card, hero, or reader view.
  - Saved stories drawer with persistent browser `localStorage`.
  - Bookmarks badge on header showing live count.

- **The Morning Dispatch (Newsletter)**:
  - Editorial newsletter subscription section with email validation and multi-topic selection checkboxes.
  - Interactive success confirmation state.

- **Robust & Graceful Fallbacks**:
  - Skeleton loading states during category transitions.
  - Curated SVG/editorial fallback component for missing or broken image URLs.

---



## 📁 Project Structure

```
daily-news-desk/
├── index.html                   # HTML entry point with editorial Google Fonts
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind editorial theme & typography
├── vite.config.js               # Vite bundler configuration (port 3000)
├── public/
│   └── favicon.svg              # Newspaper masthead SVG favicon
└── src/
    ├── main.jsx                 # React root render
    ├── App.jsx                  # Main application container
    ├── index.css                # Tailwind base & custom editorial utilities
    ├── data/
    │   └── newsData.js          # 16+ realistic full-text articles across 7 beats
    ├── utils/
    │   └── helpers.js           # LocalStorage bookmarks, date formatting, clipboard
    └── components/
        ├── Header.jsx           # Masthead, navigation, live search, mobile drawer
        ├── BreakingTicker.jsx   # Top breaking news ticker banner
        ├── HeroSection.jsx      # Major breaking story & secondary side leads
        ├── CategoryFilter.jsx   # Sticky filter pills with live article counts
        ├── ArticleCard.jsx      # Editorial grid & list cards with badges & bookmarks
        ├── ArticleDetailModal.jsx # Full article reader, font zoom, progress bar, share
        ├── TrendingSidebar.jsx  # Top 5 ranked trending list, markets & opinions
        ├── NewsletterSection.jsx # Morning Dispatch subscription form
        ├── BookmarksDrawer.jsx  # Slide-out saved stories reader
        ├── ShareModal.jsx       # Direct share links (X, LinkedIn, Facebook, WhatsApp)
        ├── ImageWithFallback.jsx# Skeleton loader & placeholder on image error
        └── Footer.jsx           # Complete newspaper directory, ethics & copyright
```
