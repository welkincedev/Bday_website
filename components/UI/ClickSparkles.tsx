"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickParticle {
  id: number;
  x: number;
  y: number;
  icon: string;
}

export default function ClickSparkles() {
  const [particles, setParticles] = useState<ClickParticle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const icons = ["💖", "✨", "🌸", "⭐", "💕", "🍀"];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];

      const newParticle: ClickParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        icon: randomIcon,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0.5, x: p.x - 12, y: p.y - 12 }}
            animate={{
              opacity: 0,
              scale: 1.5,
              y: p.y - 60,
              x: p.x + (Math.random() * 40 - 20),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-lg select-none"
          >
            {p.icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
