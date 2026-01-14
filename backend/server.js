const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const newsRoutes = require("./routes/newsRoutes");
const alertRoutes = require("./routes/alertRoutes");
const emergencyRoutes = require("./routes/emergencyRoutes");


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/emergency", emergencyRoutes);


// Test route
app.get("/posts", (req, res) => {
  res.send("API is running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
