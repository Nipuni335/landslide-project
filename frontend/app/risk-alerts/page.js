"use client";
import { useEffect, useState } from "react";

export default function RiskAlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/alerts") // Make sure backend route exists
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAlerts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching alerts:", err);
        setError("Failed to fetch alerts. Is your backend running?");
        setLoading(false);
      });
  }, []);

  const getColor = (level) => {
    if (level === "High") return "bg-red-500";
    if (level === "Medium") return "bg-yellow-500";
    return "bg-green-500"; // Low or unknown
  };

  if (loading) return <p className="text-gray-600">Loading alerts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Risk Alerts</h1>

      {alerts.length === 0 ? (
        <p className="text-gray-600">No current alerts.</p>
      ) : (
        alerts.map((alert) => (
          <div
            key={alert.id || alert._id} // safe key
            className="border rounded-lg p-4 mb-4 flex justify-between items-center hover:shadow-md transition"
          >
            <div>
              <p className="font-semibold">{alert.location || "Unknown location"}</p>
              <p className="text-gray-600 text-sm">{alert.message || "No message"}</p>
            </div>
            <span
              className={`text-white px-3 py-1 rounded ${getColor(alert.level)}`}
            >
              {alert.level || "Low"}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
