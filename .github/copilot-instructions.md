# Copilot Instructions - Pokemon Memory Card Game

## Project Overview
This is a React-based memory card game using Pokemon sprites from the PokeAPI. The goal is to click on Pokemon cards without clicking the same card twice. The score increases with each new card clicked, and cards shuffle after each click.

## Architecture & Structure

### Key Components
- **Main Entry**: `src/main.jsx` - Currently incomplete, missing `<App />` component in StrictMode
- **Core Game**: `src/Board.jsx` - Empty file that should contain the main game logic
- **Current App**: `src/assets/App.jsx` - Default Vite template, needs to be replaced with memory game

### Critical Implementation Requirements
1. **Pokemon API Integration**: Use `https://pokeapi.co/` with `sprite` attribute for card images
2. **Game Logic**: Track clicked cards to prevent duplicates and increment score
3. **Card Shuffling**: Randomize card order after each click
4. **Scoreboard**: Display current score and best score (highest achieved)
5. **Mount Behavior**: Shuffle cards when component first mounts

## Development Workflow

### Commands
```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # ESLint checking
npm run preview    # Preview production build
```

### File Structure Conventions
- Components in `src/` (Board.jsx should be main game component)
- Assets in `src/assets/` (App.jsx currently misplaced here)
- Styles: Component-specific CSS files (Board.css exists but empty)
- Public assets in `public/` (memory.webp icon available)

## Specific Patterns & Conventions

### CSS Architecture
- **Dark Theme First**: `index.css` uses dark color scheme with light mode media query
- **Custom Properties**: CSS variables in `:root` for consistent theming
- **Component Scoping**: Dedicated CSS files per component (e.g., `Board.css`)

### React Patterns
- **ES Modules**: All files use `import/export` syntax
- **Function Components**: Use modern React patterns with hooks
- **StrictMode**: Enabled in main.jsx for development checks

### ESLint Configuration
- Uses new flat config format (`eslint.config.js`)
- React Hooks plugin with recommended rules
- Custom rule: `no-unused-vars` ignores UPPER_CASE variables
- Ignores `dist/` folder

## Critical Fixes Needed
1. **main.jsx**: Add `<App />` component inside StrictMode
2. **App.jsx**: Move from `src/assets/` to `src/` and implement memory game
3. **Board.jsx**: Implement main game component with Pokemon API integration
4. **Board.css**: Add styles for card grid layout and game UI

## API Integration Notes
- Use PokeAPI endpoints for Pokemon data and sprites
- Handle async data fetching for card generation
- Consider caching strategy for Pokemon images
- Implement error handling for API failures

## State Management
- Track clicked Pokemon IDs to prevent duplicate clicks
- Maintain current score and best score in localStorage
- Handle game reset functionality when duplicate is clicked