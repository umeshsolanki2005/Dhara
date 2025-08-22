export const artistsData = [
  {
    id: "meena-iyer",
    name: "Meena Iyer",
    bio: "A contemporary Madhubani artist preserving traditional Indian folk styles with modern interpretations. Her work celebrates the rich cultural heritage of Bihar through intricate patterns and vibrant colors.",
    location: "Bihar, India",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "Painting",
    coordinates: { lat: 25.0961, lng: 85.3131 }, // Patna coordinates
    artworks: [
      {
        id: "madhubani-tree-life",
        title: "Madhubani Tree of Life",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Madhubani_art",
        year: "2023",
        description: "Traditional Madhubani depiction of the sacred tree with intricate patterns",
        price: 25000,
        isForSale: true,
        likes: 45,
        comments: 12,
        shares: 8,
        materials: ["Natural dyes", "Handmade paper"],
        tags: ["Madhubani", "Traditional", "Tree of Life"]
      },
      {
        id: "madhubani-peacock",
        title: "Madhubani Peacock",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Madhubani_art",
        year: "2023",
        description: "Vibrant peacock in traditional Madhubani style with geometric patterns",
        price: 18000,
        isForSale: true,
        likes: 38,
        comments: 9,
        shares: 5,
        materials: ["Natural dyes", "Handmade paper"],
        tags: ["Madhubani", "Peacock", "Geometric"]
      },
      {
        id: "madhubani-wedding",
        title: "Wedding Ceremony",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Madhubani_art",
        year: "2022",
        description: "Celebration of traditional Indian wedding rituals in folk art style",
        price: 32000,
        isForSale: true,
        likes: 52,
        comments: 15,
        shares: 12,
        materials: ["Natural dyes", "Handmade paper"],
        tags: ["Madhubani", "Wedding", "Rituals"]
      },
      {
        id: "madhubani-fish",
        title: "Sacred Fish",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Madhubani_art",
        year: "2022",
        description: "Symbolic fish representing fertility and prosperity in Madhubani tradition",
        price: 15000,
        isForSale: true,
        likes: 29,
        comments: 7,
        shares: 4,
        materials: ["Natural dyes", "Handmade paper"],
        tags: ["Madhubani", "Fish", "Symbolic"]
      },
      {
        id: "madhubani-sun",
        title: "Rising Sun",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Madhubani_art",
        year: "2021",
        description: "Sun motif with traditional geometric patterns and bright colors",
        price: 12000,
        isForSale: true,
        likes: 34,
        comments: 8,
        shares: 6,
        materials: ["Natural dyes", "Handmade paper"],
        tags: ["Madhubani", "Sun", "Geometric"]
      }
    ]
  },
  {
    id: "raghavendra-sharma",
    name: "Raghavendra Sharma",
    bio: "Master craftsman specializing in traditional Indian sculptures and stone carvings. His work reflects the ancient techniques passed down through generations of artisans.",
    location: "Rajasthan, India",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "Sculpture",
    coordinates: { lat: 26.9124, lng: 75.7873 }, // Jaipur coordinates
    artworks: [
      {
        id: "stone-elephant",
        title: "Stone Elephant",
        category: "Sculpture",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Indian_sculpture",
        year: "2023",
        description: "Hand-carved stone elephant in traditional Rajasthani style",
        price: 85000,
        isForSale: true,
        likes: 67,
        comments: 18,
        shares: 14,
        materials: ["Sandstone", "Traditional tools"],
        tags: ["Sculpture", "Elephant", "Rajasthani"]
      },
      {
        id: "marble-buddha",
        title: "Marble Buddha",
        category: "Sculpture",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Buddhist_art",
        year: "2022",
        description: "Serene Buddha statue carved from pure white marble",
        price: 120000,
        isForSale: true,
        likes: 89,
        comments: 23,
        shares: 19,
        materials: ["White marble", "Traditional tools"],
        tags: ["Sculpture", "Buddha", "Marble"]
      },
      {
        id: "bronze-goddess",
        title: "Bronze Goddess",
        category: "Sculpture",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Indian_sculpture",
        year: "2021",
        description: "Traditional bronze casting of Hindu goddess with intricate details",
        price: 95000,
        isForSale: true,
        likes: 56,
        comments: 14,
        shares: 11,
        materials: ["Bronze", "Traditional casting"],
        tags: ["Sculpture", "Goddess", "Bronze"]
      }
    ]
  },
  {
    id: "kavita-reddy",
    name: "Kavita Reddy",
    bio: "Textile artist creating contemporary designs inspired by traditional Indian weaving techniques. Her work bridges the gap between heritage and modern fashion.",
    location: "Karnataka, India",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "Textile",
    coordinates: { lat: 12.9716, lng: 77.5946 }, // Bangalore coordinates
    artworks: [
      {
        id: "silk-saree",
        title: "Silk Saree Collection",
        category: "Textile",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Silk_in_India",
        year: "2023",
        description: "Handwoven silk sarees with traditional motifs and contemporary designs",
        price: 45000,
        isForSale: true,
        likes: 78,
        comments: 21,
        shares: 16,
        materials: ["Pure silk", "Natural dyes", "Hand embroidery"],
        tags: ["Textile", "Saree", "Silk", "Handwoven"]
      },
      {
        id: "cotton-fabric",
        title: "Cotton Fabric Art",
        category: "Textile",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Textile_arts",
        year: "2022",
        description: "Natural cotton fabric with hand-painted traditional patterns",
        price: 28000,
        isForSale: true,
        likes: 42,
        comments: 11,
        shares: 8,
        materials: ["Organic cotton", "Natural dyes", "Hand painting"],
        tags: ["Textile", "Cotton", "Hand-painted"]
      }
    ]
  },
  {
    id: "arjun-verma",
    name: "Arjun Verma",
    bio: "Pottery artist specializing in traditional Indian clay work and ceramic art. His creations reflect the rich heritage of Indian pottery traditions.",
    location: "Uttar Pradesh, India",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "Pottery",
    coordinates: { lat: 25.3176, lng: 82.9739 }, // Varanasi coordinates
    artworks: [
      {
        id: "clay-pot",
        title: "Traditional Clay Pot",
        category: "Pottery",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Pottery",
        year: "2023",
        description: "Handcrafted clay pot using traditional wheel throwing techniques",
        price: 15000,
        isForSale: true,
        likes: 35,
        comments: 9,
        shares: 6,
        materials: ["Natural clay", "Traditional wheel"],
        tags: ["Pottery", "Clay", "Traditional"]
      },
      {
        id: "ceramic-vase",
        title: "Ceramic Vase",
        category: "Pottery",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Ceramic_art",
        year: "2022",
        description: "Glazed ceramic vase with traditional Indian motifs",
        price: 22000,
        isForSale: true,
        likes: 48,
        comments: 12,
        shares: 9,
        materials: ["Ceramic", "Glaze", "Traditional motifs"],
        tags: ["Pottery", "Ceramic", "Vase"]
      }
    ]
  },
  {
    id: "aditi-joshi",
    name: "Aditi Joshi",
    bio: "Contemporary artist blending traditional Indian folk art with modern abstract expressionism. Her work explores cultural identity and heritage.",
    location: "Maharashtra, India",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "Painting",
    coordinates: { lat: 19.0760, lng: 72.8777 }, // Mumbai coordinates
    artworks: [
      {
        id: "abstract-folk",
        title: "Abstract Folk Fusion",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Abstract_art",
        year: "2023",
        description: "Modern abstract interpretation of traditional Indian folk motifs",
        price: 35000,
        isForSale: true,
        likes: 62,
        comments: 16,
        shares: 13,
        materials: ["Acrylic", "Canvas", "Mixed media"],
        tags: ["Painting", "Abstract", "Folk fusion"]
      }
    ]
  },
  {
    id: "vikram-nair",
    name: "Vikram Nair",
    bio: "Jewelry designer creating contemporary pieces inspired by traditional Indian craftsmanship. His work celebrates the beauty of Indian gemstones and metals.",
    location: "Kerala, India",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "Jewelry",
    coordinates: { lat: 10.8505, lng: 76.2711 }, // Thrissur coordinates
    artworks: [
      {
        id: "gold-necklace",
        title: "Traditional Gold Necklace",
        category: "Jewelry",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Indian_jewelry",
        year: "2023",
        description: "Handcrafted gold necklace with traditional Indian design elements",
        price: 180000,
        isForSale: true,
        likes: 95,
        comments: 28,
        shares: 22,
        materials: ["22K Gold", "Precious stones", "Traditional craftsmanship"],
        tags: ["Jewelry", "Gold", "Traditional"]
      }
    ]
  },
  {
    id: "shreya-kapoor",
    name: "Shreya Kapoor",
    bio: "Mixed media artist exploring the intersection of traditional Indian art forms and contemporary digital media. Her work challenges conventional boundaries.",
    location: "Delhi, India",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "Other",
    coordinates: { lat: 28.7041, lng: 77.1025 }, // Delhi coordinates
    artworks: [
      {
        id: "digital-folk",
        title: "Digital Folk Art",
        category: "Other",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Digital_art",
        year: "2023",
        description: "Digital interpretation of traditional Indian folk art patterns",
        price: 28000,
        isForSale: true,
        likes: 41,
        comments: 10,
        shares: 7,
        materials: ["Digital media", "Traditional patterns"],
        tags: ["Digital", "Folk art", "Contemporary"]
      }
    ]
  },
  {
    id: "sanjay-bhatia",
    name: "Sanjay Bhatia",
    bio: "Master craftsman specializing in traditional Indian woodwork and furniture making. His pieces reflect the rich heritage of Indian carpentry.",
    location: "Punjab, India",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "Other",
    coordinates: { lat: 31.5204, lng: 74.3587 }, // Amritsar coordinates
    artworks: [
      {
        id: "wooden-chest",
        title: "Carved Wooden Chest",
        category: "Other",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Wood_carving",
        year: "2023",
        description: "Hand-carved wooden chest with traditional Indian motifs",
        price: 65000,
        isForSale: true,
        likes: 53,
        comments: 14,
        shares: 10,
        materials: ["Teak wood", "Traditional carving tools"],
        tags: ["Woodwork", "Carved", "Traditional"]
      }
    ]
  },
  {
    id: "priya-deshmukh",
    name: "Priya Deshmukh",
    bio: "Contemporary painter exploring themes of Indian mythology and spirituality through modern artistic techniques. Her work bridges ancient wisdom with contemporary expression.",
    location: "Madhya Pradesh, India",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "Painting",
    coordinates: { lat: 23.1793, lng: 75.7849 }, // Indore coordinates
    artworks: [
      {
        id: "mythological-scene",
        title: "Mythological Scene",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Indian_mythology",
        year: "2023",
        description: "Contemporary interpretation of traditional Indian mythological themes",
        price: 42000,
        isForSale: true,
        likes: 67,
        comments: 18,
        shares: 14,
        materials: ["Oil on canvas", "Traditional themes"],
        tags: ["Painting", "Mythology", "Contemporary"]
      }
    ]
  },
  {
    id: "rohit-kulkarni",
    name: "Rohit Kulkarni",
    bio: "Sculptor working with various materials including stone, metal, and clay. His work explores the relationship between traditional Indian art forms and modern sculpture.",
    location: "Karnataka, India",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "Sculpture",
    coordinates: { lat: 12.9716, lng: 77.5946 }, // Bangalore coordinates
    artworks: [
      {
        id: "metal-sculpture",
        title: "Metal Sculpture",
        category: "Sculpture",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Metalworking",
        year: "2023",
        description: "Contemporary metal sculpture inspired by traditional Indian forms",
        price: 75000,
        isForSale: true,
        likes: 58,
        comments: 15,
        shares: 11,
        materials: ["Metal", "Traditional forms"],
        tags: ["Sculpture", "Metal", "Contemporary"]
      }
    ]
  },
  {
    id: "neha-sinha",
    name: "Neha Sinha",
    bio: "Textile designer creating contemporary fashion pieces inspired by traditional Indian weaving and embroidery techniques. Her work celebrates Indian craftsmanship.",
    location: "West Bengal, India",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "Textile",
    coordinates: { lat: 22.5726, lng: 88.3639 }, // Kolkata coordinates
    artworks: [
      {
        id: "embroidery-art",
        title: "Traditional Embroidery",
        category: "Textile",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Embroidery",
        year: "2023",
        description: "Hand-embroidered fabric showcasing traditional Indian needlework",
        price: 38000,
        isForSale: true,
        likes: 49,
        comments: 13,
        shares: 9,
        materials: ["Silk fabric", "Hand embroidery", "Traditional patterns"],
        tags: ["Textile", "Embroidery", "Handcrafted"]
      }
    ]
  },
  {
    id: "anil-gupta",
    name: "Anil Gupta",
    bio: "Pottery artist specializing in traditional Indian ceramic techniques. His work reflects the rich heritage of Indian pottery and ceramic arts.",
    location: "Gujarat, India",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "Pottery",
    coordinates: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad coordinates
    artworks: [
      {
        id: "traditional-pottery",
        title: "Traditional Pottery",
        category: "Pottery",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Pottery",
        year: "2023",
        description: "Traditional Indian pottery using age-old techniques and designs",
        price: 18000,
        isForSale: true,
        likes: 36,
        comments: 9,
        shares: 6,
        materials: ["Natural clay", "Traditional techniques"],
        tags: ["Pottery", "Traditional", "Handcrafted"]
      }
    ]
  },
  {
    id: "manisha-rao",
    name: "Manisha Rao",
    bio: "Contemporary artist exploring themes of Indian culture and identity through various media. Her work challenges traditional boundaries while celebrating heritage.",
    location: "Tamil Nadu, India",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "Other",
    coordinates: { lat: 13.0827, lng: 80.2707 }, // Chennai coordinates
    artworks: [
      {
        id: "mixed-media",
        title: "Mixed Media Art",
        category: "Other",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Mixed_media",
        year: "2023",
        description: "Contemporary mixed media artwork exploring Indian cultural themes",
        price: 32000,
        isForSale: true,
        likes: 44,
        comments: 11,
        shares: 8,
        materials: ["Mixed media", "Cultural themes"],
        tags: ["Mixed media", "Cultural", "Contemporary"]
      }
    ]
  },
  {
    id: "deepak-menon",
    name: "Deepak Menon",
    bio: "Jewelry designer creating contemporary pieces that celebrate Indian craftsmanship and gemstone traditions. His work bridges heritage and modern fashion.",
    location: "Kerala, India",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "Jewelry",
    coordinates: { lat: 10.8505, lng: 76.2711 }, // Thrissur coordinates
    artworks: [
      {
        id: "silver-jewelry",
        title: "Silver Jewelry Collection",
        category: "Jewelry",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Indian_jewelry",
        year: "2023",
        description: "Contemporary jewelry featuring traditional Indian gemstones and designs",
        price: 95000,
        isForSale: true,
        likes: 72,
        comments: 19,
        shares: 15,
        materials: ["Sterling silver", "Precious stones", "Traditional designs"],
        tags: ["Jewelry", "Silver", "Contemporary"]
      }
    ]
  },
  {
    id: "sunita-pillai",
    name: "Sunita Pillai",
    bio: "Textile artist specializing in traditional Indian weaving techniques. Her work preserves ancient methods while creating contemporary designs.",
    location: "Karnataka, India",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "Textile",
    coordinates: { lat: 12.9716, lng: 77.5946 }, // Bangalore coordinates
    artworks: [
      {
        id: "handloom-fabric",
        title: "Handloom Fabric",
        category: "Textile",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Handloom",
        year: "2023",
        description: "Handwoven fabric using traditional Indian handloom techniques",
        price: 25000,
        isForSale: true,
        likes: 38,
        comments: 10,
        shares: 7,
        materials: ["Natural fibers", "Handloom", "Traditional techniques"],
        tags: ["Textile", "Handloom", "Traditional"]
      }
    ]
  },
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    bio: "Sculptor working with stone and metal to create contemporary interpretations of traditional Indian art forms. His work explores cultural heritage and modern expression.",
    location: "Rajasthan, India",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "Sculpture",
    coordinates: { lat: 26.9124, lng: 75.7873 }, // Jaipur coordinates
    artworks: [
      {
        id: "stone-sculpture",
        title: "Stone Sculpture",
        category: "Sculpture",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Stone_sculpture",
        year: "2023",
        description: "Contemporary stone sculpture inspired by traditional Indian forms",
        price: 68000,
        isForSale: true,
        likes: 51,
        comments: 13,
        shares: 10,
        materials: ["Stone", "Traditional forms"],
        tags: ["Sculpture", "Stone", "Contemporary"]
      }
    ]
  },
  {
    id: "alok-patil",
    name: "Alok Patil",
    bio: "Contemporary painter exploring themes of Indian spirituality and philosophy through modern artistic techniques. His work bridges ancient wisdom with contemporary expression.",
    location: "Maharashtra, India",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "Painting",
    coordinates: { lat: 19.0760, lng: 72.8777 }, // Mumbai coordinates
    artworks: [
      {
        id: "spiritual-art",
        title: "Spiritual Art",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Spiritual_art",
        year: "2023",
        description: "Contemporary painting exploring Indian spiritual and philosophical themes",
        price: 45000,
        isForSale: true,
        likes: 73,
        comments: 20,
        shares: 16,
        materials: ["Oil on canvas", "Spiritual themes"],
        tags: ["Painting", "Spiritual", "Contemporary"]
      }
    ]
  },
  {
    id: "sneha-banerjee",
    name: "Sneha Banerjee",
    bio: "Mixed media artist creating contemporary pieces that celebrate Indian cultural heritage. Her work explores identity, tradition, and modernity.",
    location: "West Bengal, India",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "Other",
    coordinates: { lat: 22.5726, lng: 88.3639 }, // Kolkata coordinates
    artworks: [
      {
        id: "cultural-heritage",
        title: "Cultural Heritage",
        category: "Other",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Cultural_heritage",
        year: "2023",
        description: "Mixed media artwork celebrating Indian cultural heritage and traditions",
        price: 35000,
        isForSale: true,
        likes: 59,
        comments: 15,
        shares: 12,
        materials: ["Mixed media", "Cultural heritage"],
        tags: ["Mixed media", "Cultural", "Heritage"]
      }
    ]
  },
  {
    id: "ajay-chauhan",
    name: "Ajay Chauhan",
    bio: "Pottery artist specializing in traditional Indian ceramic techniques and contemporary designs. His work reflects the evolution of Indian pottery traditions.",
    location: "Uttar Pradesh, India",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "Pottery",
    coordinates: { lat: 25.3176, lng: 82.9739 }, // Varanasi coordinates
    artworks: [
      {
        id: "contemporary-pottery",
        title: "Contemporary Pottery",
        category: "Pottery",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Pottery",
        year: "2023",
        description: "Contemporary pottery pieces inspired by traditional Indian techniques",
        price: 28000,
        isForSale: true,
        likes: 47,
        comments: 12,
        shares: 9,
        materials: ["Ceramic", "Traditional techniques"],
        tags: ["Pottery", "Contemporary", "Traditional"]
      }
    ]
  },
  {
    id: "divya-mishra",
    name: "Divya Mishra",
    bio: "Jewelry designer creating contemporary pieces that celebrate Indian craftsmanship and gemstone traditions. Her work bridges heritage and modern fashion.",
    location: "Rajasthan, India",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "Jewelry",
    coordinates: { lat: 26.9124, lng: 75.7873 }, // Jaipur coordinates
    artworks: [
      {
        id: "gemstone-jewelry",
        title: "Gemstone Jewelry",
        category: "Jewelry",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
        infoLink: "https://en.wikipedia.org/wiki/Gemstone",
        year: "2023",
        description: "Contemporary jewelry featuring traditional Indian gemstones and designs",
        price: 125000,
        isForSale: true,
        likes: 88,
        comments: 24,
        shares: 19,
        materials: ["Precious metals", "Gemstones", "Traditional designs"],
        tags: ["Jewelry", "Gemstones", "Contemporary"]
      }
    ]
  }
];

