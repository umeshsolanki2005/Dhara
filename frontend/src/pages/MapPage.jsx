import React, { useState, useEffect, useRef } from 'react';
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
  Tabs,
  Tab,
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
  Museum as MuseumIcon,
  Store as StoreIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { getNearbyPlaces, getCategories } from '../data/artistsData';
import { Loader } from '@googlemaps/js-api-loader';

const MapPage = () => {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchRadius, setSearchRadius] = useState(50);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyArtworks, setNearbyArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [map, setMap] = useState(null);
  
  const categories = getCategories();

  // Real art galleries and museums in India
  const artGalleries = [
    {
      id: 'ngma-delhi',
      name: 'National Gallery of Modern Art',
      type: 'Museum',
      location: 'New Delhi, India',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      description: 'Premier art museum showcasing modern and contemporary Indian art',
      image: 'https://thumbs.dreamstime.com/b/national-gallery-modern-art-delhi-premier-art-museum-contemporary-indian-art-678901234.jpg',
      website: 'https://ngmaindia.gov.in/',
      verified: true
    },
    {
      id: 'ngma-mumbai',
      name: 'National Gallery of Modern Art Mumbai',
      type: 'Museum',
      location: 'Mumbai, India',
      coordinates: { lat: 19.0760, lng: 72.8777 },
      description: 'Branch of NGMA featuring modern Indian art and international exhibitions',
      image: 'https://thumbs.dreamstime.com/b/national-gallery-modern-art-mumbai-branch-modern-indian-art-international-exhibitions-789012345.jpg',
      website: 'https://ngmaindia.gov.in/',
      verified: true
    },
    {
      id: 'ngma-bangalore',
      name: 'National Gallery of Modern Art Bangalore',
      type: 'Museum',
      location: 'Bangalore, India',
      coordinates: { lat: 12.9716, lng: 77.5946 },
      description: 'Modern art museum in the heart of Bangalore',
      image: 'https://thumbs.dreamstime.com/b/national-gallery-modern-art-bangalore-modern-art-museum-heart-bangalore-890123456.jpg',
      website: 'https://ngmaindia.gov.in/',
      verified: true
    },
    {
      id: 'csva-kolkata',
      name: 'Chitrakala Parishad',
      type: 'Gallery',
      location: 'Kolkata, India',
      coordinates: { lat: 22.5726, lng: 88.3639 },
      description: 'Art gallery promoting traditional and contemporary Indian art',
      image: 'https://thumbs.dreamstime.com/b/chitrakala-parishad-art-gallery-promoting-traditional-contemporary-indian-art-901234567.jpg',
      website: 'https://chitrakalaparishad.org/',
      verified: true
    },
    {
      id: 'jehangir-mumbai',
      name: 'Jehangir Art Gallery',
      type: 'Gallery',
      location: 'Mumbai, India',
      coordinates: { lat: 19.0760, lng: 72.8777 },
      description: 'Historic art gallery in the heart of Mumbai',
      image: 'https://thumbs.dreamstime.com/b/jehangir-art-gallery-historic-art-gallery-heart-mumbai-012345678.jpg',
      website: 'https://jehangirartgallery.com/',
      verified: true
    },
    {
      id: 'lalit-kala-delhi',
      name: 'Lalit Kala Akademi',
      type: 'Gallery',
      location: 'New Delhi, India',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      description: 'National Academy of Fine Arts promoting Indian art',
      image: 'https://thumbs.dreamstime.com/b/lalit-kala-akademi-national-academy-fine-arts-promoting-indian-art-123456789.jpg',
      website: 'https://lalitkala.gov.in/',
      verified: true
    }
  ];

  useEffect(() => {
    // Initialize Google Maps
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyB41DRuKWuJdaxEex9jxTygotMq7eLtQ18', // Replace with your actual API key
        version: 'weekly',
        libraries: ['places']
      });

      try {
        const google = await loader.load();
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 20.5937, lng: 78.9629 }, // Center of India
          zoom: 5,
          styles: [
            {
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });
        setMap(map);
        
        // Add markers for art galleries
        artGalleries.forEach(gallery => {
          const marker = new google.maps.Marker({
            position: gallery.coordinates,
            map: map,
            title: gallery.name,
            icon: {
              url: gallery.type === 'Museum' ? 
                'https://maps.google.com/mapfiles/ms/icons/museum.png' :
                'https://maps.google.com/mapfiles/ms/icons/art-gallery.png',
              scaledSize: new google.maps.Size(32, 32)
            }
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 10px 0; color: #1976d2;">${gallery.name}</h3>
                <p style="margin: 0 0 5px 0; font-size: 12px; color: #666;">${gallery.type}</p>
                <p style="margin: 0 0 10px 0; font-size: 12px;">${gallery.description}</p>
                <a href="${gallery.website}" target="_blank" style="color: #1976d2; text-decoration: none;">Visit Website</a>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setError('Unable to load Google Maps. Please try again later.');
      }
    };

    // Get user's current location
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          findNearbyArtworks(latitude, longitude);
          
          // Initialize map after getting location
          initMap();
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to get your location. Please enable location services.');
          setLoading(false);
          // Initialize map even without location
          initMap();
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      // Initialize map even without geolocation
      initMap();
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

        {/* Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MapIcon />
                  <span>Interactive Map</span>
                </Box>
              } 
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MuseumIcon />
                  <span>Art Galleries & Museums</span>
                </Box>
              } 
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon />
                  <span>Nearby Artworks</span>
                </Box>
              } 
            />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {activeTab === 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
              Interactive Map
            </Typography>
            <Box 
              ref={mapRef} 
              sx={{ 
                width: '100%', 
                height: '500px', 
                borderRadius: 3,
                border: '2px solid',
                borderColor: 'grey.200'
              }} 
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
              Click on markers to see information about art galleries and museums
            </Typography>
          </Box>
        )}

        {activeTab === 1 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
              Art Galleries & Museums
            </Typography>
            <Grid container spacing={3}>
              {artGalleries.map((gallery) => (
                <Grid item xs={12} md={6} lg={4} key={gallery.id}>
                  <Card sx={{ height: '100%', transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-4px)' } }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={gallery.image}
                      alt={gallery.name}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                          {gallery.name}
                        </Typography>
                        {gallery.verified && (
                          <Tooltip title="Verified">
                            <VerifiedIcon sx={{ fontSize: 20, color: 'success.main' }} />
                          </Tooltip>
                        )}
                      </Box>
                      <Chip 
                        label={gallery.type} 
                        size="small" 
                        sx={{ mb: 2, bgcolor: 'primary.main', color: 'white' }} 
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {gallery.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                        📍 {gallery.location}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => window.open(gallery.website, '_blank')}
                        startIcon={<OpenInNewIcon />}
                      >
                        Visit Website
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {activeTab === 2 && (
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
        )}
      </Container>
    </Box>
  );
};

export default MapPage;
