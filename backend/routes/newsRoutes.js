const express = require("express");
const {
  getAllNews,
  getSingleNews,
  createNews,
} = require("../controllers/newsController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllNews);
router.get("/:id", getSingleNews);

// 🔒 Admin only
router.post("/", authMiddleware, createNews);

module.exports = router;
