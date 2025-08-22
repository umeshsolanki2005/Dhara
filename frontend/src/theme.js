import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Saddle Brown - earthy folk art color
      light: '#A0522D',
      dark: '#654321',
    },
    secondary: {
      main: '#FFD700', // Gold - warm Indian accent color
      light: '#FFA500', // Orange
      dark: '#FF8C00', // Dark Orange
    },
    background: {
      default: '#FFF8DC', // Cornsilk - warm background
      paper: '#FFFFFF',
    },
    // Adding Indian color palette
    indian: {
      saffron: '#FF6B35',
      maroon: '#8B0000',
      peacock: '#1E3A8A',
      gold: '#FFD700',
      orange: '#FFA500',
      brown: '#8B4513',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Noto Serif", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#8B4513',
      fontFamily: '"Noto Serif", serif',
    },
    h2: {
      fontWeight: 600,
      color: '#654321',
      fontFamily: '"Noto Serif", serif',
    },
    h3: {
      fontWeight: 600,
      color: '#8B4513',
      fontFamily: '"Noto Serif", serif',
    },
    h4: {
      fontWeight: 600,
      color: '#8B4513',
      fontFamily: '"Noto Serif", serif',
    },
    h5: {
      fontWeight: 600,
      color: '#8B4513',
      fontFamily: '"Noto Serif", serif',
    },
    h6: {
      fontWeight: 500,
      color: '#8B4513',
      fontFamily: '"Noto Serif", serif',
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"Poppins", sans-serif',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Poppins", sans-serif',
        },
      },
    },
  },
});

export default theme;
