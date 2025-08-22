# Folk Art Platform - Backend

Backend API for the Folk Art & Culture Platform built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Artist registration and profiles
- Artwork upload and management
- RESTful API endpoints
- MongoDB integration with Mongoose
- Password hashing with bcrypt

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/folk-art-platform
JWT_SECRET=your-super-secret-jwt-key-for-hackathon
PORT=5000
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
npm run dev
```

## API Endpoints

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

## Seeding Data

To populate the database with sample data:

```bash
node seeder.js
```

This will create sample artists and artworks for demonstration purposes.

## Sample Users

- **rajesh@folkart.com** / password123 (Potter)
- **meera@folkart.com** / password123 (Weaver)
- **amit@folkart.com** / password123 (Painter)
- **priya@folkart.com** / password123 (Jewelry Maker)
