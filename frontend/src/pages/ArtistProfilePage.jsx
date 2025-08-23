import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Chip,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Alert,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Palette as PaletteIcon,
  ArrowBack as ArrowBackIcon,
  OpenInNew as OpenInNewIcon,
  Verified as VerifiedIcon,
  LocalShipping as ExportIcon,
} from '@mui/icons-material';
import { artistsData } from '../data/artistsData';

const ArtistProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate loading for better UX
    setLoading(true);
    
    // Find artist in our data
    const foundArtist = artistsData.find(a => a.id === id);
    
    if (foundArtist) {
      setArtist(foundArtist);
      setError('');
    } else {
      setError('Artist not found');
    }
    
    setLoading(false);
  }, [id]);

  const handleBackClick = () => {
    navigate('/home');
  };

  const handleArtworkClick = (artwork) => {
    window.open(artwork.infoLink, '_blank');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress size={60} color="primary" />
      </Box>
    );
  }

  if (error || !artist) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 4 }}>
          {error || 'Artist not found'}
        </Alert>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={handleBackClick}
        >
          Back to Gallery
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Back Button */}
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={handleBackClick}
          sx={{
            mb: 3,
            borderColor: 'primary.main',
            color: 'primary.main',
            textTransform: 'none',
            fontWeight: 600,
            fontFamily: '"Poppins", sans-serif',
            '&:hover': {
              borderColor: 'primary.dark',
              bgcolor: 'primary.main',
              color: 'white',
            },
          }}
        >
          Back to Gallery
        </Button>
      </Container>

      <Container maxWidth="lg">
        {/* Artist Header */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${artist.category === 'Painting' ? '#FF6B35' : 
              artist.category === 'Sculpture' ? '#8B4513' : 
              artist.category === 'Textile' ? '#1E3A8A' : 
              artist.category === 'Pottery' ? '#FFD700' : 
              artist.category === 'Jewelry' ? '#E91E63' : '#9C27B0'}10, white 100%)`,
            border: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Artist Avatar */}
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src={artist.profileImage}
                  sx={{
                    width: 150,
                    height: 150,
                    mx: 'auto',
                    mb: 2,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  }}
                />
                <Chip
                  label={artist.category}
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: 1,
                  }}
                />
              </Box>
            </Grid>

            {/* Artist Info */}
            <Grid item xs={12} md={9}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    fontFamily: '"Noto Serif", serif',
                  }}
                >
                  {artist.name}
                </Typography>
                {artist.isVerified && (
                  <Tooltip title="Verified Artist">
                    <VerifiedIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Tooltip>
                )}
                {artist.exportReady && (
                  <Tooltip title="Export Ready">
                    <ExportIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Tooltip>
                )}
              </Box>
              
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontFamily: '"Poppins", sans-serif',
                  lineHeight: 1.6,
                }}
              >
                {artist.bio}
              </Typography>

              {/* Artist Details */}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      {artist.location}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PaletteIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      {artist.artworks.length} artwork{artist.artworks.length !== 1 ? 's' : ''}
                    </Typography>
                  </Box>
                </Grid>
                {artist.exportReady && (
                  <Grid item xs={12}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: 'info.light', 
                      borderRadius: 2, 
                      border: '1px solid',
                      borderColor: 'info.main'
                    }}>
                      <Typography variant="h6" color="info.dark" sx={{ mb: 1, fontWeight: 600 }}>
                        Export Ready ✓
                      </Typography>
                      <Typography variant="body2" color="info.dark" sx={{ mb: 1 }}>
                        This artist meets international export standards and their artworks are ready for global markets.
                      </Typography>
                      {artist.exportCertifications && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {artist.exportCertifications.map((cert, index) => (
                            <Chip
                              key={index}
                              label={cert}
                              size="small"
                              sx={{ bgcolor: 'info.main', color: 'white', fontSize: '0.7rem' }}
                            />
                          ))}
                        </Box>
                      )}
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* Artworks Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: '"Noto Serif", serif',
              mb: 3,
            }}
          >
            Artworks by {artist.name}
          </Typography>
          
          <Grid container spacing={3}>
            {artist.artworks.map((artwork) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={artwork.id}>
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                    },
                  }}
                  onClick={() => handleArtworkClick(artwork)}
                >
                  <CardMedia
                    component="img"
                    height="200"
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
                  <CardContent sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        fontFamily: '"Noto Serif", serif',
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {artwork.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.5,
                      }}
                    >
                      {artwork.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {artwork.year}
                      </Typography>
                      
                      <IconButton
                        size="small"
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
        </Box>

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

export default ArtistProfilePage;
