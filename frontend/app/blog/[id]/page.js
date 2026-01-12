import axios from "axios";

export default async function SinglePost({ params }) {
  const res = await axios.get(`http://localhost:5000/api/posts/${params.id}`);
  const post = res.data;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
