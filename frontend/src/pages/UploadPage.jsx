import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  InputAdornment,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
} from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const UploadPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    yearCreated: new Date().getFullYear(),
    price: '',
    isForSale: false,
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const categories = [
    'Painting',
    'Sculpture',
    'Textile',
    'Pottery',
    'Jewelry',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.title || !formData.description || !formData.imageUrl || !formData.category) {
      setError('Please fill in all required fields');
      return false;
    }

    if (formData.isForSale && (!formData.price || parseFloat(formData.price) <= 0)) {
      setError('Please enter a valid price for artworks that are for sale');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const artworkData = {
        ...formData,
        price: formData.isForSale ? parseFloat(formData.price) : 0,
        yearCreated: parseInt(formData.yearCreated),
      };

      const response = await axios.post('/api/artworks/upload', artworkData);
      
      setSuccess('Artwork uploaded successfully!');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
      
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.response?.data?.message || 'Failed to upload artwork. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user?.isArtist) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            Access Denied
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Only artists can upload artworks. Please contact support if you believe this is an error.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 1,
              }}
            >
              Upload Your Artwork
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: '1.1rem' }}
            >
              Share your folk art with the world
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

          {/* Upload Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Basic Information */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Basic Information
                </Typography>
              </Grid>

              <Grid item xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Artwork Title *"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl fullWidth required>
                  <InputLabel>Category *</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    label="Category *"
                    onChange={handleChange}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description *"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                  placeholder="Describe your artwork, inspiration, and techniques used..."
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL *"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com/image.jpg"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UploadIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Additional Details */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Additional Details
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Year Created"
                  name="yearCreated"
                  type="number"
                  value={formData.yearCreated}
                  onChange={handleChange}
                  inputProps={{ min: 1900, max: new Date().getFullYear() }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.isForSale}
                      onChange={handleChange}
                      name="isForSale"
                      color="primary"
                    />
                  }
                  label="Artwork is for sale"
                />
              </Grid>

              {formData.isForSale && (
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Price (₹)"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    inputProps={{ min: 0, step: 100 }}
                    required
                  />
                </Grid>
              )}

              {/* Submit Button */}
              <Grid item xs={12}>
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={loading}
                    sx={{
                      px: 6,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Upload Artwork'
                    )}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default UploadPage;
