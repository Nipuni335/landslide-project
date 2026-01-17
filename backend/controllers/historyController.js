const history = [
  { id: 1, date: "2026-01-10", location: "Kandy", severity: "High", message: "Landslide blocked roads." },
  { id: 2, date: "2026-01-08", location: "Nuwara Eliya", severity: "Medium", message: "Minor landslide near river." },
  { id: 3, date: "2026-01-05", location: "Galle", severity: "Low", message: "Soil instability warning." },
];

const getHistory = (req, res) => {
  res.json(history);
};

module.exports = { getHistory };
