"use client";
import { useEffect, useState } from "react";

export default function EmergencyPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/emergency")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.error(err));
  }, []);

  const getColor = (type) => {
    if (type === "Evacuation") return "bg-red-500";
    if (type === "Safety") return "bg-yellow-500";
    if (type === "Helpline") return "bg-green-500";
    return "bg-gray-500";
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Emergency Notifications</h1>

      {notifications.length === 0 ? (
        <p className="text-gray-600">No notifications at this time.</p>
      ) : (
        notifications.map((note) => (
          <div
            key={note.id}
            className={`border rounded-lg p-4 mb-4 flex justify-between items-center ${getColor(
              note.type
            )} text-white`}
          >
            <p>{note.message}</p>
            <span className="text-sm font-semibold">{note.type}</span>
          </div>
        ))
      )}
    </div>
  );
}
