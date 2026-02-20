 const mongoose = require('mongoose');

const specialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageLink: { type: String, required: true },
  s3Key: { type: String, required: true }, // Important for deletions
  validUpTo: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Special', specialSchema);