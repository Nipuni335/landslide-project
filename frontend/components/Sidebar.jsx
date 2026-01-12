import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 min-h-screen">
      <h2 className="font-bold mb-4 text-lg">Admin Panel</h2>
      <ul className="flex flex-col gap-2">
        <li><Link href="/admin/posts" className="hover:text-blue-500">All Posts</Link></li>
        <li><Link href="/admin/users" className="hover:text-blue-500">Users</Link></li>
        <li><Link href="/admin/tips" className="hover:text-blue-500">Tips</Link></li>
      </ul>
    </div>
  );
}
