# YouTube Clone

A modern YouTube clone built with React, TypeScript, and Vite. This application replicates core YouTube functionality including video browsing, search, and video playback.

## 🚀 Features

- **Video Browsing**: Browse popular videos from YouTube's API
- **Search Functionality**: Search for videos with real-time suggestions
- **Search Caching**: Intelligent caching of search results to reduce API calls
- **Video Playback**: Watch videos in an embedded player
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Sidebar Navigation**: Collapsible sidebar with navigation links
- **Category Filters**: Filter buttons for different content categories (All, Gaming, Cricket, Live)

## 🛠️ Tech Stack

- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Redux Toolkit 2.8.2** - State management
- **React Router DOM 7.6.2** - Client-side routing
- **Tailwind CSS 4.1.7** - Utility-first CSS framework

## 📁 Project Structure

```
youtube/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── body.tsx        # Main layout component
│   │   ├── head.tsx        # Header with search functionality
│   │   ├── sidebar.tsx     # Navigation sidebar
│   │   ├── maincontainer.tsx  # Main content container
│   │   ├── videocontainer.tsx # Popular videos container
│   │   ├── videos.tsx      # Search results component
│   │   ├── videocard.tsx   # Video card component
│   │   ├── watchpage.tsx   # Video watch page
│   │   ├── buttonlist.tsx  # Category filter buttons
│   │   └── button.tsx      # Reusable button component
│   ├── utilities/          # Redux store and slices
│   │   ├── store.tsx       # Redux store configuration
│   │   ├── appslice.tsx    # App state (menu toggle, loading)
│   │   ├── searchSlice.tsx # Search cache management
│   │   └── constants.tsx   # API endpoints and keys
│   ├── App.tsx             # Root component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Key Components

### Body Component
Main layout component that wraps the entire application, containing the header and sidebar.

### Head Component
Header component featuring:
- YouTube logo
- Hamburger menu toggle
- Search bar with real-time suggestions
- Debounced search API calls (200ms delay)
- Search result caching using Redux

### Sidebar Component
Collapsible navigation sidebar with:
- Home link
- Content categories (Shorts, Videos, Live)
- Subscription section
- Watch Later section

### Maincontainer Component
Conditionally renders either:
- Popular videos with category filters (default)
- Search results when a query is present

### Videocontainer Component
Fetches and displays popular videos from YouTube API:
- Shows featured video (first video with special styling)
- Grid layout of video cards
- Links to watch page

### Videos Component
Displays search results:
- Fetches videos based on search query
- Loading state indicator
- Responsive grid layout
- Click to navigate to watch page

### Watchpage Component
Video playback page:
- Embedded YouTube iframe player
- Automatically hides sidebar when viewing
- Extracts video ID from URL parameters

## 🔄 State Management

The application uses Redux Toolkit for state management with two main slices:

### App Slice
Manages application-level state:
- `ismenuopen`: Controls sidebar visibility
- `isloading`: Loading state indicator

### Search Slice
Manages search functionality:
- Caches search suggestions to minimize API calls
- Stores search results by query string

## 🛣️ Routing

The application uses React Router with the following routes:

- `/` - Home page (shows popular videos or search results)
- `/watch?v={videoId}` - Video watch page

## 🔌 API Integration

The application integrates with YouTube Data API v3:

- **Popular Videos API**: Fetches trending videos
  - Endpoint: `youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular`
  - Region: IN (India)
  - Max Results: 100

- **Search API**: Searches for videos and provides suggestions
  - Endpoint: `youtube/v3/search?part=snippet&type=video`
  - Max Results: 10

**Note**: The API key is currently hardcoded in `constants.tsx`. For production, move this to environment variables.

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd youtube
```

2. Install dependencies:
```bash
npm install
```

3. Configure API Key:
   - Get a YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/)
   - Update the `google_api_key` in `src/utilities/constants.tsx`
   - Or create a `.env` file and update the code to use environment variables

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses Tailwind CSS for styling:
- Utility-first CSS framework
- Responsive design with mobile-first approach
- Custom styling in `App.css` and `index.css`

## 🔒 Security Notes

⚠️ **Important**: The YouTube API key is currently exposed in the source code. For production:

1. Move the API key to environment variables
2. Create a `.env` file:
   ```
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```
3. Update `constants.tsx` to use `import.meta.env.VITE_YOUTUBE_API_KEY`
4. Add `.env` to `.gitignore`

## 🚧 Future Enhancements

Potential improvements:
- User authentication
- Playlist functionality
- Comments section
- Video recommendations
- Channel pages
- Video history
- Like/dislike functionality
- Subscribe to channels

## 📄 License

ISC

## 👤 Author

[Your Name]

---

Built with ❤️ using React, TypeScript, and Vite
