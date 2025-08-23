import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Paper,
  Tabs,
  Tab,
  Alert,
  CircularProgress,
  Button,
} from '@mui/material';
import {
  Search as SearchIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ArtCard from '../components/ArtCard';
import ArtistCard from '../components/ArtistCard';
import axios from 'axios';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState(0);
  const [allArtworks, setAllArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [searchResults, setSearchResults] = useState({ artworks: [], artists: [] });
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const categories = ['All', 'Painting', 'Sculpture', 'Textile', 'Pottery', 'Jewelry', 'Other'];

  // Fetch all artworks from backend
  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/artworks');
      setAllArtworks(response.data);
      setFilteredArtworks(response.data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
      setError('Failed to load artworks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Apply category filter
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredArtworks(allArtworks);
    } else {
      setFilteredArtworks(allArtworks.filter(artwork => artwork.category === selectedCategory));
    }
  }, [selectedCategory, allArtworks]);

  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults({ artworks: [], artists: [] });
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = searchArtworksAndArtists(searchTerm);
    setSearchResults(results);
    setIsSearching(false);
  }, [searchTerm, allArtworks]);

  const searchArtworksAndArtists = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    const matchingArtworks = allArtworks.filter(artwork =>
      artwork.title.toLowerCase().includes(lowerSearchTerm) ||
      artwork.description.toLowerCase().includes(lowerSearchTerm) ||
      (artwork.artist && artwork.artist.username && 
       artwork.artist.username.toLowerCase().includes(lowerSearchTerm)) ||
      (artwork.artist && artwork.artist.artistName && 
       artwork.artist.artistName.toLowerCase().includes(lowerSearchTerm))
    );
    
    // For now, we'll just return artworks since we don't have a separate artists endpoint
    // In a real app, you'd have a separate artists API endpoint
    const matchingArtists = [];
    
    return { artworks: matchingArtworks, artists: matchingArtists };
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchTerm(''); // Clear search when category changes
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults({ artworks: [], artists: [] });
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleArtistClick = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  const handleArtworkClick = (artwork) => {
    // Navigate to artwork detail page or open in modal
    console.log('Artwork clicked:', artwork);
  };

  const handleLike = (artworkId, isLiked) => {
    // In real app, this would update the backend
    console.log(`${isLiked ? 'Liked' : 'Unliked'} artwork:`, artworkId);
  };

  const handleWishlist = (artworkId, isInWishlist) => {
    // In real app, this would update the backend
    console.log(`${isInWishlist ? 'Added to' : 'Removed from'} wishlist:`, artworkId);
  };

  const handleComment = (artworkId, comment) => {
    // In real app, this would update the backend
    console.log('Added comment to artwork:', artworkId, comment);
  };

  const handleShare = (artworkId) => {
    // In real app, this would track sharing
    console.log('Shared artwork:', artworkId);
  };

  const handleBuy = (artwork) => {
    // In real app, this would navigate to checkout
    alert(`Redirecting to checkout for ${artwork.title}`);
  };

  // Determine what to display
  const hasSearchResults = searchTerm.trim() !== '';
  const displayArtworks = hasSearchResults ? searchResults.artworks : filteredArtworks;
  const displayArtists = hasSearchResults ? searchResults.artists : [];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress size={60} color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
        <Button variant="contained" onClick={fetchArtworks}>
          Try Again
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `
            linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(139, 69, 19, 0.9) 50%, rgba(30, 58, 138, 0.9) 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="folk-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.15)"/><circle cx="20" cy="20" r="6" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><circle cx="20" cy="20" r="12" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/></pattern></defs><rect width="200" height="200" fill="url(%23folk-pattern)"/></svg>')
          `,
          color: 'white',
          py: 6,
          mb: 4,
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 3,
              fontFamily: '"Noto Serif", serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            Discover Indian Folk Art
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              opacity: 0.9,
              fontFamily: '"Poppins", sans-serif',
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Explore the rich heritage of Indian folk art through our curated collection of paintings, sculptures, textiles, and more
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Search and Filter Section */}
        <Paper
          elevation={2}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,248,248,0.9) 100%)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            {/* Search Bar */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search artworks or artists..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={handleClearSearch}
                        sx={{ color: 'text.secondary' }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    bgcolor: 'white',
                  },
                }}
              />
            </Grid>

            {/* Category Filter */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={handleCategoryChange}
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'white',
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Search Results Tabs */}
          {hasSearchResults && (
            <Box sx={{ mt: 3 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontFamily: '"Poppins", sans-serif',
                  },
                }}
              >
                <Tab
                  label={`Artworks (${searchResults.artworks.length})`}
                  disabled={searchResults.artworks.length === 0}
                />
                <Tab
                  label={`Artists (${searchResults.artists.length})`}
                  disabled={searchResults.artists.length === 0}
                />
              </Tabs>
            </Box>
          )}
        </Paper>

        {/* Loading State */}
        {isSearching && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Search Results */}
        {hasSearchResults && !isSearching && (
          <>
            {/* Artworks Tab */}
            {activeTab === 0 && searchResults.artworks.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    fontFamily: '"Noto Serif", serif',
                    mb: 3,
                  }}
                >
                  Search Results: Artworks
                </Typography>
                <Grid container spacing={3}>
                  {searchResults.artworks.map((artwork) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={artwork._id}>
                      <ArtCard 
                        artwork={artwork}
                        onLike={handleLike}
                        onWishlist={handleWishlist}
                        onComment={handleComment}
                        onShare={handleShare}
                        onBuy={handleBuy}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Artists Tab */}
            {activeTab === 1 && searchResults.artists.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    fontFamily: '"Noto Serif", serif',
                    mb: 3,
                  }}
                >
                  Search Results: Artists
                </Typography>
                <Grid container spacing={3}>
                  {searchResults.artists.map((artist) => (
                    <Grid item xs={12} sm={6} md={4} key={artist._id}>
                      <ArtistCard artist={artist} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* No Results */}
            {searchResults.artworks.length === 0 && searchResults.artists.length === 0 && (
              <Alert severity="info" sx={{ mb: 4 }}>
                No results found for "{searchTerm}". Try different keywords or browse by category.
              </Alert>
            )}
          </>
        )}

        {/* Category Gallery (when not searching) */}
        {!hasSearchResults && (
          <>
            {/* Category Header */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  fontFamily: '"Noto Serif", serif',
                  textAlign: 'center',
                }}
              >
                {selectedCategory === 'All' ? 'All Artworks' : `${selectedCategory} Collection`}
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  color: 'text.secondary',
                  fontFamily: '"Poppins", sans-serif',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                {selectedCategory === 'All' 
                  ? `Explore our complete collection of ${displayArtworks.length} artworks from talented Indian artists`
                  : `Discover beautiful ${selectedCategory.toLowerCase()} pieces created by skilled artisans`
                }
              </Typography>
            </Box>

            {/* Artworks Grid */}
            {displayArtworks.length > 0 ? (
              <Grid container spacing={3}>
                {displayArtworks.map((artwork) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={artwork._id}>
                    <ArtCard 
                      artwork={artwork}
                      onLike={handleLike}
                      onWishlist={handleWishlist}
                      onComment={handleComment}
                      onShare={handleShare}
                      onBuy={handleBuy}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Alert severity="info">
                No artworks found in the {selectedCategory} category. Try selecting a different category.
              </Alert>
            )}
          </>
        )}

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: 8,
            py: 4,
            borderTop: '1px solid',
            borderColor: 'grey.200',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            © 2025 Dhara – Celebrating Indian Folk Arts
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 3 }}>
            {['Home', 'Categories', 'About', 'Contact'].map((link) => (
              <Typography
                key={link}
                variant="body2"
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  fontFamily: '"Poppins", sans-serif',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
