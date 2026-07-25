"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate 26 bubbles on client mount to make the background rich and full
    const generatedBubbles = Array.from({ length: 26 }).map((_, i) => {
      const leftStart = Math.random() * 100; // 0 to 100vw
      const isBlue = Math.random() > 0.5; // 50% blue, 50% peach
      return {
        id: i,
        size: Math.floor(Math.random() * 95) + 50, // 50px to 145px for higher visibility
        left: leftStart,
        duration: Math.random() * 10 + 12, // 12s to 22s
        delay: Math.random() * 10, // 0s to 10s
        isBlue,
        xSway: [
          `${leftStart}vw`,
          `${leftStart + (Math.random() * 12 - 6)}vw`,
          `${leftStart + (Math.random() * 12 - 6)}vw`,
          `${leftStart}vw`
        ]
      };
    });
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ y: "105vh", x: `${bubble.left}vw`, scale: 0.8, opacity: 0 }}
          animate={{
            y: "-25vh",
            x: bubble.xSway,
            scale: [0.8, 1.15, 0.9, 1],
            opacity: [0, 0.85, 0.85, 0], // Higher opacity for increased visibility
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: bubble.size,
            height: bubble.size,
          }}
          className={`absolute rounded-full pointer-events-none border-2 shadow-[inset_0_3px_10px_rgba(255,255,255,0.9),0_12px_24px_rgba(0,0,0,0.06)] ${
            bubble.isBlue
              ? "bg-gradient-to-tr from-[#CFEBFF]/60 via-white/50 to-[#38BDF8]/40 border-[#38BDF8]/50"
              : "bg-gradient-to-tr from-[#FFBE91]/60 via-white/50 to-[#FF8A65]/40 border-[#FFBE91]/80"
          }`}
        />
      ))}
    </div>
  );
}
