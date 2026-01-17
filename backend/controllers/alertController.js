const alerts = [
  { id: 1, location: "Kandy", level: "High", message: "Heavy rain expected" },
  { id: 2, location: "Nuwara Eliya", level: "Medium", message: "Possible landslide" },
  { id: 3, location: "Galle", level: "Low", message: "Stable conditions" },
];

const getAlerts = (req, res) => {
  res.json(alerts);
};

module.exports = { getAlerts };
