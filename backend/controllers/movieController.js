const axios = require("axios");
require("dotenv").config();
exports.getAllMovie = async (req, res) => {
  const show = req.params.show;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${show}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
};

exports.getTrending = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
};

exports.getMovieDetails = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
};

exports.getMovieTrailer = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
};

exports.discoverMovie = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&primary_release_date.gte=2022-04-12&with_original_language=en`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

exports.getReviews = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};
exports.getRecommendations = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en&page=1`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};
exports.getSimilar = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=100`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};
