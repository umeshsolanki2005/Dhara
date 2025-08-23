const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000
  },
  imageUrl: {
    type: String,
    required: true
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    enum: ['Painting', 'Sculpture', 'Textile', 'Pottery', 'Jewelry', 'Other'],
    default: 'Other'
  },
  yearCreated: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear()
  },
  price: {
    type: Number,
    min: 0
  },
  isForSale: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for search functionality
artworkSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Artwork', artworkSchema);
