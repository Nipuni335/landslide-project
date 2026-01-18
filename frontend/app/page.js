import Link from "next/link";
import { useNews } from "../context/NewsContext";

export default async function LatestNewsPage() {
  let posts = [];

  // ✅ Add frontend context fallback
  const { newsList } = useNews?.() || {}; 
  if (newsList && newsList.length > 0) posts = newsList;

  try {
    const res = await fetch("http://localhost:5000/api/posts", {
      cache: "no-store", // fetch fresh data
    });

    // Check if response is OK
    if (!res.ok) {
      const text = await res.text();
      console.error("Server response:", text);
      throw new Error("Failed to fetch posts");
    }

    posts = await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Latest Landslide News</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600">No news available at the moment.</p>
      ) : (
        posts.map((post) => (
          <Link key={post._id} href={`/blog/${post._id}`}>
            <div className="border rounded-lg p-4 mb-4 hover:shadow-md cursor-pointer transition duration-200">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 mt-1">{post.description?.substring(0, 120)}...</p>
              <p className="text-gray-400 text-sm mt-1">
                {post.date} | Source: {post.source || "Unknown"}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
