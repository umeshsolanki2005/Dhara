import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocationOn as LocationIcon,
  Palette as PaletteIcon,
} from '@mui/icons-material';

const ArtCard = ({ artwork, onFavoriteToggle, isFavorited = false }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onFavoriteToggle) {
      onFavoriteToggle(artwork._id);
    }
  };

  return (
    <Card
      component={RouterLink}
      to={`/artwork/${artwork._id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
        position: 'relative',
      }}
    >
      {/* Favorite Button */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
        }}
      >
        <Tooltip title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}>
          <IconButton
            onClick={handleFavoriteClick}
            sx={{
              bgcolor: 'rgba(255,255,255,0.9)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,1)',
              },
            }}
          >
            {isFavorited ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Artwork Image */}
      <CardMedia
        component="img"
        height="250"
        image={artwork.imageUrl}
        alt={artwork.title}
        sx={{
          objectFit: 'cover',
          bgcolor: 'grey.100',
        }}
      />

      {/* Artwork Content */}
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        {/* Title and Category */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'primary.main',
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {artwork.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PaletteIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {artwork.category}
            </Typography>
          </Box>
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {artwork.description}
        </Typography>

        {/* Artist Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              mr: 1,
              bgcolor: 'secondary.main',
              fontSize: '0.875rem',
            }}
          >
            {artwork.artist?.artistName?.charAt(0)?.toUpperCase() || 
             artwork.artist?.username?.charAt(0)?.toUpperCase() || 'A'}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {artwork.artist?.artistName || artwork.artist?.username}
            </Typography>
            {artwork.artist?.location && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationIcon sx={{ fontSize: 14, mr: 0.5, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">
                  {artwork.artist.location}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Tags and Price */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {artwork.tags?.slice(0, 2).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.75rem',
                  height: 20,
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            ))}
            {artwork.tags?.length > 2 && (
              <Chip
                label={`+${artwork.tags.length - 2}`}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.75rem',
                  height: 20,
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            )}
          </Box>
          
          {artwork.isForSale && artwork.price && (
            <Typography
              variant="h6"
              color="primary.main"
              sx={{ fontWeight: 600 }}
            >
              ₹{artwork.price.toLocaleString()}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArtCard;
