const mongoose = require('mongoose');
const User = require('./models/User');
const Artwork = require('./models/Artwork');
const bcrypt = require('bcryptjs');

// Sample data
const sampleUsers = [
  {
    username: 'rajesh_potter',
    email: 'rajesh@folkart.com',
    password: 'password123',
    isArtist: true,
    artistName: 'Rajesh Kumar',
    bio: 'Traditional potter from Rajasthan, specializing in blue pottery and terracotta art.',
    location: 'Jaipur, Rajasthan'
  },
  {
    username: 'meera_weaver',
    email: 'meera@folkart.com',
    password: 'password123',
    isArtist: true,
    artistName: 'Meera Devi',
    bio: 'Master weaver creating beautiful handloom textiles and traditional sarees.',
    location: 'Varanasi, Uttar Pradesh'
  },
  {
    username: 'amit_painter',
    email: 'amit@folkart.com',
    password: 'password123',
    isArtist: true,
    artistName: 'Amit Singh',
    bio: 'Contemporary folk painter blending traditional motifs with modern themes.',
    location: 'Bhopal, Madhya Pradesh'
  },
  {
    username: 'priya_jewelry',
    email: 'priya@folkart.com',
    password: 'password123',
    isArtist: true,
    artistName: 'Priya Sharma',
    bio: 'Artisan creating traditional tribal jewelry using ancient techniques.',
    location: 'Jodhpur, Rajasthan'
  }
];

const sampleArtworks = [
  {
    title: 'Blue Pottery Vase',
    description: 'Handcrafted blue pottery vase with traditional Rajasthani motifs. Made using age-old techniques passed down through generations.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
    category: 'Pottery',
    materials: ['Clay', 'Cobalt Oxide', 'Quartz'],
    yearCreated: 2023,
    price: 2500,
    isForSale: true,
    tags: ['Traditional', 'Rajasthan', 'Blue Pottery', 'Handcrafted']
  },
  {
    title: 'Banarasi Silk Saree',
    description: 'Exquisite handwoven Banarasi silk saree with intricate zari work and traditional patterns.',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop',
    category: 'Textile',
    materials: ['Silk', 'Zari', 'Gold Thread'],
    yearCreated: 2023,
    price: 15000,
    isForSale: true,
    tags: ['Banarasi', 'Silk', 'Handwoven', 'Traditional']
  },
  {
    title: 'Gond Art Painting',
    description: 'Vibrant Gond tribal art painting depicting village life and nature spirits.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop',
    category: 'Painting',
    materials: ['Paper', 'Natural Colors', 'Bamboo Pen'],
    yearCreated: 2023,
    price: 8000,
    isForSale: true,
    tags: ['Gond Art', 'Tribal', 'Folk Painting', 'Nature']
  },
  {
    title: 'Silver Tribal Necklace',
    description: 'Handcrafted silver tribal necklace with traditional designs and semi-precious stones.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    category: 'Jewelry',
    materials: ['Silver', 'Semi-precious Stones', 'Copper'],
    yearCreated: 2023,
    price: 12000,
    isForSale: true,
    tags: ['Tribal', 'Silver', 'Handcrafted', 'Traditional']
  },
  {
    title: 'Terracotta Wall Hanging',
    description: 'Beautiful terracotta wall hanging with relief work depicting rural scenes.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
    category: 'Sculpture',
    materials: ['Terracotta', 'Clay'],
    yearCreated: 2023,
    price: 3500,
    isForSale: true,
    tags: ['Terracotta', 'Wall Art', 'Rural', 'Handcrafted']
  }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/folk-art-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Artwork.deleteMany({});
    
    console.log('Cleared existing data');
    
    // Create users
    const createdUsers = [];
    for (const userData of sampleUsers) {
      const user = new User(userData);
      await user.save();
      createdUsers.push(user);
      console.log(`Created user: ${user.username}`);
    }
    
    // Create artworks and assign to artists
    for (let i = 0; i < sampleArtworks.length; i++) {
      const artworkData = sampleArtworks[i];
      const artist = createdUsers[i % createdUsers.length]; // Distribute artworks among artists
      
      const artwork = new Artwork({
        ...artworkData,
        artist: artist._id
      });
      
      await artwork.save();
      console.log(`Created artwork: ${artwork.title}`);
    }
    
    console.log('Database seeded successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
