const Post = require("../models/Post");

// Create Post
exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Fetch All Posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

// Fetch Single Post
exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};
