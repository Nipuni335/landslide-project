import useSWR from "swr";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: posts, error } = useSWR("/api/posts", fetcher);

  if (error) return <div>Failed to load posts</div>;
  if (!posts) return <div>Loading...</div>;

  return (
    <div>
      <h1>Landslide Blog</h1>
      <Link href="/create">Create New Post</Link>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
          <Link href={`/posts/${post._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
