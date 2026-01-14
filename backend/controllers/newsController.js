// controllers/newsController.js
const news = [
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

const getNews = (req, res) => {
  res.json(news);
};

module.exports = { getNews };
