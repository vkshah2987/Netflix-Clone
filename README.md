# 🎬 Netflix Clone

A modern Netflix clone built with React, TypeScript, and Vite, featuring a responsive UI that replicates the Netflix experience. The application integrates with The Movie Database (TMDB) API to fetch and display real movie and TV show data.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-cyan)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Components Overview](#components-overview)
- [API Integration](#api-integration)
- [Styling](#styling)

## ✨ Features

- **Hero Section**: Full-width banner with featured content, play button, and more info action
- **Content Rows**: Horizontally scrollable card rows displaying different categories
- **Ranked Cards**: Top 10 lists with custom numbered SVG overlays
- **Movie & TV Show Cards**: Dynamic cards with poster images and titles
- **Responsive Design**: Fully responsive using viewport-based units (vw)
- **TMDB API Integration**: Real-time data fetching from The Movie Database
- **Multiple Categories**: Support for various content categories:
  - Top 10 Shows/Movies in India
  - Popular TV Shows & Movies
  - Crime TV Shows
  - Now Playing Movies
  - Airing Today TV Shows
- **SVG Icon System**: Custom SVG icons imported as React components
- **Footer**: Netflix-style footer with social links and information

## 🛠 Tech Stack

### Core Technologies
- **React 19.1.1** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.1.7** - Build tool and dev server
- **React Router DOM 7.9.4** - Client-side routing

### Styling
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **tailwind-scrollbar-hide** - Hide scrollbars while maintaining functionality
- **Custom CSS** - Dark theme and Netflix-specific styles

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **vite-plugin-svgr** - Import SVG files as React components
- **@svgr/webpack** - SVG to React component transformation

## 📁 Project Structure

```
netflix-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG icons (rank numbers, social icons, buttons)
│   │   ├── img/            # Static images
│   │   └── refFiles/       # Reference images (hero background, logo)
│   ├── components/
│   │   ├── Card/           # Standard content card component
│   │   ├── CardBanner/     # Horizontal scrollable card row
│   │   ├── Footer/         # Footer with links and social icons
│   │   ├── HeroSection/    # Main hero banner component
│   │   ├── Navbar/         # Navigation bar (global)
│   │   └── RankCard/       # Ranked card with number overlay
│   ├── pages/
│   │   └── MainPage/       # Main landing page
│   ├── service/
│   │   ├── processData.ts  # TMDB API data fetching hooks
│   │   └── RankIcon.tsx    # Rank icon mapping utility
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
│   └── svg.d.ts            # TypeScript declarations for SVG imports
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **TMDB API Key** - Get one from [The Movie Database](https://www.themoviedb.org/settings/api)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory and add your TMDB API authentication token:

```env
# TMDB API Token (Server-side only - used by Netlify Functions)
# This token is NOT exposed to the browser - it's only used in Netlify Functions
TMDB_V4_TOKEN=your_tmdb_bearer_token_here
```

**How to get your TMDB API Key:**
1. Sign up at [TMDB](https://www.themoviedb.org/signup)
2. Go to Settings → API
3. Request an API Key
4. Use the **Bearer Token (v4 Read Access Token)** - not the API Key v3

**Important Security Note:**
- The token is now kept **server-side only** in Netlify Functions
- No API token is exposed in the client-side bundle
- All TMDB requests are proxied through `/api/tmdb/*`
- This eliminates CORS issues and protects your API credentials

### Netlify Configuration

The project includes:
- **`netlify.toml`** - Routes `/api/tmdb/*` to the serverless function
- **`netlify/functions/tmdb.ts`** - Proxy function that handles TMDB API requests
- **`public/_headers`** - Ensures correct MIME types for JavaScript files

### TypeScript Configuration

The project uses three TypeScript configuration files:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js environment settings

### Vite Configuration

The `vite.config.ts` includes:
- **React plugin** for JSX transformation
- **SVGR plugin** for importing SVG as React components
- **Tailwind CSS plugin** for processing styles

## 🏃 Running the Application

### Development Mode

The project now uses **Netlify Dev** for local development to match the production environment:

```bash
npm run dev
```

This command runs `netlify dev` which:
- Starts the Vite development server
- Runs Netlify Functions locally
- Routes `/api/tmdb/*` requests to the proxy function
- Loads environment variables from `.env`
- Serves everything at `http://localhost:8888` (default Netlify Dev port)

**Alternative: Run Vite directly (requires separate Netlify Dev instance)**
```bash
npm run dev:vite
```

### Preview Production Build

Build and preview the production version:

```bash
npm run build
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🏗 Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
1. Type-check the TypeScript code
2. Bundle and minify the application
3. Output files to the `dist/` directory

### Deploying to Netlify

1. **Set up your Netlify site** (if not already done):
   ```bash
   netlify init
   ```

2. **Configure environment variables in Netlify**:
   - Go to your site in the Netlify dashboard
   - Navigate to: Site settings → Environment variables
   - Add: `TMDB_V4_TOKEN=<your_bearer_token>`

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

   Or connect your Git repository for automatic deployments.

4. **Verify the deployment**:
   - Visit your deployed site
   - Check that API requests to `/api/tmdb/*` return 200 status
   - Confirm content loads without CORS errors
   - Test on iOS Safari to verify DNS/compatibility issues are resolved

The build output includes:
- Static assets in `dist/`
- Netlify Functions in `netlify/functions/`
- Proper routing via `netlify.toml`

## 🧩 Components Overview

### App.tsx
- Root component with React Router setup
- Renders global `Navbar` component
- Contains route definitions

### Navbar
- Global navigation bar
- Currently displays: "Hello" (placeholder)
- Position: Fixed at the top across all pages

### HeroSection
- Full-width hero banner
- Features:
  - Background image with gradient overlay
  - Logo and content description
  - Play and More Info buttons with SVG icons
  - Age rating badge (U/A 13+)

### CardBanner
- Container for horizontal scrollable card rows
- Props: `rank`, `data` (type, category, title)
- Fetches data from TMDB API
- Displays up to 10 items per row
- Conditionally renders `RankCard` or `Card` based on rank prop

### Card
- Standard content card for movies/TV shows
- Props: `id`, `image`, `title`, `name`, `className`
- Displays poster/backdrop image with title overlay
- Image source: TMDB image CDN

### RankCard
- Special card with rank number overlay
- Props: `id`, `rank`, `image`, `title`, `iconClass`
- Uses `RankIcon` component for numbered badges
- Split layout: 49% rank icon, 51% poster image

### RankIcon
- Maps rank numbers (1-10) to custom SVG icons
- Dynamic styling with Tailwind classes
- Located in `service/RankIcon.tsx`

### Footer
- Netflix-style footer
- Features:
  - Social media icons (Facebook, Instagram, Twitter, YouTube)
  - Information links grid
  - Copyright notice

### MainPage
- Main landing page component
- Renders `Hero` section
- Displays multiple `CardBanner` components with different categories
- Negative margin (`mt-[-19vw]`) to overlap hero section

## 🔌 API Integration

### Architecture Overview

All TMDB API requests are now proxied through a **Netlify Function** for security and reliability:

```
Client → /api/tmdb/* → Netlify Function → api.themoviedb.org
```

**Benefits:**
- ✅ No API token exposed in browser
- ✅ No CORS issues
- ✅ No iOS DNS/compatibility problems
- ✅ Works identically in local dev and production
- ✅ Token stays server-side only

### Service Layer (`service/processData.ts`)

All API calls now use the proxy endpoint `/api/tmdb/*` instead of calling TMDB directly.

#### `getData(type, category)`
Custom hook for fetching content from TMDB API.

**Parameters:**
- `type`: `'movie'` or `'tv'`
- `category`: API endpoint category (e.g., `'popular'`, `'top_rated'`, `'now_playing'`)

**Returns:**
- `bindingData`: Array of movie/TV show objects
- `loading`: Boolean loading state
- `error`: Error object if request fails

**Example Usage:**
```typescript
const { bindingData, loading, error } = getData('movie', 'popular');
```

**Implementation:**
```typescript
// Requests are made to /api/tmdb/* (proxied to TMDB)
fetch(`/api/tmdb/movie/popular?language=en-US&page=1`, {
  headers: { 'accept': 'application/json' }
});
// No Authorization header needed - handled by the Netlify Function
```

#### `getCardImage(type, id)`
Custom hook for fetching additional images for a specific item.

**Parameters:**
- `type`: `'movie'` or `'tv'`
- `id`: TMDB content ID

**Returns:**
- `image`: Image object
- `loading`: Boolean loading state
- `error`: Error object if request fails

### TMDB API Endpoints Used

| Category | Type | Description |
|----------|------|-------------|
| `popular` | movie/tv | Popular content |
| `top_rated` | movie/tv | Top rated content |
| `now_playing` | movie | Currently in theaters |
| `airing_today` | tv | Airing today |

## 🎨 Styling

### Tailwind CSS
- **Version**: 4.1.14 with Vite plugin
- **Configuration**: `tailwind.config.js`
- **Content paths**: Scans all HTML, JS, TS, JSX, TSX files

### Global Styles (`index.css`)
```css
- Background: #141414 (Netflix dark theme)
- Font size: 0.75vw (responsive to viewport)
- Custom h2 styling
```

### Responsive Design Strategy
- Uses viewport width (`vw`) units for fluid scaling
- Viewport height (`vh`) for full-screen sections
- Mobile-first approach with Tailwind breakpoints
- Horizontal scrolling for card rows

### SVG Icons
- Imported as React components using `?react` suffix
- Styled with Tailwind classes
- Customizable size and color

## 🔧 Troubleshooting

### Common Issues

**Issue: Navbar not visible**
- Check if component is rendering (inspect DOM)
- Add temporary inline styles for debugging
- Ensure Hero section isn't covering it with absolute positioning

**Issue: API data not loading**
- Verify `.env` file exists with correct `TMDB_V4_TOKEN` (not `VITE_TMDB_AUTH_KEY`)
- Ensure you're running `npm run dev` (netlify dev), not `vite` directly
- Check browser console and network tab for API errors at `/api/tmdb/*`
- Verify Bearer token (v4 Read Access Token) is used, not API Key v3
- Restart dev server after adding/changing environment variables

**Issue: "TMDB_V4_TOKEN not configured" error**
- Check that `.env` contains `TMDB_V4_TOKEN=<your_token>`
- Verify the file is in the project root (same level as `package.json`)
- Restart `netlify dev` after creating/editing `.env`

**Issue: 502 Bad Gateway or proxy errors**
- Check that Netlify CLI is installed: `npm list netlify-cli`
- Ensure `netlify/functions/tmdb.ts` exists and has no syntax errors
- Verify `netlify.toml` redirects are configured correctly
- Check Netlify Dev logs in terminal for function errors

**Issue: SVG icons not displaying**
- Verify `vite-plugin-svgr` is installed
- Check import syntax uses `?react` suffix
- Ensure SVG files exist in `assets/icons/`

**Issue: Images not loading**
- Check TMDB API response in browser console
- Verify image paths use correct TMDB CDN URL
- Confirm `backdrop_path` or `poster_path` exists in API response

**Issue: Works locally but fails on Netlify deployment**
- Verify `TMDB_V4_TOKEN` is set in Netlify dashboard environment variables
- Check Netlify Function logs for errors
- Ensure build command is `npm run build` and publish directory is `dist`
- Verify `netlify.toml` is committed to Git

### Testing the Proxy

**Local testing:**
```bash
# Start Netlify Dev
npm run dev

# In another terminal, test the proxy
curl http://localhost:8888/api/tmdb/configuration
```

**Production testing:**
```bash
# After deployment
curl https://your-site.netlify.app/api/tmdb/configuration
```

Both should return JSON with status 200.

## ✅ Verification Checklist

### Local Development (using Netlify Dev)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   - Create `.env` file in project root
   - Add: `TMDB_V4_TOKEN=<your_bearer_token>`

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Verify setup:**
   - App opens at `http://localhost:8888`
   - Open browser DevTools → Network tab
   - Confirm requests to `/api/tmdb/...` return 200 status
   - Check that data loads and UI renders properly
   - Verify no CORS errors in console

### Production (Netlify)

1. **Configure Netlify environment:**
   - Add `TMDB_V4_TOKEN` in: Site settings → Environment variables

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```
   Or push to connected Git repository

3. **Verify deployment:**
   - Visit your live site on desktop and mobile
   - Test on iOS Safari specifically
   - Confirm `/api/tmdb/*` endpoints return 200
   - Verify content loads without infinite spinner
   - Check browser console for errors

4. **CLI sanity check:**
   ```bash
   curl -v "https://your-site.netlify.app/api/tmdb/configuration"
   ```
   Should return JSON configuration data with 200 status

## 📝 Development Notes

### Code Style
- TypeScript strict mode enabled
- Functional components with React hooks
- Props interfaces defined for all components
- ESLint configuration with React hooks plugin

### Best Practices Implemented
- Environment variable usage for API keys
- Custom hooks for data fetching
- Component composition and reusability
- SVG as components for better control
- Type safety with TypeScript interfaces

### Future Enhancements
- [ ] Complete Navbar implementation
- [ ] Add authentication
- [ ] Implement video player
- [ ] Add search functionality
- [ ] Create detail pages for movies/shows
- [ ] Add user profiles and preferences
- [ ] Implement responsive mobile menu
- [ ] Add loading skeletons
- [ ] Error boundary implementation
- [ ] Add unit and integration tests

## 📄 License

This project is for educational purposes only. Netflix and The Movie Database (TMDB) are trademarks of their respective owners.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- Netflix for the design inspiration
- React and Vite teams for excellent tooling

---

**Note**: This is a clone project created for learning purposes. It is not affiliated with Netflix, Inc.
