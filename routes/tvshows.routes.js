const { Router } = require("express");
const router = Router();
const {
  getTvs,
  getTvsByGenre,
  getTvsByGenreAndRate,
  getTvsByCountry,
  getTvsByCountryAndWeight,
  getTvsByNetwork,
} = require("../controllers/tvshows.controller");

router.get("/", getTvs);
router.get("/genre", getTvsByGenre);
router.get("/rating", getTvsByGenreAndRate);
router.get("/country", getTvsByCountry);
router.get("/weight", getTvsByCountryAndWeight);
router.get("/network", getTvsByNetwork);

module.exports = router;
