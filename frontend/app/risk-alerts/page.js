"use client";
import { useEffect, useState } from "react";

export default function RiskAlertsPage() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch((err) => console.error(err));
  }, []);

  const getColor = (level) => {
    if (level === "High") return "bg-red-500";
    if (level === "Medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Risk Alerts</h1>

      {alerts.length === 0 ? (
        <p className="text-gray-600">No current alerts.</p>
      ) : (
        alerts.map((alert) => (
          <div
            key={alert.id}
            className="border rounded-lg p-4 mb-4 flex justify-between items-center hover:shadow-md transition"
          >
            <div>
              <p className="font-semibold">{alert.location}</p>
              <p className="text-gray-600 text-sm">{alert.message}</p>
            </div>
            <span
              className={`text-white px-3 py-1 rounded ${getColor(alert.level)}`}
            >
              {alert.level}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
