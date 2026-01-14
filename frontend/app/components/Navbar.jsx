"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const linkClass = (path) =>
    pathname === path ? "text-yellow-400 font-semibold" : "hover:text-yellow-400";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold"><Link href="/">Landslide Dashboard</Link></h1>
      <ul className="flex gap-6">
        <li><Link href="/" className={linkClass("/")}>Home</Link></li>
        <li><Link href="/posts" className={linkClass("/posts")}>Latest News</Link></li>
        <li><Link href="/risk-alerts" className={linkClass("/risk-alerts")}>Risk Alerts</Link></li>
        <li><Link href="/emergency" className={linkClass("/emergency")}>Emergency Info</Link></li>
        <li><Link href="/history" className={linkClass("/history")}>Alert History</Link></li>
        <li><Link href="/about" className={linkClass("/about")}>About</Link></li>
      </ul>
    </nav>
  );
}
