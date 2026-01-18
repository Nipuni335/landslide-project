"use client"; // Important: this is a client-side context
import { createContext, useState, useContext } from "react";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [newsList, setNewsList] = useState([]); // store all news here

  const addNews = (title, description) => {
    const newNews = {
      id: Date.now(), // simple unique id
      title,
      description,
    };
    setNewsList([newNews, ...newsList]); // newest first
  };

  return (
    <NewsContext.Provider value={{ newsList, addNews }}>
      {children}
    </NewsContext.Provider>
  );
}

// Custom hook for easy usage
export const useNews = () => useContext(NewsContext);
