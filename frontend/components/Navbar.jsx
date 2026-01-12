"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Landslide Blog</div>
      <div className="hidden md:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/create-post">Create Post</Link>
        <Link href="/tips">Tips</Link>
        {!token && <Link href="/login">Login</Link>}
        {!token && <Link href="/register">Register</Link>}
        {token && <button onClick={handleLogout}>Logout</button>}
      </div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-500 flex flex-col items-center p-2 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/create-post">Create Post</Link>
          <Link href="/tips">Tips</Link>
          {!token && <Link href="/login">Login</Link>}
          {!token && <Link href="/register">Register</Link>}
          {token && <button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </nav>
  );
}