// Helper function to get all artworks from all artists
export const getAllArtworks = () => {
  return artistsData.flatMap(artist => 
    artist.artworks.map(artwork => ({
      ...artwork,
      artist: artist.name,
      artistId: artist.id,
      artistProfile: `/artist/${artist.id}`,
      artistImage: artist.profileImage,
      artistLocation: artist.location,
      artistCoordinates: artist.coordinates
    }))
  );
};

// Helper function to get artworks by category
export const getArtworksByCategory = (category) => {
  if (category === 'All') return getAllArtworks();
  return getAllArtworks().filter(artwork => artwork.category === category);
};

// Helper function to search artworks and artists
export const searchArtworksAndArtists = (searchTerm) => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  const matchingArtworks = getAllArtworks().filter(artwork =>
    artwork.title.toLowerCase().includes(lowerSearchTerm) ||
    artwork.artist.toLowerCase().includes(lowerSearchTerm)
  );
  
  const matchingArtists = artistsData.filter(artist =>
    artist.name.toLowerCase().includes(lowerSearchTerm) ||
    artist.bio.toLowerCase().includes(lowerSearchTerm)
  );
  
  return { artworks: matchingArtworks, artists: matchingArtists };
};

// Get unique categories
export const getCategories = () => {
  const categories = [...new Set(getAllArtworks().map(artwork => artwork.category))];
  return ['All', ...categories];
};

// Get artworks by location (for map functionality)
export const getArtworksByLocation = (lat, lng, radius = 50) => {
  return getAllArtworks().filter(artwork => {
    const distance = calculateDistance(lat, lng, artwork.artistCoordinates.lat, artwork.artistCoordinates.lng);
    return distance <= radius;
  });
};

// Calculate distance between two coordinates (Haversine formula)
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Get nearby stores/places for a category
export const getNearbyPlaces = (category, lat, lng, radius = 50) => {
  const artworks = getArtworksByLocation(lat, lng, radius);
  return artworks.filter(artwork => artwork.category === category);
};
