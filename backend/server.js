const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/posts", postRoutes);

app.listen(process.env.PORT, () => console.log("Server running..."));
