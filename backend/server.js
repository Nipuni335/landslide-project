const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.use("/api/posts", postRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
