const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  description: String,
  posterImage: String,
  director: String,
  writter: String,
});

module.exports = mongoose.model("Movie", movieSchema);
