"use client";
import { useEffect, useState } from "react";

export default function AlertHistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/history")
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error(err));
  }, []);

  const getColor = (severity) => {
    if (severity === "High") return "bg-red-500";
    if (severity === "Medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Alert History</h1>

      {history.length === 0 ? (
        <p className="text-gray-600">No past alerts available.</p>
      ) : (
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Severity</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {history.map((alert) => (
              <tr key={alert.id} className="border-b">
                <td className="px-4 py-2">{alert.date}</td>
                <td className="px-4 py-2">{alert.location}</td>
                <td className="px-4 py-2">
                  <span
                    className={`text-white px-2 py-1 rounded ${getColor(
                      alert.severity
                    )}`}
                  >
                    {alert.severity}
                  </span>
                </td>
                <td className="px-4 py-2">{alert.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
