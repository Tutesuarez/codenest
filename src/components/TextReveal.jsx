"use client"; // Necesario en Next.js App Router para usar efectos en el cliente
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RevealText = ({ children, delay = 0.2, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(children);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [children]);

  return (
    <motion.div
      id={children}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealText;
