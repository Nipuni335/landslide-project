"use client";
import { useEffect, useState } from "react";

export default function BreakingNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Latest Landslide News</h2>
      {news.map(item => (
        <div key={item.id} className="border-b py-2">
          <p className="font-semibold">{item.title} - {item.location}</p>
          <p className="text-gray-600 text-sm">{item.description}</p>
          <p className="text-gray-400 text-xs">{item.date} | Source: {item.source}</p>
        </div>
      ))}
    </div>
  );
}
