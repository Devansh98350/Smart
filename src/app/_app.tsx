import "./globals.css";
import type { AppProps } from "next/app";
import Navbar from "../app/components/Navbar";
import Blog from "../app/components/Blog";
import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents server-side rendering issues
  }
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Component {...pageProps} />} />
        <Route path="/blog" element={<Blog />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default MyApp;
