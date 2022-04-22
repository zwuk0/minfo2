const express = require("express");
const router = express.Router();
const homeController = require("../controllers/movieController");

router.get("/movie/trending", homeController.getTrending);
router.get("/movie/discover", homeController.discoverMovie);
router.get("/movie/:show", homeController.getAllMovie);
router.get("/movie/:id", homeController.getMovieDetails);
router.get("/movie/:id/video", homeController.getMovieTrailer);
router.get("/movie/:id/reviews", homeController.getReviews);
router.get("/movie/:id/recommendations", homeController.getRecommendations);
router.get("/movie/:id/similar", homeController.getSimilar);

module.exports = router;
