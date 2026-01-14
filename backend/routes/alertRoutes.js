const express = require("express");
const router = express.Router();

// Dummy data for risk alerts
const alerts = [
  { id: 1, location: "Kandy", level: "High", message: "Heavy rain expected" },
  { id: 2, location: "Nuwara Eliya", level: "Medium", message: "Possible landslide" },
];

// GET all alerts
router.get("/", (req, res) => {
  res.json(alerts);
});

module.exports = router;
