import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }) {
  const { id } = params; // Get ID from URL
  let newsItem = null;

  try {
    const res = await fetch("http://localhost:5000/api/news", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch news");
    const news = await res.json();

    // Find the news by _id
    newsItem = news.find((item) => item._id === id);

    if (!newsItem) return notFound(); // 404 if not found
  } catch (error) {
    console.error(error);
    return <p>Error loading news.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-gray-400 text-sm mb-4">
        {newsItem.date} | Source: {newsItem.source}
      </p>
      <p className="text-gray-700">{newsItem.description}</p>
    </div>
  );
}
