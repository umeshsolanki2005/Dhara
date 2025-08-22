import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  IconButton,
  Link,
  Chip,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';

// Import local images
import madhubaniImage from '../images/madhubani.jpeg';
import varliImage from '../images/Varli.jpg';
import pithoraImage from '../images/the-ritual-art-of-pithora-wall-paintings-420449_1200x1200.jpg';

const LandingPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  
  // Dhara in different Indian languages
  const dharaTranslations = [
    { lang: 'Hindi', text: 'धारा' },
    { lang: 'Tamil', text: 'தாரா' },
    { lang: 'Bengali', text: 'ধারা' },
    { lang: 'Gujarati', text: 'ધારા' },
    { lang: 'Marathi', text: 'धारा' },
    { lang: 'Kannada', text: 'ಧಾರಾ' },
    { lang: 'Telugu', text: 'ధారా' },
    { lang: 'Malayalam', text: 'ധാര' },
    { lang: 'Punjabi', text: 'ਧਾਰਾ' },
  ];

  // Local Indian artwork images with details
  const indianArtworks = [
    {
      image: madhubaniImage,
      title: 'Madhubani',
      description: 'Traditional folk art from Bihar, featuring intricate patterns and vibrant colors',
      category: 'Folk Painting',
      region: 'Bihar, India',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Madhubani_art',
    },
    {
      image: varliImage,
      title: 'Warli',
      description: 'Ancient tribal art from Maharashtra, characterized by simple geometric shapes',
      category: 'Tribal Art',
      region: 'Maharashtra, India',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Warli_painting',
    },
    {
      image: pithoraImage,
      title: 'Pithora',
      description: 'Ritual wall paintings from Gujarat, depicting tribal mythology and traditions',
      category: 'Ritual Art',
      region: 'Gujarat, India',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Pithora_painting',
    },
  ];

  // Language switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % dharaTranslations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleWikipediaClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
      {/* Background Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontFamily: '"Noto Serif", serif',
              transition: 'all 0.5s ease-in-out',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            {dharaTranslations[currentLanguage].text}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontFamily: '"Poppins", sans-serif',
              mb: 1,
            }}
          >
            {dharaTranslations[currentLanguage].lang}
          </Typography>
        </Box>

        {/* Hero Section with Indian Folk Art Background */}
        <Box
          sx={{
            background: `
              linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(139, 69, 19, 0.9) 50%, rgba(30, 58, 138, 0.9) 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="madhubani" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.15)"/><circle cx="20" cy="20" r="6" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><circle cx="20" cy="20" r="12" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/><path d="M0 20 L40 20 M20 0 L20 40" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="200" height="200" fill="url(%23madhubani)"/></svg>')
            `,
            color: 'white',
            py: 10,
            borderRadius: 4,
            mb: 6,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 70% 30%, rgba(255, 165, 0, 0.1) 0%, transparent 40%)
              `,
              zIndex: 0,
            },
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 4,
                fontFamily: '"Noto Serif", serif',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                lineHeight: 1.2,
              }}
            >
              Celebrating Indian Culture & Art
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              sx={{
                mb: 6,
                opacity: 0.95,
                fontWeight: 400,
                lineHeight: 1.6,
                fontFamily: '"Poppins", sans-serif',
                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Discover the rich heritage of Indian folk art, from Madhubani to Warli, 
              and connect with talented artists preserving our cultural traditions.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/register"
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  bgcolor: '#FFD700',
                  color: '#8B4513',
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(255, 215, 0, 0.4)',
                  '&:hover': {
                    bgcolor: '#FFA500',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.6)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/login"
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: 3,
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(255,255,255,0.2)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Sign In
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Local Indian Artwork Display Section */}
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontFamily: '"Noto Serif", serif',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Explore Indian Art Heritage
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 6,
              fontFamily: '"Poppins", sans-serif',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Discover authentic Indian folk art forms preserved and celebrated through generations
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {indianArtworks.map((artwork, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease-in-out',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 250,
                      background: `url(${artwork.image}) center/cover`,
                      position: 'relative',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 700,
                          fontFamily: '"Noto Serif", serif',
                          color: 'primary.main',
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
                        }}
                      />
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 1.6,
                      }}
                    >
                      {artwork.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'text.secondary',
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        📍 {artwork.region}
                      </Typography>
                      
                      <Button
                        size="small"
                        variant="outlined"
                        endIcon={<OpenInNewIcon />}
                        onClick={() => handleWikipediaClick(artwork.wikipediaUrl)}
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {/* Show More Button */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<OpenInNewIcon />}
              onClick={() => handleWikipediaClick('https://en.wikipedia.org/wiki/Indian_folk_art')}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 3,
                boxShadow: '0 4px 16px rgba(139, 69, 19, 0.3)',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(139, 69, 19, 0.4)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              Show More Indian Art Forms
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 8, bgcolor: 'grey.50', borderRadius: 4, mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 6,
              fontFamily: '"Noto Serif", serif',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Why Choose Dhara?
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Cultural Heritage',
                description: 'Preserve and celebrate India\'s rich artistic traditions',
                color: '#FF6B35',
                icon: '🏛️',
              },
              {
                title: 'Artist Community',
                description: 'Connect with talented folk artists from across India',
                color: '#8B4513',
                icon: '👨‍🎨',
              },
              {
                title: 'Authentic Art',
                description: 'Discover genuine traditional and contemporary Indian artwork',
                color: '#1E3A8A',
                icon: '🎨',
              },
              {
                title: 'Global Reach',
                description: 'Share Indian culture with art lovers worldwide',
                color: '#FFD700',
                icon: '🌍',
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: feature.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      fontSize: '2.5rem',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      fontFamily: '"Noto Serif", serif',
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '1rem',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Enhanced CTA Section */}
        <Box sx={{ bgcolor: 'primary.main', py: 8, borderRadius: 4, mb: 6, position: 'relative', overflow: 'hidden' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="mandala" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="10" cy="10" r="3" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23mandala)"/></svg>')
              `,
              opacity: 0.3,
            }}
          />
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', color: 'white' }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontFamily: '"Noto Serif", serif',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Ready to Explore Indian Art?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '1.1rem',
                  maxWidth: 700,
                  mx: 'auto',
                }}
              >
                Join our community and discover the beauty of Indian cultural heritage. 
                Connect with artists, explore traditional art forms, and be part of preserving our rich cultural legacy.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/register"
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    bgcolor: '#FFD700',
                    color: '#8B4513',
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(255, 215, 0, 0.4)',
                    '&:hover': {
                      bgcolor: '#FFA500',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.6)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Join Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to="/login"
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 3,
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.15)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(255,255,255,0.2)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: '#2C1810',
          color: 'white',
          py: 6,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontFamily: '"Noto Serif", serif',
                }}
              >
                Dhara
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.8,
                  lineHeight: 1.6,
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Celebrating Indian Culture & Art
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.6,
                  mt: 2,
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Preserving and promoting the rich heritage of Indian folk art and cultural traditions.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontFamily: '"Noto Serif", serif',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['About', 'Contact', 'Privacy Policy', 'Login'].map((link) => (
                  <Link
                    key={link}
                    component={RouterLink}
                    to={link === 'Login' ? '/login' : '#'}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      opacity: 0.8,
                      '&:hover': {
                        opacity: 1,
                        textDecoration: 'underline',
                      },
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontFamily: '"Noto Serif", serif',
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {[
                  { icon: FacebookIcon, color: '#1877F2' },
                  { icon: TwitterIcon, color: '#1DA1F2' },
                  { icon: InstagramIcon, color: '#E4405F' },
                  { icon: LinkedInIcon, color: '#0A66C2' },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      bgcolor: social.color,
                      color: 'white',
                      '&:hover': {
                        bgcolor: social.color,
                        opacity: 0.8,
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <social.icon />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
          
          <Box
            sx={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              mt: 4,
              pt: 4,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.6,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              © 2024 Dhara. All rights reserved. Celebrating Indian Culture & Art.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
