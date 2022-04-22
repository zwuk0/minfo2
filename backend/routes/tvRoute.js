const express = require("express");
const router = express.Router();
const tvController = require("../controllers/tvController");

router.get("/tv/trending", tvController.getTrending);
router.get("/tv/:show", tvController.getAllTvShows);
router.get("/tv/:id", tvController.getTvDetails);
router.get("/tv/trailer/:id", tvController.getTvTrailers);

module.exports = router;
