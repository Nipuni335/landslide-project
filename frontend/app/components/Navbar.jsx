"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Function to determine link style based on current path
  const linkClass = (path) =>
    pathname === path
      ? "text-yellow-400 font-semibold" // Active link
      : "hover:text-yellow-400";        // Non-active link hover

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Site Title */}
      <h1 className="text-2xl font-bold">
        <Link href="/">Landslide Blog</Link>
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li>
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
        </li>

        <li>
          <Link href="/posts" className={linkClass("/posts")}>
            Posts
          </Link>
        </li>

        <li>
          <Link href="/create" className={linkClass("/create")}>
            Add Post
          </Link>
        </li>

        <li>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
