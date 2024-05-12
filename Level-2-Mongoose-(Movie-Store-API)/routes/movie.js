const Movie = require("../models/movie");

const router = require("express").Router();

router.get("/", async (req, resp) => {
  try {
    const { movies, description, director, writter, sort = 1 } = req.query;
    const result = await Movie.find({
      $or: [
        { title: { $regex: new RegExp(movies, "i") } },
        { description: { $regex: new RegExp(description, "i") } },
        { director: { $regex: new RegExp(director, "i") } },
        { writter: { $regex: new RegExp(writter, "i") } },
      ],
    }).sort({ rating: sort });

    resp.status(200).json(result);
  } catch (error) {
    resp.status(500).json({
      message: "internal server error",
    });
  }
});

router.post("/", async (req, resp) => {
  try {
    const { title, rating, description, posterImage, director, writter } =
      req.body;
    if (!title || !rating) {
      return resp.status(400).json({
        message: "All fields are required",
      });
    }
    await Movie.create({
      title,
      rating,
      description,
      posterImage,
      director,
      writter,
    });

    resp.status(200).json({
      message: "Movie added successfully",
    });
  } catch (error) {
    resp.status(500).json({
      message: "internal server error",
    });
  }
});

router.patch("/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const { title, rating, description, posterImage, director, writter } =
      req.body;
    await Movie.findByIdAndUpdate(id, {
      title,
      rating,
      description,
      posterImage,
      director,
      writter,
    });
    resp.status(200).json({
      message: "Movie Updated successfully",
    });
  } catch (error) {
    resp.status(500).json({
      message: "internal server error",
    });
  }
});

router.delete("/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    resp.status(200).json({
      message: "Movie Deleted successfully",
    });
  } catch (error) {
    resp.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
