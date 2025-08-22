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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Paper,
  Alert,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  OpenInNew as OpenInNewIcon,
  Map as MapIcon,
  FilterList as FilterIcon,
  MyLocation as MyLocationIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { getNearbyPlaces, getCategories } from '../data/artistsData';

const MapPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchRadius, setSearchRadius] = useState(50);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyArtworks, setNearbyArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const categories = getCategories();

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          findNearbyArtworks(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to get your location. Please enable location services.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      findNearbyArtworks(userLocation.lat, userLocation.lng);
    }
  }, [selectedCategory, searchRadius, userLocation]);

  const findNearbyArtworks = (lat, lng) => {
    setLoading(true);
    try {
      const artworks = getNearbyPlaces(selectedCategory, lat, lng, searchRadius);
      setNearbyArtworks(artworks);
      setError('');
    } catch (err) {
      setError('Error finding nearby artworks');
    } finally {
      setLoading(false);
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          findNearbyArtworks(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to get your location. Please enable location services.');
          setLoading(false);
        }
      );
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getDistanceFromUser = (artwork) => {
    if (!userLocation || !artwork.artistCoordinates) return 'Unknown';
    
    const R = 6371; // Earth's radius in kilometers
    const dLat = (artwork.artistCoordinates.lat - userLocation.lat) * Math.PI / 180;
    const dLng = (artwork.artistCoordinates.lng - userLocation.lng) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(userLocation.lat * Math.PI / 180) * Math.cos(artwork.artistCoordinates.lat * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    } else {
      return `${distance.toFixed(1)}km`;
    }
  };

  if (loading && !userLocation) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress size={60} color="primary" />
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
              Find Artworks Near You
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Discover local artists and artworks in your area
            </Typography>
          </Box>
        </Box>

        {/* Filters and Controls */}
        <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                size="small"
                label="Search Radius (km)"
                type="number"
                value={searchRadius}
                onChange={(e) => setSearchRadius(Number(e.target.value))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">km</InputAdornment>,
                }}
                inputProps={{ min: 1, max: 100 }}
              />
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                startIcon={<MyLocationIcon />}
                onClick={handleUseCurrentLocation}
                fullWidth
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Use Current Location
              </Button>
            </Grid>
          </Grid>
          
          {userLocation && (
            <Box sx={{ mt: 2, p: 2, bgcolor: 'primary.light', borderRadius: 2, color: 'white' }}>
              <Typography variant="body2" sx={{ fontFamily: '"Poppins", sans-serif' }}>
                <LocationIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                Your location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
              </Typography>
            </Box>
          )}
        </Paper>

        {/* Error Display */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Results */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <MapIcon sx={{ mr: 2, color: 'primary.main' }} />
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                fontFamily: '"Noto Serif", serif',
              }}
            >
              {nearbyArtworks.length} Artwork{nearbyArtworks.length !== 1 ? 's' : ''} Found
            </Typography>
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress size={40} color="primary" />
            </Box>
          ) : nearbyArtworks.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <MapIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                No artworks found in your area
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Try increasing the search radius or changing the category
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {nearbyArtworks.map((artwork) => (
                <Grid item xs={12} md={6} lg={4} key={artwork.id}>
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
                      image={artwork.image}
                      alt={artwork.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Header */}
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
                          onClick={() => window.open(artwork.infoLink, '_blank')}
                        >
                          {artwork.title}
                        </Typography>
                        <Chip
                          label={artwork.category}
                          size="small"
                          sx={{
                            bgcolor: 'secondary.main',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                      </Box>

                      {/* Price */}
                      {artwork.isForSale && (
                        <Box sx={{ mb: 2 }}>
                          <Typography
                            variant="h6"
                            color="success.main"
                            sx={{
                              fontWeight: 700,
                              fontFamily: '"Poppins", sans-serif',
                            }}
                          >
                            {formatPrice(artwork.price)}
                          </Typography>
                        </Box>
                      )}

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
                        {artwork.description}
                      </Typography>

                      {/* Artist Information */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          src={artwork.artistImage}
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
                            variant="body2"
                            component={RouterLink}
                            to={artwork.artistProfile}
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
                            {artwork.artist}
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
                              {artwork.artistLocation} • {getDistanceFromUser(artwork)} away
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Action Buttons */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                        <Button
                          component={RouterLink}
                          to={artwork.artistProfile}
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        >
                          View Artist Profile
                        </Button>
                        
                        <IconButton
                          size="small"
                          onClick={() => window.open(artwork.infoLink, '_blank')}
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
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default MapPage;
