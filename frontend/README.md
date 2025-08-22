# Folk Art Platform - Frontend

A beautiful and modern React frontend for the Folk Art & Culture Platform built with Material UI and React Router.

## Features

- 🎨 **Beautiful UI/UX** - Modern Material UI design with warm, earthy colors
- 🔐 **Authentication** - User registration, login, and JWT-based authentication
- 👨‍🎨 **Artist Profiles** - Dedicated artist registration and profile pages
- 🖼️ **Artwork Gallery** - Responsive grid layout with search and filtering
- 📤 **Artwork Upload** - Comprehensive form for artists to submit their work
- 📱 **Responsive Design** - Mobile-first approach with Material UI breakpoints
- 🚀 **Fast Performance** - Built with Vite for optimal development experience

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Material UI 5** - Beautiful, accessible UI components
- **React Router 6** - Client-side routing with protected routes
- **Axios** - HTTP client for API communication
- **Vite** - Fast build tool and development server

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with authentication
│   ├── ArtCard.jsx     # Artwork display card
│   └── ProtectedRoute.jsx # Route protection component
├── pages/              # Page components
│   ├── LandingPage.jsx # Homepage with hero section
│   ├── LoginPage.jsx   # User authentication
│   ├── RegisterPage.js # User registration
│   ├── HomePage.jsx    # Artwork gallery
│   ├── UploadPage.jsx  # Artwork upload form
│   └── ArtistProfilePage.jsx # Artist profile display
├── context/            # React context providers
│   └── AuthContext.jsx # Authentication state management
├── utils/              # Utility functions
├── App.jsx             # Main app component with routing
└── main.jsx           # React entry point
```

## Pages

### Landing Page (`/`)
- Hero section with call-to-action buttons
- Feature highlights
- Beautiful gradient background
- Responsive design

### Login (`/login`)
- Email and password authentication
- Form validation
- Demo account credentials
- Error handling

### Register (`/register`)
- User registration form
- Optional artist profile setup
- Password confirmation
- Form validation

### Home/Gallery (`/home`)
- Artwork grid display
- Search functionality
- Category filtering
- Responsive card layout

### Upload (`/upload`)
- Artwork submission form
- Material and tag management
- Category selection
- Artist-only access

### Artist Profile (`/artist/:id`)
- Artist information display
- Artwork showcase
- Profile statistics
- Contact section

## Components

### Navbar
- Responsive navigation
- Authentication-aware menu
- Mobile-friendly design
- Artist-specific options

### ArtCard
- Artwork display card
- Favorite functionality
- Artist information
- Hover effects

### ProtectedRoute
- Route protection
- Authentication checks
- Redirect handling

## Styling

The app uses a custom Material UI theme with:
- **Primary Colors**: Warm browns (#8B4513, #D2691E)
- **Background**: Soft cream (#FFF8DC)
- **Typography**: Roboto font family
- **Components**: Custom border radius and shadows

## API Integration

- **Base URL**: Configured via Vite proxy
- **Authentication**: JWT tokens in Authorization header
- **Error Handling**: Comprehensive error states and user feedback
- **Loading States**: Loading indicators for better UX

## Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Material UI responsive breakpoints
- **Grid System**: Flexible grid layout
- **Touch Friendly**: Optimized for touch interactions

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables
The app is configured to proxy API calls to `http://localhost:5000` (backend).

### Code Style
- Functional components with hooks
- Consistent naming conventions
- Proper error handling
- Accessibility considerations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Responsive image handling
- **Bundle Optimization**: Vite build optimization

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Test on multiple devices
4. Ensure accessibility compliance
5. Update documentation as needed

## License

MIT License - see LICENSE file for details
