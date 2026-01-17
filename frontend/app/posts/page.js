import Link from "next/link";

export default async function LatestNewsPage() {
  let news = [];

  try {
    const res = await fetch("http://localhost:5000/api/news", {
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Server response:", text);
      throw new Error("Failed to fetch news");
    }
    news = await res.json();
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Latest Landslide News</h1>

      {news.length === 0 ? (
        <p className="text-gray-600">No news available at the moment.</p>
      ) : (
        news.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 mb-4 hover:shadow-md transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <p className="text-gray-400 text-sm mt-1">
              {item.date} | Source: {item.source}
            </p>
            <Link
              href={`/news/${item.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read more
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
