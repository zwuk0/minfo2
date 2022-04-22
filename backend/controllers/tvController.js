const axios = require("axios");
require("dotenv").config();

exports.getAllTvShows = async (req, res) => {
  const show = req.params.show;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${show}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
};

exports.getTvDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};
exports.getTvTrailers = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}/video?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

exports.discoverTv = async (req, res) => {
  try {
    const response = await axios.get(``);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

exports.getTrending = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
};
