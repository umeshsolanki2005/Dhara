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
  LocationOn as LocationIcon,
  Person as PersonIcon,
  OpenInNew as OpenInNewIcon,
  Verified as VerifiedIcon,
  LocalShipping as ExportIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { getAllArtworks } from '../data/artistsData';

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get real wishlist data from artists
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const allArtworks = getAllArtworks();
      // Select some famous artworks for the wishlist
      const selectedArtworks = [
        allArtworks.find(art => art.id === 'jamini-roy-santal-dance'),
        allArtworks.find(art => art.id === 'amrita-sher-gil-three-girls'),
        allArtworks.find(art => art.id === 'raja-ravi-varma-damayanti'),
        allArtworks.find(art => art.id === 'nandalal-bose-sati'),
        allArtworks.find(art => art.id === 'abindranath-tagore-bharat-mata')
      ].filter(Boolean);
      
      const wishlistData = selectedArtworks.map(artwork => ({
        ...artwork,
        addedToWishlist: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }));
      
      setWishlistItems(wishlistData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleBuyNow = (item) => {
    // In real app, this would navigate to checkout or open payment modal
    const message = `Redirecting to secure checkout for "${item.title}" by ${item.artist}\n\nPrice: ${formatPrice(item.price)}\n\nThis will open our secure payment gateway where you can complete your purchase.`;
    alert(message);
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
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
                          {item.isVerified && (
                            <Tooltip title="Verified Artist">
                              <VerifiedIcon sx={{ fontSize: 16, color: 'success.main' }} />
                            </Tooltip>
                          )}
                          {item.exportReady && (
                            <Tooltip title="Export Ready">
                              <ExportIcon sx={{ fontSize: 16, color: 'info.main' }} />
                            </Tooltip>
                          )}
                        </Box>
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