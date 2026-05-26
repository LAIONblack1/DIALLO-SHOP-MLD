import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  if (!visible) return null;
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-24 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      <FaArrowUp />
    </button>
  );
}
