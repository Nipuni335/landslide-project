const express = require("express");
const router = express.Router();

// Dummy data for emergency notifications
const emergencyNotifications = [
  { id: 1, type: "Safety", message: "Avoid traveling near slopes." },
  { id: 2, type: "Evacuation", message: "Evacuate Nuwara Eliya immediately." },
  { id: 3, type: "Helpline", message: "Call 011-1234567 for help." },
];

// GET all emergency notifications
router.get("/", (req, res) => {
  res.json(emergencyNotifications);
});

module.exports = router;
