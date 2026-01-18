"use client";
import { useEffect, useState } from "react";

export default function AlertHistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/history") // make sure this route exists in your backend
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setHistory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching alert history:", err);
        setError("Failed to fetch alert history. Make sure your backend is running.");
        setLoading(false);
      });
  }, []);

  const getColor = (severity) => {
    if (severity === "High") return "bg-red-500";
    if (severity === "Medium") return "bg-yellow-500";
    return "bg-green-500"; // Low or unknown
  };

  if (loading) return <p className="text-gray-600">Loading alert history...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

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
              <tr key={alert.id || alert._id} className="border-b">
                <td className="px-4 py-2">{alert.date || "N/A"}</td>
                <td className="px-4 py-2">{alert.location || "Unknown"}</td>
                <td className="px-4 py-2">
                  <span
                    className={`text-white px-2 py-1 rounded ${getColor(alert.severity)}`}
                  >
                    {alert.severity || "Low"}
                  </span>
                </td>
                <td className="px-4 py-2">{alert.message || "No description"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
