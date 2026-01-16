// TEMP DATA (later replace with MongoDB)
let news = [
  {
    id: 1,
    title: "Landslide in Kandy",
    location: "Kandy",
    date: "2026-01-14",
    description: "Heavy rain caused a landslide in the central hills...",
    source: "Disaster Management Centre",
    credibility: "Verified",
  },
  {
    id: 2,
    title: "Mudslide in Nuwara Eliya",
    location: "Nuwara Eliya",
    date: "2026-01-13",
    description: "Evacuations advised due to unstable soil...",
    source: "Weather Department",
    credibility: "Verified",
  },
];

// ✅ GET ALL NEWS
exports.getAllNews = (req, res) => {
  res.json(news);
};

// ✅ GET SINGLE NEWS BY ID
exports.getSingleNews = (req, res) => {
  const id = parseInt(req.params.id);
  const singleNews = news.find((item) => item.id === id);

  if (!singleNews) {
    return res.status(404).json({ message: "News not found" });
  }

  res.json(singleNews);
};

// ✅ CREATE NEWS (ADMIN)
exports.createNews = (req, res) => {
  const newNews = {
    id: news.length + 1,
    ...req.body,
  };

  news.push(newNews);
  res.status(201).json(newNews);
};
