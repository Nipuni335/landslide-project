import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const res = await axios.get("http://localhost:5000/api/posts");
  const posts = res.data;

  return (
    <div>
      <h1>Blog Feed</h1>
      {posts.map(post => (
        <Link key={post._id} href={`/blog/${post._id}`}>
          <div>
            <h3>{post.title}</h3>
            {posts.length === 0 ? (
  <p>No blog posts yet.</p>
) : (
  posts.map((post) => (
    <div key={post._id}>
      <h3>{post.title}</h3>
      <p>{post.description?.substring(0, 100)}...</p>
    </div>
  ))
)}

            
          </div>
        </Link>
      ))}
    </div>
  );
}
