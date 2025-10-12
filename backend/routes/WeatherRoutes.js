const express = require("express");
const router = express.Router();
const { getWeather } = require("../controllers/WeatherController");

router.get("/", getWeather);

module.exports = router;
