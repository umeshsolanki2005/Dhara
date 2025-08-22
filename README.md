# 🎨 Folk Art & Culture Platform

A comprehensive web platform for preserving, showcasing, and promoting folk art & culture. Built for a 1-day hackathon with modern web technologies.

## ✨ Features

- **User Authentication** - Secure JWT-based login/registration
- **Artist Profiles** - Dedicated artist registration and profiles
- **Artwork Gallery** - Beautiful grid layout with search and filtering
- **Artwork Upload** - Comprehensive form for artists to submit work
- **Responsive Design** - Mobile-first approach with Material UI
- **Modern UI/UX** - Clean, intuitive interface with warm colors

## 🛠 Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT Authentication** with bcrypt password hashing
- **RESTful API** design

### Frontend
- **React 18** with functional components and hooks
- **Material UI 5** for beautiful, accessible components
- **React Router 6** for client-side routing
- **Vite** for fast development and building
- **Axios** for API communication

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or cloud instance)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd folk-art-platform
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example if available)
echo "MONGODB_URI=mongodb://localhost:27017/folk-art-platform
JWT_SECRET=your-super-secret-jwt-key-for-hackathon
PORT=5000" > .env

# Start the server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Seed Sample Data (Optional)
```bash
cd backend
node seeder.js
```

## 📱 Demo Accounts

For testing purposes, you can use these pre-created accounts:

| Email | Password | Role |
|-------|----------|------|
| rajesh@folkart.com | password123 | Potter |
| meera@folkart.com | password123 | Weaver |
| amit@folkart.com | password123 | Painter |
| priya@folkart.com | password123 | Jewelry Maker |

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Artworks
- `GET /api/artworks` - Get all artworks
- `GET /api/artworks/:id` - Get artwork by ID
- `POST /api/artworks/upload` - Upload new artwork (protected)
- `PUT /api/artworks/:id` - Update artwork (protected)
- `DELETE /api/artworks/:id` - Delete artwork (protected)

### Artists
- `GET /api/artists` - Get all artists
- `GET /api/artists/:id` - Get artist profile with artworks
- `GET /api/artists/:id/artworks` - Get artist's artworks

## 📁 Project Structure

```
folk-art-platform/
├── backend/                 # Express.js API server
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API route handlers
│   ├── controllers/        # Business logic
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration files
│   ├── server.js           # Main server file
│   ├── seeder.js           # Sample data seeder
│   └── package.json        # Backend dependencies
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # React entry point
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies
└── README.md               # This file
```

## 🎨 UI Features

- **Warm Color Scheme** - Earthy browns and creams inspired by folk art
- **Responsive Grid** - Adaptive layout for all device sizes
- **Material Design** - Google's Material Design principles
- **Smooth Animations** - Hover effects and transitions
- **Accessibility** - ARIA labels and keyboard navigation

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt for secure password storage
- **Protected Routes** - Authentication-required endpoints
- **Input Validation** - Server-side and client-side validation
- **CORS Configuration** - Secure cross-origin requests

## 📱 Responsive Design

- **Mobile First** - Designed for mobile devices first
- **Breakpoint System** - Material UI responsive breakpoints
- **Touch Friendly** - Optimized for touch interactions
- **Flexible Layout** - Adaptive grid system

## 🚀 Performance Features

- **Code Splitting** - Route-based code splitting
- **Lazy Loading** - Components loaded on demand
- **Optimized Builds** - Vite for fast development and building
- **Image Optimization** - Responsive image handling

## 🧪 Development

### Backend Development
```bash
cd backend
npm run dev          # Start with nodemon
npm start           # Start production server
```

### Frontend Development
```bash
cd frontend
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

### Database
```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017/folk-art-platform

# Seed sample data
cd backend && node seeder.js
```

## 🌟 Hackathon Features

This project was built for a 1-day hackathon with:

- **MVP Focus** - Core functionality over perfection
- **Clean Code** - Well-structured, maintainable code
- **Modern Stack** - Latest technologies and best practices
- **Demo Ready** - Working features for presentation
- **Documentation** - Clear setup and usage instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Material UI** for beautiful components
- **Unsplash** for sample images
- **MongoDB** for database
- **Express.js** for backend framework
- **React** for frontend framework

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ for the Folk Art & Culture Community**
