"use client";
import { useEffect, useState } from "react";

export default function EmergencyPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/emergency") // <-- make sure this matches your backend
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setNotifications(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching emergency notifications:", err);
        setError("Failed to fetch notifications. Make sure the backend is running.");
        setLoading(false);
      });
  }, []);

  const getColor = (type) => {
    if (type === "Evacuation") return "bg-red-500";
    if (type === "Safety") return "bg-yellow-500";
    if (type === "Helpline") return "bg-green-500";
    return "bg-gray-500";
  };

  if (loading) return <p className="text-gray-600">Loading notifications...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Emergency Notifications</h1>

      {notifications.length === 0 ? (
        <p className="text-gray-600">No notifications at this time.</p>
      ) : (
        notifications.map((note) => (
          <div
            key={note.id || note._id} // <-- safe key
            className={`border rounded-lg p-4 mb-4 flex justify-between items-center ${getColor(
              note.type
            )} text-white`}
          >
            <p>{note.message || "No message"}</p>
            <span className="text-sm font-semibold">{note.type || "Unknown"}</span>
          </div>
        ))
      )}
    </div>
  );
}
