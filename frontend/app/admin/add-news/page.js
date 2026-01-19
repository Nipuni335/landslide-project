"use client";
import { useState } from "react";
import { useNews } from "../../../context/NewsContext"; // adjust path if needed

export default function AddNewsPage() {
  const { addNews } = useNews();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !city || !description || !date) {
      alert("Please fill in all fields.");
      return;
    }
    // Send data to context or backend
    addNews({ title, city, description, date });
    setTitle("");
    setCity("");
    setDescription("");
    setDate("");
    alert("News added successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 bg-gray-100 shadow-lg rounded-xl mt-20 border-gray-300">
      <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center ">
         Add News 
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* News Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2"><b>News Title</b></label>
          <input
            type="text"
            placeholder="Enter news title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* City Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-2"><b> City Location</b></label>
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2"><b> Description</b></label>
          <textarea
            placeholder="Enter news description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-2"><b> Date</b></label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md hover:shadow-lg"
          >
            Publish News
          </button>
        </div>
      </form>
    </div>
  );
}
