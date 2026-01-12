"use client";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await axios.post("http://localhost:5000/api/auth/register", { username, password });
    alert("Registered! Now login.");
    window.location.href = "/login";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input className="w-full p-2 border mb-2" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input className="w-full p-2 border mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
    </div>
  );
}
