const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, isArtist, artistName, bio, location } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this email or username already exists' 
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
      isArtist: isArtist || false,
      artistName: isArtist ? artistName : undefined,
      bio: isArtist ? bio : undefined,
      location: isArtist ? location : undefined
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-super-secret-jwt-key-for-hackathon',
      { expiresIn: '7d' }
    );

    // Return user data (without password) and token
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
      message: 'User registered successfully',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-super-secret-jwt-key-for-hackathon',
      { expiresIn: '7d' }
    );

    // Return user data (without password) and token
    const userResponse = user.toObject();
    delete userResponse.password;

    res.json({
      message: 'Login successful',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Get current user profile
router.get('/me', auth, async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const { username, email, isArtist, artistName, bio, location, profileImage } = req.body;
    
    // Check if username or email already exists (excluding current user)
    const existingUser = await User.findOne({
      $or: [
        { email, _id: { $ne: req.user._id } },
        { username, _id: { $ne: req.user._id } }
      ]
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: 'Username or email already exists' 
      });
    }

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        username,
        email,
        isArtist: isArtist || false,
        artistName: isArtist ? artistName : undefined,
        bio: isArtist ? bio : undefined,
        location: isArtist ? location : undefined,
        profileImage: profileImage || ''
      },
      { new: true, runValidators: true }
    );

    // Return updated user data (without password)
    const userResponse = updatedUser.toObject();
    delete userResponse.password;

    res.json({
      message: 'Profile updated successfully',
      user: userResponse
    });

  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Server error during profile update' });
  }
});

module.exports = router;
