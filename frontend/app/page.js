import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:5000/api/posts", {
    cache: "no-store", // important for fresh data
  });

  const posts = await res.json();

  return (
    <div>
      <h1>Blog Feed</h1>

      {posts.length === 0 ? (
        <p>No blog posts yet.</p>
      ) : (
        posts.map((post) => (
          <Link key={post._id} href={`/blog/${post._id}`}>
            <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "10px" }}>
              <h3>{post.title}</h3>
              <p>{post.description?.substring(0, 100)}...</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
