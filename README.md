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
VITE_TMDB_AUTH_KEY=your_tmdb_bearer_token_here
```

**How to get your TMDB API Key:**
1. Sign up at [TMDB](https://www.themoviedb.org/signup)
2. Go to Settings → API
3. Request an API Key
4. Use the **Bearer Token** (not the API Key v3)

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

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

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

The build output can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

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

### Service Layer (`service/processData.ts`)

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
- Verify `.env` file exists with correct `VITE_TMDB_AUTH_KEY`
- Check browser console for API errors
- Ensure Bearer token (not API Key) is used
- Restart dev server after adding environment variables

**Issue: SVG icons not displaying**
- Verify `vite-plugin-svgr` is installed
- Check import syntax uses `?react` suffix
- Ensure SVG files exist in `assets/icons/`

**Issue: Images not loading**
- Check TMDB API response in browser console
- Verify image paths use correct TMDB CDN URL
- Confirm `backdrop_path` or `poster_path` exists in API response

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
