import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Avatar,
  Chip,
  Divider,
  CircularProgress,
  Alert,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Palette as PaletteIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import axios from 'axios';
import ArtCard from '../components/ArtCard';

const ArtistProfilePage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArtistData();
  }, [id]);

  const fetchArtistData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/artists/${id}`);
      setArtist(response.data.artist);
      setArtworks(response.data.artworks);
    } catch (err) {
      console.error('Error fetching artist data:', err);
      setError('Failed to load artist profile. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress size={60} color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!artist) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="warning">Artist not found</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Artist Profile Header */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Artist Avatar */}
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'secondary.main',
                    fontSize: '3rem',
                  }}
                >
                  {artist.artistName?.charAt(0)?.toUpperCase() || 
                   artist.username?.charAt(0)?.toUpperCase() || 'A'}
                </Avatar>
                <Chip
                  label="Artist"
                  color="secondary"
                  variant="filled"
                  sx={{ fontWeight: 600 }}
                />
              </Box>
            </Grid>

            {/* Artist Information */}
            <Grid item xs={12} md={9}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                {artist.artistName || artist.username}
              </Typography>

              {artist.bio && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    mb: 3,
                    maxWidth: 600,
                  }}
                >
                  {artist.bio}
                </Typography>
              )}

                             {/* Artist Details */}
               <Grid container spacing={3}>
                 {artist.location && (
                   <Grid item xs={12} sm={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <LocationIcon sx={{ mr: 1, color: 'primary.main' }} />
                       <Typography variant="body2" color="text.secondary">
                         {artist.location}
                       </Typography>
                     </Box>
                   </Grid>
                 )}

                 <Grid item xs={12} sm={6}>
                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <CalendarIcon sx={{ mr: 1, color: 'primary.main' }} />
                     <Typography variant="body2" color="text.secondary">
                       Member since {new Date(artist.createdAt).getFullYear()}
                     </Typography>
                   </Box>
                 </Grid>

                 <Grid item xs={12} sm={6}>
                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <PaletteIcon sx={{ mr: 1, color: 'primary.main' }} />
                     <Typography variant="body2" color="text.secondary">
                       {artworks.length} artwork{artworks.length !== 1 ? 's' : ''}
                     </Typography>
                   </Box>
                 </Grid>
               </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* Artworks Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Artworks by {artist.artistName || artist.username}
            </Typography>
            
            <Chip
              label={`${artworks.length} total`}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 600 }}
            />
          </Box>

          {artworks.length > 0 ? (
            <Grid container spacing={3}>
              {artworks.map((artwork) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={artwork._id}>
                  <ArtCard artwork={artwork} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper
              sx={{
                p: 6,
                textAlign: 'center',
                bgcolor: 'grey.50',
                borderRadius: 3,
              }}
            >
              <PaletteIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No artworks yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This artist hasn't uploaded any artworks yet. Check back later!
              </Typography>
            </Paper>
          )}
        </Box>

        {/* Contact Section */}
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3, bgcolor: 'primary.main', color: 'white' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Interested in this artist's work?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Connect with {artist.artistName || artist.username} to learn more about their art and techniques.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              Contact Artist
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ArtistProfilePage;
