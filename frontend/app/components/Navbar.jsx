"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth check

  const linkClass = (path) =>
    pathname === path ? "text-yellow-400 font-semibold" : "hover:text-yellow-400";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">
        <Link href="/">Landslide Dashboard</Link>
      </h1>

      <ul className="flex gap-6 items-center">
        <li><Link href="/" className={linkClass("/")}>Home</Link></li>
        <li><Link href="/posts" className={linkClass("/posts")}>Latest News</Link></li>
        <li><Link href="/risk-alerts" className={linkClass("/risk-alerts")}>Risk Alerts</Link></li>
        <li><Link href="/emergency" className={linkClass("/emergency")}>Emergency Info</Link></li>
        <li><Link href="/history" className={linkClass("/history")}>Alert History</Link></li>
        <li><Link href="/about" className={linkClass("/about")}>About</Link></li>
        

        {/* Show login only if not logged in */}
        {!isLoggedIn && (
  <li>
    <Link
      href="/admin/login"
      className="bg-yellow-400 text-gray-900 px-3 py-1 rounded hover:bg-yellow-500"
    >
      Login
    </Link>
  </li>
)}

        {/* Example: Show admin links only if logged in */}
        {isLoggedIn && (
          <li>
            <Link href="/admin" className={linkClass("/admin")}>
              Admin Panel
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
