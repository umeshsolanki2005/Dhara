import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  Button,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Palette as PaletteIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

const ArtistCard = ({ artist }) => {
  return (
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
      <Box
        sx={{
          p: 3,
          background: `linear-gradient(135deg, ${artist.category === 'Painting' ? '#FF6B35' : 
            artist.category === 'Sculpture' ? '#8B4513' : 
            artist.category === 'Textile' ? '#1E3A8A' : 
            artist.category === 'Pottery' ? '#FFD700' : 
            artist.category === 'Jewelry' ? '#E91E63' : '#9C27B0'}20, transparent)`,
        }}
      >
        {/* Artist Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={artist.profileImage}
            sx={{
              width: 80,
              height: 80,
              mr: 3,
              border: '3px solid',
              borderColor: 'primary.main',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                fontFamily: '"Noto Serif", serif',
                mb: 1,
              }}
            >
              {artist.name}
            </Typography>
            <Chip
              label={artist.category}
              size="small"
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          </Box>
        </Box>

        {/* Artist Bio */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            lineHeight: 1.6,
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.9rem',
          }}
        >
          {artist.bio}
        </Typography>

        {/* Artist Details */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LocationIcon sx={{ mr: 1, color: 'primary.main', fontSize: 20 }} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
            }}
          >
            {artist.location}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <PaletteIcon sx={{ mr: 1, color: 'primary.main', fontSize: 20 }} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
            }}
          >
            {artist.artworks.length} artwork{artist.artworks.length !== 1 ? 's' : ''}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ p: 3, pt: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Sample Artworks Preview */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.85rem',
          }}
        >
          Featured works: {artist.artworks.slice(0, 3).map(a => a.title).join(', ')}
          {artist.artworks.length > 3 && ` +${artist.artworks.length - 3} more`}
        </Typography>

        {/* View Profile Button */}
        <Button
          component={RouterLink}
          to={`/artist/${artist.id}`}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 'auto',
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            fontFamily: '"Poppins", sans-serif',
            '&:hover': {
              bgcolor: 'primary.dark',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
