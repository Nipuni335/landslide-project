// routes/postRoutes.js
const express = require("express");
const router = express.Router();

const {
  getPosts,
  createPost,
  getPostById,
  deletePost,
} = require("../controllers/postController");

// GET all posts
router.get("/", getPosts);

// CREATE post
router.post("/", createPost);

// GET post by ID
router.get("/:id", getPostById);

// DELETE post by ID
router.delete("/:id", deletePost);

module.exports = router;
