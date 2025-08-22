import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Chip,
  Avatar,
  Badge,
  Tooltip,
  Alert,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Favorite as WishlistIcon,
  ShoppingCart as ShoppingCartIcon,
  Share as ShareIcon,
  Comment as CommentIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock wishlist data - in real app this would come from context/state
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setWishlistItems([
        {
          id: 'madhubani-tree-life',
          title: 'Madhubani Tree of Life',
          category: 'Painting',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
          infoLink: 'https://en.wikipedia.org/wiki/Madhubani_art',
          year: '2023',
          description: 'Traditional Madhubani depiction of the sacred tree with intricate patterns',
          price: 25000,
          isForSale: true,
          likes: 45,
          comments: 12,
          shares: 8,
          materials: ['Natural dyes', 'Handmade paper'],
          tags: ['Madhubani', 'Traditional', 'Tree of Life'],
          artist: 'Meena Iyer',
          artistId: 'meena-iyer',
          artistProfile: '/artist/meena-iyer',
          artistImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          artistLocation: 'Bihar, India',
          addedToWishlist: '2024-01-15'
        },
        {
          id: 'stone-elephant',
          title: 'Stone Elephant',
          category: 'Sculpture',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
          infoLink: 'https://en.wikipedia.org/wiki/Indian_sculpture',
          year: '2023',
          description: 'Hand-carved stone elephant in traditional Rajasthani style',
          price: 85000,
          isForSale: true,
          likes: 67,
          comments: 18,
          shares: 14,
          materials: ['Sandstone', 'Traditional tools'],
          tags: ['Sculpture', 'Elephant', 'Rajasthani'],
          artist: 'Raghavendra Sharma',
          artistId: 'raghavendra-sharma',
          artistProfile: '/artist/raghavendra-sharma',
          artistImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          artistLocation: 'Rajasthan, India',
          addedToWishlist: '2024-01-10'
        },
        {
          id: 'silk-saree',
          title: 'Silk Saree Collection',
          category: 'Textile',
          image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          infoLink: 'https://en.wikipedia.org/wiki/Silk_in_India',
          year: '2023',
          description: 'Handwoven silk sarees with traditional motifs and contemporary designs',
          price: 45000,
          isForSale: true,
          likes: 78,
          comments: 21,
          shares: 16,
          materials: ['Pure silk', 'Natural dyes', 'Hand embroidery'],
          tags: ['Textile', 'Saree', 'Silk', 'Handwoven'],
          artist: 'Kavita Reddy',
          artistId: 'kavita-reddy',
          artistProfile: '/artist/kavita-reddy',
          artistImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          artistLocation: 'Karnataka, India',
          addedToWishlist: '2024-01-08'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleBuyNow = (item) => {
    // In real app, this would navigate to checkout or open payment modal
    alert(`Redirecting to checkout for ${item.title}`);
  };

  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out this beautiful ${item.category} by ${item.artist}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Typography>Loading your wishlist...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/home')}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              textTransform: 'none',
              fontWeight: 600,
              fontFamily: '"Poppins", sans-serif',
              mr: 3,
            }}
          >
            Back to Gallery
          </Button>
          
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                fontFamily: '"Noto Serif", serif',
                mb: 1,
              }}
            >
              My Wishlist
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
            </Typography>
          </Box>
        </Box>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <WishlistIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              Your wishlist is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Start exploring our collection and add artworks you love to your wishlist
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/home')}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Explore Artworks
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {wishlistItems.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Header with Remove Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          fontFamily: '"Noto Serif", serif',
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline',
                            color: 'primary.dark',
                          },
                        }}
                        onClick={() => window.open(item.infoLink, '_blank')}
                      >
                        {item.title}
                      </Typography>
                      
                      <Tooltip title="Remove from Wishlist">
                        <IconButton
                          size="small"
                          onClick={() => handleRemoveFromWishlist(item.id)}
                          sx={{
                            color: 'error.main',
                            '&:hover': {
                              bgcolor: 'error.main',
                              color: 'white',
                            },
                          }}
                        >
                          <WishlistIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>

                    {/* Category and Price */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{
                          bgcolor: 'secondary.main',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />
                      {item.isForSale && (
                        <Typography
                          variant="h6"
                          color="success.main"
                          sx={{
                            fontWeight: 700,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        >
                          {formatPrice(item.price)}
                        </Typography>
                      )}
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        fontFamily: '"Poppins", sans-serif',
                        flexGrow: 1,
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Materials and Tags */}
                    {item.materials && item.materials.length > 0 && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                          Materials: {item.materials.join(', ')}
                        </Typography>
                      </Box>
                    )}

                    {item.tags && item.tags.length > 0 && (
                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {item.tags.slice(0, 3).map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.6rem', height: 20 }}
                          />
                        ))}
                      </Box>
                    )}

                    {/* Artist Information */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={item.artistImage}
                        sx={{
                          width: 32,
                          height: 32,
                          mr: 2,
                          border: '2px solid',
                          borderColor: 'primary.main',
                        }}
                      >
                        <PersonIcon />
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          component={RouterLink}
                          to={item.artistProfile}
                          sx={{
                            color: 'primary.main',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                            '&:hover': {
                              textDecoration: 'underline',
                              color: 'primary.dark',
                            },
                          }}
                        >
                          {item.artist}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocationIcon sx={{ fontSize: 14, mr: 0.5, color: 'text.secondary' }} />
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                              fontFamily: '"Poppins", sans-serif',
                            }}
                          >
                            {item.artistLocation}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Added Date */}
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        mb: 2,
                        display: 'block',
                      }}
                    >
                      Added to wishlist on {formatDate(item.addedToWishlist)}
                    </Typography>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="Share">
                          <IconButton
                            size="small"
                            onClick={() => handleShare(item)}
                            sx={{
                              color: 'text.secondary',
                              '&:hover': {
                                color: 'primary.main',
                              },
                            }}
                          >
                            <ShareIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="View Details">
                          <IconButton
                            size="small"
                            onClick={() => window.open(item.infoLink, '_blank')}
                            sx={{
                              color: 'primary.main',
                              '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'white',
                              },
                            }}
                          >
                            <OpenInNewIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>

                      {item.isForSale && (
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<ShoppingCartIcon />}
                          onClick={() => handleBuyNow(item)}
                          sx={{
                            bgcolor: 'success.main',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            '&:hover': {
                              bgcolor: 'success.dark',
                            },
                          }}
                        >
                          Buy Now
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default WishlistPage;