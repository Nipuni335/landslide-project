"use client"; // Important for client-side fetching

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LatestNewsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:5000/api/news") // <-- must match your backend route
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch news. Make sure your backend is running.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-600">Loading news...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Latest Landslide News</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600">No news available at the moment.</p>
      ) : (
        posts.map((post) => (
          <Link key={post.id || post._id} href={`/blog/${post.id || post._id}`}>
            <div className="border rounded-lg p-4 mb-4 hover:shadow-md cursor-pointer transition duration-200">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 mt-1">
                {post.description ? post.description.substring(0, 120) : "No description"}...
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {post.date || "Date not available"} | Source: {post.source || "Unknown"}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
