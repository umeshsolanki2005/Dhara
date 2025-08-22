# 🎨 Dhara - Indian Folk Art Gallery

**Dhara** is a comprehensive folk art gallery website celebrating Indian culture and art. The platform allows artists to showcase their work and users to discover authentic Indian folk art forms.

## ✨ Features

### 🏠 **Landing Page**
- Dynamic "Dhara" title in 9 Indian languages with smooth animations
- Indian folk art background patterns (Madhubani, Warli, Mandala)
- Local artwork showcase with Wikipedia integration
- Cultural theme with warm earthy tones
- Responsive design with Material UI components

### 🔍 **Home Page (After Login)**
- **Search Functionality**: Search artworks by name or artist by name
- **Category Filtering**: Filter by Painting, Sculpture, Textile, Pottery, Jewelry, Other
- **Artwork Grid**: Display artworks with images, titles, artist names, and descriptions
- **Artist Search Results**: Tabbed interface showing artworks vs. artists
- **External Links**: Clickable artwork titles linking to Wikipedia resources

### 👨‍🎨 **Artist Profiles**
- **20 Dummy Indian Artists** with authentic names and locations
- **15+ Artworks per Artist** with detailed information
- **Profile Information**: Bio, location, profile image, artwork count
- **Artwork Gallery**: Grid display of artist's works with external links
- **Navigation**: Back to gallery functionality

### 🎭 **Artwork Categories**
- **Painting**: Madhubani, Warli, Pattachitra, Tanjore, Kalamkari
- **Sculpture**: Stone, metal, clay, traditional Indian forms
- **Textile**: Silk, cotton, embroidery, handloom fabrics
- **Pottery**: Traditional clay work, ceramic art
- **Jewelry**: Gold, silver, gemstone pieces
- **Other**: Mixed media, digital art, woodwork

### 🔐 **Authentication & Navigation**
- **User Registration & Login** with JWT authentication
- **Protected Routes** for authenticated users
- **Responsive Navbar** with Dhara branding
- **User Menu** with profile and upload options
- **Mobile-friendly** navigation

## 🛠️ Technical Stack

### **Frontend**
- **React 18** with Vite build tool
- **Material UI (MUI)** for components and theming
- **React Router** for navigation
- **Custom Theme** with Indian folk art color palette
- **Responsive Design** for all devices

### **Backend** (Ready for Integration)
- **Node.js** with Express framework
- **MongoDB** with Mongoose ODM
- **JWT Authentication** with bcrypt password hashing
- **RESTful API** endpoints
- **File Upload** support with Multer

### **Data Structure**
- **20 Artists** × **15+ Artworks** = **300+ Total Artworks**
- **Comprehensive Metadata**: Title, category, description, year, external links
- **Artist Information**: Name, bio, location, profile image, specialty
- **Helper Functions**: Search, filtering, categorization

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dhara-folk-art-gallery
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application will open with the landing page

### **Backend Setup** (Optional)
1. **Navigate to backend directory**
   ```bash
   cd ../backend
   npm install
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

3. **Start backend server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
dhara-folk-art-gallery/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Navigation component
│   │   │   ├── ArtCard.jsx         # Artwork display card
│   │   │   ├── ArtistCard.jsx      # Artist profile card
│   │   │   ├── Footer.jsx          # Footer component
│   │   │   └── ProtectedRoute.jsx  # Authentication guard
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx     # Homepage for visitors
│   │   │   ├── HomePage.jsx        # Gallery after login
│   │   │   ├── LoginPage.jsx       # User authentication
│   │   │   ├── RegisterPage.jsx    # User registration
│   │   │   ├── ArtistProfilePage.jsx # Individual artist page
│   │   │   └── UploadPage.jsx      # Artwork upload (artists)
│   │   ├── data/
│   │   │   └── artistsData.js      # Comprehensive artwork data
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Authentication state
│   │   ├── theme.js                # Material UI theme
│   │   └── App.jsx                 # Main application
│   └── package.json
├── backend/                         # Express.js backend (ready)
│   ├── models/                      # MongoDB schemas
│   ├── routes/                      # API endpoints
│   ├── middleware/                  # Authentication
│   └── server.js                    # Server entry point
└── README.md
```

## 🎨 Design Features

