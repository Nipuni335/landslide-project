const express = require("express");
const router = express.Router();
const { getNews } = require("../controllers/newsController");

// GET all news
router.get("/", getNews);

module.exports = router;
