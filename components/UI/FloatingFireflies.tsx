"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingFireflies() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    // Generate 18 floating golden fireflies with random positions & speed
    const list: Firefly[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage X
      y: Math.random() * 100, // percentage Y
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 12 + 10, // 10s to 22s float cycle
      delay: Math.random() * 5,
    }));
    setFireflies(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {fireflies.map((fly) => (
        <motion.div
          key={fly.id}
          className="absolute rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]"
          style={{
            left: `${fly.x}%`,
            top: `${fly.y}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -50, -100, -30, 0],
            opacity: [0.2, 0.8, 0.3, 0.9, 0.2],
            scale: [1, 1.4, 0.8, 1.3, 1],
          }}
          transition={{
            duration: fly.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: fly.delay,
          }}
        />
      ))}
    </div>
  );
}
