# QuoteX

> A minimalist, typography-driven random quote generator that serves curated wisdom from philosophers, poets, leaders, and proverbs — with category filtering, author attribution, and one-click sharing.

**QuoteX** is a fully client-side web app that displays a single, beautifully set quote at a time. Each quote is attributed to its author with a short biographical note, tagged by theme (category), and can be copied or shared to Twitter. A "New Quote" button reveals the next quote, an explored-counter and progress bar track how much of the collection you have seen, and category pills let you narrow the feed to a mood or topic.

---

## Table of Contents

- [Features](#features)
- [Screenshots & Layout](#screenshots--layout)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Data Model](#data-model)
- [Quote Selection Logic](#quote-selection-logic)
- [Category Filtering](#category-filtering)
- [Sharing](#sharing)
- [State & UI Feedback](#state--ui-feedback)
- [Getting Started](#getting-started)
- [Customizing the Quotes](#customizing-the-quotes)
- [Design & Accessibility](#design--accessibility)
- [Progressive Web App (PWA)](#progressive-web-app-pwa)
- [Search Engine Optimization (SEO)](#search-engine-optimization-seo)
- [Browser Support](#browser-support)
- [License](#license)

---

## Features

| Feature                         | Description                                                                                                                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Random quote generation**     | Press _New Quote_ to reveal the next quote. Selection is random but avoids immediate repeats and cycles through the full set before starting over, so you see everything without duplicates in a round. |
| **Category-based filtering**    | Filter the feed by theme — Philosophy, Resilience, Love, Courage, Wisdom, Work, Life, Humor, and many more (auto-derived from the data). An _All_ option shows the entire collection.                   |
| **Author attribution with bio** | Every quote shows the author's name and a short contextual bio (e.g. "Greek philosopher, 470–399 BC"), giving the words a human background.                                                             |
| **Copy-to-clipboard**           | Copies the formatted quote + author to the clipboard using the modern Clipboard API, with a legacy `textarea`/`execCommand` fallback for older browsers.                                                |
| **Twitter sharing**             | Opens a pre-filled Twitter (X) intent tweet with the quote and author, ready to post.                                                                                                                   |
| **Progress tracking**           | A counter shows how many quotes you have explored, and a footer progress bar fills as you work through the currently filtered set.                                                                      |
| **Toast notifications**         | Lightweight, auto-dismissing toast confirms copy actions for clear UI feedback.                                                                                                                         |
| **Responsive design**           | A two-column editorial layout on desktop collapses into a single column on small screens (≤ 700px).                                                                                                     |
| **Animated transitions**        | Quotes fade up into view and cross-fade on change for a calm, reading-friendly experience.                                                                                                              |

---

## Screenshots & Layout

The interface is built like a literary "daily wisdom edition" masthead:

- **Header** — the `QuoteX` wordmark and an issue label ("Daily wisdom edition").
- **Main / Quote stage (left)** — the category tag, a large opening quotation mark, the quote text (Playfair Display serif), and the author attribution row (name + bio).
- **Sidebar (right)** — the _New Quote_ button, category filter pills, share controls (Copy / Twitter), and the explored counter.
- **Footer** — a tagline and the progress bar that reflects how much of the active set you have seen.

---

## Tech Stack

- **HTML5** — semantic structure (`header`, `main`, `section`, `aside`, `footer`).
- **CSS3** — custom properties (design tokens), CSS Grid, keyframe animations, and a mobile media query. Google Fonts (Playfair Display + DM Sans) and Font Awesome icons are loaded via CDN.
- **Vanilla JavaScript (ES6+)** — no frameworks, no build step, no dependencies. Uses `const`/`let`, arrow functions, template literals, `Set`, the Clipboard API, and the Service Worker API.
- **PWA primitives** — a web app manifest (`manifest.webmanifest`) and a service worker (`sw.js`) for installability and offline use.

No backend, no database, and no network calls are made for the core experience (only the optional CDN font/icon assets and the Twitter share link).

---

## Project Structure

```
QuoteX/
├── index.html            # Markup + SEO meta (OG/Twitter/JSON-LD), manifest link, masthead, quote stage, sidebar, footer, toast
├── style.css             # All styling: design tokens, layout, typography, animations, responsive rules
├── script.js             # Behavior: quote data, selection logic, filtering, sharing, UI updates, service-worker registration
├── manifest.webmanifest  # PWA manifest: name, icons, standalone display, theme colors
├── sw.js                 # Service worker: app-shell caching for offline support
├── icon.svg              # PWA icon (any purpose)
├── icon-maskable.svg     # PWA icon (maskable purpose)
└── README.md             # This documentation
```

---

## How It Works

### Data Model

All quotes live in a single array constant, `ALL_QUOTES`, in `script.js`. Each entry is a plain object:

```js
{
  text:    'The unexamined life is not worth living.',
  author:  'Socrates',
  bio:     'Greek philosopher, 470–399 BC',
  category: 'Philosophy'
}
```

- `text` — the quotation.
- `author` — the attributed speaker.
- `bio` — a short contextual description shown beneath the name.
- `category` — a theme tag used for filtering and the colored category label.

The collection currently holds **~300 quotes** spanning philosophers (Socrates, Aristotle, Marcus Aurelius, Nietzsche, Lao Tzu, Confucius), poets (Shakespeare, Dickinson, Keats, Shelley), leaders (Mandela, Gandhi, Obama, Churchill, Roosevelt), and traditional proverbs (African, English), among others.

### Quote Selection Logic

The `nextQuote()` function drives display:

1. It resolves the active pool via `getFiltered()` (either `ALL_QUOTES` or a single category).
2. It keeps a `seenIndices` array to remember which quotes in the pool have already been shown this round.
3. When `seenIndices` covers the whole pool, it resets so the cycle can repeat without repeats within a round.
4. It picks a random index that is **not already in `seenIndices`** (guaranteeing no immediate duplicate), pushes it, increments `exploredCount`, and renders.

### Category Filtering

- `CATEGORIES` is built from `['All', ...new Set(ALL_QUOTES.map(q => q.category))]`, so the pill list is generated automatically from the data — add a new category to the data and it appears in the UI with no extra code.
- `buildFilters()` renders a pill per category. Clicking a pill sets `currentCategory`, clears `seenIndices` (so the new pool starts fresh), highlights the active pill, and fetches a new quote from that category.

### Sharing

- **Copy** (`copyBtn`): builds `"<text>" — <author>` and writes it to the clipboard. If the async Clipboard API rejects (e.g. insecure context), it falls back to a temporary `textarea` + `document.execCommand('copy')`. A toast confirms success.
- **Twitter** (`tweetBtn`): URL-encodes the same string and opens `https://twitter.com/intent/tweet?text=...` in a new tab.

### State & UI Feedback

- `currentCategory` — the active filter.
- `filteredQuotes` — the resolved pool.
- `seenIndices` — progress through the current pool (drives the progress bar).
- `exploredCount` — total quotes shown this session (the sidebar counter).
- `currentQuote` — the currently displayed quote object, used by the share buttons.

`renderQuote()` applies a brief opacity fade-out, swaps the text/category/author/bio after 200 ms, re-triggers the entrance animation, updates the counter and progress bar, then fades back in.

---

## Getting Started

There is **no build step and no installation**.

1. Clone or download this repository.
2. Open the `QuoteX` folder.
3. Double-click `index.html` (or open it in your preferred browser).

> For the clipboard copy fallback and consistent behavior, opening the file directly works, but serving it over a local server (e.g. `python3 -m http.server`) is recommended so the page runs in a secure context.

---

## Customizing the Quotes

Editing the content requires no code changes beyond the data array:

1. Open `script.js`.
2. Add or edit objects in `ALL_QUOTES`:

   ```js
   {
     text:    'Your new quotation here.',
     author:  'Author Name',
     bio:     'Short context about the author',
     category: 'YourCategory'
   }
   ```

3. Save and refresh the browser. New categories automatically appear as filter pills; the counter and progress bar rescale to the new totals.

To change the visual theme, edit the CSS custom properties at the top of `style.css` (`:root` block) — `--ink`, `--cream`, `--accent`, `--accent-light`, `--muted`, and `--rule`.

---

## Design & Accessibility

- **Typography-first**: serif display type (Playfair Display) for quotes and a clean sans (DM Sans) for UI, evoking a print "wisdom edition."
- **Responsive**: single-column layout under 700px keeps quotes readable on phones.
- **Reduced motion**: the entrance/transition animations are short and subtle; they can be disabled by wrapping the keyframes in a `prefers-reduced-motion` media query if desired.
- **Iconography**: Font Awesome is used for the refresh icon; icons carry `aria-hidden` and the buttons have text labels for screen readers.

---

## Progressive Web App (PWA)

QuoteX is installable and works offline thanks to two additions:

- **Web App Manifest** (`manifest.webmanifest`) — defines the app name, `standalone` display mode, theme/background colors, start URL, and icons (`icon.svg` for general use, `icon-maskable.svg` for maskable/safe-zone use).
- **Service Worker** (`sw.js`) — registered in `script.js` on `window.load`. It precaches the app shell (`index.html`, `style.css`, `script.js`, manifest, and icons) on install, cleans up old caches on activate, and serves a cache-first / network-fallback strategy on `fetch`, falling back to `index.html` when offline.

### Requirements to run as a PWA

1. **Serve over HTTPS or `localhost`** — service workers do not register from `file://`. Use a local server, e.g.:

   ```bash
   python3 -m http.server 8000
   ```

   then open `http://localhost:8000`.
2. **Icons** — the SVG icons satisfy most modern browsers. For maximum install compatibility on all platforms, add **192px and 512px PNG** icons and list them in the manifest's `icons` array.

The core experience (quotes, filtering, UI) is fully functional offline once cached. External CDN assets (Google Fonts, Font Awesome) load over the network and gracefully degrade to system fonts/fallback icons when offline.

## Search Engine Optimization (SEO)

The page is SEO-ready out of the box via meta tags and structured data in `index.html`:

- **Standard meta** — `description`, `keywords`, `author`, `robots`, `theme-color`, and a `canonical` link.
- **Open Graph** — `og:type`, `og:title`, `og:description`, `og:site_name`, `og:url`, `og:image` for rich Facebook/Discord/LinkedIn previews.
- **Twitter Card** — `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image` for share previews on X.
- **Structured data** — a JSON-LD `WebApplication` block describing the app for search engines.

> **Before deploying**, replace the placeholder `https://quotex.example.com/` URLs (canonical, OG, Twitter image) in `index.html` with your real domain, and host a real `og-image.png` (1200×630 recommended). Note that quotes are injected by JavaScript, so only the first static quote in the HTML is crawler-visible; for full quote indexing, add server-side rendering or a sitemap/prerender.

## Browser Support

- Modern evergreen browsers (Chrome, Edge, Firefox, Safari) for the Clipboard API and CSS Grid.
- Older browsers still get copy functionality via the `execCommand` fallback, though the visual fidelity of web fonts/icons may vary.

---

## License

This project is provided as-is for learning and personal use. Quote texts are attributed to their respective authors and are included for educational and inspirational purposes.

---

_Designed and built by Sakyi._
