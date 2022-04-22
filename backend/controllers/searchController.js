const axios = require("axios");
require("dotenv").config();

exports.searchAll = async (req, res) => {
  const query = req.params.query;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
};
