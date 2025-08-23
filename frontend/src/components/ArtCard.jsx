import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Avatar,
  IconButton,
  Button,
  Badge,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  OpenInNew as OpenInNewIcon,
  Person as PersonIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  ShoppingCart as ShoppingCartIcon,
  Favorite as WishlistIcon,
  FavoriteBorder as WishlistBorderIcon,
  LocationOn as LocationIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const ArtCard = ({ artwork, onLike, onWishlist, onComment, onShare, onBuy }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: 'Art Lover', text: 'Beautiful traditional work!', timestamp: '2 hours ago' },
    { id: 2, user: 'Culture Enthusiast', text: 'Love the intricate details', timestamp: '1 day ago' },
  ]);

  const handleExternalLink = (url) => {
    window.open(url, '_blank');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (onLike) onLike(artwork.id, !isLiked);
  };

  const handleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    if (onWishlist) onWishlist(artwork.id, !isInWishlist);
  };

  const handleComment = () => {
    setCommentDialogOpen(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: `Check out this beautiful ${artwork.category} by ${artwork.artist}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      if (onShare) onShare(artwork.id);
    }
  };

  const handleBuy = () => {
    if (onBuy) onBuy(artwork);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: 'You',
        text: newComment,
        timestamp: 'Just now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
      setCommentDialogOpen(false);
      if (onComment) onComment(artwork.id, newComment);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
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
          image={artwork.imageUrl || artwork.image}
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
          {/* Artwork Title and Category */}
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

          {/* Price and Sale Status */}
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
                ₹{artwork.price?.toLocaleString() || artwork.price}
              </Typography>
              <Chip
                label="For Sale"
                size="small"
                color="success"
                sx={{ fontSize: '0.7rem' }}
              />
            </Box>
          )}

          {/* Artwork Description */}
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

          {/* Year Created */}
          {artwork.yearCreated && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                Created: {artwork.yearCreated}
              </Typography>
            </Box>
          )}

          {/* Artist Information */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              src={artwork.artist?.profileImage}
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
                to={`/artist/${artwork.artist?._id || artwork.artist}`}
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
                {artwork.artist?.artistName || artwork.artist?.username || 'Unknown Artist'}
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
                  {artwork.artist?.location || 'Location not specified'}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title={isLiked ? 'Unlike' : 'Like'}>
                <IconButton
                  size="small"
                  onClick={handleLike}
                  sx={{
                    color: isLiked ? 'error.main' : 'text.secondary',
                    '&:hover': {
                      color: 'error.main',
                    },
                  }}
                >
                  {isLiked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Comments">
                <IconButton
                  size="small"
                  onClick={handleComment}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Badge badgeContent={artwork.comments || 0} color="primary">
                    <CommentIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Share">
                <IconButton
                  size="small"
                  onClick={handleShare}
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
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}>
                <IconButton
                  size="small"
                  onClick={handleWishlist}
                  sx={{
                    color: isInWishlist ? 'error.main' : 'text.secondary',
                    '&:hover': {
                      color: 'error.main',
                    },
                  }}
                >
                  {isInWishlist ? <WishlistIcon fontSize="small" /> : <WishlistBorderIcon fontSize="small" />}
                </IconButton>
              </Tooltip>

              {artwork.isForSale && (
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleBuy}
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
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {artwork.likes || 0} likes • {artwork.comments || 0} comments • {artwork.shares || 0} shares
            </Typography>
            
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {new Date(artwork.createdAt).toLocaleDateString()}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Comment Dialog */}
      <Dialog
        open={commentDialogOpen}
        onClose={() => setCommentDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Comments on "{artwork.title}"
          <IconButton
            onClick={() => setCommentDialogOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              variant="outlined"
              size="small"
            />
          </Box>
          
          <List sx={{ maxHeight: 300, overflow: 'auto' }}>
            {comments.map((comment) => (
              <React.Fragment key={comment.id}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={comment.user}
                    secondary={
                      <React.Fragment>
                        <Typography component="span" variant="body2" color="text.primary">
                          {comment.text}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                          {comment.timestamp}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCommentDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddComment} variant="contained" disabled={!newComment.trim()}>
            Add Comment
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ArtCard;
