import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Alert,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  LocationOn as LocationIcon,
  Palette as PaletteIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const UserProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    isArtist: false,
    artistName: '',
    bio: '',
    location: '',
    profileImage: '',
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userArtworks, setUserArtworks] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [artworkToDelete, setArtworkToDelete] = useState(null);

  useEffect(() => {
    if (user) {
      setProfileData({
        username: user.username || '',
        email: user.email || '',
        isArtist: user.isArtist || false,
        artistName: user.artistName || '',
        bio: user.bio || '',
        location: user.location || '',
        profileImage: user.profileImage || '',
      });
      fetchUserArtworks();
    }
  }, [user]);

  const fetchUserArtworks = async () => {
    if (!user?.isArtist) return;
    
    try {
      const response = await axios.get('/api/artworks');
      const userArtworks = response.data.filter(artwork => 
        artwork.artist._id === user._id || artwork.artist === user._id
      );
      setUserArtworks(userArtworks);
    } catch (error) {
      console.error('Error fetching user artworks:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData({
      ...profileData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.put('/api/auth/profile', profileData);
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
      // Update the user context if needed
      window.location.reload(); // Simple refresh for now
    } catch (err) {
      console.error('Update error:', err);
      setError(err.response?.data?.message || 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setProfileData({
      username: user.username || '',
      email: user.email || '',
      isArtist: user.isArtist || false,
      artistName: user.artistName || '',
      bio: user.bio || '',
      location: user.location || '',
      profileImage: user.profileImage || '',
    });
    setIsEditing(false);
    setError('');
  };

  const handleDeleteArtwork = async () => {
    if (!artworkToDelete) return;
    
    try {
      await axios.delete(`/api/artworks/${artworkToDelete._id}`);
      setSuccess('Artwork deleted successfully!');
      setDeleteDialogOpen(false);
      setArtworkToDelete(null);
      fetchUserArtworks();
    } catch (error) {
      setError('Failed to delete artwork. Please try again.');
    }
  };

  const openDeleteDialog = (artwork) => {
    setArtworkToDelete(artwork);
    setDeleteDialogOpen(true);
  };

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="error">Please log in to view your profile.</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: '"Noto Serif", serif',
            }}
          >
            My Profile
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Manage your account and showcase your work
          </Typography>
        </Box>

        {/* Alerts */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {success}
          </Alert>
        )}

        <Grid container spacing={4}>
          {/* Profile Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: 'fit-content' }}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar
                  src={profileData.profileImage}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    border: '4px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <PersonIcon sx={{ fontSize: 60 }} />
                </Avatar>
                
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {profileData.username}
                </Typography>
                
                {profileData.isArtist && (
                  <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600 }}>
                    Artist
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                {!isEditing ? (
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={() => setIsEditing(true)}
                    fullWidth
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      startIcon={<SaveIcon />}
                      onClick={handleSave}
                      disabled={loading}
                      sx={{ flex: 1 }}
                    >
                      {loading ? <CircularProgress size={20} /> : 'Save'}
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                      sx={{ flex: 1 }}
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </Box>
            </Paper>
          </Grid>

          {/* Profile Details */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Profile Information
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={profileData.username}
                    onChange={handleChange}
                    disabled={!isEditing}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    required
                    type="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={profileData.isArtist}
                        onChange={handleChange}
                        name="isArtist"
                        disabled={!isEditing}
                        color="primary"
                      />
                    }
                    label="I am an artist"
                  />
                </Grid>

                {profileData.isArtist && (
                  <>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Artist Name"
                        name="artistName"
                        value={profileData.artistName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Your professional artist name"
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={profileData.location}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="City, State, Country"
                        InputProps={{
                          startAdornment: (
                            <LocationIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Bio"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleChange}
                        disabled={!isEditing}
                        multiline
                        rows={4}
                        placeholder="Tell us about yourself and your art..."
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Profile Image URL"
                        name="profileImage"
                        value={profileData.profileImage}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="https://example.com/image.jpg"
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* User's Artworks (if artist) */}
        {user.isArtist && (
          <Box sx={{ mt: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                My Artworks
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => navigate('/upload')}
                sx={{ fontWeight: 600 }}
              >
                Upload New Artwork
              </Button>
            </Box>

            {userArtworks.length > 0 ? (
              <Grid container spacing={3}>
                {userArtworks.map((artwork) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={artwork._id}>
                    <Card sx={{ height: '100%', position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={artwork.imageUrl}
                        alt={artwork.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {artwork.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {artwork.description.length > 100 
                            ? `${artwork.description.substring(0, 100)}...` 
                            : artwork.description
                          }
                        </Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="caption" color="text.secondary">
                            {artwork.category} • {artwork.yearCreated}
                          </Typography>
                          
                          {isEditing && (
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => openDeleteDialog(artwork)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          )}
                        </Box>

                        {artwork.isForSale && (
                          <Typography variant="h6" color="primary.main" sx={{ mt: 1, fontWeight: 600 }}>
                            ₹{artwork.price.toLocaleString()}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                  You haven't uploaded any artworks yet
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => navigate('/upload')}
                >
                  Upload Your First Artwork
                </Button>
              </Paper>
            )}
          </Box>
        )}

        {/* Logout Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={logout}
            sx={{ fontWeight: 600 }}
          >
            Logout
          </Button>
        </Box>
      </Container>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Artwork</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{artworkToDelete?.title}"? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteArtwork} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserProfilePage;
