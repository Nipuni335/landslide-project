import Link from "next/link";

export default async function LatestNewsPage() {
  let news = [];

  try {
    // Fetch news from backend
    const res = await fetch("http://localhost:5000/api/news", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch news");
    news = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Latest Landslide News</h1>

      {news.length === 0 ? (
        <p>No news available.</p>
      ) : (
        news.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg p-4 mb-4 hover:shadow-md transition cursor-pointer bg-white"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-1">
              {item.description.length > 120
                ? item.description.substring(0, 120) + "..."
                : item.description}
            </p>

            {/* Read More link */}
            <Link
              href={`/news/${item._id}`}
              className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Read More
            </Link>

            <p className="text-gray-400 text-sm mt-2">
              {item.date} | Source: {item.source}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
