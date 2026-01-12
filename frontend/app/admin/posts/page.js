"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setPosts(res.data));
  }, []);

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setPosts(posts.filter(p => p._id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Posts</h1>
        {posts.map(post => (
          <div key={post._id} className="flex justify-between border p-2 mb-2 rounded">
            <div>{post.title}</div>
            <button onClick={() => deletePost(post._id)} className="bg-red-500 text-white px-2 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
