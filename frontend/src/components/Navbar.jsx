import React, { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Upload as UploadIcon,
  Home as HomeIcon,
  Favorite as WishlistIcon,
  Map as MapIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  // Mock wishlist count - in real app this would come from context/state
  const wishlistCount = 3;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    handleMobileMenuClose();
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleMenuClose();
    handleMobileMenuClose();
  };

  const handleUploadClick = () => {
    navigate('/upload');
    handleMenuClose();
    handleMobileMenuClose();
  };

  const handleHomeClick = () => {
    navigate('/home');
    handleMenuClose();
    handleMobileMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'white',
        color: 'primary.main',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo/Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              fontFamily: '"Noto Serif", serif',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              letterSpacing: '.1rem',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            Dhara
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {user && (
              <>
                <Button
                  component={RouterLink}
                  to="/home"
                  startIcon={<HomeIcon />}
                  sx={{
                    color: 'primary.main',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontFamily: '"Poppins", sans-serif',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  Home
                </Button>
                
                <Button
                  component={RouterLink}
                  to="/wishlist"
                  startIcon={
                    <Badge badgeContent={wishlistCount} color="error">
                      <WishlistIcon />
                    </Badge>
                  }
                  sx={{
                    color: 'primary.main',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontFamily: '"Poppins", sans-serif',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  Wishlist
                </Button>
                
                <Button
                  component={RouterLink}
                  to="/map"
                  startIcon={<MapIcon />}
                  sx={{
                    color: 'primary.main',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontFamily: '"Poppins", sans-serif',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  Find Near Me
                </Button>
                
                {user.isArtist && (
                  <Button
                    component={RouterLink}
                    to="/upload"
                    startIcon={<UploadIcon />}
                    sx={{
                      color: 'primary.main',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontFamily: '"Poppins", sans-serif',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  >
                    Upload Art
                  </Button>
                )}
              </>
            )}
          </Box>
        )}

        {/* User Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {user ? (
            <>
              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  onClick={handleMobileMenuOpen}
                  sx={{ color: 'primary.main' }}
                >
                  <MenuIcon />
                </IconButton>
              )}

              {/* User Avatar */}
              <IconButton
                onClick={handleMenuOpen}
                sx={{ color: 'primary.main' }}
              >
                {user.profileImage ? (
                  <Avatar
                    src={user.profileImage}
                    sx={{ width: 32, height: 32 }}
                  />
                ) : (
                  <AccountCircleIcon />
                )}
              </IconButton>

              {/* Desktop User Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    borderRadius: 2,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <MenuItem onClick={handleProfileClick}>
                  <PersonIcon sx={{ mr: 2, color: 'primary.main' }} />
                  Profile
                </MenuItem>
                {user.isArtist && (
                  <MenuItem onClick={handleUploadClick}>
                    <UploadIcon sx={{ mr: 2, color: 'primary.main' }} />
                    Upload Art
                  </MenuItem>
                )}
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 2, color: 'error.main' }} />
                  Logout
                </MenuItem>
              </Menu>

              {/* Mobile Menu */}
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleMobileMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    borderRadius: 2,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <MenuItem onClick={handleHomeClick}>
                  <HomeIcon sx={{ mr: 2, color: 'primary.main' }} />
                  Home
                </MenuItem>
                <MenuItem onClick={() => { navigate('/wishlist'); handleMobileMenuClose(); }}>
                  <Badge badgeContent={wishlistCount} color="error">
                    <WishlistIcon sx={{ mr: 2, color: 'primary.main' }} />
                  </Badge>
                  Wishlist
                </MenuItem>
                <MenuItem onClick={() => { navigate('/map'); handleMobileMenuClose(); }}>
                  <MapIcon sx={{ mr: 2, color: 'primary.main' }} />
                  Find Near Me
                </MenuItem>
                <MenuItem onClick={handleProfileClick}>
                  <PersonIcon sx={{ mr: 2, color: 'primary.main' }} />
                  Profile
                </MenuItem>
                {user.isArtist && (
                  <MenuItem onClick={handleUploadClick}>
                    <UploadIcon sx={{ mr: 2, color: 'primary.main' }} />
                    Upload Art
                  </MenuItem>
                )}
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 2, color: 'error.main' }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                component={RouterLink}
                to="/login"
                variant="outlined"
                sx={{
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
                Login
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontFamily: '"Poppins", sans-serif',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