### **Color Palette**
- **Primary**: Saddle Brown (#8B4513) - Earthy folk art color
- **Secondary**: Gold (#FFD700) - Warm Indian accent
- **Background**: Cornsilk (#FFF8DC) - Warm, welcoming
- **Indian Colors**: Saffron, Maroon, Peacock Blue

### **Typography**
- **Headings**: Noto Serif (serif) for cultural authenticity
- **Body Text**: Poppins (sans-serif) for readability
- **Google Fonts** integration for consistent rendering

### **UI Components**
- **Material UI** components with custom styling
- **Responsive Grid** layouts for all screen sizes
- **Hover Effects** and smooth transitions
- **Card-based** design for artworks and artists

## 🔍 Search & Filter Features

### **Search Functionality**
- **Real-time Search** as you type
- **Artwork Search**: Find by title or artist name
- **Artist Search**: Find by name or bio content
- **Tabbed Results**: Separate views for artworks vs. artists

### **Category Filtering**
- **Dynamic Dropdown** with all artwork categories
- **Instant Filtering** without page reload
- **Category Headers** with artwork counts
- **Responsive Grid** layout for filtered results

## 👥 Artist Profiles

### **Featured Artists**
1. **Meena Iyer** - Madhubani artist from Bihar
2. **Raghavendra Sharma** - Sculptor from Rajasthan
3. **Kavita Reddy** - Textile artist from Karnataka
4. **Arjun Verma** - Pottery artist from Uttar Pradesh
5. **Aditi Joshi** - Contemporary painter from Maharashtra
6. **Vikram Nair** - Jewelry designer from Kerala
7. **Shreya Kapoor** - Mixed media artist from Delhi
8. **Sanjay Bhatia** - Woodwork craftsman from Punjab
9. **Priya Deshmukh** - Mythological painter from Madhya Pradesh
10. **Rohit Kulkarni** - Metal sculptor from Karnataka
11. **Neha Sinha** - Textile designer from West Bengal
12. **Anil Gupta** - Pottery artist from Gujarat
13. **Manisha Rao** - Contemporary artist from Tamil Nadu
14. **Deepak Menon** - Jewelry designer from Kerala
15. **Sunita Pillai** - Handloom artist from Karnataka
16. **Rajesh Kumar** - Stone sculptor from Rajasthan
17. **Alok Patil** - Spiritual painter from Maharashtra
18. **Sneha Banerjee** - Cultural heritage artist from West Bengal
19. **Ajay Chauhan** - Contemporary potter from Uttar Pradesh
20. **Divya Mishra** - Gemstone jewelry designer from Rajasthan

### **Artwork Information**
- **High-quality Images** from Unsplash and public sources
- **Detailed Descriptions** of each piece
- **External Links** to Wikipedia for learning
- **Year Information** for historical context
- **Category Classification** for easy browsing

## 🌐 External Integration

### **Wikipedia Links**
- **Artwork Information**: Direct links to relevant Wikipedia pages
- **Cultural Context**: Learn about art forms and techniques
- **Historical Background**: Understand the significance of each piece
- **Educational Value**: Rich content for art enthusiasts

### **Image Sources**
- **Unsplash**: High-quality, royalty-free images
- **Public Domain**: Accessible artwork representations
- **Responsive Images**: Optimized for all device sizes
- **Fallback Handling**: Graceful degradation for missing images

## 📱 Responsive Design

### **Mobile-First Approach**
- **Responsive Grid**: Adapts to all screen sizes
- **Touch-Friendly**: Optimized for mobile devices
- **Progressive Enhancement**: Enhanced features on larger screens
- **Performance Optimized**: Fast loading on all devices

### **Breakpoint Support**
- **Extra Small**: Mobile phones (xs: 0px+)
- **Small**: Tablets (sm: 600px+)
- **Medium**: Small laptops (md: 900px+)
- **Large**: Desktop (lg: 1200px+)
- **Extra Large**: Large screens (xl: 1536px+)

## 🔐 Authentication System

### **User Management**
- **Registration**: New user account creation
- **Login**: Secure authentication with JWT
- **Protected Routes**: Secure access to gallery features
- **User Profiles**: Personalized experience for logged-in users

### **Security Features**
- **JWT Tokens**: Secure session management
- **Password Hashing**: bcrypt encryption
- **Route Protection**: Authentication middleware
- **Secure Storage**: Local storage for tokens

## 🚀 Future Enhancements

### **Planned Features**
- **Real-time Chat** between artists and buyers
- **Artwork Marketplace** with payment integration
- **Artist Workshops** and live sessions
- **Virtual Gallery Tours** with 3D visualization
- **Mobile App** for iOS and Android
- **Social Media Integration** for sharing
- **Artwork Analytics** for artists
- **Multi-language Support** for international users

### **Technical Improvements**
- **PWA Support** for offline functionality
- **Advanced Search** with filters and sorting
- **Image Optimization** and lazy loading
- **Caching Strategy** for better performance
- **SEO Optimization** for better discoverability

## 🤝 Contributing

We welcome contributions to make Dhara even better! Here's how you can help:

### **Development**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Areas for Contribution**
- **UI/UX Improvements**: Better designs and user experience
- **New Features**: Additional functionality
- **Performance**: Optimization and speed improvements
- **Documentation**: Better guides and examples
- **Testing**: Unit tests and integration tests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Indian Folk Artists**: For preserving and sharing our cultural heritage
- **Material UI Team**: For the excellent component library
- **Unsplash**: For providing beautiful artwork images
- **Wikipedia**: For educational content about art forms
- **Open Source Community**: For the tools and libraries that made this possible

## 📞 Contact

- **Project**: Dhara Folk Art Gallery
- **Purpose**: Celebrating Indian Culture & Art
- **Vision**: Preserving and promoting Indian folk art traditions

---

**Dhara** - Where tradition meets technology, and culture finds its digital home. 🎨🇮🇳✨
