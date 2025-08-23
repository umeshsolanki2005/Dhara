const express = require('express');
const Artwork = require('../models/Artwork');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all artworks (public)
router.get('/', async (req, res) => {
  try {
    const artworks = await Artwork.find()
      .populate('artist', 'username artistName location profileImage')
      .sort({ createdAt: -1 });
    
    res.json(artworks);
  } catch (error) {
    console.error('Get artworks error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get artwork by ID
router.get('/:id', async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id)
      .populate('artist', 'username artistName bio location profileImage');
    
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }
    
    res.json(artwork);
  } catch (error) {
    console.error('Get artwork error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Upload new artwork (protected)
router.post('/upload', auth, async (req, res) => {
  try {
    const { title, description, imageUrl, category, yearCreated, price, isForSale } = req.body;
    
    const artwork = new Artwork({
      title,
      description,
      imageUrl,
      category,
      yearCreated,
      price: isForSale ? price : 0,
      isForSale: isForSale || false,
      artist: req.user._id
    });
    
    await artwork.save();
    
    const populatedArtwork = await Artwork.findById(artwork._id)
      .populate('artist', 'username artistName location profileImage');
    
    res.status(201).json({
      message: 'Artwork uploaded successfully',
      artwork: populatedArtwork
    });
    
  } catch (error) {
    console.error('Upload artwork error:', error);
    res.status(500).json({ message: 'Server error during upload' });
  }
});

// Update artwork (protected - only by owner)
router.put('/:id', auth, async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }
    
    if (artwork.artist.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this artwork' });
    }
    
    const updatedArtwork = await Artwork.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('artist', 'username artistName location profileImage');
    
    res.json({
      message: 'Artwork updated successfully',
      artwork: updatedArtwork
    });
    
  } catch (error) {
    console.error('Update artwork error:', error);
    res.status(500).json({ message: 'Server error during update' });
  }
});

// Delete artwork (protected - only by owner)
router.delete('/:id', auth, async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }
    
    if (artwork.artist.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this artwork' });
    }
    
    await Artwork.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Artwork deleted successfully' });
    
  } catch (error) {
    console.error('Delete artwork error:', error);
    res.status(500).json({ message: 'Server error during deletion' });
  }
});

module.exports = router;
