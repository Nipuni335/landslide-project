// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// --- MongoDB Connection ---
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/landslideDB";

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- Sample News Schema ---
const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: String, default: "" },
  source: { type: String, default: "" }
});

const News = mongoose.model("News", newsSchema);

// --- API Routes ---

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Get news
app.get("/api/news", async (req, res) => {
  try {
    // For testing without DB:
    const news = [
      { id: 1, title: "Landslide Alert 1", description: "Heavy rains in region X.", date: "2026-01-18", source: "News Source A" },
      { id: 2, title: "Landslide Alert 2", description: "Evacuation advised in region Y.", date: "2026-01-17", source: "News Source B" }
    ];

    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/api/emergency", (req, res) => {
  const notifications = [
    { id: 1, message: "Evacuate Area A immediately!", type: "Evacuation" },
    { id: 2, message: "Safety measures in Region B.", type: "Safety" },
    { id: 3, message: "Call 1990 for help.", type: "Helpline" },
  ];
  res.json(notifications);
});
app.get("/api/alerts", (req, res) => {
  const alerts = [
    { id: 1, location: "Region A", message: "Heavy rainfall expected", level: "High" },
    { id: 2, location: "Region B", message: "Moderate landslide risk", level: "Medium" },
  ];
  res.json(alerts);
});
app.get("/api/history", (req, res) => {
  const history = [
    { id: 1, date: "2026-01-18", location: "Region A", severity: "High", message: "Heavy rainfall, landslide risk" },
    { id: 2, date: "2026-01-17", location: "Region B", severity: "Medium", message: "Moderate rainfall, alert" },
  ];
  res.json(history);
});
const news = [
  { id: 1, title: "Landslide Alert 1", description: "Heavy rains in region X", date: "2026-01-18", source: "News Agency" },
  { id: 2, title: "Landslide Alert 2", description: "Evacuation advised in region Y", date: "2026-01-17", source: "Local Media" },
];
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = news.find((n) => n.id === id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
