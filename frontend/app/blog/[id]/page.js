import axios from "axios";

export default async function SinglePost(props) {
  // ✅ unwrap params (Next.js 16 fix)
  const params = await props.params;
  const id = params.id;

  // ✅ fetch single post
  const res = await axios.get(
    `http://localhost:5000/api/posts/${id}`
  );
  const post = res.data;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <small>📍 {post.location}</small>
    </div>
  );
}
