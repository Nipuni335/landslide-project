import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post._id}`}>
      <div className="border p-4 rounded shadow hover:shadow-lg cursor-pointer transition">
        <h2 className="font-bold text-xl">{post.title}</h2>
        <p className="text-gray-700 mt-2">{post.content.substring(0, 100)}...</p>
      </div>
    </Link>
  );
}
