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
router.get("/posts", getPosts);

// CREATE post
router.post("/posts", createPost);

// GET post by ID
router.get("/posts/:id", getPostById);

// DELETE post by ID
router.delete("/posts/:id", deletePost);

module.exports = router;
