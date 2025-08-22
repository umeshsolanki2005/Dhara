import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
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
              {[
                { name: 'Home', path: '/home' },
                { name: 'Categories', path: '/home' },
                { name: 'About', path: '#' },
                { name: 'Contact', path: '#' },
              ].map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
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
                  {link.name}
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
            © 2025 Dhara. All rights reserved. Celebrating Indian Culture & Art.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
