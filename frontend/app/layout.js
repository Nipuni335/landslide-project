// frontend/app/layout.js

import "./globals.css";           // Tailwind CSS and global styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { NewsProvider } from "../context/NewsContext";

export const metadata = {
  title: "Landslide Blog",
  description: "Landslide awareness and reports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <NewsProvider> {/* <-- Wrap the app with NewsProvider */}

          {/* Navigation Bar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow p-6">{children}</main>

          {/* Footer */}
          <Footer />

        </NewsProvider>
      </body>
    </html>
  );
}
