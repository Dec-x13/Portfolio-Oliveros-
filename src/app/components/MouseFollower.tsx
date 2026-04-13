import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverContent, setIsOverContent] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over text content or interactive elements
      const target = e.target as HTMLElement;
      const isOverText = target.tagName === 'P' ||
                        target.tagName === 'H1' ||
                        target.tagName === 'H2' ||
                        target.tagName === 'H3' ||
                        target.tagName === 'H4' ||
                        target.tagName === 'SPAN' ||
                        target.tagName === 'LI' ||
                        target.tagName === 'A' ||
                        target.tagName === 'BUTTON' ||
                        target.closest('p, h1, h2, h3, h4, span, li, a, button');

      setIsOverContent(!!isOverText);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
        opacity: isOverContent ? 0.3 : 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        opacity: { duration: 0.2 }
      }}
    >
      <div className="w-[400px] h-[400px] bg-[#06b6d4] rounded-full opacity-20 blur-[100px]" />
    </motion.div>
  );
}
