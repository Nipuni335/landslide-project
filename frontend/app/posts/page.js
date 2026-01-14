import Link from "next/link";

// async server component
export default async function PostsPage() {
  const res = await fetch("http://localhost:5000/api/posts", {
    cache: "no-store", // ensures fresh data on every request
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Server response:", text);
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <Link key={post._id} href={`/blog/${post._id}`}>
            <div className="border rounded-lg p-4 mb-4 hover:shadow-md cursor-pointer transition">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-1">
                {post.description?.substring(0, 120)}...
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
