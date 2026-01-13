"use client";
import axios from "axios";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = async () => {
    await axios.post("http://localhost:5000/api/posts", { title, content });
    alert("Post Created!");
  };

  return (
    <div>
      <h1>Create New Post</h1>

      <input placeholder="Title" onChange={(e)=>setTitle(e.target.value)} /><br />
      <textarea placeholder="Content" onChange={(e)=>setContent(e.target.value)} /><br />

      <button onClick={submitPost}>Create</button>
    </div>
  );
}
