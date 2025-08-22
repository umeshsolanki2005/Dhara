const express = require('express');
const User = require('../models/User');
const Artwork = require('../models/Artwork');

const router = express.Router();

// Get all artists
router.get('/', async (req, res) => {
  try {
    const artists = await User.find({ isArtist: true })
      .select('username artistName bio location profileImage createdAt')
      .sort({ createdAt: -1 });
    
    res.json(artists);
  } catch (error) {
    console.error('Get artists error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get artist by ID with their artworks
router.get('/:id', async (req, res) => {
  try {
    const artist = await User.findById(req.params.id)
      .select('username artistName bio location profileImage createdAt');
    
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    
    if (!artist.isArtist) {
      return res.status(400).json({ message: 'User is not an artist' });
    }
    
    const artworks = await Artwork.find({ artist: req.params.id })
      .sort({ createdAt: -1 });
    
    res.json({
      artist,
      artworks
    });
    
  } catch (error) {
    console.error('Get artist error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get artist's artworks
router.get('/:id/artworks', async (req, res) => {
  try {
    const artist = await User.findById(req.params.id);
    
    if (!artist || !artist.isArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    
    const artworks = await Artwork.find({ artist: req.params.id })
      .sort({ createdAt: -1 });
    
    res.json(artworks);
    
  } catch (error) {
    console.error('Get artist artworks error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
