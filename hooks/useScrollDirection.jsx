import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevOffset) setDirection("down");
      else if (currentY < prevOffset) setDirection("up");
      setPrevOffset(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevOffset]);

  return direction;
}
