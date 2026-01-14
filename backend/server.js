const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // optional if using MongoDB

// Import routes
const postRoutes = require("./routes/postRoutes");
const newsRoutes = require("./routes/newsRoutes");
const alertRoutes = require("./routes/alertRoutes");
const emergencyRoutes = require("./routes/emergencyRoutes");
const historyRoutes = require("./routes/historyRoutes"); // Add history route

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (optional, only if you use DB)
connectDB();

// Routes
app.use("/api/posts", postRoutes);          // Blog posts
app.use("/api/news", newsRoutes);          // Latest news
app.use("/api/alerts", alertRoutes);       // Risk alerts
app.use("/api/emergency", emergencyRoutes); // Emergency notifications
app.use("/api/history", historyRoutes);    // Alert history

// Root test route
app.get("/", (req, res) => {
  res.send("Backend API running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
